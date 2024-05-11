import React from 'react'
import EventCard from '../Helper/EventCard';

const EventCategories = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] ">
        <h1 className="text-black text-center text-[25px] md:text-[35px] font-semibold w-[80%] mx-auto"> Event Categories</h1>
         <div className="pt-[2rem] md:pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
            <div>
                <EventCard 
                      image="/AboutImg/Event1.png"
                      Event="Concert"
                      Visitor="max 50.000 pax"
                      height="h-[300px]" title={''}                />
            </div>
            <div>
                <EventCard 
                      image="/AboutImg/Event2.png"
                      Event="Movie/Show"
                      Visitor="max 50.000 pax"
                      height="h-[300px]" title={''}                />
            </div>
            <div>
                <EventCard 
                      image="/AboutImg/Event3.png"
                      Event="Seminar/Workshop"
                      Visitor="max 50.000 pax"
                      height="h-[300px]" title={''}                />
            </div>
            <div>
                <EventCard 
                      image="/AboutImg/Event4.png"
                      Event="Concert"
                      Visitor="max 50.000 pax"
                      height="h-[300px]" title={''}                />
            </div>
            <div>
                <EventCard 
                      image="/AboutImg/Event5.png"
                      Event="Sport Competition"
                      Visitor="max 50.000 pax"
                      height="h-[300px]" title={''}                />
            </div>
         </div>
    </div>
  );
};

export default EventCategories;