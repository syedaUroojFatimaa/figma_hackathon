import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="bg-gray-50">
    <div className="pt-14 flex">
      <div className="bg-white h-[600px] w-[700px] text-gray-900 font-normal pt-16  ">
        <h1 className="text-center text-3xl">
          From a studio in london to a global brand
        </h1>
        <p className="ml-14 text-gray-900 font-normal text-3xl">
          over 400 outlets
        </p>
        <p className="ml-14 pt-12 font-normal text-gray-600">
          When we started Avion, the idea was simple. Make high quality
          furniture
        </p>
        <p className="ml-14 font-normal text-gray-600">
          affordable and available for the mass market.
        </p>

        <p className="ml-14 font-normal pt-12 text-gray-600">
          Handmade, and lovingly crafted furniture and homeware is what we live,
        </p>
        <p className="ml-14 font-normal text-gray-600">breathe and design so our Chelsea boutique become the hotbed for the 
        </p>
        <p className="ml-14 font-normal text-gray-600">London interior design community.
        </p>

        <button className="bg-slate-50 ml-14 my-28 py-3 px-6 text-gray-700 hover:bg-slate-200 ">Get in Touch</button>
      </div>

      <Image src="/img/banner.jpg" alt="banner" width={750} height={700} />
    </div>
    </div>
  );
}
