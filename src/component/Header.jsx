// Welcome.jsx
import React, { useContext } from "react";
import { themeContext } from "../App";
import { motion } from "motion/react";

const Header = () => {
  const { theme, setheme } = useContext(themeContext);
  return (
    <section className={` py-12`} id="Header">
      <div className="container mx-auto px-4 text-center">
        {/* Welcome Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-extrabold mb-4"
        >
          Welcome to MyApp!
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg  mb-6"
        >
          We are thrilled to have you here. Explore our features and let us know
          how we can help.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center space-x-4">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            href="/get-started"
            className={` px-6 py-3 rounded-md text-lg font-medium  transition-colors ${
              theme ? "dark-btn" : "light-btn"
            }`}
          >
            <a href="#About">About us</a>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            href="/learn-more"
            className={` px-6 py-3 rounded-md text-lg font-medium  transition-colors ${
              theme
                ? "rounded-xl px-3 py-2 hover:scale-75 duration-150 border-none text-xs sm:text-sm mx-1 my-2 bg-white text-black"
                : "rounded-xl px-3 py-2 hover:scale-75 duration-150 border-none text-xs sm:text-sm mx-1 my-2 bg-black text-white"
            }`}
          >
            <a href="#Contact">Message</a>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Header;
