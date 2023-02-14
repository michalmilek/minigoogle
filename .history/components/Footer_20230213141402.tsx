import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-3 text-xl">
      Michał Miłek &copy; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
