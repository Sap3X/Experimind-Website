import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img from "../image";
import productsImage from "../assets/Psl whith rack 1.svg";
import { useNavigate } from "react-router-dom";

const EducationalSolutions = () => {
  // Educational solutions data
  const educationalSolutions = [
    {
      title: "Portable STEM Lab (PSL)",
      description:
        "Without the need for specialised equipment or qualified teachers, this small, all-in-one kit transforms any classroom into an interactive STEM lab in an instant. PSL enables universal access to high-quality STEM education.",
      imageId: img.psl,
      route: "/psl",
    },
    {
      title: "Prastuti",
      description:
        "An NCERT-aligned science and maths demonstration kit for grades 8-10. With simple, practical exercises, Prastuti assists educators in bringing lessons to life; no laboratory or technical expertise is required.",
      imageId: img.prastuti,
      route: "/prastuti",
    },
    {
      title: "Anubhav - Create, Learn, Innovate",
      description:
        "With interactive kits and guided video tutorials, Anubhav is a hands-on learning tool that makes STEM, AI, and robotics simple for students of all skill levels.",
      imageId: img.anubhav,
      route: "/anubhav",
    },
    {
      title: "Geo-Magic",
      description:
        "Geo-Magic is a hands-on kit for learning geometry. It makes shapes, lines, angles, and trigonometry come alive through interactive assembly. The kit includes an instructional book and QR-coded video tutorials. Make learning geometry enjoyable, visual, and fun for everyone!",
      imageId: img.geomagic,
      route: "/geomagic",
    },
    //   {
    //     title: "Shiksha 2.0",
    //     description: "Shiksha is an AI-powered teaching assistant built for early learners to build spoken English, vocabulary and conversation skills through chats, rhymes, poems, and stories.",
    //     imageId: img.shiksha,
    //     route: "/shiksha"
    //  }
  ];
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white">
      <div className="relative w-full">
        <img
          src={productsImage}
          alt="Products Background"
          className="w-full h-[900px] object-cover object-center"
        />
        <div className="absolute inset-0 flex flex-col justify-center text-center sm:mb-96 lg:mb-0  z-10 max-w-4xl mx-auto">
          <h1 className="Utility-font-Montserrat text-white text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-1">
            Our Products
          </h1>
          <p className="Utility-font-Buenard text-white text-lg md:text-2xl max-w-2xl mx-auto">
            Transforming classrooms with innovative learning and <br /> teaching kits.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full z-20">
          <Header />
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white px-12">
        <h2 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mt-16">
          Our Educational Solutions
        </h2>

        {educationalSolutions.map((solution, idx) => (
          <div
            key={idx}
            className={`container mx-auto flex flex-col md:flex-row items-center gap-10 my-12 px-4 md:px-24 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={solution.imageId}
              alt={solution.title}
              className="w-full md:w-1/2 h-auto object-cover rounded-lg"
            />
            <div className="flex flex-col gap-6 md:w-1/2">
              <h3 className="Utility-font-Montserrat Utility-color-Blue text-3xl md:text-4xl font-bold">
                {solution.title}
              </h3>
              <p className="Utility-font-NunitoSans text-justify text-lg md:text-xl text-gray-700 leading-relaxed">
                {solution.description}
              </p>
              <button
                className="Utility-font-NunitoSans bg-[#FFDD15] hover:bg-yellow-400 text-black px-8 py-3 rounded-lg shadow-md text-xl font-semibold w-fit transition-colors duration-300"
                onClick={() => navigate({ pathname: solution.route })}
              >
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
};

export default EducationalSolutions;
