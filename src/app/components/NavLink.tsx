"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { NavLinkType } from "../../../types";

const NavLink = ({ name, link }: NavLinkType) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      key={name}
      className={`w-full flex items-center py-3 space-y-5 justify-center hover:bg-slate-700 ${
        pathname === link ? "bg-slate-700" : ""
      }`}
    >
      <span className="uppercase">{name}</span>
    </Link>
  );
};

export default NavLink;
