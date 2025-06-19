import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import productsImage from './assets/productspage/p.svg';

export default function Products() {
  return (
    <div className="flex flex-col bg-white">
      
      
      <div className="relative w-full">
        <img
          src={productsImage}
          alt="Products Background"
          className="w-full h-[500px] md:h-[600px] object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
            Transforming classrooms with innovative learning kits and robots.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full z-20">
          <Header />
        </div>
      </div>


      {/* Products Section */}
      <div className="bg-white px-12 ">
        <h2 className="text-[#2F327D] text-center text-3xl md:text-5xl font-bold mt-16 mb-12">
          Our Educational Solutions
        </h2>

        {[1, 2, 3, 4].map((item, idx) => (
          <div 
            key={idx} 
            className={`container mx-auto flex flex-col md:flex-row items-center gap-10 my-12 px-4 md:px-24 ${
              idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <img
              src={`https://storage.googleapis.com/tagjs-prod.appspot.com/v1/L7mZ4AdCtS/${
                ['cvxr3e37', 'fw6lyt1b', 'h0xplgeh', '6shmveok'][idx]
              }_expires_30_days.png`}
              alt="Shiksha"
              className="w-full md:w-1/2 h-auto object-cover rounded-lg "
            />
            <div className="flex flex-col gap-6 md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold text-[#2F327D]">
                Shiksha Robot
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Shiksha is an advanced educational robot transforming classrooms into engaging spaces using cutting-edge technology. It emphasizes interactive and playful learning, aiming to ignite children's enjoyment and extend education beyond traditional methods.
              </p>
              <button className="bg-[#FFDD15] hover:bg-yellow-400 text-black px-8 py-3 rounded-lg shadow-md text-xl font-semibold w-fit transition-colors duration-300">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}