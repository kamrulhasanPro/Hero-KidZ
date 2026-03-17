import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({className}) => {
  return (
    <Link href={"/"} className={`flex items-center justify-center gap-2 ${className}`}>
      <Image
        src={"/assets/logo.png"}
        alt="website Logo"
        height={50}
        width={60}
      />

      <p className="font-semibold  text-xl">
        Hero <span className="text-primary">Kidz</span>
      </p>
    </Link>
  );
};

export default Logo;
