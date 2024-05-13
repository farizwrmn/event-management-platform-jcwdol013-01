import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="p-5 text-center lg:text-start border-b mb-10 bg-grey-50">
        <h2 className="h2-bold m-2 xl:m-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-cyan-400">
          Always here to help you!
        </h2>
      </div>
      <div className="flex items-center border-b wrapper">
        <Link href="/" className="text-blue-500 mr-2">
          Home
        </Link>
        <span className="text-sm font-extrabold">&gt;</span>
        <p className="ml-2 underline">Contact</p>
      </div>
      <div className="group relative flex min-h-[380px] w-full max-w-[1200px] flex-col overflow-hidden rounded-xl sm:min-h-[438px] wrapper mt-10">
        <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200 xl:flex-auto">
          <figure className="p-6 pb-0">
            <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
              <img
                src="https://images.unsplash.com/photo-1633354931133-27ac1ee5d853?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdoYXRzYXBwfGVufDB8fDB8fHww"
                alt="user name"
                title="user name"
                width="80"
                height="80"
                className="max-w-full rounded-full"
              />
            </span>
          </figure>
          <div className="p-6">
            <header className="mb-4">
              <h3 className="text-xl font-medium text-slate-700">
                +62-812-9860-6155
              </h3>
              <p className=" text-slate-400">Customer Service</p>
            </header>
          </div>
          <div className="flex justify-end gap-2 p-6 pt-0">
            <Link
              href="https://wa.me/6281298606155"
              className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none"
            >
              <span className="order-2">Send message</span>
              <span className="relative only:-mx-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  role="graphics-symbol"
                  aria-labelledby="title-21 desc-21"
                >
                  <title id="title-21">Icon title</title>
                  <desc id="desc-21">
                    A more detailed description of the icon
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
            <figure className="p-6 pb-0">
              <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
                <img
                  src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png"
                  alt="user name"
                  title="user name"
                  width="80"
                  height="80"
                  className="max-w-full rounded-full"
                />
              </span>
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
              <header className="mb-4">
                <h3 className="text-xl font-medium text-slate-700">
                  askevent@gmail.com
                </h3>
                <p className=" text-slate-400">Customer Service Email</p>
              </header>
            </div>
            <div className="flex justify-end gap-2 p-6 pt-0">
              <Link
                href="mailto:farizwarman@gmail.com"
                className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none"
              >
                <span className="order-2">Send Email</span>
                <span className="relative only:-mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    role="graphics-symbol"
                    aria-labelledby="title-21 desc-21"
                  >
                    <title id="title-21">Icon title</title>
                    <desc id="desc-21">
                      A more detailed description of the icon
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
