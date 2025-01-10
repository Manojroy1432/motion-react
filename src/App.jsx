import React, { createContext, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div className="text-yellow-600 red">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </themeContext.Provider>
  );
}

export default App;
export { themeContext };
