import React from 'react';
import TrendingImg1 from "@/app/AboutImg/Trending1.png";
import TrendingImg2 from "@/app/AboutImg/Trending2.png";
import TrendingImg3 from "@/app/AboutImg/Trending3.png";
import Image from 'next/image';

const Trending = () => {
  return (
    <div className="pt-[5rem] pb-[1rem]">
        <h1 className="text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] 
        uppercase font-bold text-gray-900 md:leading-[4rem] leading-[3rem] text-center">
            <span className="text-blue-900">Talk</span> of the <span className="text-blue-900">Town</span>!
        </h1>
        <div className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[1rem]
        mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
            <div>
                <div className="p-6 hover:bg-blue-50 rounded-lg transition-all duration-200">
                    <Image src={TrendingImg1} alt="TrendingImg1" className="rounded-3xl" />
                    <h1 className="mt-[1rem] text-center text-[24px] text-black font-semibold">
                        GODZILLA X KONG: <br /> THE NEW EMPIRE
                    </h1>
                    <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                    Two ancient titans, Godzilla and Kong, 
                    clash in an epic battle as humans unravel their intertwined 
                    origins and connection to Skull Island's mysteries.
                    </p>
                </div>
            </div>
            <div>
                <div className="p-6 hover:bg-blue-50 rounded-lg transition-all duration-200">
                    <Image src={TrendingImg2} alt="TrendingImg2" className="rounded-3xl" />
                    <h1 className="mt-[1rem] text-center text-[24px] text-black font-semibold">
                        SIKSA KUBUR
                    </h1>
                    <p className="mt-[0.2rem] text-black text-opacity-60 text-center">
                    In a horrifying tale, rumors began to circulate about a man who suffered 
                    a dreadful revenge while buried deep within the earth. 
                    Witnesses claim that the ground itself trembled with the agony of the tomb.
                    </p>
                </div>
            </div>
            <div>
                <div className="p-6 hover:bg-blue-50 rounded-lg transition-all duration-200">
                    <Image src={TrendingImg3} alt="TrendingImg3" className="rounded-3xl" />
                    <h1 className="mt-[1rem] text-center text-[24px] text-black font-semibold">
                        KINGDOM OF THE PLANET OF THE APES
                    </h1>
                    <p className="mt-[0.1rem] text-black text-opacity-60 text-center">
                    Many years after the reign of Caesar, 
                    a young ape goes on a journey that will lead him to question everything 
                    he's been taught about the past and make choices that will define a future 
                    for apes and humans alike.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}; 

export default Trending;