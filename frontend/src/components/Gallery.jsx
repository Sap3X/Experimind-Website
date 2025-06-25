import React, { useState, useEffect, useRef } from 'react';

const InfiniteCarousel = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  
  // Sample images - replace with your own image URLs
  const images = [
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      alt: "Students in classroom"
    },
    {
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
      alt: "School children learning"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      alt: "Students studying together"
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      alt: "Children in uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
      alt: "School activities"
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
      alt: "Students reading"
    },
    {
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop",
      alt: "Group of students"
    },
    {
      src: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=400&h=300&fit=crop",
      alt: "Children learning"
    }
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images, ...images];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setTranslateX(prev => {
          const newTranslateX = prev - 1; // Slow continuous movement
          
          // Reset position when we've scrolled through one full set
          if (Math.abs(newTranslateX) >= (images.length * 280)) {
            return 0;
          }
          
          return newTranslateX;
        });
      }, 20); // Smooth 50fps animation
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, images.length]);

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className=" text-3xl sm:text-4xl lg:text-6xl Utility-color-Blue font-bold text-center mb-8 text-gray-800">
          Our School Memories
        </h2>
        
        <div 
          className="relative overflow-hidden rounded-lg shadow-lg bg-white p-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          ref={containerRef}
        >
          {/* Carousel strip */}
          <div 
            className="flex gap-4 transition-none"
            style={{
              transform: `translateX(${translateX}px)`,
              width: `${duplicatedImages.length * 280}px`
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`${index}-${image.alt}`}
                className="flex-shrink-0 relative group w-[260px] h-[200px] sm:w-[360px] sm:h-[300px] "
                style={{ width: '260px', height: '200px' }}
              >
                <div className="w-full h-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient fade edges */}
          {/* <div className="absolute -left-2 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none"></div> */}
          {/* <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div> */}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;