import React, { useContext } from "react";
import { themeContext } from "../App";

const NotFound = () => {
  const { theme, settheme } = useContext(themeContext);

  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <div className="min-h-screen  flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold  mb-4">Oops! Page Not Found</h1>
        <p className="text-lg  mb-6">
          We can't seem to find the page you're looking for.
        </p>
        <a href="/" className={`${theme ? "dark-btn" : "light-btn"}`}>
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
