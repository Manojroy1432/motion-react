import React, { useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { themeContext } from "../App";
import Navbar from "../component/Navbar";

const Location = () => {
  const { theme, settheme } = useContext(themeContext);
  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <div className="flex flex-col items-center justify-center  py-10 px-2">
        <h1 className="text-sm sm:textxl md:text-3xl font-bold  mb-5">
          Our Location
        </h1>
        <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg ">
          {/* Google Map Embed */}
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509397!2d-122.41941518468164!3d37.77492977975964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8e2c49af%3A0x68c2c25e9fb6be71!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col">
          <p className="text-sm mt-5 text-center">
            Visit us at our location! Easily accessible and marked on the map
            for your convenience.
          </p>
          <p className="text-xs sm:text-sm my-3 flex items-center justify-center md:text-xl gap-2">
            <span className="text-xl md:text-4xl text-red-600">
              <FaLocationDot />
            </span>
            <span>Dakshin Palash , Champasari,Siliguri</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
