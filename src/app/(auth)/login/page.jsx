"use client";

import Link from "next/link";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import SocialLoginBtn from "../../../components/button/SocialLoginBtn";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/"

  // submit function
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log({ email, password });
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    console.log(result);

    if (result?.ok) {
      console.log("✅ Login success");
      toast.success('Successfully Login!')

      router.push(result.url || "/");

    } else {
      toast.error("Failed Login!");
      console.log(result?.error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-81px)] flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <form onSubmit={handleOnSubmit} className="mt-6 space-y-4">
            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400 z-20" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full pl-10"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400 z-20" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full pl-10"
                required
              />
            </div>

            <button className="btn btn-primary w-full">Login</button>
          </form>

          <SocialLoginBtn/>

          <p className="text-center text-sm mt-4">
            Don&apos;t have an account?{" "}
            <Link href={`/register?callbackUrl=${callbackUrl}`} className="text-primary font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
