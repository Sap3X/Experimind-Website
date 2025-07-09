import React, { useEffect, useState } from "react";
import img1 from "./assets/Prastuti Hero Image 2.webp";
import img2 from "./assets/Prastuti Hero Image.webp";
import rack from "./assets/mainimage.webp"; // Importing the right image
import Gallery from "./Gallery";
import demo from "./assets/prasmain (1).webp";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import briefcase from "./assets/briefcase.webp";
import video from "./assets/video.webp";
import traning from "./assets/training.webp";
import classroom from "./assets/classroom.webp";
import enrich from "./assets/enrichment.webp";
export default function Prastuti() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        {/* HERO SECTION - ENHANCED RESPONSIVE */}
        <div
          className="relative py-4 sm:py-6 lg:py-8 w-full overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #3186e7 0%, #1a5bb8 100%)",
          }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute top-10 sm:top-16 lg:top-20 right-0 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-white/5 rounded-full transform translate-x-8 sm:translate-x-16 lg:translate-x-24 xl:translate-x-32 -translate-y-4 sm:-translate-y-8 lg:-translate-y-12 xl:-translate-y-16 transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75 translate-x-16 sm:translate-x-32"
              }`}
            ></div>
            <div
              className={`absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-white/3 rounded-full transform -translate-x-8 sm:-translate-x-12 lg:-translate-x-16 xl:-translate-x-20 translate-y-8 sm:translate-y-12 lg:translate-y-16 xl:translate-y-20 transition-all duration-1000 ease-out delay-300 ${
                isLoaded
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75 -translate-x-16 sm:-translate-x-32"
              }`}
            ></div>
          </div>

          {/* Hero Content Container */}
          <div className="relative z-10 w-full px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
            <div className="w-full max-w-7xl mx-auto">
              {/* Main Hero Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center py-4 sm:py-6 lg:py-8">
                {/* LEFT: Classroom Demo Image */}
                <div className="flex justify-center lg:justify-start order-2 lg:order-1 pt-8 sm:pt-16 lg:pt-32 xl:pt-48">
                  <div
                    className={`relative transform hover:scale-105 sm:hover:scale-110 transition-all duration-700 hover:rotate-1 ${
                      isLoaded
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0"
                    }`}
                    style={{
                      transition:
                        "transform 0.8s ease-out 0.2s, opacity 0.8s ease-out 0.2s",
                    }}
                  >
                    <img
                      src={img2}
                      alt="Prastuti Classroom Demo"
                      className="w-60 h-40 sm:w-72 sm:h-52 lg:w-80 lg:h-60 xl:w-[24rem] xl:h-[16rem] 2xl:w-[28rem] 2xl:h-[20rem] object-contain drop-shadow-2xl rounded-xl sm:rounded-2xl border border-white/20 sm:border-2"
                    />
                    <div
                      className={`absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg transition-all duration-500 delay-700 ${
                        isLoaded
                          ? "animate-pulse opacity-100 scale-100"
                          : "opacity-0 scale-75"
                      }`}
                    >
                      Classroom Demo
                    </div>
                    {/* Interactive glow effect */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-400/20 to-blue-700/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </div>
                </div>

                {/* CENTER: Prastuti Text Content with Round Image Below */}
                <div className="text-center order-1 lg:order-2 flex flex-col items-center px-2 sm:px-4">
                  {/* PRASTUTI Heading - Special Highlighting Animation */}
                  <h1
                    className={`Utility-font-Montserrat tracking-widest mt-14 sm:mt-8 lg:mt-16 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight mb-4 sm:mb-4 transition-all duration-1000 ease-out ${
                      isLoaded
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-8 opacity-0 scale-95"
                    }`}
                  >
                    PRASTUTI
                  </h1>

                  <h2
                    className={`Utility-font-Buenard text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-4 sm:mb-6 whitespace-nowrap transition-all duration-800 ease-out delay-300 px-2 ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    "Teach beyond the textbooks"
                  </h2>

                  <img
                    src={rack}
                    alt="Prastuti Main Product"
                    className={`w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain drop-shadow-2xl mb-4 sm:mb-6 transition-all duration-1000 ease-out delay-500 ${
                      isLoaded
                        ? "translate-y-0 opacity-100 scale-100 rotate-0"
                        : "translate-y-8 opacity-0 scale-75 rotate-12"
                    }`}
                    style={{
                      animation: isLoaded
                        ? "bounce-slow 4s ease-in-out infinite 1s"
                        : "none",
                    }}
                  />
                </div>

                {/* RIGHT: Teacher Training Image */}
                <div className="flex justify-center lg:justify-end order-3 pt-8 sm:pt-16 lg:pt-32 xl:pt-48">
                  <div
                    className={`relative transform hover:scale-105 sm:hover:scale-110 transition-all duration-700 hover:rotate-1 ${
                      isLoaded
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                    }`}
                    style={{
                      transition:
                        "transform 0.8s ease-out 0.4s, opacity 0.8s ease-out 0.4s",
                    }}
                  >
                    <img
                      src={img1}
                      alt="Prastuti Teacher Training"
                      className="w-60 h-40 sm:w-72 sm:h-52 lg:w-80 lg:h-60 xl:w-[24rem] xl:h-[16rem] 2xl:w-[28rem] 2xl:h-[20rem] object-contain drop-shadow-2xl rounded-xl sm:rounded-2xl border border-white/20 sm:border-2"
                    />
                    <div
                      className={`absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-green-500 to-green-700 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg transition-all duration-500 delay-900 ${
                        isLoaded
                          ? "animate-pulse opacity-100 scale-100"
                          : "opacity-0 scale-75"
                      }`}
                    >
                      Teacher Training
                    </div>
                    {/* Interactive glow effect */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  </div>
                </div>
              </div>

              {/* Spanning Text Below Hero Images */}
              <div className="w-full mt-4 sm:mt-6 lg:mt-8">
                <p
                  className={`Utility-font-NunitoSans text-white/90 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl leading-relaxed text-center w-full max-w-6xl mx-auto transition-all duration-800 ease-out delay-700 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-4 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  Revolutionary chapter-wise demonstration kit designed
                  specifically for Grades 8, 9 & 10 students, perfectly aligned
                  with NCERT curriculum.
                  <span className="sm:hidden"> </span>
                  Transform your classroom into an interactive learning
                  environment with hands-on activities that make complex
                  concepts simple and memorable.
                </p>
              </div>
            </div>
          </div>

          {/* Custom CSS for animations */}
          <style jsx>{`
            @keyframes bounce-slow {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            @keyframes glow-pulse {
              0% {
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
                  0 0 40px rgba(255, 255, 255, 0.3),
                  0 0 60px rgba(255, 255, 255, 0.1);
              }
              100% {
                text-shadow: 0 0 30px rgba(255, 255, 255, 0.8),
                  0 0 60px rgba(255, 255, 255, 0.5),
                  0 0 90px rgba(255, 255, 255, 0.2);
              }
            }

            /* Mobile-first responsive adjustments */
            @media (max-width: 640px) {
              .bounce-slow {
                animation-duration: 3s;
              }
            }

            @media (max-width: 480px) {
              .bounce-slow {
                animation: none;
              }
            }
          `}</style>
        </div>
      </div>

      {/* What is Prastuti Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 mb-10">
        <div className="bg-white rounded-2xl shadow-xl w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl mx-auto py-10 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                <img
                  src={demo}
                  alt="Prastuti Demonstration"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                NCERT Aligned
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                Grade 8-10
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-6 lg:space-y-8">
              <div className="relative">
                <h2 className="Utility-font-Montserrat text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  What is Prastuti?
                </h2>
              </div>

              <div className="Utility-font-NunitoSans space-y-4 lg:space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
                  <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                    <span className="font-bold text-blue-700">Prastuti</span> is
                    a revolutionary chapter-wise demonstration kit specifically
                    designed for
                    <span className="font-semibold">
                      {" "}
                      Grades 8, 9 & 10 Science and Math
                    </span>
                    , perfectly aligned with the{" "}
                    <span className="font-semibold">NCERT curriculum</span>.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
                  <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                    It empowers teachers to effortlessly conduct
                    <span className="font-bold"> hands-on activities</span>{" "}
                    directly in the classroom, transforming lessons into{" "}
                    <span className="font-semibold">
                      interactive, visual, and engaging experiences
                    </span>
                    that help students grasp complex concepts with ease.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl">
                  <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                    <span className="font-bold">No separate lab required! </span>
                    No technical expertise needed! Prastuti brings the
                    laboratory experience
                    <span className="font-semibold">
                      {" "}
                      directly into your classroom
                    </span>
                    , making quality education accessible to every student.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="max-w-6xl mx-auto px-0 sm:px-4 lg:px-8">
            <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://drive.google.com/file/d/1BeAKh0pv70yfxxJn0gE_qRP1kaeDpviH/preview"
                  width="640"
                  height="480"
                  title="Prastuti Demo Video"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-blue-800 to-blue-600 ">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="Utility-font-Montserrat text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 lg:mb-16">
            WHY CHOOSE US?
          </h2>

          <div className="Utility-font-NunitoSans grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {[
              {
                icon: briefcase,
                title: ["Compact and", "portable design"],
              },
              {
                icon: video,
                title: ["Free teacher training", "video support"],
              },
              {
                icon: traning,
                title: ["Chapter wise maths and", "science kit"],
              },
              {
                icon: classroom,
                title: ["Brings the lab into", "the classroom"],
              },
              {
                icon: enrich,
                title: ["Enhances teaching", "methods"],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center group cursor-pointer ${
                  index === 4
                    ? "sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:justify-self-auto xl:col-span-1"
                    : ""
                }`}
              >
                <div className="mb-4 lg:mb-6 flex justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <img
                      src={feature.icon}
                      alt={feature.title.join(" ")}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </div>
                <p className="text-white text-base sm:text-lg font-bold leading-tight group-hover:text-yellow-300 transition-all duration-300">
                  <span className="block">{feature.title[0]}</span>
                  <span className="block">{feature.title[1]}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-r from-blue-800 to-blue-600"
      >
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="Utility-font-Montserrat text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
              Ready to Empower Your Classroom?
            </h2>
            <p className="Utility-font-Buenard text-white text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-12 leading-relaxed max-w-3xl mx-auto">
              Transform the way STEM, AI, and Robotics are taught. Contact us to
              bring Prastuti to your school today!
            </p>
            <button
              className="Utility-font-NunitoSans inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-black text-sm sm:text-base md:text-lg lg:text-xl font-bold py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-10 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => navigate("/contact")}
            >
              Order Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
