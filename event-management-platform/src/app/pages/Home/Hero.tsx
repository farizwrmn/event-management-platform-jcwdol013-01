"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative w-full glide-05">
        <div
          className="overflow-hidden h-30 m-5 rounded-2xl lg:m-14 lg:h-80"
          data-glide-el="track"
        >
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <div className="bg-[url(https://event-management-platform-jcwdol013-01.vercel.app/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F3cf7043f-d683-44c7-a85d-5e84684db0ce-1x9zwa.png&w=2048&q=75)] xl:h-[340px] w-[600px] relative bg-cover">
              <Link
                href="https://event-management-platform-jcwdol013-01.vercel.app/events/6634c99fc9a7245c27a435cf"
                className="absolute bottom-0 px-4 py-3 bg-gray-800/50 w-full h-full"
              >
                <h1 className="text-white font-semibold text-4xl text-center h1-bold xl:pt-20">
                  {" "}
                  Dazemund.{" "}
                </h1>
                <p className="text-gray-200 text-center pt-32 xl:pt-20">
                  Album Showcase <br />
                  4th May, 2024 | 10:00 A.M
                </p>
              </Link>
            </div>
            <div className="bg-[url(https://event-management-platform-jcwdol013-01.vercel.app/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fd29d50ce-0537-4af9-8144-437b92fc24d9-gel4mw.webp&w=2048&q=75)] xl:h-[340px] w-[600px] relative bg-cover">
              <Link
                href="https://event-management-platform-jcwdol013-01.vercel.app/events/6634c99fc9a7245c27a435cf"
                className="absolute bottom-0 px-4 py-3 bg-gray-800/50 w-full h-full"
              >
                <h1 className="text-white font-semibold text-4xl text-center h1-bold xl:pt-20 text-red">
                  {" "}
                  Siksa Kubur{" "}
                </h1>
                <p className="text-gray-200 text-center pt-32 xl:pt-20">
                  Anuar Joko <br />
                  5th May, 2024 | 12:00 P.M
                </p>
              </Link>
            </div>
            <div className="bg-[url(http://localhost:3000/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fbf27d256-37e9-443e-a8ac-000e74bc5fe6-xw6i34.jpg&w=2048&q=75)] xl:h-[340px] w-[600px] relative bg-cover">
              <Link
                href="https://event-management-platform-jcwdol013-01.vercel.app/events/66362c0f737866729784306b"
                className="absolute bottom-0 px-4 py-3 bg-gray-800/50 w-full h-full"
              >
                <h1 className="text-white font-semibold text-4xl text-center h1-bold xl:pt-20">
                  {" "}
                  Tokyo Cyber Punk{" "}
                </h1>
                <p className="text-gray-200 text-center pt-32 xl:pt-20">
                  VR based tour by Tokyo Cyberpunk <br />
                  5th June, 2024 | 12:30 A.M
                </p>
              </Link>
            </div>
            <div className="bg-[url(https://event-management-platform-jcwdol013-01.vercel.app/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F6666db8e-9929-4129-b112-ede5df4595f0-3b1omg.jpg&w=2048&q=75)] xl:h-[340px] w-[600px] relative bg-cover">
              <Link
                href="https://event-management-platform-jcwdol013-01.vercel.app/events/6636116e927b558a7f44ee80"
                className="absolute bottom-0 px-4 py-3 bg-gray-800/50 w-full h-full"
              >
                <h1 className="text-white font-semibold text-4xl text-center h1-bold xl:pt-20">
                  {" "}
                  Japan Foundation{" "}
                </h1>
                <p className="text-gray-200 text-center pt-32 xl:pt-20">
                  Office Tour Jakarta <br />
                  13th May, 2024 | 11:00 A.M
                </p>
              </Link>
            </div>
          </ul>
        </div>
        <div
          className="absolute left-0 px-6 flex items-center justify-between w-full h-0 lg:px-24 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-grey-600 bg-transparent text-grey-600 hover:border-white hover:text-white focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-grey-600 bg-transparent text-grey-600 hover:border-white hover:text-white focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
