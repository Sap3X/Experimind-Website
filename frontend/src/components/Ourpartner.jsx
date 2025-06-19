import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img from'../image';

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [counters, setCounters] = useState({ partners: 0, projects: 0, countries: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  const carouselRef = useRef(null);
  
  // Dummy partner data with placeholder images
  const partners = [
    {
      id: 1,
      name: 'AIC NITTE',
      logo: img.aicnitte,
    },
    {
      id: 2,
      name: 'Atal Innovation Mission',
      logo: img.aim,
    },
    {
      id: 3,
      name: 'Nagarjuna Group of Institutions',
      logo: img.ngi,
    },
    {
      id: 4,
      name: 'RV University',
      logo: img.rv,
    },
    {
      id: 5,
      name: 'Nitte University',
      logo: img.nitte,
    },
    {
      id: 6,
      name: 'SSRVM',
      logo: img.ssrvm,
    },
    {
      id: 7,
      name: 'SBC',
      logo: img.sbc,
    },
    {
      id: 8,
      name: 'YFS',
      logo: img.yfs,
    }
  ];

  const partnersPerView = 3;
  
  const extendedPartners = [
    ...partners.slice(-partnersPerView), 
    ...partners,
    ...partners,
    ...partners.slice(0, partnersPerView) 
  ];
  
  const initialIndex = partnersPerView; 
  
  const animateCounter = (target, setter, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const animate = () => {
      start += increment;
      if (start < target) {
        setter(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setter(target);
      }
    };
    animate();
  };

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter(50, (val) => setCounters(prev => ({ ...prev, partners: val })));
            setTimeout(() => animateCounter(100, (val) => setCounters(prev => ({ ...prev, projects: val }))), 200);
            setTimeout(() => animateCounter(25, (val) => setCounters(prev => ({ ...prev, countries: val }))), 400);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
    
    setTimeout(() => {
      setCurrentIndex(prev => {
        if (prev >= initialIndex + partners.length) {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none';
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
              }
            }, 50);
          }
          return initialIndex;
        }
        return prev;
      });
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
    
    setTimeout(() => {
      setCurrentIndex(prev => {
        if (prev < initialIndex) {
          if (carouselRef.current) {
            carouselRef.current.style.transition = 'none';
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
              }
            }, 50);
          }
          return initialIndex + partners.length - 1;
        }
        return prev;
      });
      setIsTransitioning(false);
    }, 500);
  };

  const getDotIndex = () => {
    return (currentIndex - initialIndex + partners.length) % partners.length;
  };

  return (
    <div className="w-full max-w-7xl mt-11 mx-auto py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="Utility-font-Montserrat text-3xl sm:text-4xl lg:text-6xl font-bold text-center Utility-color-Blue mb-4">
          Our Partners
        </h2>
        <p className="Utility-font-Buenard text-lg text-gray-600 max-w-2xl mx-auto">
          We collaborate with leading organizations to drive innovation and create meaningful impact
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative px-8">
        <div className="flex items-center justify-center gap-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group disabled:opacity-50"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
          </button>

          {/* Partners Display */}
          <div className="flex-1 overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex items-center justify-center gap-8 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (320 + 32)}px)`,
                width: `${extendedPartners.length * (320 + 32)}px`,
                marginLeft: `calc(50% - ${partnersPerView * (320 + 32) / 2}px)`
              }}
            >
              {extendedPartners.map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-80 h-48 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-center group cursor-pointer"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group disabled:opacity-50"
            aria-label="Next partners"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setCurrentIndex(initialIndex + index);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === getDotIndex()
                  ? 'bg-blue-600 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Partnership Stats with Counter Animation */}
      <div ref={statsRef} className="Utility-font-Montserrat mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {counters.partners}+
          </div>
          <div className="text-gray-600">Strategic Partners</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {counters.projects}+
          </div>
          <div className="text-gray-600">Collaborative Projects</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {counters.countries}
          </div>
          <div className="text-gray-600">Countries Reached</div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;