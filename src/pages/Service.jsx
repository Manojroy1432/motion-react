import React, { useContext } from "react";
import service from "../assets/service";
import { themeContext } from "../App";

function Service() {
  const { theme, settheme } = useContext(themeContext);
  return (
    <div className="w-full h-screen">
      <div>
        {service.map((item, index) => (
          <div
            key={index}
            className={`flex items-center flex-col sm:flex-row justify-center gap-2 sm:gap-4 md:gap-6  rounded-md border border-gray-600 p-4 m-4 cursor-pointer ${
              theme ? "hover:bg-black" : "hover:bg-blue-50"
            }`}
          >
            <div className="max-w-xl">{item.img}</div>
            <div className="max-w-xl">
              <h2 className="text-xl">{item.title}</h2>
              <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
