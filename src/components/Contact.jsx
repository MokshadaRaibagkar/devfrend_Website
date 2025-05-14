import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    service: false,
    date: false,
    message: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      service: !formData.service,
      date: !formData.date,
      message: !formData.message
    };
    
    setErrors(newErrors);
    
    return !Object.values(newErrors).some(error => error);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
      alert('Form submitted successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        service: '',
        date: '',
        message: ''
      });
    } else {
      // Form is invalid, errors are already set
      console.log('Form validation failed');
    }
  };

  return (
    <section id="contact" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto group text-center mb-12">
          <p className="text-amber-500 text-primary font-medium mb-2 transition-all duration-300 group-hover:translate-y-[-2px]">Book Your Appointment</p>
          <h2 className="text-3xl text-white md:text-4xl font-bold text-foreground mb-4 relative inline-block">
            Contact Us
            <span className="bg-amber-500 absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-gradient-to-r from-primary to-accent rounded-md transition-all duration-500 group-hover:w-full group-hover:opacity-80"></span>
          </h2>
          <p className="text-lg text-gray-500 text-muted-foreground mt-6 transition-all duration-500 group-hover:text-muted-foreground/90">Ready for a fresh look? Book your appointment today or contact us for any questions.</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* LEFT SIDE: CONTACT INFO */}
        <div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm md:w-1/2 p-6 border-2 border-neutral-700 transition-all duration-300 hover:border-amber-500 hover:shadow-lg hover:-translate-y-2">
                  <div data-slot="card-content" className=" p-0">
                    <div className="space-y-6">
                      {/* Address */}
                      <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-neutral-700 hover:translate-x-2 -mx-3">
                        <div className="w-9 h-9 rounded-full bg-primary bg-amber-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-map-pin text-white"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <div>
                          <h4 className=" text-white font-semibold text-foreground mb-1">Address</h4>
                          <p className="text-gray-500 text-muted-foreground text-sm leading-relaxed">518 Acme St unit 101, Denton, TX 76205, United States</p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-neutral-700 hover:translate-x-2 -mx-3">
                        <div className="w-9 h-9 rounded-full bg-primary bg-amber-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-phone text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </div>
                        <div>
                          <h4 className=" text-white font-semibold text-foreground mb-1">Phone</h4>
                          <p className="text-gray-500  text-muted-foreground text-sm leading-relaxed">+19408081569</p>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-neutral-700 hover:translate-x-2 -mx-3">
                        <div className="w-9 h-9 rounded-full bg-amber-500 bg-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-[0_4px_8px_rgba(var(--primary),0.4)] transition-transform duration-300 hover:scale-110">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-clock text-white"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        </div>
                        <div>
                          <h4 className=" text-white font-semibold text-foreground mb-1">Business Hours</h4>
                          <p className="text-gray-500 text-muted-foreground text-sm leading-relaxed">Mon-Fri: 9 AM - 7 PM<br />Sat: 9 AM - 5 PM<br />Sun: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>

        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-sm md:w-1/2 p-6 border-2 border-neutral-700 transition-all duration-300 hover:border-amber-500 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="p-0">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
                <label htmlFor="name-form-item" className="text-sm font-semibold group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 group-hover:text-amber-500">
                  Your Name {errors.name && <span className="text-red-500">*</span>}
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name-form-item" 
                  placeholder="Enter your full name" 
                  className={`border ${errors.name ? 'border-red-500' : 'border-white'} px-3 py-2 rounded-md w-full focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all group-hover:border-amber-500`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">Please enter your name</p>}
              </div>

              {/* Email */}
              <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
                <label htmlFor="email-form-item" className="text-sm font-semibold group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 group-hover:text-amber-500">
                  Your Email {errors.email && <span className="text-red-500">*</span>}
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email-form-item" 
                  placeholder="Enter your email address" 
                  className={`border ${errors.email ? 'border-red-500' : 'border-white'} px-3 py-2 rounded-md w-full focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all group-hover:border-amber-500`}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">Please enter a valid email</p>}
              </div>
              
              {/* Select Service */}
              <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
                <label htmlFor="service" className="flex items-center group-hover:text-amber-500 gap-2 text-sm leading-none select-none font-semibold transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                  Service Interested In {errors.service && <span className="text-red-500">*</span>}
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    className={`flex h-10 w-full rounded-md border ${errors.service ? 'border-red-500' : 'border-white'} group-hover:border-amber-500 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircut</option>
                    <option value="beard">Beard Trim</option>
                    <option value="shave">Shave</option>
                  </select>
                </div>
                {errors.service && <p className="text-red-500 text-xs mt-1">Please select a service</p>}
              </div>

              {/* Preferred Date */}
              <div data-slot="form-item" className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
                <label
                  data-slot="form-label"
                  className="flex items-center gap-2 text-sm leading-none select-none font-semibold transition-all duration-300 group-hover:text-amber-500 group-hover:translate-x-1"
                  htmlFor="r1g-form-item"
                >
                  Preferred Date {errors.date && <span className="text-red-500">*</span>}
                </label>
                <input
                  data-slot="form-control"
                  className={`file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 ${errors.date ? 'border-red-500' : 'border-white'} flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-all duration-300 focus:border-primary focus:shadow-md group-hover:border-amber-500`}
                  id="r1g-form-item"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                {errors.date && <p className="text-red-500 text-xs mt-1">Please select a date</p>}
              </div>

              {/* Message */}
              <div className="grid gap-2 group transition-all duration-300 hover:-translate-y-1">
                <label htmlFor="message-form-item" className="text-sm font-semibold group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 group-hover:text-amber-500">
                  Your Message {errors.message && <span className="text-red-500">*</span>}
                </label>
                <textarea 
                  name="message" 
                  id="message-form-item" 
                  placeholder="Enter your message" 
                  rows="4" 
                  className={`border ${errors.message ? 'border-red-500' : 'border-white'} px-3 py-2 rounded-md w-full focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all group-hover:border-amber-500`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">Please enter your message</p>}
              </div>

              {/* Submit */}
              <button 
                type="submit" 
                className="w-full bg-primary bg-amber-500 hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* CTA section remains the same */}
      <section id="cta" className="relative lg:py-32 overflow-hidden py-16 md:py-24 bg-primary text-white bg-amber-500 mt-6">
        {/* ... (CTA content remains the same) ... */}
      </section>
    </section>
  );
}

export default Contact;