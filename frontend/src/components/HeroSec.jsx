import React from 'react';
import { ArrowRight, Image } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#00AEEF] to-[#2E3192] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-8 lg:gap-12">
          
          {/* Left Content Section */}
          <div className="flex-1 text-white space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Main Heading */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="block">Lorem Ipsum</span>
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Dolor Sit Amet
              </span>
            </h1>
            
            {/* Subheading */}
            <h3 
              className="text-lg sm:text-xl lg:text-2xl font-medium text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </h3>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button
                className="group relative inline-flex items-center gap-3 bg-white text-[#2E3192] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-2xl hover:scale-105 active:scale-95 transform"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <span>Get Started</span>
                <ArrowRight 
                  size={20} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
                
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              </button>
            </div>
            
            {/* Additional info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-8 text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Lorem ipsum available
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Dolor sit amet ready
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Image Placeholder Section */}
          <div className="flex-1 max-w-lg w-full order-1 lg:order-2">
            <div className="relative group">
              {/* Main image placeholder */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30 group-hover:scale-105 group-hover:shadow-2xl">
                <div className="aspect-square bg-white/20 rounded-2xl flex flex-col items-center justify-center text-white/70 hover:text-white transition-colors duration-300">
                  <Image size={64} className="mb-4 opacity-60" />
                  <p 
                    className="text-center font-medium text-sm"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Image Placeholder
                  </p>
                  <p 
                    className="text-center text-xs mt-2 opacity-75"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Upload your hero image here
                  </p>
                </div>
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/15 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-white/25 rounded-full animate-ping"></div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 text-white/10">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}