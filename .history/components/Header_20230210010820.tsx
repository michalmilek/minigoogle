import Link from "next/link";
import React from "react";
import User from "./User";

const Header = () => {
  return (
    <header className="min-w-[100vw] flex justify-between items-center px-10 py-8 text-lg">
      <ul className="flex gap-3">
        <Link href={"/"}>
          <li>About</li>
        </Link>
        <Link href={"/"}>
          <li>Store</li>
        </Link>
      </ul>

      <ul className="flex gap-3">
        <Link href={"/"}>
          <li>Gmail</li>
        </Link>
        <Link href={"/"}>
          <li>Images</li>
        </Link>
        <li>
          <User />
        </li>
      </ul>
    </header>
  );
};

export default Header;
