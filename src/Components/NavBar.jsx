import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home", to: "/" },
    { id: 2, link: "About", to: "/about" },
    { id: 3, link: "Experience", to: "/experience" },
    { id: 4, link: "Projects", to: "/projects" },
    { id: 5, link: "Contact", to: "/contact" },
  ];

  const [theme, setTheme] = useState("light");

  const element = document.documentElement;

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        break;
      case "light":
        element.classList.remove("dark");
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [theme]);

  return (
    <div className="flex justify-between items-center w-full h-20 bg-[#7395AE] px-4 text-[white] fixed dark:text-slate-400 dark:bg-gray-900 z-10">
      <div>
        <h1 className=" bg-[#242424]  text-lg lg:text-xl  font-medium text-white ml-9 px-3 py-2 rounded-sm  cursor-pointer hover:scale-105 duration-200 dark:text-slate-400">
          G.J.KUMAR
        </h1>
      </div>

      <ul className="hidden lg:flex ">
        {links.map(({ id, link, to }) => (
          <li key={id} className="px-8 hover:scale-105 duration-200 ">
            <NavLink
              to={to}
              className="cursor-pointer capitalize font-medium text-white dark:text-slate-400 text-2xl hover:scale-105 duration-200"
              activeClassName="active" // Apply the "active" class for the active link
              onClick={() => setNav(false)} // Close the menu on link click
            >
              {link}
            </NavLink>
          </li>
        ))}
        <div className="rounded-md shadow-sm shadow-gray-600 dark:text-slate-400 dark:bg-gray-900 dark:shadow-sm dark:shadow-white ">
          <button
            onClick={() => {
              if (theme !== "light") setTheme("light");
            }}
            className={`text-2xl p-3 pr-4 ${theme === "light" && "text-[red]"}`}
          >
            <BsSun />
          </button>
          <button
            onClick={() => {
              if (theme !== "dark") setTheme("dark");
            }}
            className={`text-2xl p-2 ${theme === "dark" && "text-[red]"}`}
          >
            <BsMoon />
          </button>
        </div>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 lg:hidden z-10 text-black dark:text-white"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-[#7395AE] text-white dark:bg-gray-900">
          {links.map(({ id, link, to }) => (
            <li key={id} className="p-4">
              <NavLink
                to={to}
                className="cursor-pointer capitalize py-6 text-4xl hover:text-[#e54c44] hover:scale-105 duration-200"
                activeClassName="active" // Apply the "active" class for the active link
                onClick={() => setNav(!nav)} // Close the menu on link click
              >
                {link}
              </NavLink>
            </li>
          ))}
          <div className="rounded-md shadow-sm shadow-gray-600 dark:text-slate-400 dark:bg-gray-900 dark:shadow-sm dark:shadow-white ">
            <button
              onClick={() => {
                if (theme !== "light") setTheme("light");
              }}
              className={`text-2xl p-3 pr-4 ${
                theme === "light" && "text-[red]"
              }`}
            >
              <BsSun />
            </button>
            <button
              onClick={() => {
                if (theme !== "dark") setTheme("dark");
              }}
              className={`text-2xl p-2 ${theme === "dark" && "text-[red]"}`}
            >
              <BsMoon />
            </button>
          </div>
        </ul>
      )}
    </div>
  );
}

export default NavBar;
