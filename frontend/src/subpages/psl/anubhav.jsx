import { motion } from "framer-motion";
import im1 from "./assets/anu.webp";

const features = [
  {
    icon: "💡",
    text: "Self-sustained and used in staff room, science or ATL lab ",
    detail: "Complete ecosystem for independent learning",
  },
  {
    icon: "🛠",
    text: "5 hands-on activities per class per year",
    detail: "Practical learning through real projects",
  },
  {
    icon: "🎓",
    text: "Guided tutorials for easy learning",
    detail: "Step-by-step instruction methodology",
  },
  {
    icon: "🤖",
    text: "Age-appropriate kits focused on Tech & Engineering",
    detail: "Curriculum-aligned STEM education",
  },
];

const levelData = [
  {
    class: "8th",
    name: "ENDURE",
    level: 1,
    color: "from-cyan-500 to-teal-500",
    bgColor: "from-cyan-50 to-teal-50",
    textColor: "text-cyan-700",
  },
  {
    class: "9th",
    name: "EVOLVE",
    level: 2,
    color: "from-emerald-500 to-green-500",
    bgColor: "from-emerald-50 to-green-50",
    textColor: "text-emerald-700",
  },
  {
    class: "10th",
    name: "EXECUTE",
    level: 3,
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    textColor: "text-purple-700",
  },
];

// --- Orange animated background particles ---
function OrangeParticles() {
  // Responsive: more particles on larger screens
  const count = 12;
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 14 + 8; // 8px to 22px
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const delay = Math.random() * 3;
        const duration = 3 + Math.random() * 3;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-300 opacity-30"
            style={{
              width: size,
              height: size,
              left,
              top,
              zIndex: 0,
            }}
            animate={{
              y: [0, -10, 10, 0],
              x: [0, 10, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

export default function AnubhavSection() {
  return (
    <div className="relative ">
      {/* Orange animated background particles */}
      <OrangeParticles />

      {/* Decorative blurred orange blobs for extra style */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-1/2 right-0 w-40 h-40 bg-orange-300/20 rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10 rounded-3xl border border-orange-500">
        {/* Main Content Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
          className="relative"
        >
          {/* Glass Morphism Container */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="relative bg-white/20 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 overflow-hidden"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent pointer-events-none"></div>

            {/* Content */}
            <div className="relative p-4 sm:p-8 lg:p-12">
              {/* Header Section */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="text-center mb-8 sm:mb-12"
              >
                <h2 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent mb-4">
                  ANUBHAV
                </h2>
                <div className="w-20 sm:w-32 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6" />
                <p className=" text-gray-700 max-w-3xl mx-auto font-medium text-sm xs:text-base sm:text-lg mt-2 ">
                  Revolutionizing STEM Education Through Hands-on Learning
                  Experiences
                </p>
              </motion.div>

              {/* Main Content Section - Responsive Alignment */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                }}
                className="mb-8"
              >
                {/* Desktop & Tablet Layout: Image and Features in same row */}
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Left Side: Image with button below */}
                  <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 flex flex-col items-center">
                    <div className="relative group w-full flex flex-col items-center">
                   
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-orange-200/50 flex flex-col items-center">
                          <div className="w-full bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center border-2 border-orange-300/30">
                            <img
                              src={im1}
                              alt="Anubhav STEM kit"
                              className="w-96 h-40 sm:h-56 md:h-64 lg:h-56 xl:h-64 object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
                            />
                          </div>
                        </div>
                      {/* Centered button below image */}
                        <div className="w-full flex justify-center mt-4">
                          <button className="px-6 py-3 text-lg font-bold rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300">
                            Learn More
                          </button>
                        </div>
                    </div>
                  </div>

                  {/* Right Side: Features Grid */}
                  <div className="flex-1 w-full">
                  
                    <div className="grid grid-cols-1 gap-4 h-full">
                      {features.map((feat, i) => (
                        <div
                          key={i}
                          className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/40 hover:bg-white/80 transition-all duration-300 group cursor-pointer flex items-center gap-4 h-16"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 border border-orange-300 flex-shrink-0">
                            <span className="text-xl">{feat.icon}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-800 font-medium text-base leading-tight">
                              {feat.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Class Levels Section */}
              <motion.div
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
                      <div
                        className={`text-sm ${level.textColor} font-medium text-center`}
                      >
                        Level-{level.level}
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
