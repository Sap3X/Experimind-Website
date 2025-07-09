import React, { useState, useEffect, useRef } from "react";
import img from "../image";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PartnerCarousel from "../components/Ourparnter";
import InfiniteCarousel from "../components/Gallery";
import Testimonials from "../components/Testimonial";
import BecomePartner from "../components/BecomePartner";
import Footer from "../components/Footer";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// Statistics Component
const StatisticsComponent = () => {
  const stats = [
    { number: 10000, suffix: "+", label: "Students" },
    { number: 25, suffix: "+", label: "Schools Reached" },
    { number: 300, suffix: "+", label: "Workshops" },
    { number: 2000, suffix: "+", label: "Teachers Trained" },
  ];

  return (
    <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12 lg:mb-16">
          The Impact We Create
        </h2>

        <div className="Utility-font-Montserrat Utility-color-Blue grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div
                  className="text-4xl sm:text-5xl lg:text-4xl font-bold mb-4 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #2E3192 10%, #00AEEF 80%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "contrast(1.2) saturate(1.3)",
                  }}
                >
                  <AnimatedCounter
                    end={item.number}
                    suffix={item.suffix}
                    duration={2000 + index * 200} // Stagger animation
                  />
                </div>
                <div className="text-gray-700 text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Optimized Hero Section Component
