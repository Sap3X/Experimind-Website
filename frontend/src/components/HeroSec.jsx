import React from "react";
import image from "../image";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate= useNavigate();
  return (
    <>
      <div className="h-svh lg:max-h-screen bg-gradient-to-br from-[#1c1b23] via-[#2a1f3d] to-[#181820] text-white relative overflow-hidden">
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden relative h-svh">
          {/* Full Screen Gallery Background */}
          <div className="absolute inset-0 w-full h-full">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 h-full px-4 py-20">
              
              {/* Column 1 - Offset upward */}
              <div className="flex flex-col gap-2 sm:gap-3 -translate-y-32 md:-translate-y-28">
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_17}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_4}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_11}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[1rem] overflow-hidden shadow-xl">
                   <img
                      src={image.img_1}
                      alt="img-1"
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_12}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
              </div>

              {/* Column 2 - Center */}
              <div className="flex flex-col gap-2 sm:gap-3 -translate-y-52 md:-translate-y-44">
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_18}
                      alt="img-1"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-blue-500 to-blue-600 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_9}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_14}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_13}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_8}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_5}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
              </div>

              {/* Column 3 - Offset downward */}
              <div className="flex flex-col gap-2 sm:gap-3 -translate-y-24 md:-translate-y-96">
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-[1rem] overflow-hidden shadow-xl">
                   <img
                      src={image.img_3}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-green-400 to-green-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_2}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[1rem] overflow-hidden shadow-xl">
                   <img
                      src={image.img_16}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_19}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[1rem] overflow-hidden shadow-xl">
                    <img
                      src={image.img_6}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gradient Overlay - starts from 40% and goes to full dark */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" 
               style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 85%, rgba(0,0,0,0.95) 100%)' }}>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end z-20 px-4 pb-8">
            <div className="space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="Utility-font-Montserrat text-4xl sm:text-5xl font-bold leading-tight">
                  Together Let Us <br /> Make Learning Fun <br /> And Experiential
                </h1>
                
                <p className="Utility-font-Buenard text-gray-200 text-base leading-relaxed max-w-sm mx-auto">
                  Innovation Education for a Brighter Future
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#f05a28] hover:bg-[#f05a28]/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg" onClick={() => navigate("/products")}>
                  Explore Our Products {"->"}
                </button>
              </div>

             
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block pt-24 pb-8 px-4 lg:px-8 h-full">
          <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            
            {/* Left Content Section */}
            <div className="flex-1 space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Together let Us <br /> Make Learning Fun <br /> And Experiential
                  </h1>
                </div>
                
                <p className="text-gray-300 text-base lg:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Innovating Education for a Brighter Future
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button className="bg-[#f05a28] hover:bg-[#f05a28]/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg" onClick={() => navigate("/products")}>
                  Explore Our Products {"->"}
                </button>
              </div>
            </div>

            {/* Right Gallery Section */}
            <div className="flex-1 relative order-1 lg:order-2 w-full max-w-lg lg:max-w-none">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 h-[500px] sm:h-[600px] lg:h-[700px]">
                
                {/* Column 1 - Offset upward */}
                <div className="flex flex-col gap-2 sm:gap-3 lg:rounded lg:gap-4 lg:-translate-y-[25rem] xl:-translate-y-80">
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 lg:rounded-[1rem] overflow-hidden shadow-xl">
                      <img
                      src={image.img_17}
                      alt="img-1"
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 lg:rounded-[1rem] overflow-hidden shadow-xl">
                      <img
                      src={image.img_4}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                     <img
                      src={image.img_11}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                      <img
                      src={image.img_1}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                      <img
                      src={image.img_12}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                       <img
                      src={image.img_6}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                </div>

                {/* Column 2 - Center */}
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 lg:-translate-y-[20rem] xl:-translate-y-[26rem]">
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                      <img
                      src={image.img_18}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                      <img
                      src={image.img_9}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-blue-500 to-blue-600 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                      <img
                      src={image.img_14}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                      <img
                      src={image.img_13}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                      <img
                      src={image.img_18}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                    
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                      <img
                      src={image.img_5}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                </div>

                {/* Column 3 - Offset downward */}
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 lg:-translate-y-[22rem] xl:-translate-y-[17rem]">
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                      <img
                      src={image.img_3}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-green-400 to-green-500 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                     <img
                      src={image.img_2}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                     <img
                      src={image.img_16}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                     <img
                      src={image.img_19}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                     <img
                      src={image.img_15}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[2rem] lg:rounded-[1rem] overflow-hidden shadow-xl">
                      <img
                      src={image.img_6}
                      alt="img-1"
                      loading='lazy'
                      className="w-full h-full object-cover rounded-[1rem]"
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}