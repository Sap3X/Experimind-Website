import { useState } from "react";
import { ChevronDown } from "lucide-react";
import im1 from "./assets/Prastuti Hero Image.webp";
import im2 from "./assets/anu.webp";
import im3 from "./assets/image120.webp";

const components = [
  {
    title: "Prastuti",
    subtitle: "Teacher's Toolkit",
    image: im1,
    description: "Chapter-wise teacher kits with interactive models, experiments and video tutorials for easy science and math demonstrations for classes 8, 9 & 10.",
    bg: "from-blue-100 to-blue-200",
    borderColor: "border-blue-300",
    dotColor: "bg-blue-500"
  },
  {
    title: "Anubhav",
    subtitle: "Student Experience", 
    image: im2,
    description: "Student kits with age-appropriate activities and guided videos for learning STEM, AI and robotics.",
    bg: "from-orange-100 to-orange-200",
    borderColor: "border-orange-300",
    dotColor: "bg-orange-500"
  },
  {
    title: "Pradarshan",
    subtitle: "Innovation Showcase",
    image: im3,
    description: "A display and exhibition module for converting ideas into projects and showcasing students innovations and fostering creativity.",
    bg: "from-yellow-100 to-yellow-200", 
    borderColor: "border-yellow-300",
    dotColor: "bg-yellow-500"
  },
];

export default function STEMComponentsLayout() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className=" bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto xl:h-[600px] lg:h-[650px] md:h-[650px] sm:h-[1600px] h-[1700px] ">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            3 Main Components of Portable STEM Lab
          </h1>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start ">
          {components.map((component, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-b ${component.bg} rounded-3xl border-2 ${component.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div className="p-6 pb-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white ">
                    <img
                      src={component.image}
                      alt={component.title}
                      className="w-full h-64 object-cover"
                    />
                    {/* Blue dot indicator */}
                    <div className={`absolute top-4 right-4 w-3 h-3 ${component.dotColor} rounded-full shadow-md`}></div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  {/* Title Section */}
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{component.title}</h3>
                    <div className={`w-2 h-2 ${component.dotColor} rounded-full`}></div>
                  </div>
                  
                  <p className="text-sm text-gray-600 italic mb-4">{component.subtitle}</p>

                  {/* Description - Show on hover for large screens */}
                  <div className={`hidden md:block transition-all duration-300 ${
                    isHovered ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      {component.description}
                    </p>
                  </div>

                  {/* Toggle Button for Mobile */}
                  <button
                    className={`w-full md:hidden flex items-center justify-center gap-2 px-4 py-2 bg-white/80 hover:bg-white text-gray-700 rounded-xl border ${component.borderColor} transition-all duration-200`}
                    onClick={() => setActiveIndex(isActive ? null : index)}
                  >
                    {component.icon}
                    <span className="text-sm font-medium">
                      {isActive ? "Hide Details" : "Show Details"}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Expandable Content for Mobile */}
                  <div className={`md:hidden overflow-hidden transition-all duration-300 ${
                    isActive ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}>
                    <div className="bg-white/60 rounded-xl p-4 border border-white/40">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      
      </div>
    </div>
  );
}