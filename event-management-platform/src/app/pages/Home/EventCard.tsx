import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function EventCard() {
  return (
    <>
      <section className="pb-10">
        <div className="container px-6 m-auto">
          <header className="text-2xl font-semibold pt-10 font-mono pb-2">
            Now Showing
          </header>
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-8 pb-10">
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 col-span-4 lg:col-span-2">
              <Link href="/">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1612976023590-be5b6a14051d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlJTIwc2luZ2VyfGVufDB8fDB8fHww"
                    alt="card image"
                    className="aspect-video w-full"
                  />
                </figure>
                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-xl font-medium text-slate-700">
                      Anggun
                    </h3>
                    <p className="text-sm text-slate-400">3 June 2023</p>
                  </header>
                  <p>$ 220</p>
                </div>
                <p className="border-t text-center p-5 mt-10">
                  by Production House
                </p>
              </Link>
            </div>
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 col-span-4 lg:col-span-2">
              <Link href="/">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvcnJvcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="card image"
                    className="aspect-video w-full"
                  />
                </figure>
                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-xl font-medium text-slate-700">
                      Siksa Kubur
                    </h3>
                    <p className="text-sm text-slate-400">3 June 2023</p>
                  </header>
                  <p>$ 40</p>
                </div>
                <p className="border-t text-center p-5 mt-10">by Anwar Joko</p>
              </Link>
            </div>
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 col-span-4 lg:col-span-2">
              <Link href="/">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5jZXB0aW9ufGVufDB8fDB8fHww"
                    alt="card image"
                    className="aspect-video w-full"
                  />
                </figure>
                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-xl font-medium text-slate-700">
                      Inception
                    </h3>
                    <p className="text-sm text-slate-400"> 3 June 1996</p>
                  </header>
                  <p>$ 40</p>
                </div>
                <p className="border-t text-center p-5 mt-10">
                  by Nolan Christoper
                </p>
              </Link>
            </div>
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 col-span-4 lg:col-span-2">
              <Link href="/">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1620428268482-cf1851a36764?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGludGVyc3RlbGxhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="card image"
                    className="aspect-video w-full"
                  />
                </figure>
                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-xl font-medium text-slate-700">
                      Interstellar
                    </h3>
                    <p className="text-sm text-slate-400"> 3 June 2013</p>
                  </header>
                  <p>$ 37</p>
                </div>
                <p className="border-t text-center p-5 mt-10">
                  by Mark Wahlberg
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center pb-20">
          <Button variant="outline" className=" rounded-full">
            <Link href="/">See more..</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
