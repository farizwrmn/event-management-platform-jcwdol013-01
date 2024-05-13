// "use client";

// import React from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import EventCard from './EventCard';

// const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1324 },
//       items: 4,
//       slidesToSlide: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1324, min: 764 },
//       items: 2,
//       slidesToSlide: 1,
//     },
//     mobile: {
//       breakpoint: { max: 764, min: 0 },
//       items: 1,
//       slidesToSlide: 1,
//     }
//   };

// const EventCategories = () => {
//   return (
//     <div className="pt-[3rem] pb-[3rem]">
//         <h1 className="text-[30px] md:text-[35px] lg:text-[45px] xl:text-[50px] 
//         uppercase font-bold text-gray-900 md:leading-[4rem] leading-[3rem] text-center">
//             <span className="text-blue-900">Event</span> Categories
//         </h1>
//         <div className="w-[80%] mt-[4rem] mx-auto">
//             <Carousel 
//             additionalTransfrom={0}
//             arrows={true}
//             autoPlay={true}
//             autoPlaySpeed={4000}
//             centerMode={false}
//             infinite
//             responsive={responsive}
//             itemClass="item"
//             showDots={false}
//             >
//                 <EventCard 
//                 title="Concert" 
//                 image="/event-management-platform/public/assets/images/Event1.png"
//                 nearestschedule="18-19 May"
//                 audience="50.000 pax" />
//             </Carousel>
//         </div>
//     </div>
//   );
// };

// export default EventCategories;