"use client";

import Link from "next/link";
import { PiBugBeetleFill } from "react-icons/pi";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import React from "react";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <PiBugBeetleFill />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-red-900": link.href === currentPath,
              "text-blue-500": link.href !== currentPath,
              "hover:text-zinc-500 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
