import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Barberservice from './components/Barberservice';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Location from './components/Location';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'
import Whychoose from './components/Whychoose';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
   return (
    <main >
      <Navbar />
      <Hero />
      <About/>
      <ScrollToTopButton/>
      <Barberservice/>
      <Whychoose/>
      <Testimonials />
      <Services />
      <Gallery/>
      <Team/>
      <Location/>
      <Faq/>
      <Contact />
      <Footer /> 
    </main>
  )
}

export default App
