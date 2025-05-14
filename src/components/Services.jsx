import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Services = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
const handleNavigation = () => {
  const section = document.getElementById('contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
  const slides = [
    {
      title: "Classic Services",
      price: "25",
      popular: true,
      services: ["Men's Haircut", "Kids Haircut", "Senior Haircut", "Military Cut", "Basic Beard Trim", "Neck Cleanup"],
      buttonText: "Book Now"
    },
    {
      title: "Premium Services",
      price: "35",
      services: ["Haircut & Beard", "Hot Towel Shave", "Beard Shaping", "Color Camo", "Hair & Scalp Treatment", "Head Shave"],
      buttonText: "Book Now"
    },
    {
      title: "Packages",
      price: "50",
      services: ["The Works", "Father & Son", "Groom's Package", "Membership", "First-Time Special", "Loyalty Program"],
      buttonText: "Inquire"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="pricing" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-background bg-neutral-900">
      {/* Background elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-primary/5 z-0"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] rounded-full bg-accent/5 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <div className="max-w-3xl mx-auto group text-center mb-12">
          <p className="text-amber-500 font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">
            Quality Barbering at Fair Prices
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative inline-block text-white">
            Our Service Prices
            <span className="bg-amber-500 absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
          </h2>
          <p className="text-lg text-gray-500 text-muted-foreground mt-6 transition-all duration-500 group-hover:text-muted-foreground/90">
            Choose from our range of professional barbering services.
          </p>
        </div>

        <div>
        {/* Desktop View */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
            {/* Classic Services Card */}
            <div className="bg-card bg-neutral-700 text-card-foreground border-amber-500 gap-6 rounded-xl p-8 h-full flex flex-col transition-all duration-300 relative overflow-hidden border-2 border-primary shadow-lg -translate-y-2 scale-[1.02] z-10 hover:shadow-xl hover:-translate-y-3 hover:scale-[1.03] hover:z-20" style={{animationDelay: "0s"}}>
              <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 bg-gradient-to-r from-primary to-accent"></div>
              <div className="bg-amber-500 absolute top-0 right-8 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 font-semibold text-sm rounded-b-lg shadow-md transform transition-transform duration-300 hover:-translate-y-1">
                Most Popular
              </div>
              <h3 className="text-xl text-white font-bold text-foreground mb-2 relative inline-block">
                Classic Services
                <span className="absolute bottom-[-0.25rem] left-0 w-10 h-0.5 bg-primary rounded bg-amber-500 transition-all duration-300 group-hover:w-16"></span>
              </h3>
              <div className="flex items-baseline mb-6 group transition-all duration-300 hover:scale-105">
                <span className="text-2xl text-white font-semibold text-foreground mr-1">$</span>
                <span className="text-5xl text-amber-500 font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text">$25</span>
                <span className="text-sm text-gray-500 text-muted-foreground ml-1">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow text-white">
                {[
                  "Men's Haircut",
                  "Kids Haircut (12 & under)",
                  "Senior Haircut (65+)",
                  "Military/First Responder Cut",
                  "Basic Beard Trim",
                  "Neck & Line Cleanup (between cuts)"
                ].map((service, index) => (
                  <li key={index} className="flex items-center text-foreground text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-muted/80 hover:translate-x-1 -mx-3">
                    <div className="bg-primary bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3  flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg"  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
              <button onClick={handleNavigation} className="bg-amber-500 text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 has-[>svg]:px-3 mt-auto w-full py-6 font-semibold relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
                Book Now
              </button>
            </div>

            {/* Premium Services Card */}
            <div className="bg-card bg-neutral-700 text-card-foreground gap-6 rounded-xl shadow-sm p-8 h-full flex flex-col transition-all duration-300 relative overflow-hidden border-2 border-transparent hover:border-amber-500 hover:border-primary hover:shadow-xl hover:-translate-y-3 hover:scale-[1.03] hover:z-20" style={{animationDelay: "0.1s"}} >
              <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 bg-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent "></div>
              <h3 className="text-xl text-white font-bold text-foreground mb-2 relative inline-block">
                Premium Services
                <span className="bg-amber-500 absolute bottom-[-0.25rem] left-0 w-10 h-0.5 bg-primary rounded transition-all duration-300 group-hover:w-16"></span>
              </h3>
              <div className="flex items-baseline mb-6 group transition-all duration-300 hover:scale-105">
                <span className="text-2xl text-white font-semibold text-foreground mr-1">$</span>
                <span className="text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-amber-500">$35</span>
                <span className="text-sm text-muted-foreground ml-1 text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow text-white">
                {[
                  "Haircut & Beard Combo",
                  "Hot Towel Shave",
                  "Full Beard Shaping & Design",
                  "Color Camo (Gray Blending)",
                  "Hair & Scalp Treatment",
                  "Head Shave with Hot Towel"
                ].map((service, index) => (
                  <li key={index} className="flex items-center text-foreground text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-muted/80 hover:translate-x-1 -mx-3">
                    <div className="bg-primary bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" lucide lucide-check" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
              <button onClick={handleNavigation} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 has-[>svg]:px-3 mt-auto w-full py-6 font-semibold relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-amber-500">
                Book Now
              </button>
            </div>

            {/* Packages Card */}
            <div className="bg-card bg-neutral-700 text-card-foreground gap-6 rounded-xl shadow-sm p-8 h-full flex flex-col transition-all duration-300 relative overflow-hidden border-2 border-transparent hover:border-amber-500 hover:border-primary hover:shadow-xl hover:-translate-y-3 hover:scale-[1.03] hover:z-20" style={{animationDelay: "0.2s"}}>
              <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 bg-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent"></div>
              <h3 className="text-xl text-white font-bold text-foreground mb-2 relative inline-block">
                Packages
                <span className="bg-amber-500 absolute bottom-[-0.25rem] left-0 w-10 h-0.5 bg-primary rounded transition-all duration-300 group-hover:w-16"></span>
              </h3>
              <div className="flex items-baseline mb-6 group transition-all duration-300 hover:scale-105">
                <span className="text-2xl font-semibold text-foreground mr-1 text-white">$</span>
                <span className="text-5xl text-amber-500 font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text">$50</span>
                <span className="text-sm text-gray-500 text-muted-foreground ml-1">/mo</span>
              </div>
              <ul className="text-white space-y-3 mb-8 flex-grow">
                {[
                  "The Works (Cut, Shave, Treatment)",
                  "Father & Son Combo",
                  "Groom's Package",
                  "Monthly Membership (2 cuts/mo)",
                  "First-Time Client Special",
                  "Loyalty Program"
                ].map((service, index) => (
                  <li key={index} className="flex items-center text-foreground text-sm py-2 px-3 rounded-md transition-all duration-200 hover:bg-muted/80 hover:translate-x-1 -mx-3">
                    <div className="bg-primary bg-amber-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm transition-transform duration-200 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg"  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
              <button onClick={handleNavigation} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 has-[>svg]:px-3 mt-auto w-full py-6 font-semibold relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-amber-500">
                Inquire
              </button>
            </div>
          </div>
          
          <div className="sm:hidden relative w-full overflow-hidden">
                {/* Slides Wrapper */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    width: `${slides.length *33}%`
                    }}
                >
                    {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="bg-neutral-700 text-white rounded-xl p-6 h-full border-2 border-neutral-700 hover:border-amber-500">
                        {slide.popular && (
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent" />
                        )}
                        <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                        <div className="flex items-baseline mb-4">
                            <span className="text-2xl font-semibold mr-1">$</span>
                            <span className="text-5xl text-amber-500 font-extrabold">{slide.price}</span>
                            <span className="text-sm text-gray-400">/mo</span>
                        </div>
                        <ul className="space-y-2 mb-6">
                            {slide.services.map((s, i) => (
                            <li key={i} className="flex items-center text-sm">
                                <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                <svg width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 6 9 17l-5-5" />
                                </svg>
                                </div>
                                {s}
                            </li>
                            ))}
                        </ul>
                        <button
                            onClick={handleNavigation}
                            className="bg-amber-500 w-full py-2 rounded-md font-semibold shadow-md"
                        >
                            {slide.buttonText}
                        </button>
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
                {/* Dots */}
                <div className="flex justify-center mt-4 gap-2">
                    {slides.map((_, idx) => (
                    <div
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
                        currentSlide === idx ? 'w-6 bg-amber-500' : 'w-3 bg-gray-400'
                        }`}
                    />
                    ))}
                </div>
                </div>

      </div>
      </div>
    </section>
  );
}

export default Services;