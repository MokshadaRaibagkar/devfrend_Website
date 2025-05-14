import React, { useState } from 'react';
import barber from '../assets/barber.jpg';
import galimg1 from '../assets/galimg1.jpg';
import galimg2 from '../assets/galimg2.jpg';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const galleryImages = [
    {
      id: 1,
      src: galimg1,
      alt: "Gallery Image 1 - Client haircut"
    },
    {
      id: 2,
      src: barber,
      alt: "Gallery Image 2 - Barber at work"
    },
    {
      id: 3,
      src: galimg2,
      alt: "Gallery Image 3 - Shop interior"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery">
    <div className='bg-neutral-900 py-16'>
      <div className="max-w-3xl mx-auto group text-center mb-16 px-4">
        <p className="text-primary text-amber-500 font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">
          Our Work & Shop
        </p>
        <h2 className="text-3xl text-white md:text-4xl font-bold text-foreground mb-2 relative inline-block">
          Our Barbershop Gallery
          <span className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-amber-500 bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
        </h2>
        <p className="text-lg text-muted-foreground text-gray-500 mt-6 transition-all duration-500 group-hover:text-muted-foreground/90">
          Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
        </p>
      </div> 

      {/* Desktop Grid View */}
      <div className="hidden sm:flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl px-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative w-full h-64 group overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Carousel View */}
      <div className="sm:hidden relative w-full overflow-hidden px-2">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ 
            transform: `translateX(calc(-${currentSlide} * (100% + 1rem)))`,
            gap: '1rem'
          }}
        >
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="flex-shrink-0 w-full"
              style={{ width: 'calc(100% - 1rem)' }}
            >
              <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
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
          {galleryImages.map((_, index) => (
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

export default Gallery;