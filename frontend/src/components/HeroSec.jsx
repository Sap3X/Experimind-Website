import React from "react";
import hero from "../assets/Experimind-Labs-Hero-Img.svg";
import bg_hero from "../assets/Bg-of-Hero-img.svg";

export default function HeroSec() {
  return (
    <>
      <div className="w-full h-screen min-h-[400px] max-h-[1024px] relative overflow-hidden">
        {/* Hero Background Image */}

        <img
          className="absolute 2xl:left-[32rem] xl:left-[27rem] lg:left-[15rem] inset-0 w-full h-full object-cover scale-110 sm:scale-105 lg:scale-100"
          src={hero}
          alt=""
        />

        <img
          className="absolute inset-0 w-full h-full object-cover scale-110 sm:scale-105 lg:scale-100"
          src={bg_hero}
          alt=""
          loading="lazy"
        />

        {/* Content Area - Add your hero content here */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8">
            {/* Your hero content goes here */}
          </div>
        </div>
      </div>
    </>
  );
}
