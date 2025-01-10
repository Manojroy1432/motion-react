import React, { useState, useContext } from "react";
import { themeContext } from "../App";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Load theme from local storage
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, setTheme } = useContext(themeContext);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(!theme);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`shadow ${theme ? "dark" : "light"} sticky top-0`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="text-lg font-semibold ">
            ManojPage
          </a>
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#Header">Home</a>
            <a href="#About">About</a>
            <a href="#Services">Services</a>
            <a href="#Contact">Contact</a>
          </div>
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="p-2 rounded-full ">
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12.79A9 9 0 1111.21 3 7.001 7.001 0 0021 12.79z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2v2m0 16v2m9-9h2m-18 0H2m15.364-7.364l1.414 1.414M4.222 4.222l1.414 1.414m0 12.728l-1.414 1.414M16.95 16.95l-1.414 1.414M12 6a6 6 0 100 12 6 6 0 000-12z"
                />
              </svg>
            )}
          </button>
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 rounded ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden space-y-2">
            <a
              onClick={() => toggleMenu(false)}
              href="#Header"
              className="block "
            >
              Home
            </a>
            <a
              onClick={() => toggleMenu(false)}
              href="#About"
              className="block "
            >
              About
            </a>
            <a
              onClick={() => toggleMenu(false)}
              href="#Services"
              className="block "
            >
              Services
            </a>
            <a
              onClick={() => toggleMenu(false)}
              href="#Contact"
              className="block "
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
