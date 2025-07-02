import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img from "../image";

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

 const partners = [
    {
      id: 1,
      name: "AIM Innovation",
      logo: img.aim,
    },
    {
      id: 2,
      name: "RV University",
      logo: img.rv,
    },
    {
      id: 3,
      name: "NITTE University",
      logo: img.nitte,
    },
    {
      id: 4,
      name: "Nagarjuna",
      logo: img.ngi,
    },
    {
      id: 5,
      name: "AIC Nitte",
      logo: img.aicnitte,
    },
    {
      id: 6,
      name: "SSRVM",
      logo: img.ssrvm,
    },
    {
      id: 7,
      name: "SBC",
      logo: img.sbc,
    },
    {
      id: 8,
      name: "Youth For Seva",
      logo: img.yfs,
    },
    {
      id: 9,
      name: "S N M Polytechnic",
      logo: img.snm,
    },
  ];

  const partnersPerView = 3;

  const extendedPartners = [
    ...partners.slice(-partnersPerView),
    ...partners,
    ...partners,
    ...partners.slice(0, partnersPerView),
  ];

  const initialIndex = partnersPerView;

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Get card width based on screen size
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 280; // sm breakpoint
      if (window.innerWidth < 768) return 300; // md breakpoint
      return 320; // lg and above
    }
    return 320;
  };

  const getGap = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 16; // sm breakpoint
      return 32; // md and above
    }
    return 32;
  };

  const handleNext = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);

    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev >= initialIndex + partners.length) {
          if (carouselRef.current) {
            carouselRef.current.style.transition = "none";
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition =
                  "transform 0.5s ease-in-out";
              }
            }, 50);
          }
          return initialIndex;
        }
        return prev;
      });
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, initialIndex, partners.length]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);

    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev < initialIndex) {
          if (carouselRef.current) {
            carouselRef.current.style.transition = "none";
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition =
                  "transform 0.5s ease-in-out";
              }
            }, 50);
          }
          return initialIndex + partners.length - 1;
        }
        return prev;
      });
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, initialIndex, partners.length]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    },
    [handleNext, handlePrev]
  );

  // Calculate the dot indicator position
  const getDotIndex = () => {
    return (currentIndex - initialIndex + partners.length) % partners.length;
  };

  const goToSlide = useCallback(
    (index) => {
      if (!isTransitioning) {
        setCurrentIndex(initialIndex + index);
      }
    },
    [isTransitioning, initialIndex]
  );

  return (
    <div className="w-full max-w-7xl mt-11 mx-auto py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-4">
          Our Partners
        </h2>
        <p className="Utility-font-Buenard text-lg text-gray-600 mb-12 lg:mb-16 max-w-2xl mx-auto">
          We collaborate with leading organizations to drive innovation and
          create meaningful impact
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative px-4 sm:px-8"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Partner carousel"
      >
        <div className="flex items-center justify-center gap-4 sm:gap-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900" />
          </button>

          {/* Partners Display */}
          <div className="flex-1 overflow-hidden">
            <div
              ref={carouselRef}
              className="flex items-center justify-center transition-transform duration-500 ease-in-out"
              role="group"
              aria-label="Partner logos"
              style={{
                transform: `translateX(-${currentIndex * (getCardWidth() + getGap())}px)`,
                gap: `${getGap()}px`,
                width: `${extendedPartners.length * (getCardWidth() + getGap())}px`,
                marginLeft: `calc(50% - ${
                  (partnersPerView * (getCardWidth() + getGap())) / 2
                }px)`,
              }}
            >
              {extendedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-6 flex items-center justify-center group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                  role="img"
                  aria-label={`${partner.name} logo`}
                  tabIndex={0}
                  style={{
                    width: `${getCardWidth()}px`,
                    height: window.innerWidth < 640 ? '140px' : window.innerWidth < 768 ? '160px' : '192px'
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0"
            aria-label="Next partners"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div
          className="flex justify-center mt-8 gap-2"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                index === getDotIndex()
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              role="tab"
              aria-selected={index === getDotIndex()}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;