"use client";

import { createNewUser } from "@/actions/auth.action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter();

  // submit function
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      return alert("Please Correct your confirmation password");
    }

    const user = { name, email, password };

    console.log({ name, email, password, confirmPassword });
    const result = await createNewUser(user);
    console.log(result);

    if (result.success) {
      router.push("/login");
    }
  };

  return (
    <div className="min-h-[calc(100vh-81px)] flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Create Account</h2>

          <form onSubmit={handleOnSubmit} className="mt-6 space-y-4">
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400 z-20" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full pl-10"
                required
              />
            </div>

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

            {/* Confirm Password */}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input input-bordered w-full"
              required
            />

            <button className="btn btn-primary w-full">Register</button>
          </form>

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
