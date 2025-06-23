import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";
import Testimonials from "../components/Testimonial";
import HeroSec from "../components/HeroSec";
import ProductsSection from "../components/Product";
import { useNavigate } from "react-router-dom";
import PartnerCarousel from "../components/Ourparnter";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Header component */}
      <Header />
      {/* Hero Section */}
      <HeroSec />

      {/* Impact Section */}
      <StatisticsComponent/>

      {/* Who Are We Section */}
      <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-8 lg:mb-12">
            Who are we?
          </h2>

          <p className="text-[#696983] text-lg sm:text-xl lg:text-2xl text-center mb-12 lg:mb-16 max-w-5xl mx-auto leading-relaxed">
            We are Experimind Labs an innovative educational research center
            dedicated to transforming education through cutting-edge research,
            creative solutions, and impactful training programs. Our mission is
            to enhance student learning and promote experiential teaching
            methodologies that improve education systems globally.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12">
            <div className="flex-1">
              <img
                src={img1}
                alt="Educational Research"
                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="flex-1 relative">
              <img
                src={img2}
                alt="Learning Innovation"
                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
              />
              {/* Overlay removed for better mobile experience */}
            </div>
          </div>

          <div className="text-center">
            <button
              className="bg-[#2E3192] text-white text-lg lg:text-xl font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-4"
              onClick={() => navigate("/about")}
            >
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/k5j2gvsp_expires_30_days.png"
                alt="Learn More Icon"
                className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg"
              />
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <ProductsSection />

      {/* Partners Section */}
      <PartnerCarousel/>

      {/* Why Choose Us Section */}
      <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#2E3192] text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12 lg:mb-16">
            Why Choose Us?
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
            <div className="flex-1 space-y-4 lg:space-y-6">
              {[
                {
                  title: "Expertise and Experience",
                  description:
                    "Deep experience developing engaging and impactful learning methodologies for students and teachers alike.",
                },
                {
                  title: "Quality and Innovation",
                  description:
                    "Relentless focus on quality and testing brings innovative, effective products to market.",
                },
                {
                  title: "Tailored Approach",
                  description:
                    "Personalized product development, adapting to each learner's and educator's needs.",
                },
                {
                  title: "Continuous Improvement",
                  description:
                    "Rapidly adapts to new pedagogical strategies and technologies to stay ahead in education.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F7F7F7] p-3 lg:p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
                >
                  <h3 className="text-[#2E3192] font-bold text-lg lg:text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#2E3192] text-base lg:text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex-1">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/57t6z3y1_expires_30_days.png"
                alt="Why Choose Us"
                className="w-full h-100% object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {}
      <Testimonials />

      {/* Call to Action Section */}
      <BecomePartner/>
      
      {/* Footer component would go here */}
      <Footer />
    </div>
  );
}
