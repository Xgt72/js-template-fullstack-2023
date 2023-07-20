import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";
import SportType from "./SportType";

import logo from "../assets/logo/fitness-center.jpg";

function Home() {
  return (
    <div className="bg-black min-h-screen p-0 overflow-hidden">
      <div className="flex md:flex-row justify-between items-center px-5">
        <div className="flex mt-5 items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 md:w-32 md:h-32 rounded-xl"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="mt-5 text-3xl md:text-7xl text-red-500 font-bold m-0 p-0">
            Fitness Center
          </h1>
        </div>
        <div className="text-white text-sm md:text-base bg-red-500 rounded-full px-1 py-0.5 md:px-5 md:py-3 mt-5 hover:bg-white hover:text-red-500">
          <Link to="/connexion">Connexion</Link>
        </div>
      </div>
      <Carousel />
      <h2 className="ml-5 md:ml-8 text-3xl md:text-5xl text-red-500 font-bold mt-10 mb-4">
        Nos Programmes
      </h2>
      <SportType />
      <Footer />
    </div>
  );
}

export default Home;
