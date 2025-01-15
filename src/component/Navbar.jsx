import React, { useState, useContext } from "react";
import { themeContext } from "../App";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <Link
              to={"/"}
              className="hover:bg-gray-700 p-2 rounded hover:text-white"
            >
              Home
            </Link>
            <a
              href="#About"
              className="hover:bg-gray-700 p-2 rounded hover:text-white"
            >
              About
            </a>
            <Link
              to={"service"}
              className="hover:bg-gray-700 p-2 rounded hover:text-white"
            >
              Services
            </Link>
            <a
              href="#Contact"
              className="hover:bg-gray-700 p-2 rounded hover:text-white"
            >
              Contact
            </a>
            <span className="relative group">
              <button className="flex items-center justify-center gap-1 hover:text-white hover:bg-gray-700 p-2 rounded ">
                More{" "}
                <span>
                  <FaAngleDown />
                </span>
              </button>
              <div className="absolute left-0 hidden mt-0 w-40 bg-gray-800 text-white rounded shadow-lg group-hover:block">
                <Link to={"#"} className="block px-4 py-2">
                  Photoes
                </Link>

                <Link to={"#"} className="block px-4 py-2">
                  Members
                </Link>
                <Link to={"location"} className="block px-4 py-2">
                  Location
                </Link>
                <Link to={"contact"} className="block px-4 py-2">
                  Contact
                </Link>
                <Link to={"#"} className="block px-4 py-2">
                  Fees
                </Link>
                <Link to={"signup"} className="block px-4 py-2">
                  Signup
                </Link>
              </div>
            </span>
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
          <div className="md:hidden space-y-2 border-b border-b-gray-500 pb-5">
            <a
              onClick={() => toggleMenu(false)}
              href="#Header"
              className="block hover:bg-gray-700 py-1 px-3 rounded hover:text-white"
            >
              Home
            </a>
            <a
              onClick={() => toggleMenu(false)}
              href="#About"
              className="block hover:bg-gray-700 py-1 px-3 rounded hover:text-white"
            >
              About
            </a>
            <Link
              to={"service"}
              onClick={() => toggleMenu(false)}
              className="block hover:bg-gray-700 py-1 px-3 rounded hover:text-white"
            >
              Services
            </Link>
            <a
              onClick={() => toggleMenu(false)}
              href="#Contact"
              className="block hover:bg-gray-700 py-1 px-3 rounded hover:text-white"
            >
              Contact
            </a>
            <Link
              to={"photo"}
              onClick={() => toggleMenu(false)}
              className="block hover:bg-gray-700 py-1 px-3 rounded hover:text-white"
            >
              Photo
            </Link>
            <Link
              to={"members"}
              onClick={() => toggleMenu(false)}
              className="block hover:bg-gray-700 py-1 px-3 rounded hover:text-white"
            >
              Members
            </Link>
            <Link
              to={"location"}
              onClick={() => toggleMenu(false)}
              className="block hover:bg-gray-700 py-1 px-3 rounded hover:text-white"
            >
              Location
            </Link>
            <Link
              to={"contact"}
              onClick={() => toggleMenu(false)}
              className="block hover:bg-gray-700 py-1 px-3 rounded hover:text-white"
            >
              Contact
            </Link>
            <Link
              to={"fees"}
              onClick={() => toggleMenu(false)}
              className="block hover:bg-gray-700 py-1 px-3 rounded hover:text-white"
            >
              Fees
            </Link>
            <Link
              to={"sighup"}
              onClick={() => toggleMenu(false)}
              className="block hover:bg-gray-700 py-1 px-3 rounded hover:text-white"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
