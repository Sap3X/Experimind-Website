import React, { useState, useEffect } from 'react';
import Gallery from "./Gallery.jsx";
import Footer from "../../components/Footer";
import thimg from "./assets/briefcase - Copy (1)_white.webp";
import ftimg from "./assets/online-video - Copy (1)_white.webp";
import fiimg from "./assets/training (1)_white.webp";
import siimg from "./assets/classroom (1)_white.webp";
import seimg from "./assets/enrichment (1)_white.webp";
import scimg from "./assets/Prastuti Hero Image 2.webp"; // Add your actual image path
import mainimg from "./assets/Prastuti Hero Image.webp";
import Header from "../../components/Header.jsx" 

export default function Prastuti() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [img1, img2] = [scimg, mainimg];

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden">
        <Header />
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className={`absolute top-20 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white/5 rounded-full transform translate-x-16 sm:translate-x-24 lg:translate-x-32 -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75 translate-x-32'
            }`}
          ></div>
          <div 
            className={`absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-white/3 rounded-full transform -translate-x-12 sm:-translate-x-16 lg:-translate-x-20 translate-y-12 sm:translate-y-16 lg:translate-y-20 transition-all duration-1000 ease-out delay-300 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75 -translate-x-32'
            }`}
          ></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="w-full max-w-7xl mx-auto">
            {/* Main Hero Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 items-center py-8">
              
              {/* LEFT: Classroom Demo Image */}
              <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div 
                  className={`relative transform hover:scale-110 transition-all duration-700 hover:rotate-1 ${
                    isLoaded 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-full opacity-0'
                  }`}
                  style={{ 
                    transition: 'transform 0.8s ease-out 0.2s, opacity 0.8s ease-out 0.2s' 
                  }}
                >
                  <img
                    src={img2}
                    alt="Prastuti Classroom Demo"
                    className="w-72 h-52 sm:w-80 sm:h-60 lg:w-[24rem] lg:h-[16rem] xl:w-[28rem] xl:h-[20rem] object-contain drop-shadow-2xl rounded-2xl border-2 border-white/20"
                  />
                  <div 
                    className={`absolute -top-3 -left-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transition-all duration-500 delay-700 ${
                      isLoaded ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                  >
                    Classroom Demo
                  </div>
                  {/* Interactive glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-blue-700/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </div>

              {/* CENTER: Prastuti Text Content with Round Image Below */}
              <div className="text-center order-1 lg:order-2 flex flex-col items-center">
                {/* PRASTUTI Heading - Special Highlighting Animation */}
                <h1 
                  className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-2 transition-all duration-1000 ease-out ${
                    isLoaded 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-8 opacity-0 scale-95'
                  }`}
                >
                  PRASTUTI
                </h1>
                
                <h2 
                  className={`text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 transition-all duration-800 ease-out delay-300 ${
                    isLoaded 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                >
                  "Teach beyond the textbooks"
                </h2>
                
                <img
                  src="/mainimage.webp"
                  alt="Prastuti Main Product"
                  className={`w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl rounded-full border-4 border-white/30 mb-4 transition-all duration-1000 ease-out delay-500 ${
                    isLoaded 
                      ? 'translate-y-0 opacity-100 scale-100 rotate-0' 
                      : 'translate-y-8 opacity-0 scale-75 rotate-12'
                  }`}
                  style={{
                    animation: isLoaded ? 'bounce-slow 4s ease-in-out infinite 1s' : 'none'
                  }}
                />
                
                <p 
                  className={`text-white/90 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-4 max-w-xl mx-auto transition-all duration-800 ease-out delay-700 ${
                    isLoaded 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                >
                  Revolutionary chapter-wise demonstration kit designed for Grades 8, 9 & 10. Transform your classroom into an interactive learning environment with hands-on activities that make complex concepts simple.
                </p>
                
                <button 
                  className={`inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-black text-xs sm:text-sm md:text-base font-bold py-2 px-4 sm:py-2.5 sm:px-5 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-lg delay-900 ${
                    isLoaded 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-4 opacity-0 scale-95'
                  }`}
                  onClick={() => alert("Contact form coming soon!")}
                >
                  Learn More
                </button>
              </div>

              {/* RIGHT: Teacher Training Image */}
              <div className="flex justify-center lg:justify-end order-3">
                <div 
                  className={`relative transform hover:scale-110 transition-all duration-700 hover:rotate-1 ${
                    isLoaded 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-full opacity-0'
                  }`}
                  style={{ 
                    transition: 'transform 0.8s ease-out 0.4s, opacity 0.8s ease-out 0.4s' 
                  }}
                >
                  <img
                    src={img1}
                    alt="Prastuti Teacher Training"
                    className="w-72 h-52 sm:w-80 sm:h-60 lg:w-[24rem] lg:h-[16rem] xl:w-[28rem] xl:h-[20rem] object-contain drop-shadow-2xl rounded-2xl border-2 border-white/20"
                  />
                  <div 
                    className={`absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transition-all duration-500 delay-900 ${
                      isLoaded ? 'animate-pulse opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                  >
                    Teacher Training
                  </div>
                  {/* Interactive glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes glow-pulse {
            0% {
              text-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1);
            }
            100% {
              text-shadow: 0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.5), 0 0 90px rgba(255, 255, 255, 0.2);
            }
          }
        `}</style>
      </div>
      
      {/* About Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="relative mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              What is Prastuti?
            </h2>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                <span className="font-bold text-blue-700">Prastuti</span> is
                a revolutionary chapter-wise demonstration kit specifically
                designed for
                <span className="font-semibold">
                  {" "}
                  Grades 8, 9 & 10 Science and Math
                </span>
                , perfectly aligned with the{" "}
                <span className="font-semibold">NCERT curriculum</span>.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                It empowers teachers to effortlessly conduct
                <span className="font-bold"> hands-on activities</span>{" "}
                directly in the classroom, transforming lessons into{" "}
                <span className="font-semibold">
                  interactive, visual, and engaging experiences
                </span>
                that help students grasp complex concepts with ease.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
              <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                <span className="font-bold">No separate lab required!</span>
                No technical expertise needed! Prastuti brings the
                laboratory experience
                <span className="font-semibold">
                  {" "}
                  directly into your classroom
                </span>
                , making quality education accessible to every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-300 to-gray-600 mb-10">
        <div className="px-2 sm:px-4 max-w-7xl mx-auto">
          <div className="rounded-xl overflow-hidden flex items-center justify-center h-[40vh] sm:h-[55vh] lg:h-[70vh] bg-black shadow-2xl">
            <iframe
              style={{ border: 0 }}
              className="w-full h-full"
              src="https://www.youtube.com/embed/zxt8Dy7iaRc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-blue-800 to-blue-600 mb-10">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 lg:mb-16">
            WHY CHOOSE US?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {[
              {
                icon: thimg,
                title: ["Compact and", "portable design"],
              },
              {
                icon: ftimg,
                title: ["Free teacher training", "video support"],
              },
              {
                icon: fiimg,
                title: ["Chapter wise maths and", "science kit"],
              },
              {
                icon: siimg,
                title: ["Brings the lab into", "the classroom"],
              },
              {
                icon: seimg,
                title: ["Enhances teaching", "methods"],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center group cursor-pointer ${
                  index === 4
                    ? "sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:justify-self-auto xl:col-span-1"
                    : ""
                }`}
              >
                <div className="mb-4 lg:mb-6 flex justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <img
                      src={feature.icon}
                      alt={feature.title.join(" ")}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </div>
                <p className="text-white text-base sm:text-lg font-bold leading-tight group-hover:text-yellow-300 transition-all duration-300">
                  <span className="block">{feature.title[0]}</span>
                  <span className="block">{feature.title[1]}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-8 lg:py-12 mb-10">
        <Gallery />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-r from-blue-800 to-blue-600"
      >
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
              Ready to Empower Your Classroom?
            </h2>
            <p className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform the way STEM, AI, and Robotics are taught. Contact us to
              bring Prastuti to your school today!
            </p>
            <button
              className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-black text-sm sm:text-base md:text-lg lg:text-xl font-bold py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => alert("Contact form coming soon!")}
            >
              Book a Free Demo
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}