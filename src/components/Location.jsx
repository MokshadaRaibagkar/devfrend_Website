import React from 'react'

const Location = () => {
  return (
    <section id="location" className="bg-neutral-800
    relative py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
  {/* Background circles */}
  <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-primary/5 z-0"></div>
  <div className="absolute bottom-[-10%] left-[-5%] w-[250px] h-[250px] rounded-full bg-accent/5 z-0"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-12 animate-fadeIn">
      <p className="text-primary text-amber-500 font-medium mb-2">Visit Our Shop</p>
      <h2 className="text-3xl text-white md:text-4xl font-bold text-foreground mb-4 relative inline-block">
        Our Location
        <span className="bg-amber-500 absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-primary to-accent rounded-md"></span>
      </h2>
      <p className="text-lg text-gray-500 text-muted-foreground mt-6">Conveniently located in Denton, TX:</p>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
      {/* Map Placeholder */}
      <div className=" bg-neutral-700 relative h-96 md:h-[400px] rounded-xl overflow-hidden shadow-md border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeIn">
        <div className="bg-muted w-full h-full flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-map-pin text-muted-foreground/50" 
            aria-hidden="true"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-xl"></div>
      </div>

      {/* Contact Card */}
      <div className="flex flex-col gap-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <div className="bg-card bg-neutral-700 text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="px-6 pb-2">
            <h3 className=" text-white text-xl font-semibold text-foreground relative inline-block mb-6">
              Contact Information
              <span className="bg-amber-500 absolute bottom-[-0.5rem] left-0 w-12 h-[2px] bg-primary rounded-md"></span>
            </h3>
          </div>
          <div className="px-6">
            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-muted/80 -mx-3">
                <div className="bg-amber-500 w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-map-pin text-white" 
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground text-gray-500 text-sm leading-relaxed">
                    518 Acme St unit 101, Denton, TX 76205, United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-muted/80 -mx-3">
                <div className="bg-amber-500 w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-phone text-white" 
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-foreground mb-1">Phone</h4>
                  <p className=" text-gray-500 text-muted-foreground text-sm leading-relaxed">+19408081569</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=518%20Acme%20St%20unit%20101%2C%20Denton%2C%20TX%2076205%2C%20United%20States" 
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-amber-500 text-white justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:ring-[3px] bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 flex items-center gap-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-navigation" 
                  aria-hidden="true"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
                Get Directions
              </a>
              <a 
                href="tel:+19408081569" 
                className="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 flex items-center gap-2 hover:bg-amber-500"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-phone" 
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Location
