import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img from '../image';

export default function About() {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="Utility-bg-Blue px-4 sm:px-6 lg:px-8">
          <Header />
          <div className="max-w-7xl mx-auto py-8">
            {/* Assuming Header component exists */}

            <div className="flex flex-col py-8 lg:py-16">
              <h1 className="text-center text-white text-3xl sm:text-4xl lg:text-6xl font-bold mt-4">
                About <span className="text-orange-500">Experimind Labs</span>
              </h1>

              <div className="flex justify-center mt-6 lg:mt-8">
                <p className="text-white text-lg sm:text-xl lg:text-2xl text-center max-w-4xl px-4">
                  Empowering education through innovative tech solutions that
                  inspire and engage learners globally
                </p>
              </div>

              <div className="flex justify-center mt-8 lg:mt-12">
                <img
                  src= {img.meeting}
                  alt="Experimind Labs Illustration"
                  className="w-full max-w-4xl h-auto object-contain rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Who Are We Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="flex-1 space-y-6">
                <h2 className="Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center lg:text-left">
                  Who are we?
                </h2>

                <p className="text-gray-600 text-lg sm:text-xl leading-relaxed text-justify">
                  We are an organization dedicated to conducting research in the
                  field of education. We focus on curriculum development,
                  teaching aid design, student learning, methods, teacher
                  training, innovation and more. Our aim is to improve education
                  by developing impactful, modern solutions in partnership with
                  learners and educators worldwide.
                </p>
              </div>

              <div className="flex-shrink-0 w-full lg:w-2/5">
                <img
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/3l66zzxl_expires_30_days.png"
                  alt="Education Research"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-blue-600 text-center text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 lg:mb-12">
              Our Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Vision Card */}
              <div className="flex flex-col items-center bg-blue-400 bg-opacity-40 p-8 lg:p-12 rounded-3xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-blue-700 rounded-full mb-6">
                  <img
                    src={img.vision_icons}
                    alt="Vision Icon"
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain transition-transform duration-300"
                  />
                </div>

                <h3 className="text-blue-600 text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                  Our Vision
                </h3>

                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                  Forge a society where science is accessible, inclusive, and an
                  essential part of daily life.
                </p>
              </div>

              {/* Mission Card */}
              <div className="flex flex-col items-center bg-blue-400 bg-opacity-40 p-8 lg:p-12 rounded-3xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-yellow-300 rounded-full mb-6">
                  <img
                    src={img.mission_icons}
                    alt="Mission Icon"
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain transition-transform duration-300"
                  />
                </div>
                <h3 className="text-blue-600 text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                  Our Mission
                </h3>

                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                  Equity, connectivity, creativity, sustainability, inclusivity:
                  we embody these values to empower education and create
                  opportunity.
                </p>
              </div>

              {/* Values Card */}
              <div className="flex flex-col items-center bg-blue-400 bg-opacity-40 p-8 lg:p-12 rounded-3xl text-center md:col-span-2 lg:col-span-1 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-blue-400 rounded-full mb-6">
                  <img
                    src={img.values_icons}
                    alt="Values Icon"
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain transition-transform duration-300"
                  />
                </div>
                <h3 className="text-blue-600 text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                  Our Values
                </h3>

                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                  Fostering innovation, demystifying science and math fears, and
                  sharing knowledge with all.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-8 lg:mb-12">
              Meet Our Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
              {/* All team members in individual divs */}
              {[
                {
                  name: "John Doe",
                  linkedin: "https://linkedin.com/in/johndoe",
                },
                {
                  name: "Jane Smith",
                  linkedin: "https://linkedin.com/in/janesmith",
                },
                {
                  name: "Mike Johnson",
                  linkedin: "https://linkedin.com/in/mikejohnson",
                },
                {
                  name: "Sarah Wilson",
                  linkedin: "https://linkedin.com/in/sarahwilson",
                },
                {
                  name: "David Brown",
                  linkedin: "https://linkedin.com/in/davidbrown",
                },
                {
                  name: "Emily Davis",
                  linkedin: "https://linkedin.com/in/emilydavis",
                },
                {
                  name: "Alex Miller",
                  linkedin: "https://linkedin.com/in/alexmiller",
                },
                {
                  name: "Lisa Garcia",
                  linkedin: "https://linkedin.com/in/lisagarcia",
                },
                {
                  name: "Chris Taylor",
                  linkedin: "https://linkedin.com/in/christaylor",
                },

              ].map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circular Image Placeholder - Updated to 7rem (112px) */}
                  <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-28 lg:h-28 rounded-full bg-gray-300 flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rounded-full bg-gray-500 flex items-center justify-center">
                      <svg
                        className="w-7 h-7 sm:w-8 sm:h-8 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Name */}
                  <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mb-3">
                    {member.name}
                  </h1>

                  {/* LinkedIn Link */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-4 mb-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
