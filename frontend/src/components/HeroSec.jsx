import React from "react";
import img from "./assets/Experimindlabs-HeroImg.webp";

export default function HeroSec() {
  return (
    <>
      <div className="w-full h-screen min-h-[400px] max-h-[1024px] relative overflow-hidden">
        {/* Hero Background Image */}
        <img
          className="absolute left-96 inset-0 w-full h-full object-cover scale-110 sm:scale-105 lg:scale-100"
          src={img}
          alt="Hero Background"
          loading="lazy"
        />

        {/* Decorative Shapes - Responsive positioning */}
        <div
          className="absolute w-16 h-48 sm:w-24 sm:h-72 lg:w-32 lg:h-96 
                      right-4 sm:right-16 lg:right-[270px] 
                      top-32 sm:top-40 lg:top-[250px] 
                      origin-top-left rotate-[-146deg] bg-stone-300/60"
        />

        <div
          className="absolute w-16 h-48 sm:w-24 sm:h-72 lg:w-32 lg:h-96 
                      left-1/2 sm:left-[60%] lg:left-[920px] 
                      bottom-20 sm:bottom-24 lg:top-[710px] 
                      origin-top-left rotate-[35deg] bg-blue-800/70"
        />

        <div
          className="absolute w-16 h-48 sm:w-24 sm:h-72 lg:w-32 lg:h-96 
                      left-[45%] sm:left-[55%] lg:left-[785px] 
                      bottom-12 sm:bottom-16 lg:top-[780px] 
                      origin-top-left rotate-[35deg] bg-stone-300/60"
        />

        {/* Gradient Overlays - Responsive scaling */}
        {/* Bottom Gradient Layer */}
        <div
          className="absolute w-[130vw] h-[70vh] sm:w-[1200px] sm:h-[680px] lg:w-[1725px] lg:h-[968px] 
                      left-[-25vw] sm:left-[-300px] lg:left-[-410px] 
                      top-[58vh] sm:top-[530px] lg:top-[750px] 
                      origin-top-left rotate-[-56deg] 
                      bg-gradient-to-l from-[#1770C1] from-15% via-[#00AEEF] via-55% to-[#2E3192] to-100%"
        />

        {/* Middle Gradient Layer */}
        <div
          className="absolute w-[130vw] h-[75vh] sm:w-[1200px] sm:h-[700px] lg:w-[1725px] lg:h-[970px] 
                      left-[-25vw] sm:left-[-300px] lg:left-[-410px] 
                      top-[55vh] sm:top-[500px] lg:top-[710px] 
                      origin-top-left rotate-[-56deg] 
                      bg-gradient-to-l from-[#00AEEF] from-40% to-[#2E3192] to-95%"
        />

        {/* Top Gradient Layer */}
        <div
          className="absolute w-[150vw] h-[80vh] sm:w-[1400px] sm:h-[800px] lg:w-[2000px] lg:h-[1030px] 
                      left-[-30vw] sm:left-[-400px] lg:left-[-650px] 
                      top-[60vh] sm:top-[600px] lg:top-[900px] 
                      origin-top-left rotate-[-56deg] 
                      bg-gradient-to-l from-[#00AEEF] from-0% to-[#2E3192] to-65%"
        />

        {/* Final Overlay */}
        <div
          className="absolute w-[120vw] h-[60vh] sm:w-[1000px] sm:h-[600px] lg:w-[1630px] lg:h-[820px] 
                      right-[-30vw] sm:right-[-200px] lg:left-[1150px] 
                      bottom-[-20vh] sm:bottom-[-100px] lg:top-[1060px] 
                      origin-top-left rotate-[-56deg] bg-indigo-400/45"
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
