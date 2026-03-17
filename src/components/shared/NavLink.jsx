"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, href, end = false }) => {
  const location = usePathname();
  const active = end ? location.includes(href) : location === href;

  return (
    <Link
      href={href}
      className={`${active ? "text-primary font-medium" : "font-medium text-neutral"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
