import { useState } from "react";
import im1 from "./assets/image 89.webp"
import { motion } from "framer-motion";
import {
  FaFlask,
  FaProjectDiagram,
  FaChalkboardTeacher,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

export default function Pradarshan() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      text: "Hands-on Science Activities",
      icon: <FaFlask className="w-6 h-6 text-[#111111]" />,
    },
    {
      text: "Project-based Learning",
      icon: <FaProjectDiagram className="w-6 h-6 text-[#111111]" />,
    },
    {
      text: "Mentorship from Experts",
      icon: <FaChalkboardTeacher className="w-6 h-6 text-[#111111]" />,
    },
    {
      text: "Showcase Opportunities",
      icon: <FaRocket className="w-6 h-6 text-[#111111]" />,
    },
    {
      text: "Collaborative Environment",
      icon: <FaUsers className="w-6 h-6 text-[#111111]" />,
    },
  ];

  const levelData = [
    {
      name: "Idea to Science project",
      level: "L1",
      color: "from-cyan-500 to-teal-500",
      bgColor: "from-cyan-50 to-teal-50",
      textColor: "text-cyan-700",
    },
    {
      name: "Competition Readiness",
      level: "L2",
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
      textColor: "text-emerald-700",
    },
    {
      name: "National Platforms & Innovation",
      level: "L3",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      textColor: "text-purple-700",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto bg-white border border-yellow-400 rounded-3xl sm:rounded-3xl shadow-xl p-2 sm:p-6 md:p-10 relative overflow-hidden m-9">
      <style>{`.glow-icon { filter: drop-shadow(0 0 8px rgba(255, 221, 21, 0.7)); }`}</style>
      <div className="text-center mb-8 sm:mb-14">
        <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-7xl font-extrabold text-[#f6bb33] mb-2 sm:mb-4">
          PRADARSHAN
        </h1>
        <p className="text-xs xs:text-sm sm:text-lg text-black font-medium">
          Self-Sustained, Portable Tinkering Lab
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        <div className="bg-[#fff8cc] border border-[#ffdd15] rounded-xl p-2 xs:p-4 sm:p-6 shadow-lg flex items-center">
          <div className="rounded-xl h-48 xs:h-64 sm:h-80 md:h-96 w-full bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
            <img src={im1} alt="" className="object-fit h-full w-full rounded-xl"/>
          </div>
        </div>
        <div className="bg-[#fff8cc] border border-[#ffdd15] rounded-xl p-2 xs:p-4 sm:p-6 shadow-lg">
          <h2 className="text-lg xs:text-xl font-bold text-black text-center mb-4 sm:mb-6">
            Key Highlights
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`flex flex-col items-center text-center p-3 xs:p-4 rounded-xl transition-all duration-300 ${
                  hoveredFeature === index
                    ? "bg-yellow-200 scale-105"
                    : "bg-[#fff8cc] hover:bg-yellow-200"
                }`}
              >
                <div className="mb-2 xs:mb-3">{feature.icon}</div>
                <p className="text-xs xs:text-sm font-medium text-black max-w-[140px]">
                  {feature.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 sm:mt-20 text-center">
        <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Learning Journey by Class
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
          {levelData.map((level, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative bg-gradient-to-br ${level.bgColor} rounded-xl p-4 shadow-lg border border-white/60 group transition-all duration-300 hover:shadow-xl flex flex-col items-center justify-between w-80 sm:w-64 md:w-72 lg:w-80 h-44 sm:h-40 md:h-44 lg:h-48 mb-4`}
            >
              {/* Level Badge */}
              <div
                className={`w-12 h-12 bg-gradient-to-r ${level.color} rounded-xl flex items-center justify-center flex-shrink-0 mt-6`}
              >
                <span className="text-white font-bold text-lg">
                  {level.level}
                </span>
              </div>

              {/* Level Name */}
              <div
                className={`text-base sm:text-sm md:text-base lg:text-lg font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent text-center mb-2 sm:mb-3 leading-tight px-1`}
              >
                {level.name}
              </div>
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}