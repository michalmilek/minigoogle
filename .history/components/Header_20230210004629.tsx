import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="min-w-[100vw] flex justify-between">
      <ul>
        <Link href={"/"}>
          <li>About</li>
        </Link>
        <Link href={"/"}>
          <li>Store</li>
        </Link>
      </ul>

      <ul>
        <Link href={"/"}>
          <li>About</li>
        </Link>
        <Link href={"/"}>
          <li>Store</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
