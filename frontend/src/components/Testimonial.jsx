import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Bhandari",
      role: "Director",
      company: "Nitte University",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9a3e27b?w=100&h=100&fit=crop&crop=face&auto=format",
      testimonial: "Outstanding service and exceptional quality. The team delivered beyond our expectations and helped transform our business processes. Their attention to detail and commitment to excellence is truly remarkable. We've seen significant improvements in our operations."
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CTO",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format",
      testimonial: "Working with this team has been a game-changer for our organization. Their innovative approach and technical expertise helped us overcome complex challenges. The results speak for themselves - increased efficiency and remarkable growth in our market presence."
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Global Dynamics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format",
      testimonial: "Professional, reliable, and incredibly talented. They understood our vision perfectly and brought it to life with creativity and precision. The collaborative process was smooth and the final outcome exceeded all our expectations. Highly recommended!"
    },
    {
      id: 5,
      name: "David Thompson",
      role: "Operations Manager",
      company: "Premier Industries",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format",
      testimonial: "Exceptional value and outstanding results. The project was completed on time and within budget, with quality that surpassed our requirements. Their proactive communication and problem-solving abilities made the entire experience seamless and enjoyable."
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