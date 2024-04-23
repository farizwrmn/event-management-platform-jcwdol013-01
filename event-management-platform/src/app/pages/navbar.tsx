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
        <h1 className="text-3xl font-signature ml-2">
          <a
            className="link-underline link-underline-black bg-blue-400 rounded-md"
            href="/"
            rel="home"
          >
            aE<span className="text-blue-700">.</span>
          </a>
        </h1>
      </div>
      <div>
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
      </div> 
      <div>
        <form className="flex items-center">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute pointer-events-none"></div>
            <input
              type="search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Events near you.."
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2 px-2 ml-2 text-xs font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full"
          >
            <svg
              aria-hidden="true"
              className="mr-2 -ml-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Search
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <ul className="hidden md:flex">
          {links1.map(({ id, link }) => (
            <li
              key={id}
              className=" px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200 link-underline bg-green-400 rounded-full p-2 mr-2"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex">
          {links2.map(({ id, link }) => (
            <li
              key={id}
              className=" px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-black duration-200 link-underline bg-gray-100 rounded-full p-2"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white-500">
          <div className="text-center outline rounded-xl px-16">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-2xl hover:scale-105 hover:text-white duration-200 link-underline"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
          </div>
          <div className="text-center mt-10 flex">
            {links1.map(({ id, link }) => (
              <li
                key={id}
                className="px-6 cursor-pointer capitalize py-2 text-2xl bg-green-500 rounded-md hover:scale-105 hover:text-white duration-200 link-underline"
              >
                <Link onClick={() => setNav(!nav)} href={link}>
                  {link}
                </Link>
              </li>
            ))}
            {links2.map(({ id, link }) => (
              <li
                key={id}
                className="px-6 cursor-pointer capitalize py-2 text-2xl bg-gray-500 rounded-md ml-2 hover:scale-105 hover:text-white duration-200 link-underline "
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
