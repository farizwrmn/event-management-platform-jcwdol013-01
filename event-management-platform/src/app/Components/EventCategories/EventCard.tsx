// import Image from 'next/image';
// import React from 'react';

// interface Props {
//     title:string;
//     image:string;
//     nearestschedule:string;
//     audience:string;
// }

// const EventCard = ({ image, nearestschedule, audience, title }: Props) => {
//   return (
//     <div className="bg-white p-6 rounded-lg m-3">
//         <div className="w-[200px] mx-auto h-[200px]">
//             <Image 
//             src={image} 
//             alt={title} 
//             width={200} 
//             height={200}
//             className="w-[100%] h-[100%] object-cover"
//             />
//         </div>
//         <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold">
//             {title}
//         </h1>
//         <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold">
//             {nearestschedule}
//         </h1>
//         <h1 className="mt-[1.3rem] text-[22px] text-black font-semibold">
//             {audience}
//         </h1>
//     </div>
//   );
// };

// export default EventCard;