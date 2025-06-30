import React from "react";
import im2 from "./assets/Prastuti Hero Image 2.webp";
import { useNavigate } from "react-router-dom";

const prastutiFeatures = [
  {
    text: "Interactive teaching demos",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-900"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    text: "Customizable lesson templates",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-900"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
  },
  {
    text: "Real-time collaboration",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-900"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    text: "Easy-to-use interface",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-900"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    text: "Integration with classroom tech",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-900"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const levelData = [
  {
    class: "8th",
    name: "Science + Maths",
    level: 1,
    color: "from-cyan-500 to-teal-500",
    bgColor: "from-cyan-50 to-teal-50",
    textColor: "text-cyan-700",
  },
  {
    class: "9th",
    name: "Science + Maths",
    level: 2,
    color: "from-emerald-500 to-green-500",
    bgColor: "from-emerald-50 to-green-50",
    textColor: "text-emerald-700",
  },
  {
    class: "10th",
    name: "Science + Maths",
    level: 3,
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    textColor: "text-purple-700",
  },
];

const EnhancedPrastutiSection = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto bg-white border border-cyan-400 rounded-3xl sm:rounded-3xl shadow-xl p-2 sm:p-6 md:p-10 relative overflow-hidden m-9">
      <div className="absolute -top-16 -left-16 w-24 h-24 sm:w-40 sm:h-40 bg-cyan-100 opacity-20 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-0 -right-16 w-16 h-16 sm:w-32 sm:h-32 bg-blue-200 opacity-20 rounded-full blur-2xl z-0"></div>
      <div className="text-center mb-6 sm:mb-10 relative z-10">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-cyan-400 tracking-tight drop-shadow-lg">
          PRASTUTI
        </h2>
        <p className="text-blue-900 text-sm xs:text-base sm:text-lg mt-2 font-medium">
          Empowering Teachers with Tools & Demos
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm">
          <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-cyan-200 bg-white mb-3 sm:mb-6 w-full relative">
            <img
              src={im2}
              alt="Teacher demonstrating Prastuti"
              className="w-full h-40 sm:h-56 md:h-64 lg:h-56 xl:h-64 object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-10 to-transparent pointer-events-none"></div>
          </div>
          <button
            aria-label="Learn more about Prastuti"
            className="mt-2 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-bold rounded-xl bg-blue-900 text-white shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 w-auto min-w-[140px] max-w-xs sm:max-w-sm mx-auto" onClick={() => navigate("/prastuti")}
          >
            Learn More
          </button>
        </div>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 w-full p-1 sm:p-2">
          {prastutiFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-cyan-50 to-cyan-100 border border-cyan-200 rounded-2xl shadow-md px-3 sm:px-4 py-3 sm:py-4 m-1 sm:m-2 transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-white p-2 sm:p-3 rounded-full shadow border border-cyan-200 flex-shrink-0">
                {feature.icon}
              </div>
              <span className="text-blue-900 font-semibold text-xs sm:text-base break-words w-full">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
        className="w-full"
      >
        <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Class Levels
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
          {levelData.map((level, i) => (
            <div
              key={i}
              className={`relative bg-gradient-to-br ${level.bgColor} rounded-xl p-4 shadow-lg border border-white/60 group transition-all duration-300 hover:shadow-xl flex-1 min-w-[180px] max-w-xs w-full flex flex-col items-center mb-4`}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${level.color} rounded-xl flex items-center justify-center flex-shrink-0 mb-2`}
              >
                <span className="text-white font-bold text-lg">
                  {level.level}
                </span>
              </div>
              <div className="text-base font-semibold text-gray-800 text-center">
                {level.class} Class
              </div>
              <div
                className={`text-lg font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent text-center`}
              >
                {level.name}
              </div>
              <div className="h-2"> </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EnhancedPrastutiSection;