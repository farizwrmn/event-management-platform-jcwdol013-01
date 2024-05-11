"use client";

import Image from 'next/image';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import About1 from "@/app/AboutImg/About1.png";
import Slide3 from "@/app/AboutImg/Slide3.png";
import { SiEventbrite } from "react-icons/si";
import { FaCalendarDays } from "react-icons/fa6";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    }
  };

const Hero = () => {
  return (
    <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        centerMode={false}
        infinite responsive={responsive}
        itemClass="item"
        showDots={true}
    >
        <div className="w-[100%] h-[88vh] flex items-center justify-center flex-col bg-sky-50 clip_path">
            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto">
                <Image src={About1} alt="About1"/>
                <div>
                    <h1 className="text-[100px] leading -[3rem]font-semibold text-sky-400">askEvent</h1>
                    <h1 className="text-[28px] leading-[3rem] text-slate-600 font-bold">
                        Discover the Ultimate Event with the <br /> Best Event Finder Web & App
                    </h1>
                    <p className="mt-[1rem] text-slate-500 text-opacity-90 text-[18px]">
                    Experience limitless entertainment with askEvent, your ultimate event guide. 
                    Stay updated on the latest movies, concerts, seminars, and more with its comprehensive listings. 
                    Easily create and manage your own events with user-friendly features.
                    Stay connected, stay informed, and make every experience unforgettable with askEvent, the Best Event Finder Web & App.
                    </p>
                    <div className="flex flex-wrap gap-4">
                       <button className="mt-4 px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-700
                    transition-all duration-200 hover:bg-blue-900 flex items-center rounded-md space-x-2 text-white">
                        <span>
                           <SiEventbrite className="w-[1.3rem] h-[1.3rem] sm:w-[.7rem] sm:h-[1.7rem]"/>
                        </span>
                        <span className="font-bold">
                        Snatch your spot now!
                        </span>
                    </button>
                    <button className="mt-4 px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-teal-700
                    transition-all duration-200 hover:bg-teal-900 flex items-center rounded-md space-x-2 text-white">
                        <span>
                           <FaCalendarDays className="w-[1.3rem] h-[1.3rem] sm:w-[.7rem] sm:h-[1.7rem]"/>
                        </span>
                        <span className="font-bold">
                        Create your Event!
                        </span>
                    </button> 
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full h-[88vh] bg-slate-200 md:clip_path relative">
          <Image src={Slide3} alt="Slide3" className="object-cover w-full h-screen" layout="responsive" style={{ filter: 'brightness(70%)' }} />
          <div className="absolute inset-x-0 bottom-0 text-center pb-12">
            <h1 className="text-[90px] leading-[3rem] font-semibold text-sky-400">askEvent</h1>
            <h1 className="text-[18px] leading-[3rem] text-slate-600 font-bold">
                Discover the Ultimate Event with the Best Event Finder Web & App
            </h1>
              <p className="text-slate-800 text-lg mt-4" style={{ textAlign: 'center' }}>
                  Embark on an unforgettable journey of entertainment with askEvent, your ultimate gateway to immersive experiences. Why choose us? <br />
                  <ol style={{ display: 'inline-block', textAlign: 'left' }}>
                    <li> 1. Effortless Exploration: Easily explore diverse events, from movies to concerts, with our intuitive interface. </li>
                    <li> 2. Secure Sanctuary: Trust in our rigorous verification to ensure a scam-free experience. </li>
                    <li> 3. Empowerment: Take control of your events effortlessly with user-friendly features. </li>
                  </ol> <br />
                  Stay connected, stay informed, and let askEvent redefine the way you experience events. <br />
                  Trust askEvent, the Best Event Finder Web & App for a journey filled with unparalleled entertainment delights.
              </p>
          </div>
        </div>


    </Carousel>
  );
};

export default Hero;