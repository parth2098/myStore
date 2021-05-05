import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NavbarSecond from "./components/NavbarSecond";
import Groceries from "./components/Groceries";
import "./Home.css";

function Home() {
  return (
    <div className="home text-center">
      <NavbarSecond />
      <Header />
      <Navbar />

      <Groceries />
    </div>
  );
}

export default Home;
