import React from "react";
import { Link } from "react-router-dom";
import img from "../image";
import immg from "../assets/Experimind-labs-footer-logo.svg";

export default function Footer() {
  return (
    <footer className="Utility-bg-Blue text-white px-6 py-10">
      <div className="max-w-[80rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <img src={immg} alt="Logo" className="w-[7.5rem] h-auto" />
          <p className="Utility-font-NunitoSans text-[#FFDD15] text-sm leading-relaxed">
            Our Office Address
            <br />
            2nd Floor Atal Block NMAMIT, Nitte, Karkala,
            <br />
            Udupi - 574110
          </p>
          <p className="Utility-font-NunitoSans text-sm font-semibold">
            Call us For Support: +91-7483276508 / 8088247843
          </p>
          <div className="w-full h-[12.5rem] border border-white rounded-lg overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.1682632689611!2d74.93448396203883!3d13.183002603753025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcab0bde64c4d5%3A0x8f9820f8a79c2de2!2sExperimind%20Labs!5e0!3m2!1sen!2sin!4v1749128235644!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 pt-8">
          <h3 className="Utility-font-Montserrat text-[#FFDD15] text-xl font-bold">
            Quick Links
          </h3>
          <ul className="Utility-font-NunitoSans space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services & Socials */}
        <div className="space-y-4 pt-8">
          <h3 className="Utility-font-Montserrat text-[#FFDD15] text-xl font-bold">
            Services
          </h3>
          <ul className="Utility-font-NunitoSans space-y-1 text-sm font-medium">
            <li>Workshop</li>
            <li>Web Development</li>
            <li>Training & Internships</li>
            <li>Robotics</li>
            <li>Product Design & Development</li>
            <li>Electronics & IoT</li>
          </ul>

          <h3 className="Utility-font-Montserrat text-[#FFDD15] text-xl font-bold mt-4">
            Follow Us
          </h3>
          <div className="flex gap-4 items-center">
            <a
              href="https://www.instagram.com/experimindlabs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={img.insta}
                alt="Instagram"
                className="w-12 h-12 rounded-xl hover:scale-110 transition-transform duration-300 bg-white p-1 shadow-lg"
              />
            </a>
            <a
              href="https://x.com/experimindlabs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={img.Twitter}
                alt="Twitter-X"
                className="w-12 h-12 rounded-xl hover:scale-110 transition-transform duration-300 bg-white p-1 shadow-lg"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/experimind-labs-pvt-ltd/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={img.linkedin}
                alt="LinkedIn"
                className="w-12 h-12 rounded-xl hover:scale-110 transition-transform duration-300 bg-white p-1 shadow-lg"
              />
            </a>
            <a
              href="https://www.youtube.com/@experimindlabs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={img.youtube}
                alt="YouTube"
                className="w-12 h-12 rounded-xl hover:scale-110 transition-transform duration-300 bg-white p-1 shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="Utility-font-NunitoSans border-t border-white mt-6 pt-4 text-right text-sm">
        © 2025 Experimind Labs Pvt. Ltd. All Rights Reserved
      </div>
    </footer>
  );
}
