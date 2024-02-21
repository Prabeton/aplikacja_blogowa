import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full p-4 text-white bg-green-500">
      <div className="container flex items-center justify-between mx-auto">
        <a href="#" className="text-lg font-bold text-white">
          Kwiatowy Blog
        </a>
        <div>
          <a href="/" className="px-4 text-white hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="px-4 text-white hover:text-gray-400">
            About Me
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
