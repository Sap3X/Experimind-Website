import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: " Narayana Shenoy",
      role: "Head Master",
      company: "Srimad Bhuvanendra High School, Karkala",
      image: "https://placehold.co/46x46/FFD700/000000?text=Narayana+Shenoy",
      testimonial: "Thanks to the PSL and its hands-on approach, our classrooms are now filled with curiosity, innovation, and excitement for STEM learning."
    },
    {
      id: 2,
      name: "Tanishka",
      role: "Student of 9th grade",
      company: "NITK English Medium School",
      image: "https://placehold.co/46x46/FFD700/000000?text=Tanishka",
      testimonial: "PSL has helped me understand STEM concepts in a fun way. Building models and experimenting with different ideas has made learning exciting. I look forward to every session with PSL!"
    },
    {
      id: 3,
      name: "Kamakshi Rao",
      role: "Teacher",
      company: "",
      image: "https://placehold.co/46x46/FFD700/000000?text=Kamakshi+Rao",
      testimonial: "Shiksha Robot has transformed the way my students learn English! It makes practice engaging and interactive, helping them build confidence in speaking. The guided conversations and pronunciation support have are very useful."
    },
    {
      id: 4,
      name: "Adarsh Hegde",
      role: "Student of 7th grade",
      company: "",
      image: "https://placehold.co/46x46/FFD700/000000?text=Adarsh+Hegde",
      testimonial: "I used to feel shy about speaking English, but Shiksha has helped me practice without hesitation. The interactive lessons and real-time feedback make learning easy and enjoyable."
    },
    {
      id: 5,
      name: "Ananya Shetty",
      role: "Student of 6th grade",
      company: "Premier Industries",
      image: "https://placehold.co/46x46/FFD700/000000?text=Ananya+Shetty",
      testimonial: "I love using Shiksha! It feels like talking to a real person. I have improved my vocabulary and can now introduce myself fluently in English. Learning with the robot is so much fun!"
    }
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToTestimonial = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="Utility-color-Blue text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 lg:mb-4">
          Testimonials
        </h2>
      </div>

      {/* Testimonial Container */}
      <div className="flex items-center justify-center">
        {/* Left Arrow - Visible on all devices */}
        <button
          onClick={prevTestimonial}
          disabled={isAnimating}
          className="flex items-center justify-center bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300 rounded-full p-2 lg:p-3 shadow-lg transition-all duration-200 hover:shadow-xl mr-2 sm:mr-4 lg:mr-8"
          aria-label="Previous testimonial"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Testimonial Card */}
        <div className="w-full max-w-4xl">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                >
                  <div 
                    className=" p-6 sm:p-8 lg:p-10 rounded-2xl border mx-2"
                    style={{ backgroundColor: '#EAEAEA' }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:space-x-4 space-y-4 sm:space-y-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover flex-shrink-0 mx-auto sm:mx-0"
                        loading="lazy"
                      />
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg lg:text-xl font-semibold text-blue-600 mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-blue-500 text-sm lg:text-base mb-4">
                          {testimonial.role}, {testimonial.company}
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg text-justify">
                          {testimonial.testimonial}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Arrow - Visible on all devices */}
        <button
          onClick={nextTestimonial}
          disabled={isAnimating}
          className="flex items-center justify-center bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300 rounded-full p-2 lg:p-3 shadow-lg transition-all duration-200 hover:shadow-xl ml-2 sm:ml-4 lg:ml-8"
          aria-label="Next testimonial"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center space-x-2 lg:space-x-3 mt-6 lg:mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            disabled={isAnimating}
            className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;