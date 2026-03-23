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
        console.log({ credentials, way: "cre" });

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

        console.log({ comparePass });

        // if password invalid
        if (!comparePass) {
          return null;
        }
        console.log({
          id: user.user_id,
          name: user.name,
          email: user.email,
        });

        return {
          id: String(user.user_id),
          name: user.name,
          email: user.email,
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

      const newUser = {
        name: user?.name,
        email: user?.email,
        provider: account?.provider,
      };

      const result = await createNewUserForGoogle(newUser);
      if (!result.success) {
        return false;
      }
      console.log(result);
      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   // return baseUrl
    // },
    // async session({ session, token, user }) {
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
  },
};
