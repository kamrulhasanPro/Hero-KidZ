"use client";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const AddToCart = () => {
  const { data: session, status } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleCart = () => {
    status === "authenticated"
      ? alert("Success add to cart")
      : router.push(`/login?callbackUrl=${pathName}`);
  };
  return (
    <>
      <button onClick={handleCart} className="btn btn-primary w-full">
        Add to Cart
      </button>
    </>
  );
};

export default AddToCart;
