import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import contactUsImage from './assets/productspage/p.svg';
export default function Contact() {
  const [input1, onChangeInput1] = useState('');
  const [input2, onChangeInput2] = useState('');
  const [input3, onChangeInput3] = useState('');
  const [input4, onChangeInput4] = useState('');
  const [input5, onChangeInput5] = useState('');

  return (
    <div className=" flex flex-col min-h-screen bg-white">
      
      <div className="relative w-full">
        <img
          src={contactUsImage}
          alt="conatct Background"
          className="w-full h-[500px] md:h-[600px] object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
            Reach out to us for more information or any queries. We’re here to help!
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full z-20">
          <Header />
        </div>
      </div>
      

      {/* Contact Info Section */}
      <div className="bg-[#EBE5E5] py-10 px-6 md:px-20 rounded-2xl shadow-md my-10 mx-auto max-w-6xl"> 
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Contact Information</h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/L7mZ4AdCtS/uuzsmhli_expires_30_days.png" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <p className="text-[#3EC3FF] text-sm md:text-lg">Phone<br />+91 74832 76508</p>
          </div>

          <div className="flex items-start gap-4">
            <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/L7mZ4AdCtS/t97eggeo_expires_30_days.png" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <p className="text-[#3EC3FF] text-sm md:text-lg">Email<br />info@experimindlabs.edu@gmail.com</p>
          </div>

          <div className="flex items-start gap-4">
            <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/L7mZ4AdCtS/9i1chtj9_expires_30_days.png" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            <p className="text-[#3EC3FF] text-sm md:text-lg">
              Office<br />
              2nd Floor Atal Block NMAMIT, Nitte, Karkala, Udupi - 574110
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl mx-auto bg-[#2C6EE1] px-6 md:px-10 py-10 rounded-2xl mb-16">
        <h2 className="text-white text-2xl md:text-4xl font-bold text-center mb-8">Contact Form</h2>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            value={input1}
            onChange={(e) => onChangeInput1(e.target.value)}
            className="w-full bg-transparent border border-white rounded-xl px-4 py-3 text-white placeholder-white text-sm md:text-base"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={input2}
            onChange={(e) => onChangeInput2(e.target.value)}
            className="w-full bg-transparent border border-white rounded-xl px-4 py-3 text-white placeholder-white text-sm md:text-base"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={input3}
            onChange={(e) => onChangeInput3(e.target.value)}
            className="w-full bg-transparent border border-white rounded-xl px-4 py-3 text-white placeholder-white text-sm md:text-base"
          />
          <input
            type="text"
            placeholder="Company Name"
            value={input4}
            onChange={(e) => onChangeInput4(e.target.value)}
            className="w-full bg-transparent border border-white rounded-xl px-4 py-3 text-white placeholder-white text-sm md:text-base"
          />

          <textarea
            placeholder="Message (Optional)"
            className="w-full bg-transparent border border-white rounded-xl px-4 py-3 text-white placeholder-white text-sm md:text-base"
            rows="4"
          />

          <label className="flex items-center gap-3 text-white text-sm md:text-base">
            <input type="checkbox" className="w-5 h-5" />
            Sign up to receive email notifications regarding Experimind Labs
          </label>

          <button className="bg-[#010749] text-white text-sm md:text-lg font-semibold rounded-xl px-6 py-3 flex items-center justify-center gap-3 hover:bg-[#010749cc] transition">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/L7mZ4AdCtS/hzyttbcb_expires_30_days.png" alt="submit icon"
              className="w-6 h-6 md:w-8 md:h-8 object-cover"
            />
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
