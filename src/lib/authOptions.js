import { createNewUserForGoogle, getUserByEmail } from "@/actions/auth.action";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import bcrypt from "bcrypt";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "enter your email",
          required: true,
        },
        password: { label: "Password", type: "password", required: true },
      },

      async authorize(credentials, req) {
        // validation
        const { email, password } = credentials;

        if (!email || !password) {
          return null;
        }

        // check user
        const user = await getUserByEmail(email);
        if (!user) {
          return null;
        }

        // compare hash password
        const comparePass = await bcrypt.compare(password, user?.password_hash);

        // if password invalid
        if (!comparePass) {
          return null;
        }

        return {
          id: String(user.user_id),
          name: user.name,
          email: user.email,
          role: "customer",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        if (account.provider === "google") {
          const newUser = {
            name: user?.name,
            email: user?.email,
            provider: account?.provider,
          };

          // check this google email user. if not exist then add in db.
          const result = await createNewUserForGoogle(newUser);

          console.log("Google save result:", result);
        }

        return true;
      } catch (error) {
        console.error("SIGNIN ERROR:", error);
        return false;
      }
    },
    // async redirect({ url, baseUrl }) {
    //   console.log({url, baseUrl});
    //   return baseUrl
    // },

    async session({ session, token, user }) {
      // get role from token
      if (token) {
        session.role = token.user_role;
      }
      return session;
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      // if user exist then make jwt token
      if (user) {
        token.user_name = user?.name;
        token.user_email = user?.email;
        token.user_role = user?.role || "customer";
        token.auth_provider = account?.provider;
      }

      return token;
    },
  },
};
