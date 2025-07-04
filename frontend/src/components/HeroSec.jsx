import React from "react";

export default function HeroSection() {
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
                    <div className="w-full h-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">
                      Student 1
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-red-400 flex items-center justify-center text-white font-bold text-lg">
                      Student 2
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-red-400 flex items-center justify-center text-white font-bold text-lg">
                      Student 3
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">
                      Student 1
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-red-400 flex items-center justify-center text-white font-bold text-lg">
                      Student 2
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 - Center */}
              <div className="flex flex-col gap-2 sm:gap-3 -translate-y-52 md:-translate-y-44">
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      Student 3
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-blue-500 to-blue-600 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                      Student 4
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      Student 3
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">
                      Student 1
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-cyan-400 flex items-center justify-center text-black font-bold text-lg">
                      Student 5
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      Student 3
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 - Offset downward */}
              <div className="flex flex-col gap-2 sm:gap-3 -translate-y-24 md:-translate-y-96">
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-cyan-400 flex items-center justify-center text-black font-bold text-lg">
                      Student 5
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-green-400 to-green-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-green-400 flex items-center justify-center text-white font-bold text-lg">
                      Student 6
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      Student 3
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">
                      Student 1
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[1rem] overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      Student 3
                    </div>
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
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Together Let Us Make Learning<br />Fun And Experiential
                </h1>
                
                <p className="text-gray-200 text-base leading-relaxed max-w-sm mx-auto">
                  Innovation Education for a Brighter Future
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#f05a28] hover:bg-[#f05a28]/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  Explore Our Produxts {"->"}
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
                    Together Ket Us Make Learning Fun<br /> And Experiential
                  </h1>
                </div>
                
                <p className="text-gray-300 text-base lg:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Innovating Education for a Brighter Future
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button className="bg-[#f05a28] hover:bg-[#f05a28]/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  Explore Our Products {"->"}
                </button>
              </div>
            </div>

            {/* Right Gallery Section */}
            <div className="flex-1 relative order-1 lg:order-2 w-full max-w-lg lg:max-w-none">
              <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 h-[500px] sm:h-[600px] lg:h-[700px]">
                
                {/* Column 1 - Offset upward */}
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 -translate-y-8 sm:-translate-y-12 lg:-translate-y-48">
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">
                        Student 1
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-red-400 flex items-center justify-center text-white font-bold text-lg">
                        Student 2
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-red-400 to-red-500 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-red-400 flex items-center justify-center text-white font-bold text-lg">
                        Student 3
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">
                        Student 1
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2 - Center */}
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 -translate-y-12 sm:-translate-y-16 lg:-translate-y-32">
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                        Student 3
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-blue-500 to-blue-600 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                        Student 4
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                        Student 3
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">
                        Student 1
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3 - Offset downward */}
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 -translate-y-8 sm:-translate-y-12 lg:-translate-y-56">
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-cyan-400 flex items-center justify-center text-black font-bold text-lg">
                        Student 5
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-green-400 to-green-500 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-green-400 flex items-center justify-center text-white font-bold text-lg">
                        Student 6
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-purple-500 to-purple-600 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                        Student 3
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl">
                      <div className="w-full h-full bg-yellow-400 flex items-center justify-center text-black font-bold text-lg">
                        Student 1
                      </div>
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