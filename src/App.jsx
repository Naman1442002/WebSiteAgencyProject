import React, { useState, useEffect, useRef } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);
  const observer = useRef(null);
  const sectionRefs = useRef([]);

  const scrollToSection = (sectionId) => {
    setIsNavigating(true);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setIsNavigating(false);
        setActiveSection(sectionId);
      }, 800);
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 0.01,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.current?.observe(section);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    sectionRefs.current = [
      document.getElementById('home'),
      document.getElementById('services'),
      document.getElementById('projects'),
      document.getElementById('about'),
      document.getElementById('contact')
    ];

    document.title = "Local Web Solutions - Professional Web Services";
    
    const link = document.querySelector("link[rel='icon']");
    if (link) {
      link.setAttribute("href", "/vite.svg");
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen">
      <Header 
        activeSection={activeSection}
        isNavigating={isNavigating}
        scrollToSection={scrollToSection}
      />
      
      <main className="flex-grow pt-20">
        <Hero scrollToSection={scrollToSection} />
        <Services />
        <Projects scrollToSection={scrollToSection} />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;