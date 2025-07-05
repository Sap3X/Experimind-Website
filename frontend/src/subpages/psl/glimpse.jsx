import React, { useState, useEffect } from "react";
import im1 from "./assets/image 89.webp"
import im2 from "./assets/school-project.jpg"
import im3 from "./assets/images.webp"
import im4 from "./assets/image 93.jpg"
import im5 from "./assets/image120.webp"
import im6 from "./assets/image.jpg"
import im7 from "./assets/DSC05381.webp"

// Mock images for demo
const images = [im2,im4,im3,im6,im5,im7,im1];

const features = [
  {
    title: "Chemistry & Physics Experiments",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Fully Sustaining Kits With 1000+ Projects",
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Projector Connectivity For Scalability",
    color: "from-cyan-500 to-blue-400"
  },
  {
    title: "DIY IOT Starter Projects",
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "Monitor To Access Learning Resources",
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Syllabus Integrated STEM Projects",
    color: "from-blue-500 to-cyan-400"
  },
];

export default function GlimpseSection() {
  const [activeCard, setActiveCard] = useState(null);
  const [, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-200/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-2 sm:px-4 lg:px-6 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="Utility-font-Montserrat text-4xl sm:text-6xl lg:text-7xl font-extrabold bg-white bg-clip-text text-transparent mb-4 sm:mb-6 tracking-wider drop-shadow-lg px-4">
            GLIMPSE OF PSL
          </h1>
        </div>

        {/* Main Grid Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Extra Large Desktop Layout (1536px+) */}
          <div className="hidden 2xl:block">
            <div className="flex justify-center items-center gap-12">
              
              {/* Left Column - Top 3 features */}
              <div className="Utility-font-Montserrat flex flex-col gap-8">
                {features.slice(0, 3).map((feature, index) => (
                  <FeatureCard
                    key={index}
                    feature={feature}
                    image={images[index]}
                    active={activeCard === index}
                    size="xl"
                  />
                ))}
              </div>

              {/* Center - PSL Learning Hub */}
              <div className="flex-shrink-0">
                <PSLLearningHub 
                  activeCard={activeCard} 
                  setActiveCard={setActiveCard} 
                  image={images[6]} 
                  size="2xl"
                />
              </div>

              {/* Right Column - Bottom 3 features */}
              <div className="Utility-font-Montserrat flex flex-col gap-8">
                {features.slice(3, 6).map((feature, index) => (
                  <FeatureCard
                    key={index + 3}
                    feature={feature}
                    image={images[index + 3]}
                    active={activeCard === index + 3}
                    size="xl"
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Large Desktop Layout (1280px - 1535px) */}
          <div className="hidden xl:block 2xl:hidden">
            <div className="flex justify-center items-center gap-8">
              
              {/* Left Column - Top 3 features */}
              <div className="Utility-font-Montserrat flex flex-col gap-6">
                {features.slice(0, 3).map((feature, index) => (
                  <FeatureCard
                    key={index}
                    feature={feature}
                    image={images[index]}
                    active={activeCard === index}
                    size="lg"
                  />
                ))}
              </div>

              {/* Center - PSL Learning Hub */}
              <div className="flex-shrink-0">
                <PSLLearningHub 
                  activeCard={activeCard} 
                  setActiveCard={setActiveCard} 
                  image={images[6]} 
                  size="xl"
                />
              </div>

              {/* Right Column - Bottom 3 features */}
              <div className="Utility-font-Montserrat flex flex-col gap-6">
                {features.slice(3, 6).map((feature, index) => (
                  <FeatureCard
                    key={index + 3}
                    feature={feature}
                    image={images[index + 3]}
                    active={activeCard === index + 3}
                    size="lg"
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Standard Desktop Layout (1024px - 1279px) */}
          <div className="hidden lg:block xl:hidden">
            <div className="flex justify-center items-center gap-6">
              
              {/* Left Column - Top 3 features */}
              <div className="Utility-font-Montserrat flex flex-col gap-5">
                {features.slice(0, 3).map((feature, index) => (
                  <FeatureCard
                    key={index}
                    feature={feature}
                    image={images[index]}
                    active={activeCard === index}
                    size="md"
                  />
                ))}
              </div>

              {/* Center - PSL Learning Hub */}
              <div className="flex-shrink-0">
                <PSLLearningHub 
                  activeCard={activeCard} 
                  setActiveCard={setActiveCard} 
                  image={images[6]} 
                  size="lg"
                />
              </div>

              {/* Right Column - Bottom 3 features */}
              <div className="Utility-font-Montserrat flex flex-col gap-5">
                {features.slice(3, 6).map((feature, index) => (
                  <FeatureCard
                    key={index + 3}
                    feature={feature}
                    image={images[index + 3]}
                    active={activeCard === index + 3}
                    size="md"
                  />
                ))}
              </div>

            </div>
          </div>

          {/* Tablet Layout (768px - 1023px) */}
          <div className="hidden md:block lg:hidden">
            <div className="space-y-8">
              {/* PSL Learning Hub at top for tablet */}
              <div className="flex justify-center">
                <PSLLearningHub 
                  activeCard={activeCard} 
                  setActiveCard={setActiveCard} 
                  image={images[6]} 
                  size="md"
                />
              </div>
              
              {/* Feature cards in 2 rows of 3 */}
              <div className="Utility-font-Montserrat grid grid-cols-3 gap-4 max-w-4xl mx-auto">
                {features.map((feature, index) => (
                  <div key={index} className="flex justify-center">
                    <FeatureCard
                      feature={feature}
                      image={images[index]}
                      active={activeCard === index}
                      size="sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Layout (< 768px) */}
          <div className="md:hidden">
            {/* Center PSL Learning Hub first on mobile */}
            <div className="flex justify-center mb-8">
              <PSLLearningHub 
                activeCard={activeCard} 
                setActiveCard={setActiveCard} 
                image={images[6]} 
                size="sm"
              />
            </div>

            {/* Feature cards in responsive grid */}
            <div className="Utility-font-Montserrat grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto px-2">
              {features.map((feature, index) => (
                <div key={index} className="flex justify-center">
                  <FeatureCard
                    feature={feature}
                    image={images[index]}
                    active={activeCard === index}
                    size="xs"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// PSL Learning Hub Component
function PSLLearningHub({ activeCard, setActiveCard, image, size = "lg" }) {
  const sizeConfig = {
    "2xl": { 
      card: "w-[450px]", 
      image: "h-[450px]", 
      padding: "p-10", 
      title: "text-4xl", 
      subtitle: "text-xl" 
    },
    "xl": { 
      card: "w-96", 
      image: "h-96", 
      padding: "p-8", 
      title: "text-3xl", 
      subtitle: "text-lg" 
    },
    "lg": { 
      card: "w-80", 
      image: "h-80", 
      padding: "p-6", 
      title: "text-2xl", 
      subtitle: "text-base" 
    },
    "md": { 
      card: "w-72", 
      image: "h-64", 
      padding: "p-6", 
      title: "text-xl", 
      subtitle: "text-sm" 
    },
    "sm": { 
      card: "w-80 max-w-[90vw]", 
      image: "h-48", 
      padding: "p-6", 
      title: "text-2xl", 
      subtitle: "text-base" 
    }
  };

  const config = sizeConfig[size];

  return (
    <div className="group relative">
      {/* Main card */}
      <div className={`relative bg-gradient-to-br from-blue-800/80 to-cyan-900/80 backdrop-blur-xl rounded-3xl ${config.padding} border border-white/10 shadow-xl text-center ${config.card}`}>
        {/* Image */}
        <div className={`w-full ${config.image} rounded-2xl overflow-hidden mb-6 relative`}>
          <img 
            src={image} 
            alt="PSL Learning Hub" 
            className={`w-full ${config.image} object-cover`}
          />
        </div>
        {/* Content */}
        <div className="space-y-4">
          <h3 className={`${config.title} Utility-font-Montserrat font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300`}>
            PSL Learning Hub
          </h3>
          <p className={`Utility-font-NunitoSans text-white/70 ${config.subtitle} leading-relaxed`}>
            Discover the future of education with innovative learning experiences
          </p>
        </div>
        {/* Animated border removed */}
      </div>
    </div>
  );
}

// Helper FeatureCard component
function FeatureCard({ feature, image, active, onMouseEnter, onMouseLeave, size = "md" }) {
  const sizeConfig = {
    "xl": { 
      card: "w-80", 
      image: "h-48", 
      padding: "p-8", 
      title: "text-xl", 
      margin: "mb-6" 
    },
    "lg": { 
      card: "w-72", 
      image: "h-44", 
      padding: "p-6", 
      title: "text-lg", 
      margin: "mb-5" 
    },
    "md": { 
      card: "w-64", 
      image: "h-40", 
      padding: "p-5", 
      title: "text-base", 
      margin: "mb-4" 
    },
    "sm": { 
      card: "w-56", 
      image: "h-32", 
      padding: "p-4", 
      title: "text-sm", 
      margin: "mb-3" 
    },
    "xs": { 
      card: "w-full max-w-xs", 
      image: "h-36", 
      padding: "p-4", 
      title: "text-base", 
      margin: "mb-4" 
    }
  };

  const config = sizeConfig[size];

  return (
    <div
      className={`group relative ${config.card}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Main card */}
      <div className={`relative bg-gradient-to-br from-blue-800/80 to-cyan-900/80 backdrop-blur-xl rounded-3xl ${config.padding} border border-white/10 shadow-xl h-full text-center`}>
        {/* Image */}
        <div className={`w-full ${config.image} rounded-2xl overflow-hidden ${config.margin} relative`}>
          <img 
            src={image} 
            alt={feature.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        {/* Content */}
        <div className="space-y-2">
          <h3 className={`${config.title} font-bold text-white leading-tight`}>
            {feature.title}
          </h3>
        </div>
        {/* Animated border removed */}
      </div>
    </div>
  );
}