import React from "react";
import Logo from "./Logo";
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="w-full px-5 py-6 text-white dark:bg-gray-800">
      <div className="flex flex-col md:flex-row gap-10 text-lg text-center sm:flex-row justify-between my-5 items-center">
        <Logo />
        <div className="flex text-2xl text-gray-600 dark:text-gray-300 gap-2">
          <AiFillTwitterCircle className="hover:text-teal-500 cursor-pointer transition-all duration-300" />
          <AiFillLinkedin className="hover:text-teal-500 cursor-pointer transition-all duration-300" />
          <AiFillYoutube className="hover:text-teal-500 cursor-pointer transition-all duration-300" />
        </div>
      </div>
      <p className="text-sm text-right text-gray-600 dark:text-gray-300">&copy; Moch Rifa Maulana 2024</p>
    </footer>
  );
};

export default Footer;
