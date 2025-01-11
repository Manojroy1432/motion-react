import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import About from "../component/About";
import { themeContext } from "../App";
import SendMessage from "../component/SendMessage";
import Footer from "../component/Footer";
import Services from "../component/Services";

function Home() {
  const { theme, settheme } = useContext(themeContext);
  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <Header />
      <About />
      <Services />
      <SendMessage />
      <Footer />
    </div>
  );
}

export default Home;
