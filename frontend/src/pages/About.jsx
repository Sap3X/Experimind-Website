import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'

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
              About{' '}
              <span className="text-orange-500">Experimind Labs</span>
            </h1>

            <div className="flex justify-center mt-6 lg:mt-8">
              <p className="text-white text-lg sm:text-xl lg:text-2xl text-center max-w-4xl px-4">
                Empowering education through innovative tech solutions that inspire and engage learners globally
              </p>
            </div>

            <div className="flex justify-center mt-8 lg:mt-12">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/qxd6ki7e_expires_30_days.png"
                alt="Experimind Labs Illustration"
                className="w-full max-w-4xl h-auto object-contain"
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
              
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed text-center lg:text-left">
                We are an organization dedicated to conducting research in the field of education. We focus on curriculum development, teaching aid design, student learning, methods, teacher training, innovation and more. Our aim is to improve education by developing impactful, modern solutions in partnership with learners and educators worldwide.
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
          <h2 className="Utility-color-Blue text-center text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 lg:mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Vision Card */}
            <div className="flex flex-col items-center bg-blue-400 bg-opacity-40 p-8 lg:p-12 rounded-3xl text-center ">
              <img 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/gnwbkw8b_expires_30_days.png"
                alt="Vision Icon"
                className="w-20 h-20 lg:w-28 lg:h-28 object-contain mb-6"
              />
              
              <h3 className="text-blue-600 text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                Forge a society where science is accessible, inclusive, and an essential part of daily life.
              </p>
            </div>
            
            {/* Mission Card */}
            <div className="flex flex-col items-center bg-blue-400 bg-opacity-40 p-8 lg:p-12 rounded-3xl text-center">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/7f7eusiw_expires_30_days.png"
                alt="Mission Icon"
                className="w-20 h-20 lg:w-28 lg:h-28 object-contain mb-6"
              />
              
              <h3 className="text-blue-600 text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                Equity, connectivity, creativity, sustainability, inclusivity: we embody these values to empower education and create opportunity.
              </p>
            </div>
            
            {/* Values Card */}
            <div className="flex flex-col items-center bg-blue-400 bg-opacity-40 p-8 lg:p-12 rounded-3xl text-center md:col-span-2 lg:col-span-1">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/6kpjx8mn_expires_30_days.png"
                alt="Values Icon"
                className="w-20 h-20 lg:w-28 lg:h-28 object-contain mb-6"
              />

              <h3 className="text-blue-600 text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                Our Values
              </h3>

              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                Fostering innovation, demystifying science and math fears, and sharing knowledge with all.
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
          
          <div className="space-y-8 lg:space-y-16">
            {/* Team Row 1 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
              {[
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/sw784ho9_expires_30_days.png",
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/jw34ee5s_expires_30_days.png",
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/ah44cf6q_expires_30_days.png",
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/sw784ho9_expires_30_days.png"
              ].map((src, index) => (
                <div key={`row1-${index}`} className="flex justify-center">
                  <img 
                    src={src}
                    alt={`Team Member ${index + 1}`}
                    className="w-full max-w-xs h-auto object-contain rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Team Row 2 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
              {[
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/sw784ho9_expires_30_days.png",
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/jw34ee5s_expires_30_days.png",
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/ah44cf6q_expires_30_days.png",
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/sw784ho9_expires_30_days.png"
              ].map((src, index) => (
                <div key={`row2-${index}`} className="flex justify-center">
                  <img 
                    src={src}
                    alt={`Team Member ${index + 5}`}
                    className="w-full max-w-xs h-auto object-contain rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Team Row 3 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
              {[
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/sw784ho9_expires_30_days.png",
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/jw34ee5s_expires_30_days.png",
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/ah44cf6q_expires_30_days.png",
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/DNUv3AGIo8/sw784ho9_expires_30_days.png"
              ].map((src, index) => (
                <div key={`row3-${index}`} className="flex justify-center">
                  <img 
                    src={src}
                    alt={`Team Member ${index + 9}`}
                    className="w-full max-w-xs h-auto object-contain rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

		<Footer/>
    </>
  )
}
