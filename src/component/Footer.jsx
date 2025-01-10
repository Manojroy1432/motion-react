// Footer.jsx
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo and Description */}
          <div className="mb-4 md:mb-0">
            <motion.h2
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-xl font-bold text-white"
            >
              ManojPage
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-sm mt-2"
            >
              Empowering you with the tools you need to succeed.
            </motion.p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <i className="fab fa-facebook-f"></i>{" "}
              {/* Use FontAwesome or replace with icons */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-center text-sm"
          >
            © {new Date().getFullYear()} MyApp. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
