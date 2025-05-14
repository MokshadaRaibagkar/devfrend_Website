import { useState } from 'react';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, name: 'Home', link: '#hero' },
    { id: 2, name: 'About', link: '#about' },
    { id: 3, name: 'Services', link: '#services' },
    { id: 4, name: 'Gallery', link: '#gallery' },
    { id: 5, name: 'Testimonials', link: '#testimonials' },
    { id: 6, name: 'Contact', link: '#contact' },
  ];

  return (
    <div className="fixed w-full h-20 bg-black text-white shadow-lg z-50">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="/" className='text-md text-amber-500'>Fama Barber Shop and Beauty Salon
          </a>
        </div>

        {/* Center: Navigation Links (desktop only) */}
        <ul className="hidden md:flex justify-center flex-1 space-x-8 text-sm md:text-base">
          {links.map(({ id, name, link }) => (
            <li key={id}>
              <a
                href={link}
                className="hover:text-amber-500 transition duration-300"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Phone and Button (desktop only) */}
        <div className="hidden md:flex items-center space-x-3 text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-amber-500" />
            <span className="text-white">+91 98765 43210</span>
          </div>
          <a
            href="#contact"
            className="bg-amber-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded hover:bg-amber-600 transition duration-300"
          >
            Book an Appointment
          </a>
        </div>

        {/* Right: Hamburger (mobile only) */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden cursor-pointer z-10"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
  <ul className="md:hidden flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-black text-white z-50">
    {links.map(({ id, name, link }) => (
      <li key={id} className="px-4 py-6 text-2xl">
        <a
          href={link}
          onClick={() => setNav(false)}
          className="hover:text-amber-500 transition duration-300"
        >
          {name}
        </a>
      </li>
    ))}
    <li className="flex items-center space-x-2 mt-4">
      <FaPhone className="text-amber-500" />
      <span className="text-white text-lg">+91 98765 43210</span>
    </li>
    <li className="mt-4">
      <a
        href="#contact"
        onClick={() => setNav(false)}
        className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-300"
      >
        Book an Appointment
      </a>
    </li>
  </ul>
)}
      </div>
    </div>
  );
};

export default Navbar;
