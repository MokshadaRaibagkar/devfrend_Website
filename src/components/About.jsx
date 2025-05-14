import React from 'react'
import { FaScissors } from 'react-icons/fa6'  
import { FaUserTie, FaAward } from 'react-icons/fa'
import haircut from '../assets/haircut.jpg';
import beard from '../assets/beard.jpg';
import premium from '../assets/premium.jpg';
import barber from '../assets/barber.jpg';

const About = () => {
  return (
   <section id="about" className="bg-neutral-800 relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-primary/5 z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] rounded-full bg-accent/5 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto mb-12 group text-center transition-all duration-500 animate-fadeInUp">
          <p className="text-primary font-medium mb-2 transition-all duration-300 group-hover:-translate-y-0.5 text-amber-500">
            Our Story
          </p>
          <h2 className="text-3xl text-white md:text-4xl font-bold text-foreground mb-4 relative inline-block">
            About Fama Barber Shop and Beauty Salon 
            <span className="bg-amber-500 absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80" />
          </h2>
          <p className="text-lg text-gray-500 text-muted-foreground mt-6 transition-all duration-500 group-hover:text-muted-foreground/90">
            Established in 2018, Fama Barber Shop and Beauty Salon has been providing premium grooming services to the men of Denton, TX.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with decoration */}
          <div className="transition-all duration-700 animate-slideIn delay-100">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl group max-w-[90%] md:max-w-full mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-70 transition-opacity duration-500 group-hover:opacity-60" />
              
              <img 
                src={barber}
                alt="PMC Barbershop" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl z-20 transition-all duration-500 group-hover:border-primary/20 opacity-0 group-hover:opacity-100" />
              <div className="absolute bottom-4 right-4 bg-primary text-white py-3 px-5 rounded-lg font-semibold text-lg shadow-lg z-10 rotate-3 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:rotate-0 bg-amber-500">
                5+ years
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6 md:text-left text-center">
            <p className="text-lg text-gray-500 leading-relaxed text-muted-foreground mb-6 relative md:pl-4 md:border-l-2 md:border-l-amber-500 border-primary transition-all duration-500 animate-fadeInUp delay-200">
             Established in 2018, Fama Barber Shop and Beauty Salon has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
            </p>

            <div className="transition-all duration-500 animate-fadeInUp delay-300">
              <div className="text-muted-foreground leading-7 p-6 rounded-lg relative bg-neutral-700 bg-muted/80 hover:bg-muted/90 transition-colors duration-300 hover:shadow-md group">
                <span className="text-amber-500 absolute top-0 left-4 text-5xl leading-none text-primary/40 font-serif transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:text-primary/60">
                  "
                </span>
                <p className="relative transition-all duration-300 group-hover:translate-x-1 text-gray-500 ">
                  We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles.
                  <span className="group-hover:bg-amber-500 absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-10 h-[1px] bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80" />
                </p>
                <div className="absolute bottom-4 left-6 right-6 h-px bg-primary/0 transition-all duration-500 group-hover:bg-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About