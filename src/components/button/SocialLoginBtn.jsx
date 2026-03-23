"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const SocialLoginBtn = () => {
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  const handleGoogleLogin = async () => {
    const result = await signIn("google", { callbackUrl });
    console.log(result);
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-primary btn-outline w-full"
      >
        <FaGoogle size={20} />
        Google Login
      </button>
    </div>
  );
};

export default SocialLoginBtn;
