import React, { useState } from 'react';

const Whychoose = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const features = [
    {
      id: 1,
      icon: "User",
      title: "Expert Barbers",
      description: "Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling."
    },
    {
      id: 2,
      icon: "Scissors",
      title: "Premium Tools & Products",
      description: "We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin."
    },
    {
      id: 3,
      icon: "Home",
      title: "Classic Barbershop Experience",
      description: "Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="features" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-neutral-900">
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-primary/5 z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] rounded-full bg-accent/5 z-0"></div>
      <div className="absolute top-[-100px] left-[-150px] w-[300px] h-[300px] rounded-full bg-primary/5 z-0"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full bg-primary/5 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto group text-center mb-12">
          <p className="text-primary text-amber-500 font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">Our Commitment</p>
          <h2 className="text-3xl text-white md:text-4xl font-bold text-foreground mb-2 relative inline-block">
            Why Choose Fama Barber Shop and Beauty Salon?
            <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-amber-500 bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
          </h2>
          <p className="text-lg text-gray-500 text-muted-foreground mt-6 transition-all duration-500 group-hover:text-muted-foreground/90">
            What makes us the premier barbershop in Denton, TX.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
          {features.map((feature) => (
            <div key={feature.id} className="bg-card text-card-foreground gap-6 rounded-xl border py-6 shadow-sm flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group border-border hover:border-amber-500 relative">
              <div className="bg-amber-500 absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-full group-hover:h-1"></div>
              <div className="px-6 pb-2">
                <div className="text-amber-500 bg-amber-100 w-[60px] h-[60px] rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl text-white font-semibold group-hover:text-amber-500 transition-colors duration-300">{feature.title}</h3>
              </div>
              <div className="px-6 flex-grow">
                <p className="text-gray-500 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="sm:hidden relative w-full overflow-hidden px-2">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(calc(-${currentSlide} * (100% + 0.1rem)))`,
              gap: '1rem'
            }}
          >
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="flex-shrink-0 w-full"
                style={{ width: 'calc(100% - 1rem)' }}
              >
                <div className="bg-card text-card-foreground gap-6 rounded-xl border py-6 shadow-sm flex flex-col transition-all duration-300 border-neutral-700 hover:border-amber-500 relative overflow-hidden group">
                  <div className="bg-amber-500 absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-full group-hover:h-1"></div>
                  <div className="px-6 pb-2">
                    <div className="text-amber-500 bg-amber-100 w-[60px] h-[60px] rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl text-white font-semibold group-hover:text-amber-500 transition-colors duration-300">{feature.title}</h3>
                  </div>
                  <div className="px-6 flex-grow">
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-800/90 text-white rounded-full p-2 z-10 hover:bg-neutral-700/90"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-800/90 text-white rounded-full p-2 z-10 hover:bg-neutral-700/90"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {features.map((_, index) => (
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

export default Whychoose;