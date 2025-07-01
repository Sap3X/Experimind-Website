import React from "react";
import { ArrowRight } from "lucide-react";
import img from "../assets/Experimind-Labs-Hero-Img.svg";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1920px] h-screen min-h-[600px] bg-gradient-to-br from-sky-500 to-indigo-900 overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src={img}
        alt="Experimind Labs Hero Background"
        loading="eager"
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right Accent */}
        <div className="absolute w-32 h-96 top-[15%] right-[10%] bg-stone-300/30 rotate-[-35deg] blur-sm" />
        
        {/* Bottom Center Accents */}
        <div className="absolute w-32 h-96 bottom-[20%] left-[50%] bg-blue-800/60 rotate-45 blur-sm" />
        <div className="absolute w-32 h-96 bottom-[15%] left-[52%] bg-stone-300/30 rotate-45 blur-sm" />
        
        {/* Large Gradient Overlays */}
        <div className="absolute -left-[20%] top-[10%] w-[60%] h-[120%] bg-gradient-to-r from-sky-600/80 via-sky-500/60 to-transparent rotate-[-15deg] blur-3xl" />
        <div className="absolute -right-[20%] bottom-[10%] w-[60%] h-[80%] bg-gradient-to-l from-indigo-400/40 to-transparent rotate-[-15deg] blur-2xl" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold font-['Montserrat'] leading-tight tracking-wide mb-6">
            Together Let Us Make Learning Fun And Experiential
          </h1>
          
          {/* Subtitle */}
          <p className="text-white/90 text-xl md:text-2xl font-normal font-['Buenard'] leading-relaxed mb-8 max-w-2xl">
            Innovating Education for a Brighter Future
          </p>
          
          {/* CTA Button */}
          <button className="bg-amber-500 hover:bg-amber-400 transition-colors duration-200 px-8 py-4 rounded-lg flex items-center gap-3 text-black text-xl font-medium font-['Nunito_Sans'] shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
            <span>Explore Our Products</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}