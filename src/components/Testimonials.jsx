import React, { useState } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Fama Barber Shop and Beauty Salon is costly compared to other barbershops with better haircuts.",
      name: "Mike Johnson",
      stars: 4
    },
    {
      id: 2,
      quote: "As someone who's particular about their haircut, I was nervous trying a new place. The team took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
      name: "David Martinez",
      stars: 5
    },
    {
      id: 3,
      quote: "The hot towel shave experience at Fama Barber Shop and Beauty Salon Barbershop is phenomenal! but costly It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.",
      name: "Chris Taylor",
      stars: 4
    }
  ];

  const renderStars = (count) => {
    return Array(count).fill().map((_, i) => (
      <span key={i} className="mr-1">★</span>
    ));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" className="relative py-14 md:py-22 lg:py-30 overflow-hidden bg-neutral-900">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-primary/5 z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] rounded-full bg-accent/5 z-0"></div>
      <div className="absolute top-[-5%] left-[-5%] w-80 h-80 rounded-full bg-primary/10 opacity-50 blur-3xl z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-60 h-60 rounded-full bg-accent/10 opacity-50 blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto group text-center mb-16">
          <p className="text-amber-500 font-medium mb-2 transition-all duration-300 group-hover:-translate-y-0.5">
            Testimonials
          </p>
          <h2 className="text-3xl text-white md:text-4xl font-bold text-foreground mb-4 relative inline-block">
            What Our Clients Say
            <span className="bg-amber-500 absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
          </h2>
        </div>

        {/* Desktop grid view */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-neutral-700 py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:border-amber-500 hover:-translate-y-1 relative overflow-hidden border-border animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/10 rounded-tl-full z-0"></div>
              <div className="px-6 pt-10 pb-6 relative z-10">
                <p className="text-lg text-white leading-relaxed text-foreground mb-8 flex-grow relative italic">
                  <span className="absolute text-stone-700 top-[-1.5rem] left-[-0.5rem] text-5xl text-primary/15 font-serif">"</span>
                  {testimonial.quote}
                  <span className="absolute text-stone-700 bottom-[-3rem] right-0 text-5xl text-primary/10 font-serif">"</span>
                </p>
              </div>
              <div className="px-6 pt-4 border-t border-border">
                <div className="flex text-amber-500 mb-4">
                  {renderStars(testimonial.stars)}
                </div>
                <div className="flex flex-col relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-amber-500 before:rounded-md">
                  <h4 className="font-bold text-white text-foreground mb-1">{testimonial.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel view */}
<div className="sm:hidden relative overflow-hidden">
  <div 
    className="flex transition-transform duration-500 ease-in-out"
    style={{ 
      transform: `translateX(-${currentSlide * 100}%)`,
      width: `${testimonials.length *33}%`
    }}
  >
    {testimonials.map((testimonial) => (
      <div 
        key={testimonial.id}
        className="w-full flex-shrink-0 px-4"
      >
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-neutral-700 hover:border-amber-500 py-6 shadow-sm h-full relative overflow-hidden ">
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/10 rounded-tl-full z-0"></div>
          <div className="px-6 pt-10 pb-6 relative z-10">
            <p className="text-lg text-white leading-relaxed text-foreground mb-8 flex-grow relative italic">
              <span className="absolute text-stone-700 top-[-1.5rem] left-[-0.5rem] text-5xl text-primary/15 font-serif">"</span>
              {testimonial.quote}
              <span className="absolute text-stone-700 bottom-[-3rem] right-0 text-5xl text-primary/10 font-serif">"</span>
            </p>
          </div>
          <div className="px-6 pt-4 border-t border-border">
            <div className="flex text-amber-500 mb-4">
              {renderStars(testimonial.stars)}
            </div>
            <div className="flex flex-col relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-amber-500 before:rounded-md">
              <h4 className="font-bold text-white text-foreground mb-1">{testimonial.name}</h4>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Navigation buttons */}
  <button 
    onClick={prevSlide}
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-neutral-800/90 text-white rounded-full p-2 z-10 hover:bg-neutral-700/90"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18L9 12l6-6" />
    </svg>
  </button>
  <button 
    onClick={nextSlide}
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-neutral-800/90 text-white rounded-full p-2 z-10 hover:bg-neutral-700/90"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  </button>

  {/* Indicators */}
  <div className="flex justify-center mt-4 space-x-2">
    {testimonials.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-amber-500 w-4' : 'bg-gray-500'}`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default Testimonials;