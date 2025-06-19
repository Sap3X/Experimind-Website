import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Dummy partner data with placeholder images
  const partners = [
    {
      id: 1,
      name: 'AIM Innovation',
      logo: 'https://placehold.co/453x168/FFD700/000000?text=AIM+Innovation'
    },
    {
      id: 2,
      name: 'RV University',
      logo: 'https://placehold.co/453x168/4169E1/FFFFFF?text=RV+University'
    },
    {
      id: 3,
      name: 'NITTE University',
      logo: 'https://placehold.co/453x168/1E40AF/FFFFFF?text=NITTE+University'
    },
    {
      id: 4,
      name: 'Tech Corp',
      logo: 'https://placehold.co/453x168/059669/FFFFFF?text=Tech+Corp'
    },
    {
      id: 5,
      name: 'Innovation Hub',
      logo: 'https://placehold.co/453x168/DC2626/FFFFFF?text=Innovation+Hub'
    },
    {
      id: 6,
      name: 'Future Labs',
      logo: 'https://placehold.co/453x168/7C3AED/FFFFFF?text=Future+Labs'
    },
    {
      id: 7,
      name: 'Global Partners',
      logo: 'https://placehold.co/453x168/EA580C/FFFFFF?text=Global+Partners'
    },
    {
      id: 8,
      name: 'Smart Solutions',
      logo: 'https://placehold.co/453x168/0891B2/FFFFFF?text=Smart+Solutions'
    }
  ];

  const partnersPerView = 3;
  const maxIndex = Math.max(0, partners.length - partnersPerView);

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visiblePartners = partners.slice(currentIndex, currentIndex + partnersPerView);
  
  // If we don't have enough partners to fill the view, add from the beginning
  if (visiblePartners.length < partnersPerView) {
    const needed = partnersPerView - visiblePartners.length;
    visiblePartners.push(...partners.slice(0, needed));
  }

  return (
    <div className="w-full max-w-7xl mt-11 mx-auto py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2E3192] mb-4">Our Partners</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We collaborate with leading organizations to drive innovation and create meaningful impact
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative px-8">
        <div className="flex items-center justify-center gap-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 group"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
          </button>

          {/* Partners Display */}
          <div className="flex-1 overflow-hidden">
          
            <div className="flex items-center justify-center gap-8 transition-transform duration-500 ease-in-out">
              {visiblePartners.map((partner, index) => (
                <div 
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-80 h-48 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-center group cursor-pointer"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-700 hover:bg-gray-50 group"
            aria-label="Next partners"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-gray-900" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Partnership Stats */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
          <div className="text-gray-600">Strategic Partners</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
          <div className="text-gray-600">Collaborative Projects</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
          <div className="text-gray-600">Countries Reached</div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;