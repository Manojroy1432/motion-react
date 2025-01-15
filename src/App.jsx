import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Location from "./pages/Location";
import Members from "./pages/Members";
import Navbar from "./component/Navbar";
import Contact from "./pages/Contact";
import LoginSignup from "./pages/LoginSignup";
import NotFound from "./component/Notfound";
import Service from "./pages/Service";
const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Navbar />
        <div className={`${theme ? "dark" : "light"}`}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/location" element={<Location />}></Route>
            <Route path="/members" element={<Members />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/signup" element={<LoginSignup />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </themeContext.Provider>
  );
}

export default App;
export { themeContext };
