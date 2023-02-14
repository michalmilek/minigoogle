import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="min-w-[100vw] flex justify-between items-center">
      <ul className="flex">
        <Link href={"/"}>
          <li>About</li>
        </Link>
        <Link href={"/"}>
          <li>Store</li>
        </Link>
      </ul>

      <ul className="flex">
        <Link href={"/"}>
          <li>Gmail</li>
        </Link>
        <Link href={"/"}>
          <li>Images</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
