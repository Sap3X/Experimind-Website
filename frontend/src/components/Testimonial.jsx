import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: " Narayana Shenoy",
      role: "Head Master",
      company: "Srimad Bhuvanendra High School, Karkala",
      image: "https://placehold.co/46x46/FFD700/000000?text=Narayana+Shenoy",
      testimonial:
        "Thanks to the PSL and its hands-on approach, our classrooms are now filled with curiosity, innovation, and excitement for STEM learning.",
    },
    {
      id: 2,
      name: "Tanishka",
      role: "Student of 9th grade",
      company: "NITK English Medium School",
      image: "https://placehold.co/46x46/FFD700/000000?text=Tanishka",
      testimonial:
        "PSL has helped me understand STEM concepts in a fun way. Building models and experimenting with different ideas has made learning exciting. I look forward to every session with PSL!",
    },
    {
      id: 3,
      name: "Kamakshi Rao",
      role: "Teacher",
      company: "",
      image: "https://placehold.co/46x46/FFD700/000000?text=Kamakshi+Rao",
      testimonial:
        "Shiksha Robot has transformed the way my students learn English! It makes practice engaging and interactive, helping them build confidence in speaking. The guided conversations and pronunciation support have are very useful.",
    },
    {
      id: 4,
      name: "Adarsh Hegde",
      role: "Student of 7th grade",
      company: "",
      image: "https://placehold.co/46x46/FFD700/000000?text=Adarsh+Hegde",
      testimonial:
        "I used to feel shy about speaking English, but Shiksha has helped me practice without hesitation. The interactive lessons and real-time feedback make learning easy and enjoyable.",
    },
    {
      id: 5,
      name: "Ananya Shetty",
      role: "Student of 6th grade",
      company: "",
      image: "https://placehold.co/46x46/FFD700/000000?text=Ananya+Shetty",
      testimonial:
        "I love using Shiksha! It feels like talking to a real person. I have improved my vocabulary and can now introduce myself fluently in English. Learning with the robot is so much fun!",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="Utility-font-Montserrat Utility-color-Blue text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-12 lg:mb-16">
          What People Say About Us
        </h2>
      </div>

      {/* Swiper Container with Navigation */}
      <div className="relative max-w-full overflow-hidden">
        {/* Navigation Buttons */}
        <button
          className="swiper-button-prev-custom absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/95 hover:bg-white border border-blue-200 hover:border-blue-400 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 z-30"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          className="swiper-button-next-custom absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/95 hover:bg-white border border-blue-200 hover:border-blue-400 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 z-30"
          aria-label="Next testimonial"
        >
          <svg
            className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Swiper */}
        <div className="px-12 lg:px-16">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass:
                "swiper-pagination-bullet-active custom-bullet-active",
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100/60 border border-blue-200 hover:border-blue-300 rounded-xl p-6 h-full shadow-md flex flex-col justify-between max-w-sm mx-auto">
                  {/* Profile Section */}
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="relative mb-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-3 border-blue-300 shadow-md"
                        loading="lazy"
                      />
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-1 leading-tight">
                      {testimonial.name}
                    </h3>

                    <p className="text-blue-500 text-sm font-medium">
                      {testimonial.role}
                      {testimonial.company && (
                        <>
                          <br />
                          <span className="text-blue-400 text-sm">
                            {testimonial.company}
                          </span>
                        </>
                      )}
                    </p>
                  </div>

                  {/* Testimonial Content */}
                  <div className="relative flex-grow flex items-center">
                    <div className="absolute -top-2 -left-2 text-3xl text-blue-200 opacity-50 font-serif leading-none">
                      "
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed text-center px-4 py-2 font-medium">
                      {testimonial.testimonial}
                    </p>
                    <div className="absolute -bottom-2 -right-2 text-3xl text-blue-200 opacity-50 font-serif leading-none rotate-180">
                      "
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          position: relative;
          margin-top: 1.5rem;
        }
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          display: none;
        }
        .testimonials-swiper .swiper-slide {
          height: auto;
        }
        .testimonials-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .custom-bullet {
          width: 0.625rem !important;
          height: 0.625rem !important;
          background: #93c5fd !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          margin: 0 0.1875rem !important;
        }
        .custom-bullet:hover {
          background: #60a5fa !important;
        }
        .custom-bullet-active {
          background: #2563eb !important;
          transform: scale(1.25) !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;