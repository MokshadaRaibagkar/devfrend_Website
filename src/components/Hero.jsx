import React from 'react';
import barbershop from  '../assets/barbershop.jpg';
const Hero = () => {
  return (
    <section id="hero"
      className="relative bg-neutral-900 py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background to-muted/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl group">
            <p className="text-amber-500 font-medium mb-3 transition-all duration-500 animate-fadeInUp opacity-100 delay-100">
              Premium Barber Services in Denton
            </p>
            <h1 className="text-3xl text-white md:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground mb-6 tracking-tight transition-all duration-500 group animate-fadeInUp opacity-100 delay-200">
              Classic Cuts, Modern Style{' '}
              <span className="text-amber-500 relative inline-block">
                Premium Barber Shop
                <span
                  className="absolute bottom-1 left-0 right-0 h-2 -z-10 rounded-md transition-all duration-500 transform bg-accent/40 group-hover:animate-pulse"
                  style={{ width: '100%', transform: 'scaleX(1)', transformOrigin: 'left bottom' }}
                ></span>
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full opacity-75 bg-accent/40 animate-pulse"></span>
              </span>
            </h1>
            <p className="text-lg text-gray-500 text-muted-foreground mb-8 transition-all duration-500 animate-fadeInUp opacity-100 delay-300">
              At Fama Barber Shop and Beauty Salon, we combine traditional barbering techniques with modern styling to give you the perfect look.
              Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
            </p>

            <div className="mb-8 transition-all duration-500 animate-fadeInUp opacity-100 delay-400 ">
              <div className="inline-flex items-center text-muted-foreground px-3 py-1.5 rounded-full border border-neutral-800 hover:border-amber-500 bg-background/50 backdrop-blur-sm cursor-pointer hover:border-primary/40 hover:bg-background/80 group hover:shadow-md transition-shadow duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin text-amber-500 mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-gray-500 group-hover:text-foreground group-hover:text-white transition-colors duration-300">Denton, TX</span>
              </div>
            </div>

            <div className="mt-8 transition-all duration-500 animate-fadeInUp opacity-100 delay-500">
              <div className="flex flex-wrap gap-4 flex-col group">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-white
                  hover:bg-amber-500 hover:border-amber-500 bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md flex items-center gap-1"
                  data-slot="button"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none opacity-0 group-hover:opacity-100"></span>
                  <span className="mr-2 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <span className="relative z-10  text-white transform group-hover:translate-x-0.5 group-hover:text-black transition-transform duration-300">Our Services</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-amber-500 rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg flex items-center gap-1"
                  data-slot="button"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r transform -translate-x-full  transition-transform duration-1000 ease-in-out pointer-events-none opacity-0 group-hover:opacity-100"></span>
                  <span className="mr-2 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <span className="relative z-10 text-white transform group-hover:translate-x-0.5 transition-transform duration-300">Book Now</span>
                </a>
              </div>
            </div>

          </div>

          <div className="relative flex items-center justify-center animate-floatIn filter drop-shadow-xl">
            <img
              alt="salon"
              className="w-full h-auto max-h-[600px] object-contain transition-transform hover:scale-105 duration-300"
              loading="eager"
              src={barbershop}
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-2/3 h-4 bg-black/10 rounded-full blur-md -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
