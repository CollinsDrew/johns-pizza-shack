import React from "react";
import Hero from "../Assets/pizza-shack-hero.jpg";
import Logo from "../Assets/JPS-logo.png";

const Navbar = () => {
  return (
    <div name="home" className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={Hero}
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] items-center max-w-[1100px] m-auto absolute p-4">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "300px", borderRadius: "50%" }}
          />
          <h1 className="font-bold text-5xl md:text-8xl drop-shadow-2xl">
            John's Pizza Shack
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 ">
            Grab A Slice Of Heaven
          </p>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
