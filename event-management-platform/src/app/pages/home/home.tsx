import React from "react";

const LandingPage: React.FC = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D')] bg-gray-400 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Welcome to askEvent
        </h1>
        <p className=" text-lg font-normal text-gray-300 lg:text-xl  sm:px-16 lg:px-48">
          We help you find any Events based on your location and book the ticket
          for you so you don't missed out
        </p>
        <div className=" flex justify-center items-center px-20 my-5">
          <div className="space-y-0">
            <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
              <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 opacity-30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="bg-gray-100 outline-none"
                  type="text"
                  placeholder="Article name or keyword..."
                />
              </div>
              <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                <span>Choose Country</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className="bg-blue-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                <span>Search</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
