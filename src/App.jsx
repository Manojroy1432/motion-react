import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Location from "./pages/Location";
import Members from "./pages/Members";
import Navbar from "./component/Navbar";
const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/location" element={<Location />}></Route>
          <Route path="/members" element={<Members />}></Route>
        </Routes>
      </BrowserRouter>
    </themeContext.Provider>
  );
}

export default App;
export { themeContext };
