"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Events",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Explore",
    },
    {
      id: 5,
      link: "Contact",
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
        <Link href="/" rel="home">
          <Image
            src={`/assets/images/navbar.png`}
            alt="logoFooter"
            width={200}
            height={30}
          ></Image>
        </Link>
      </div>
      <div className="items-center m-auto">
        <ul className="hidden sm:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="nav-links px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 hover:text-white duration-200 link-underline flex flex-center justify-center"
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="xl:m-10 m-2">
        <UserButton afterSignOutUrl="/" />
      </div>
      <SignedOut>
        <Button
          asChild
          className="rounded-lg flex xl:m-5 m-2"
          variant="secondary"
          size="sm"
        >
          <Link href="/sign-in">Login</Link>
        </Button>
      </SignedOut>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-0 z-20 text-white-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-900 to-gray-800 text-white-500 z-10">
          <div className="text-center px-16 place-content-center">
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
            <div>
              <SignedOut>
                <Button
                  asChild
                  className="rounded-full text-xl my-10"
                  size="lg"
                  variant="secondary"
                >
                  <Link href="/sign-in">Login</Link>
                </Button>
              </SignedOut>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
