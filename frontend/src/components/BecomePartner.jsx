import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Users, Award, ArrowRight } from "lucide-react";

const BecomePartner = () => {
  // Define your target values here - change these to reflect your desired numbers
  const targetValues = {
    partners: 25, // Change this to your desired partner count
    students: 10000, // Change this to your desired student count
    satisfaction: 98,
  };

  const navigate = useNavigate();
  // Animated counters
  const [counters, setCounters] = useState({
    partners: 0,
    students: 0,
    satisfaction: 0,
  });

  // Animate counters on component mount
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          partners: Math.floor(targetValues.partners * progress),
          students: Math.floor(targetValues.students * progress),
          satisfaction: Math.floor(targetValues.satisfaction * progress),
        });

        if (step >= steps) {
          clearInterval(timer);
          // Set final values to exact target values
          setCounters({
            partners: targetValues.partners,
            students: targetValues.students,
            satisfaction: targetValues.satisfaction,
          });
        }
      }, stepDuration);
    };

    animateCounters();
  }, []);

  const partnershipBenefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Boost Student Outcomes",
      desc: "Improve academic performance by 40%",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Training",
      desc: "Comprehensive teacher development programs",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Recognition",
      desc: "Join our network of excellence partners",
    },
  ];

  return (
    <>
      <div className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-pulse"></div>
          <div
            className="absolute top-32 right-20 w-16 h-16 bg-orange-400 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-300 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-32 right-1/3 w-14 h-14 bg-orange-300 rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Main CTA Card */}
          <div className="bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-600/90 backdrop-blur-sm rounded-3xl p-8 lg:p-16 text-center shadow-2xl border border-gray-600/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <h2 className="Utility-font-Montserrat text-white text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-3 lg:mb-5">
                Want to make your school ready for a change?
                <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Want to make students future ready?
                </span>
              </h2>

              <p className="Utility-font-Buenard text-gray-300 text-lg lg:text-xl mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of forward-thinking schools that are transforming
                education and preparing students for tomorrow's challenges.
              </p>

              {/* Statistics */}
              <div className="Utility-font-Montserrat grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                    {counters.partners}+
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    Partner Schools
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {counters.students.toLocaleString()}+
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    Students Impacted
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">
                    {counters.satisfaction}%
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    Satisfaction Rate
                  </div>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="Utility-font-NunitoSans grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {partnershipBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-yellow-400 mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className="Utility-font-NunitoSans group bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-lg lg:text-2xl font-bold py-4 px-8 lg:py-6 lg:px-12 rounded-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 inline-flex items-center gap-4 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                onClick={() => navigate("/contact")}
              >
                Become a Partner
                <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomePartner;