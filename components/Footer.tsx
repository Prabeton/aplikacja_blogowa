import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 text-white bg-green-500">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kwiatowy Blog</p>
      </div>
    </footer>
  );
};

export default Footer;
