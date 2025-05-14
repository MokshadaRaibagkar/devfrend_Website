import React, { useState } from 'react';
import haircut from '../assets/haircut.jpg';
import beard from '../assets/beard.jpg';
import premium from '../assets/premium.jpg';

const Barberservice = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const services = [
    {
      id: 1,
      title: "Haircuts",
      description: "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
      image: haircut,
      features: ["Classic Cuts", "Modern Styles"],
      delay: "0s"
    },
    {
      id: 2,
      title: "Beard Services",
      description: "Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.",
      image: beard,
      features: ["Beard Trims", "Beard Shaping"],
      delay: "0.2s"
    },
    {
      id: 3,
      title: "Premium Services",
      description: "Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.",
      image: premium,
      features: ["Hair Coloring", "Scalp Treatments"],
      delay: "0.4s"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="services" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-neutral-900">
      {/* Background circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-primary/5 z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] rounded-full bg-accent/5 z-0"></div>
      <div className="absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full bg-primary/5 z-0"></div>
      <div className="absolute bottom-[-150px] left-[-150px] w-[300px] h-[300px] rounded-full bg-secondary/5 z-0"></div>
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto group text-center mb-16">
          <p className="text-primary text-amber-500 font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">Premium Grooming</p>
          <h2 className="text-3xl text-white md:text-4xl font-bold text-foreground mb-2 relative inline-block">
            Our Barber Services
            <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-amber-500 bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
          </h2>
          <p className="text-lg text-muted-foreground text-gray-500 mt-6 transition-all duration-500 group-hover:text-muted-foreground/90">
            Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
          </p>
        </div>
    
        {/* Services Grid - Desktop */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-border hover:border-amber-500 relative overflow-hidden group"
              style={{ animationDelay: service.delay }}
            >
              <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              <div className="px-6 pt-10 pb-4">
                <div className="w-20 h-20 bg-neutral-700 border border-neutral-800 rounded-lg p-4 mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-200">
                  <img 
                    alt={service.title} 
                    width={60} 
                    height={60} 
                    className="object-contain rounded-full" 
                    src={service.image} 
                    style={{ color: 'transparent' }} 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-xl text-white font-bold text-foreground transition-colors duration-300 group-hover:text-amber-500">{service.title}</h3>
              </div>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground text-gray-500 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-4 pl-6 text-muted-foreground text-gray-500 text-sm list-disc space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
    
        {/* Mobile Carousel View */}
        <div className="sm:hidden relative w-full overflow-hidden px-2">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(calc(-${currentSlide} * (100% + 0.01rem)))`,
              gap: '1rem'
            }}
          >
            {services.map((service) => (
              <div 
                key={service.id}
                className="flex-shrink-0 w-full"
                style={{ width: 'calc(100% - 1rem)' }}
              >
                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full transition-all duration-300 border-neutral-700 hover:border-amber-500 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-primary to-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                  <div className="px-6 pt-10 pb-4">
                    <div className="w-20 h-20 bg-neutral-700 border border-neutral-800 rounded-lg p-4 mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-200">
                      <img 
                        alt={service.title} 
                        width={60} 
                        height={60} 
                        className="object-contain rounded-full" 
                        src={service.image} 
                        style={{ color: 'transparent' }} 
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <h3 className="text-xl text-white font-bold transition-colors duration-300 group-hover:text-amber-500">{service.title}</h3>
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-4 pl-6 text-gray-500 text-sm list-disc space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
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
            {services.map((_, index) => (
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

export default Barberservice;