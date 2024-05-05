import Link from "next/link";
import { Fa1, Fa2, Fa3 } from "react-icons/fa6";

export default function BannerPromo() {
  return (
    <>
      <div className="lg:p-20 p-2 mb-12">
        <Link href="/">
          <img
            className="relative w-full rounded-2xl h-40 object-cover  shadow-2xl"
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdmllfGVufDB8fDB8fHww"
            alt="movies"
          />
        </Link>
      </div>
      <header className="text-2xl font-bold font-mono -mb-10 text-white ml-5 lg:ml-10 underline">
        #Top Picked
      </header>
      <div className="bg-blue-900 justify-between lg:flex lg:pt-25 pt-16 pb-10">
        <div className="flex">
          <Fa1 size={120} color="white" className="lg:mt-16 mt-10" />
          <Link href="/">
            <img
              src="https://images.unsplash.com/photo-1574517858464-7bfc583d16e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwaG90JTIwY2hpbGklMjBwZXBwZXJzfGVufDB8fDB8fHww"
              alt="rhcp"
              width={320}
              height={40}
              className="rounded-3xl p-5"
            />
          </Link>
        </div>
        <div className="flex h-full">
          <Fa2 size={120} color="white" className="lg:mt-16 mt-10" />
          <Link href="/">
            <img
              src="https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="rhcp"
              width={320}
              height={80}
              className="rounded-3xl p-5"
            />
          </Link>
        </div>
        <div className="flex">
          <Fa3 size={120} color="white" className="lg:mt-16 mt-10" />
          <Link href="/">
            <img
              src="https://images.unsplash.com/photo-1545580492-8859ba8323f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzbmV5bGFuZHxlbnwwfHwwfHx8MA%3D%3D"
              alt="rhcp"
              width={320}
              height={40}
              className="rounded-3xl p-5"
            />
          </Link>
        </div>
      </div>
      <div className="lg:p-20 p-2 mt-10 mb-12">
        <Link href="/">
          <img
            className="relative w-full rounded-2xl h-40 object-cover  shadow-2xl"
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydCUyMGNyb3dkfGVufDB8fDB8fHww"
            alt="movies"
          />
        </Link>
      </div>
    </>
  );
}
