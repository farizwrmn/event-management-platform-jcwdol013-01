"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Events",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Explore",
    },
    {
      id: 5,
      link: "Contact us",
    },
  ];

  const links1 = [
    {
      id: 1,
      link: "Login",
    },
  ];
  const links2 = [
    {
      id: 1,
      link: "Sign Up",
    },
  ];

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-blue-900">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href="/"
            rel="home"
          >
            aE<span className="text-blue-400">.</span>
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center min-h-screen">
        <form action="" className="relative mx-auto flex">
          <input
            type="search"
            className="text-xs peer cursor-pointer relative z-10 h-8 w-10 rounded-lg border bg-transparent  pr-6 outline-none focus:rounded-r-none focus:w-full focus:cursor-text focus:border-taupeGray focus:px-3"
            placeholder="Events..."
          />
          <button className="absolute top-0 right-0 bottom-0 my-auto h-8 w-10 px-3 bg-slate-300 rounded-lg peer-focus:relative peer-focus:rounded-l-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="10px"
              y="0px"
              width="20"
              height="20"
              viewBox="8 0 40 50"
            >
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
            </svg>
          </button>
        </form>
      </div>
      <ul className="hidden md:flex">
        {links1.map(({ id, link }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200 link-underline bg-green-400 rounded-full p-2 mr-1"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex">
        {links2.map(({ id, link }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200 link-underline bg-gray-100 rounded-full p-2 -ml-52"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
          <br />
          <div className="text-center outline rounded-2xl p-5">
            {links1.map(({ id, link }) => (
              <li
                key={id}
                className="px-6 cursor-pointer capitalize py-2 text-2xl bg-green-800 rounded-md"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
            {links2.map(({ id, link }) => (
              <li
                key={id}
                className="px-6 cursor-pointer capitalize py-2 text-2xl bg-gray-500 rounded-md my-5"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
