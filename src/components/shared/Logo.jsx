import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-2">
      <Image
        src={"/assets/logo.png"}
        alt="website Logo"
        height={50}
        width={60}
      />

      <span className="font-semibold text-neutral">HeroKidZ</span>
    </Link>
  );
};

export default Logo;
