import React from 'react';
import Event1 from "@/app/AboutImg/Event1.png";
import Event2 from "@/app/AboutImg/Event2.png";
import Event3 from "@/app/AboutImg/Event3.png";
import Event4 from "@/app/AboutImg/Event4.png";
import Event5 from "@/app/AboutImg/Event5.png";
import Event6 from "@/app/AboutImg/Event6.png";
import Image from 'next/image';

const Trending = () => {
  return (
    <div className="pt-[2rem] pb-[1rem] ">
        <h1 className="text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] 
        uppercase font-bold text-gray-900 md:leading-[4rem] leading-[3rem] text-center">
            <span className="text-blue-900">Event</span> Categories
        </h1>
        <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[1rem]
        mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
            <div>
                <div className="p-6 hover:bg-blue-50 rounded-lg transition-all duration-200">
                    <Image src={Event1} alt="Event1" className="rounded-3xl" />
                    <h1 className="mt-[1rem] text-center text-[24px] text-black font-semibold">
                        CONCERT / <br /> <span className="text-blue-900">MUSIC FESTIVAL</span>
                    </h1>
                    <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                    Secure your spot at popular concerts or music festivals hassle-free, 
                    ensuring you don't miss out on your favorite artists' performances.
                    </p>
                </div>
            </div>
            <div>
                <div className="p-6 hover:bg-blue-50 rounded-lg transition-all duration-200">
                    <Image src={Event2} alt="Event2" className="rounded-3xl" />
                    <h1 className="mt-[1rem] text-center text-[24px] text-black font-semibold">
                        MOVIE / <br /> <span className="text-blue-900">SHOW</span>
                    </h1>
                    <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                    Skip the long queues and guarantee your seats for the latest movies or shows, 
                    enjoying a stress-free entertainment experience.
                    </p>
                </div>
            </div>
            <div>
                <div className="p-6 hover:bg-blue-50 rounded-lg transition-all duration-200">
                    <Image src={Event3} alt="Event3" className="rounded-3xl" />
                    <h1 className="mt-[1rem] text-center text-[24px] text-black font-semibold">
                        SEMINAR / <br /> <span className="text-blue-900">WORKSHOP</span>
                    </h1>
                    <p className="mt-[0.1rem] text-black text-opacity-60 text-center">
                    Gain access to insightful seminars and enriching workshops, 
                    enhancing your knowledge and skills in various areas of interest.
                    </p>
                </div>
            </div>
            <div>
                <div className="p-6 hover:bg-blue-50 rounded-lg transition-all duration-200">
                    <Image src={Event4} alt="Event4" className="rounded-3xl" />
                    <h1 className="mt-[1rem] text-center text-[24px] text-black font-semibold">
                    <span className="text-blue-900">EXHIBITION</span>
                    </h1>
                    <p className="mt-[0.1rem] text-black text-opacity-60 text-center">
                    Enjoy priority access to exhibitions showcasing art, culture, and innovation, 
                    immersing yourself in inspiring displays and interactive experiences.
                    </p>
                </div>
            </div>
            <div>
                <div className="p-6 hover:bg-blue-50 rounded-lg transition-all duration-200">
                    <Image src={Event5} alt="Event5" className="rounded-3xl" />
                    <h1 className="mt-[1rem] text-center text-[24px] text-black font-semibold">
                        SPORT <span className="text-blue-900">COMPETITION</span>
                    </h1>
                    <p className="mt-[0.1rem] text-black text-opacity-60 text-center">
                    Reserve your tickets for thrilling sports competitions and cheer on your 
                    favorite teams or athletes from prime seating locations.
                    </p>
                </div>
            </div>
            <div>
                <div className="p-6 hover:bg-blue-50 rounded-lg transition-all duration-200">
                    <Image src={Event6} alt="Event6" className="rounded-3xl" />
                    <h1 className="mt-[1rem] text-center text-[24px] text-black font-semibold">
                        COOKING / <br /> <span className="text-blue-900">BAKING CLASS</span>
                    </h1>
                    <p className="mt-[0.1rem] text-black text-opacity-60 text-center">
                    Secure your spot in popular cooking or baking classes led by expert chefs, 
                    learning new culinary techniques and recipes to impress friends and family.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}; 

export default Trending;