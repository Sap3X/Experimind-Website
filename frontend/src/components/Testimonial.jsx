import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Narayana Shenoy",
      role: "Head Master",
      company: "Srimad Bhuvanendra High School, Karkala",
      image: "https://placehold.co/46x46/3B82F6/FFFFFF?text=NS",
      testimonial: "Thanks to the PSL and its hands-on approach, our classrooms are now filled with curiosity, innovation, and excitement for STEM learning."
    },
    {
      id: 2,
      name: "Tanishka",
      role: "Student of 9th grade",
      company: "NITK English Medium School",
      image: "https://placehold.co/46x46/3B82F6/FFFFFF?text=T",
      testimonial: "PSL has helped me understand STEM concepts in a fun way. Building models and experimenting with different ideas has made learning exciting. I look forward to every session with PSL!"
    },
    {
      id: 3,
      name: "Kamakshi Rao",
      role: "Teacher",
      company: "",
      image: "https://placehold.co/46x46/3B82F6/FFFFFF?text=KR",
      testimonial: "Shiksha Robot has transformed the way my students learn English! It makes practice engaging and interactive, helping them build confidence in speaking. The guided conversations and pronunciation support are very useful."
    },
    {
      id: 4,
      name: "Adarsh Hegde",
      role: "Student of 7th grade",
      company: "",
      image: "https://placehold.co/46x46/3B82F6/FFFFFF?text=AH",
      testimonial: "I used to feel shy about speaking English, but Shiksha has helped me practice without hesitation. The interactive lessons and real-time feedback make learning easy and enjoyable."
    },
    {
      id: 5,
      name: "Ananya Shetty",
      role: "Student of 6th grade",
      company: "Premier Industries",
      image: "https://placehold.co/46x46/3B82F6/FFFFFF?text=AS",
      testimonial: "I love using Shiksha! It feels like talking to a real person. I have improved my vocabulary and can now introduce myself fluently in English. Learning with the robot is so much fun!"
    }
  ];

  return (
    <section className="w-full max-w-[125rem] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12 xl:py-16 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-12 xl:mb-16">
        <h2 className="text-blue-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
          Testimonials
        </h2>
      </div>

      {/* Swiper Container with Navigation */}
      <div className="relative max-w-full overflow-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 w-4 sm:w-6 md:w-8 lg:w-12 xl:w-16 h-full bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none"></div>
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 w-4 sm:w-6 md:w-8 lg:w-12 xl:w-16 h-full bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none"></div>

        {/* Navigation Buttons - Increased size */}
        <button
          className="swiper-button-prev-custom absolute left-2 sm:left-3 md:left-4 lg:left-6 xl:left-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-white/95 hover:bg-white border border-blue-200 hover:border-blue-400 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 z-30 backdrop-blur-sm"
          aria-label="Previous testimonial"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="swiper-button-next-custom absolute right-2 sm:right-3 md:right-4 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:w-14 xl:w-16 xl:h-16 bg-white/95 hover:bg-white border border-blue-200 hover:border-blue-400 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 z-30 backdrop-blur-sm"
          aria-label="Next testimonial"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Swiper */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            spaceBetween={12}
            slidesPerView={1}
            centeredSlides={false}
            breakpoints={{
              // Extra small phones (320px+)
              320: {
                slidesPerView: 1,
                spaceBetween: 12,
                centeredSlides: false
              },
              // Small phones (375px+)
              375: {
                slidesPerView: 1,
                spaceBetween: 14,
                centeredSlides: false
              },
              // Large phones (425px+)
              425: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: false
              },
              // Small tablets (480px+)
              480: {
                slidesPerView: 1,
                spaceBetween: 16
              },
              // Tablets portrait (600px+)
              600: {
                slidesPerView: 1,
                spaceBetween: 18
              },
              // Small tablets landscape (768px+)
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              // Large tablets (900px+)
              900: {
                slidesPerView: 2,
                spaceBetween: 22
              },
              // Small laptops (1024px+)
              1024: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              // Large laptops (1280px+)
              1280: {
                slidesPerView: 2,
                spaceBetween: 28
              },
              // Desktop (1440px+)
              1440: {
                slidesPerView: 3,
                spaceBetween: 32
              },
              // Large desktop (1600px+)
              1600: {
                slidesPerView: 3.5,
                spaceBetween: 36
              },
              // Extra large desktop (1920px+)
              1920: {
                slidesPerView: 4,
                spaceBetween: 40
              }
            }}
            className="testimonials-swiper overflow-hidden"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100/60 border border-blue-200 hover:border-blue-300 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 h-full min-h-[280px] sm:min-h-[320px] md:min-h-[350px] lg:min-h-[380px] xl:min-h-[400px] shadow-md backdrop-blur-sm flex flex-col justify-between w-full max-w-[260px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] xl:max-w-[380px] 2xl:max-w-[400px] mx-auto">
                  {/* Profile Section */}
                  <div className="flex flex-col items-center text-center mb-4 sm:mb-5">
                    <div className="relative mb-3 sm:mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full object-cover border-2 sm:border-3 md:border-4 border-blue-300 shadow-md transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                        <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-1 sm:mb-2 leading-tight px-1">
                      {testimonial.name}
                    </h3>
                    
                    <p className="text-blue-500 text-xs sm:text-sm md:text-base font-medium leading-tight px-2">
                      {testimonial.role}
                      {testimonial.company && (
                        <>
                          <br />
                          <span className="text-blue-400 text-xs sm:text-sm">{testimonial.company}</span>
                        </>
                      )}
                    </p>
                  </div>

                  {/* Testimonial Content */}
                  <div className="relative flex-grow flex items-center min-h-[120px] sm:min-h-[140px] md:min-h-[160px]">
                    <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 text-2xl sm:text-3xl md:text-4xl text-blue-200 opacity-50 font-serif leading-none">"</div>
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center px-4 sm:px-5 md:px-6 py-2 sm:py-3 font-medium">
                      {testimonial.testimonial}
                    </p>
                    <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 text-2xl sm:text-3xl md:text-4xl text-blue-200 opacity-50 font-serif leading-none rotate-180">"</div>
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
          margin-top: 1rem;
          padding: 0 1rem;
        }
        @media (min-width: 640px) {
          .testimonials-swiper .swiper-pagination {
            margin-top: 1.5rem;
            padding: 0 2rem;
          }
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
          width: 0.5rem !important;
          height: 0.5rem !important;
          background: #93c5fd !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          margin: 0 0.125rem !important;
        }
        .custom-bullet:hover {
          background: #60a5fa !important;
        }
        .custom-bullet-active {
          background: #2563eb !important;
          transform: scale(1.25) !important;
        }
        @media (min-width: 640px) {
          .custom-bullet {
            width: 0.625rem !important;
            height: 0.625rem !important;
            margin: 0 0.1875rem !important;
          }
        }
        @media (min-width: 768px) {
          .custom-bullet {
            width: 0.75rem !important;
            height: 0.75rem !important;
            margin: 0 0.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;