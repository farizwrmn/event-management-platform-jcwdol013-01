import Link from "next/link";

export default function BannerPromo() {
  return (
    <div className="lg:p-20 p-2 -mt-28">
      <Link href="/">
        <img
          className="relative w-full rounded-2xl h-40 object-cover"
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdmllfGVufDB8fDB8fHww"
          alt="movies"
        />
      </Link>
    </div>
  );
}
