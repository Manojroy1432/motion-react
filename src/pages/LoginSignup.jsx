import React, { useContext, useState } from "react";
import { themeContext } from "../App";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { theme, settheme } = useContext(themeContext);

  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <div className="min-h-screen  flex items-center justify-center text-sm">
        <div className=" shadow-md rounded-lg p-4 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 ">
            {isLogin ? "Sign Up" : "Login"}
          </h1>

          <form>
            {!isLogin && (
              <div className="mb-4">
                <label className="block  font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg outline-none bg-transparent"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block  font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg bg-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block  font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg outline-none bg-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className={`${
                theme ? "dark-btn" : "light-btn"
              } w-full  py-2 rounded-lg  transition duration-200`}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="text-center  mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
