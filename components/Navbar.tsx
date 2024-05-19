import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full p-4 text-white bg-green-500">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="#" className="text-lg font-bold text-white">
          Kwiatowy Blog
        </Link>
        <div>
          <Link href="/" className="px-4 text-white hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="px-4 text-white hover:text-gray-400">
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
