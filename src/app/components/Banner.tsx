import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-gray-50">
      <div className="pt-14 flex flex-col md:flex-row">
        <div className="bg-white h-[600px] w-full md:w-[700px] text-gray-900 font-normal pt-16 px-6 md:px-0">
          <h1 className="text-center text-3xl">
            From a studio in London to a global brand
          </h1>
          <p className="ml-0 md:ml-14 text-gray-900 font-normal text-3xl">
            Over 400 outlets
          </p>
          <p className="ml-0 md:ml-14 pt-12 font-normal text-gray-600">
            When we started Avion, the idea was simple. Make high-quality
            furniture
          </p>
          <p className="ml-0 md:ml-14 font-normal text-gray-600">
            affordable and available for the mass market.
          </p>

          <p className="ml-0 md:ml-14 font-normal pt-12 text-gray-600">
            Handmade, and lovingly crafted furniture and homeware is what we
            live,
          </p>
          <p className="ml-0 md:ml-14 font-normal text-gray-600">
            breathe and design so our Chelsea boutique became the hotbed for
            the
          </p>
          <p className="ml-0 md:ml-14 font-normal text-gray-600">
            London interior design community.
          </p>

          <button className="bg-slate-50 mr-10 ml-0 md:ml-14 my-8 py-3 px-6 text-gray-700 hover:bg-slate-200 w-full md:w-auto">
            Get in Touch
          </button>
        </div>

        <Image
          src="/img/banner.jpg"
          alt="banner"
          width={750}
          height={700}
          className="w-full md:w-[750px] h-auto"
        />
      </div>
    </div>
  );
}