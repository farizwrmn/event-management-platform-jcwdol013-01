import React from "react";

const LandingPage: React.FC = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D')] bg-gray-400 bg-blend-multiply m-10 rounded-3xl">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Welcome to askEvent
        </h1>
        <p className=" text-lg font-normal text-gray-300 lg:text-xl  sm:px-16 lg:px-48">
          We help you find any Events based on your location and book the ticket
          for you so you don't missed out
        </p>
      </div>
    </section>
  );
};

export default LandingPage;