const HeroSection = () => {
  const navigate = useNavigate();

  // Gallery images configuration
  const galleryImages = {
    column1: [img.img_17, img.img_4, img.img_11, img.img_1, img.img_12, img.img_6],
    column2: [img.img_18, img.img_9, img.img_14, img.img_13, img.img_8, img.img_5],
    column3: [img.img_3, img.img_2, img.img_16, img.img_19, img.img_15, img.img_6]
  };

  // Gradient backgrounds for variety
  const gradientBgs = [
    'from-yellow-400 to-yellow-500',
    'from-red-400 to-red-500',
    'from-purple-500 to-purple-600',
    'from-blue-500 to-blue-600',
    'from-cyan-400 to-cyan-500',
    'from-green-400 to-green-500'
  ];

  const GalleryColumn = ({ images, translateClass, colIndex }) => (
    <div className={`flex flex-col gap-2 sm:gap-3 lg:gap-4 ${translateClass}`}>
      {images.map((imgSrc, index) => (
        <div key={`${colIndex}-${index}`} className="relative group">
          <div className={`w-full aspect-[3/4] bg-gradient-to-br ${gradientBgs[index % gradientBgs.length]} rounded-[1rem] overflow-hidden shadow-xl`}>
            <img
              src={imgSrc}
              alt={`Gallery ${index + 1}`}
              loading={index < 3 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover rounded-[1rem] transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="h-svh lg:max-h-screen bg-gradient-to-br from-[#1c1b23] via-[#2a1f3d] to-[#181820] text-white relative overflow-hidden">
      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden relative h-svh">
        {/* Full Screen Gallery Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 h-full px-4 py-20">
            <GalleryColumn 
              images={galleryImages.column1} 
              translateClass="-translate-y-32 md:-translate-y-28" 
              colIndex={0}
            />
            <GalleryColumn 
              images={galleryImages.column2} 
              translateClass="-translate-y-52 md:-translate-y-44" 
              colIndex={1}
            />
            <GalleryColumn 
              images={galleryImages.column3} 
              translateClass="-translate-y-24 md:-translate-y-96" 
              colIndex={2}
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" 
          style={{ 
            background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 85%, rgba(0,0,0,0.95) 100%)' 
          }}
        />

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
            <button 
              className="bg-[#f05a28] hover:bg-[#f05a28]/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg" 
              onClick={() => navigate("/products")}
            >
              Explore Our Products →
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block pt-24 pb-8 px-4 lg:px-8 h-full">
        <div className="max-w-7xl mx-auto h-full flex items-center gap-16">
          {/* Left Content Section */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <h1 className="Utility-font-Montserrat text-4xl lg:text-6xl font-bold leading-tight">
                Together let Us <br /> Make Learning Fun <br /> And Experiential
              </h1>
              <p className="Utility-font-Buenard text-gray-300 text-lg max-w-md leading-relaxed">
                Innovating Education for a Brighter Future
              </p>
            </div>
            <button 
              className="bg-[#f05a28] hover:bg-[#f05a28]/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg" 
              onClick={() => navigate("/products")}
            >
              Explore Our Products →
            </button>
          </div>

          {/* Right Gallery Section */}
          <div className="flex-1 relative max-w-none">
            <div className="grid grid-cols-3 gap-4 h-[700px]">
              <GalleryColumn 
                images={galleryImages.column1} 
                translateClass="lg:-translate-y-[25rem] xl:-translate-y-80" 
                colIndex={0}
              />
              <GalleryColumn 
                images={galleryImages.column2} 
                translateClass="lg:-translate-y-[20rem] xl:-translate-y-[26rem]" 
                colIndex={1}
              />
              <GalleryColumn 
                images={galleryImages.column3} 
                translateClass="lg:-translate-y-[22rem] xl:-translate-y-[17rem]" 
                colIndex={2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ title, imageSrc, className = "", route }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(route);
  };

  return (
    <div
      className={`w-full max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-3 sm:p-4 lg:p-6 flex flex-col hover:-translate-y-1 ${className}`}
    >
      <div className="aspect-[3/3] w-full mb-3 sm:mb-4 overflow-hidden rounded-lg bg-gray-100">
        <img
          className="w-50 h-50 bg-white object-cover hover:scale-105 transition-transform duration-500"
          src={imageSrc}
          alt={title}
          loading="lazy"
        />
      </div>
      <h3 className="Utility-font-Montserrat Utility-color-Blue text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold font-sans text-center mb-3 sm:mb-4 lg:mb-6 flex-grow flex items-center justify-center leading-tight">
        {title}
      </h3>
      <button
        onClick={handleButtonClick}
        className="Utility-font-NunitoSans w-full px-4 py-2.5 sm:px-6 sm:py-3 lg:py-3.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-lg text-white text-sm sm:text-base lg:text-lg font-medium font-sans transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:shadow-md"
      >
        See More
      </button>
    </div>
  );
};

// Products Section Component
const ProductsSection = () => {
  const products = [
    { title: "PSL", imageSrc: img.psl, route: "/psl" },
    { title: "Prastuti", imageSrc: img.prastuti, route: "/prastuti" },
    { title: "Anubhav", imageSrc: img.anubhav, route: "/anubhav" },
    { title: "Geomagic", imageSrc: img.geomagic, route: "/geomagic" },
    // { title: "Shiksha 2.0", imageSrc: img.shiksha, route: "/shiksha" }
  ];

  return (
    <div className="bg-[#2e31923b] flex items-center">
      <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
            <h2 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center">
              Our Products
            </h2>
            <div className="mt-4 mb-12 lg:mb-16 w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 justify-items-center">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                imageSrc={product.imageSrc}
                className="w-full max-w-xs sm:max-w-sm"
                route={product.route}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Optimized Why Choose Us data
const whyChooseUsData = [
  {
    title: "Expertise and Experience",
    description: "Deep experience developing engaging and impactful learning methodologies for students and teachers alike."
  },
  {
    title: "Quality and Innovation",
    description: "Relentless focus on quality and testing brings innovative, effective products to market."
  },
  {
    title: "Tailored Approach",
    description: "Personalized product development, adapting to each learner's and educator's needs."
  },
  {
    title: "Continuous Improvement",
    description: "Rapidly adapts to new pedagogical strategies and technologies to stay ahead in education."
  }
];

// Main Home Component
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Header />
      <HeroSection />
      <StatisticsComponent />

      {/* Who We Are Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12 lg:mb-16">
            Who We Are
          </h2>

          <p className="text-[#696983] Utility-font-NunitoSans text-lg sm:text-xl lg:text-2xl text-center mb-12 lg:mb-16 leading-relaxed">
            We are Experimind Labs an innovative educational research center
            dedicated to transforming education through cutting-edge research,
            creative solutions, and impactful training programs. Our mission is
            to enhance student learning and promote experiential teaching
            methodologies that improve education systems globally.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12">
            <div className="flex-1">
              <img
                src={img.who_we_are_1}
                alt="Educational Research"
                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <img
                src={img.who_we_are_2}
                alt="Learning Innovation"
                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              className="bg-[#2E3192] Utility-font-NunitoSans text-white text-lg lg:text-xl font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-4"
              onClick={() => navigate("/about")}
            >
              <img
                src={img.arrow}
                alt="Learn More Icon"
                className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg"
              />
              Learn More
            </button>
          </div>
        </div>
      </section>

      <ProductsSection />
      <PartnerCarousel />

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12 lg:mb-16">
            Why Choose Us?
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
            <div className="flex-1 space-y-4 lg:space-y-6">
              {whyChooseUsData.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F7F7F7] p-3 lg:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="Utility-font-Montserrat Utility-color-Blue font-bold text-lg lg:text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="Utility-font-NunitoSans text-[#2a2e9c9d] text-base lg:text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex-1">
              <img
                src={img.whychooseus}
                alt="Why Choose Us"
                className="w-full h-full object-contain rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              />
            </div>
          </div>
        </div>
      </section>

      <InfiniteCarousel />
      <Testimonials />
      <BecomePartner />
      <Footer />
    </div>
  );
}