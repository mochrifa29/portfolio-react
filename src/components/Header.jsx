import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [click, setClick] = useState(false);

  const menus = [
    { name: "Home", link: "hero" },
    { name: "Service", link: "service" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Contact", link: "contact" },
  ];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="w-full bg-white fixed dark:bg-gray-900">
      <nav className="max-w-screen-xl mx-auto px-5 md:px-10 h-24 flex justify-between items-center">
        <Logo />
        <div
          onClick={() => setClick(!click)}
          className="md:hidden text-3xl absolute right-5 top-6 cursor-pointer"
        >
          {click ? (
            <FaXmark className="dark:text-white" />
          ) : (
            <FaBars className="dark:text-white" />
          )}
        </div>
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          className="md:hidden text-2xl absolute right-20 top-7 cursor-pointer"
        >
          {darkMode ? (
            <BsFillSunFill className="dark:text-white text-xl cursor-pointer" />
          ) : (
            <BsFillMoonStarsFill className="text-xl cursor-pointer" />
          )}
        </button>
        <ul className="hidden md:flex gap-10 items-center dark:text-white text-sm font-semibold">
          {menus.map((menu, i) => (
            <li
              key={i}
              className="hover:text-cyan-500 cursor-pointer transition-all duration-300 uppercase"
            >
              <Link
                to={menu.link}
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                {menu.name}
              </Link>
            </li>
          ))}
          <li
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? (
              <BsFillSunFill className="dark:text-white text-xl cursor-pointer" />
            ) : (
              <BsFillMoonStarsFill className="text-xl cursor-pointer" />
            )}
          </li>
          <li className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md px-4 py-2 cursor-pointer">
            Resume
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden font-semibold absolute w-full flex-col px-5 py-7 space-y-5 items-center dark:text-white bg-white text-xl shadow-md dark:bg-gray-900 transition-all duration-500 ease-in-out ${
          click ? "top-20" : "top-[-490px]"
        }`}
      >
        {menus.map((menu, i) => (
          <li
            key={i}
            className="hover:text-cyan-500 cursor-pointer transition-all duration-300"
          >
            <Link
              to={menu.link}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
            >
              {menu.name}
            </Link>
          </li>
        ))}
        <li>
          <button className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md px-4 py-2 cursor-pointer">
            Resume
          </button>
        </li>
      </ul>

      
    </header>
  );
};

export default Header;
