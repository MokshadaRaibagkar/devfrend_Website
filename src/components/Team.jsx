import React, { useState } from 'react';
import galimg1 from '../assets/galimg1.jpg';
import galimg2 from '../assets/galimg2.jpg'; 
import owner from '../assets/owner.jpg';
const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const teamMembers = [
    {
      id: 1,
      name: "Jason Rodriguez",
      role: "Owner & Master Barber",
      bio: "With over 15 years of experience, Jason founded Fama Barber Shop and Beauty Salon to bring premium men's grooming services to Denton. Specializing in classic cuts and straight razor shaves, he combines traditional techniques with modern styles.",
      image: owner,
      delay: "0s"
    },
    {
      id: 2,
      name: "Marcus Williams",
      role: "Senior Barber",
      bio: "Marcus brings 8 years of experience to Fama Barber Shop and Beauty Salon Barbershop. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal clientele. Known for his attention to detail and consistently flawless cuts.",
      image: galimg1,
      delay: "0.1s"
    },
    {
      id: 3,
      name: "Terrence Jackson",
      role: "Barber & Stylist",
      bio: "Terrence specializes in modern men's styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at transforming your look while maintaining your personal style preferences.",
      image: galimg2,
      delay: "0.2s"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="team" className="relative py-16 md:py-24 lg:py-32 bg-neutral-900">
      {/* Background circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-primary/5 z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] rounded-full bg-accent/5 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto group text-center mb-12">
          <p className="text-primary text-amber-500 font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">
            Expert Stylists
          </p>
          <h2 className="text-3xl text-white md:text-4xl font-bold text-foreground mb-4 relative inline-block">
            Meet Our Barbers
            <span className="bg-amber-500 absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
          </h2>
          <p className="text-lg text-gray-500 text-muted-foreground mt-6 transition-all duration-500 group-hover:text-muted-foreground/90">
            Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
          </p>
        </div>

        {/* Team Grid - Desktop */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-neutral-700 hover:border-amber-500 group"
              style={{ animationDelay: member.delay }}
            >
              <div className="relative h-72 lg:h-60 overflow-hidden">
                <img 
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  src={member.image}
                  style={{ color: 'transparent' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="p-6 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-primary rounded transition-all duration-300 group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent"></div>
                <h3 className="text-lg text-white font-bold text-foreground mb-1 transition-colors duration-300 group-hover:text-amber-500">
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-[2px] bg-amber-500 bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-16 group-hover:opacity-80"></span>
                  {member.name}
                </h3>
                <p className="text-sm font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-amber-500">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground text-gray-400 mb-4 line-clamp-3">
                  {member.bio}
                </p>
                
                <div className="flex justify-center gap-3 mt-4 opacity-80 transform translate-y-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
                  <a 
                    href="https://www.instagram.com/pmcbarbershop/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center transition-all duration-300 w-9 h-9 rounded-full bg-amber-100 text-amber-500 hover:bg-amber-500 hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-md" 
                    aria-label="instagram profile"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      width="14" 
                      height="14"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/pmcbarbershop/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center transition-all duration-300 w-9 h-9 rounded-full bg-amber-100 text-amber-500 hover:bg-amber-500 hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-md" 
                    aria-label="facebook profile"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      width="14" 
                      height="14"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Carousel - Mobile */}
        <div className="sm:hidden relative w-full overflow-x-hidden px-2">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(calc(-${currentSlide} * (100% + 0.2rem)))`,
              gap: '0.5rem'
            }}
          >
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="flex-shrink-0 w-full"
                style={{ width: 'calc(100% - 0.5rem)' }}
              >
                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm h-full overflow-hidden transition-all duration-300 border-2 border-neutral-700 hover:border-amber-500 group">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      src={member.image}
                      style={{ color: 'transparent' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                  <div className="p-6 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-primary rounded transition-all duration-300 group-hover:w-24 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent"></div>
                    <h3 className="text-lg text-white font-bold mb-1 transition-colors duration-300 group-hover:text-amber-500">
                      <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-[2px] bg-amber-500 bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-16 group-hover:opacity-80"></span>
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-amber-500">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                      {member.bio}
                    </p>
                    <div className="flex justify-center gap-3 mt-4 opacity-80 transform translate-y-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
                      <a 
                        href="https://www.instagram.com/pmcbarbershop/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center transition-all duration-300 w-9 h-9 rounded-full bg-amber-100 text-amber-500 hover:bg-amber-500 hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-md" 
                        aria-label="instagram profile"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          width="14" 
                          height="14"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a 
                        href="https://www.instagram.com/pmcbarbershop/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center transition-all duration-300 w-9 h-9 rounded-full bg-amber-100 text-amber-500 hover:bg-amber-500 hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-md" 
                        aria-label="facebook profile"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          width="14" 
                          height="14"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                    </div>
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
            {teamMembers.map((_, index) => (
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

export default Team;