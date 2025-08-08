import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo2.png"; // Ensure your logo is at this path

const navLinks = [
  { name: "HOME", href: "#" },
  { name: "ABOUT US", href: "#about" },
  { name: "PRODUCTS", href: "#products" },
  { name: "INFRASTRUCTURE", href: "#infrastructure" },
  { name: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on link click (for mobile UX)
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-white/90 shadow-lg fixed w-full z-50 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo & Company Name - clickable */}
          <a href="#" className="flex items-center space-x-3 group">
            <img src={logo} alt="Logo" className="h-10 transition-transform group-hover:scale-105" />
            <span className="font-extrabold text-lg tracking-wider text-[#242c80] uppercase">
              GARLON POLYFAB INDUSTRIES LIMITED
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-3 lg:space-x-6 items-center">
            {navLinks.slice(0, -1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative px-2 py-1 font-semibold text-gray-700 hover:text-[#242c80] uppercase
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-200
                  hover:after:w-full after:rounded
                  transition-colors duration-200
                "
              >
                {link.name}
              </a>
            ))}
            {/* Last Link as Button (Contact) */}
            <a
              href={navLinks[navLinks.length - 1].href}
              className="
                ml-2 px-5 py-2 rounded-full font-semibold
                bg-[#242c80]
                text-white shadow-lg ring-1 ring-blue-300
                hover:from-blue-700 hover:to-blue-500
                transition-all duration-200 uppercase
              "
            >
              {navLinks[navLinks.length - 1].name}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-700 hover:text-blue-900 focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden transition-all duration-300 overflow-hidden bg-white border-t
          ${isOpen ? "max-h-96 opacity-100 shadow-md" : "max-h-0 opacity-0 shadow-none"}
        `}
      >
        <div className="flex flex-col py-2">
          {navLinks.map((link, idx) =>
            idx === navLinks.length - 1 ? (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="mx-4 my-1 bg-blue-600 text-white rounded-full px-4 py-2 text-center font-semibold shadow-md hover:bg-blue-700 transition-all uppercase"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="mx-4 my-1 py-2 text-gray-700 font-semibold rounded hover:bg-blue-50 px-3 transition uppercase"
              >
                {link.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
