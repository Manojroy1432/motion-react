import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import About from "../component/About";
import { themeContext } from "../App";
import SendMessage from "../component/SendMessage";
import Footer from "../component/Footer";
import Services from "../component/Services";

function Home() {
  const { theme, setheme } = useContext(themeContext);
  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <SendMessage />
      <Footer />
    </div>
  );
}

export default Home;
