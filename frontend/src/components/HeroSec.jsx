import React from "react";
import bg_hero from "../assets/Bg-of-Hero-img.svg";
import heroimg from "../assets/Experimind-Labs-Hero-Img.svg"

export default function HeroSec() {
  return (
    <>
      <div className="w-full h-screen min-h-[500px] max-h-[1024px] relative overflow-hidden">
        {/* Background Hero Image */}
        <img
          className=" absolute -left-20 -top-80  sm:inset-0 z-10 w-full h-full object-cover"
            src={bg_hero}
            alt=""
            loading="lazy"
          />

        {/* Main Hero Image - Positioned */}
        <img
          className="absolute inset-0 w-full h-full sm:object-cover object-left
                  sm:object-bottom
                  md:object-right
                  xl:translate-x-24 xl:top-0 xl:left-80 
                  2xl:translate-x-32 2xl:top-0 2xl:left-48 2xl:object-contain"
          src={heroimg}
          alt="Experimind Labs Hero"
        />

        {/* Content Area - Left positioned */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full lg:w-1/2 xl:w-2/5">
              <div className="text-white space-y-6">
                {/* Placeholder content - Replace with your actual content */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Your Hero Title Here
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-md">
                  Your hero description will go here. This is just placeholder content.
                </p>
                <div className="pt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}