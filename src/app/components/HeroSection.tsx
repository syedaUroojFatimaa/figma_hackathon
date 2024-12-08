import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="ml-24 pt-6 flex items-center bg-white">
      {/* Text Box */}
      <div className="bg-violet-950 h-[500px] w-[650px] text-white">
        <div className="max-w-lg">
          <h1 className="text-3xl font-medium ml-16 pt-8">
            The furniture brand for the future, with timeless designs
          </h1>
          <div className="ml-16 pt-12">
            <button className="bg-violet-400 text-white py-3 px-6">
              View Collection
            </button>
          </div>
          <p className="ml-16 pt-56 mb-1 font-normal text-sm">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
      </div>

      {/* Image */}
      <div>
        <Image
          src="/img/chair.jpg"
          alt="chair"
          width={450}  // Image width set to match box width
          height={350} // Image height set to match box height
        />
      </div>
    </div>
  );
};

export default HeroSection;



    