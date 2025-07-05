import React, { useState, useEffect, useRef } from "react";
import img from "../image";

const InfiniteCarousel = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  // Sample images - replace with your own image URLs
  const images = [
    {
      src: img.gallery1,
      alt: "Students in classroom",
    },
    {
      src: img.gallery2,
      alt: "Seminar in progress",
    },
    {
      src: img.gallery3,
      alt: "Experiment in FabLab",
    },
    {
      src: img.gallery4,
      alt: "Students with Anubhav kit",
    },
    {
      src: img.gallery5,
      alt: "Group Discussion",
    },
    {
      src: img.gallery6,
      alt: "Experiment",
    },
    {
      src: img.gallery7,
      alt: "Student with GeoMagic kit",
    },
    {
      src: img.gallery8,
      alt: "Anubhav kit in use",
    },
    {
      src: img.gallery9,
      alt: "Group Photo",
    },
    {
      src: img.gallery10,
      alt: "Students with Shiksha robot",
    },
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images, ...images];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setTranslateX((prev) => {
          const newTranslateX = prev - 1; // Slow continuous movement

          // Reset position when we've scrolled through one full set
          if (Math.abs(newTranslateX) >= images.length * 280) {
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
        <h2 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12 lg:mb-16">
          Galleries
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
              width: `${duplicatedImages.length * 280}px`,
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`${index}-${image.alt}`}
                className="flex-shrink-0 relative group w-[260px] h-[200px] sm:w-[360px] sm:h-[300px] "
                style={{ width: "260px", height: "200px" }}
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
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
