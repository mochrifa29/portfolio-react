import React from "react";
import Programmer from "../assets/img/Programmer.png";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full flex flex-col py-20 px-10 md:flex-row items-center justify-center mx-auto text-center md:text-left"
    >
      <div className="">
        <h2 className="text-4xl lg:mt-0 mt-4 lg:text-2xl py-2 text-teal-600 font-medium">
          Moch Rifa Maulana N
        </h2>
        <h2 className="text-2xl lg:text-5xl py-2 dark:text-white">
          i'm Software Develover
        </h2>
        <div className="text-3xl mt-7 flex justify-center md:justify-start text-gray-600 dark:text-gray-300 gap-3 py-3">
          <AiFillInstagram className="hover:text-cyan-500 transition-all duration-500 cursor-pointer" />
          <AiFillLinkedin className="hover:text-cyan-500 transition-all duration-500 cursor-pointer" />
        </div>
      </div>
      <div className="mx-auto md:mr-0 rounded-full w-80 md:w-96 aspect-square mt-20 md:mt-10 overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500">
        <img src={Programmer} alt="" className="object-cover h-full" />
      </div>
    </div>
  );
};

export default Hero;
