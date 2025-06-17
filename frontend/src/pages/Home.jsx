import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../index.css";
import Testimonials from "../components/Testimonial";
import HeroSec from "../components/HeroSec";
import img1 from "./assets/About-ExperimindLabs-1st-pic.webp";
import img2 from "./assets/About-ExperimindLabs-2nd-pic.webp";
import arrow from "./assets/arrow-right-circle.png";
import ProductsSection from "../components/Product";
import { useNavigate } from "react-router-dom";
import PartnerCarousel from "../components/Ourpartner";
import StatisticsComponent from "../components/Impact";

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
      <div className="pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-8 lg:mb-12">
            Who are we?
          </h2>

          <p className="Utility-font-NunitoSans text-[#696983] text-lg sm:text-xl lg:text-2xl text-center mb-12 lg:mb-16 max-w-7xl mx-auto leading-relaxed">
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
            </div>
          </div>

          <div className="text-center">
            <button
              className="Utility-font-Montserrat bg-[#2E3192] text-white text-lg lg:text-xl font-bold py-4 px-8 rounded-lg hover:bg-gray-400 transition-colors inline-flex items-center gap-4"
              onClick={() => navigate("/about")}
            >
              <img
                src={arrow}
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
      <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#5F5D5D80] rounded-3xl p-8 lg:p-16 text-center shadow-2xl">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold mb-8 lg:mb-12 leading-tight">
              Want to make your School ready for change?
              <br className="hidden lg:block" />
              Want to make students future ready?
            </h2>

            <button
              className="bg-[#FFA807] text-black text-lg lg:text-2xl font-bold py-4 px-8 rounded-lg hover:bg-orange-500 transition-colors inline-flex items-center gap-4"
              onClick={() => alert("Pressed!")}
            >
              Become a partner
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/7f9ixbrh_expires_30_days.png"
                alt="Partner Icon"
                className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Footer component would go here */}
      <Footer />
    </div>
  );
}
