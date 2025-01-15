import React, { useContext } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { themeContext } from "../App";

const Contact = () => {
  const { theme, settheme } = useContext(themeContext);

  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <div className="min-h-screen  flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 ">Contact Us</h1>

        <div className=" shadow-md rounded-lg p-6 w-full max-w-md">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold mb-2 ">Get in Touch</h2>
            <p className={`${theme ? "text-gray-400" : "text-gray-500"}`}>
              We do not love to hear from you!
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-green-500 text-xl" />
              <span className=" font-medium">+123 456 7890</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-green-500 text-xl" />
              <a
                href="https://wa.me/1234567890"
                className=" font-medium hover:text-green-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaFacebook className="text-blue-500 text-xl" />
              <a
                href="https://facebook.com/yourpage"
                className=" font-medium hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook Page
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaInstagram className="text-pink-500 text-xl" />
              <a
                href="https://instagram.com/yourprofile"
                className=" font-medium hover:text-pink-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
