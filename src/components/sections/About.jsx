import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="About Us" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Welcome to Local Web Solutions, a passionate team of digital experts dedicated to
              crafting exceptional web experiences. We specialize in web development.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our mission is to help businesses of all sizes thrive in the digital world. We combine
              creativity, technical expertise, and a client-centric approach to deliver solutions
              that drive results.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe in building long-term partnerships with our clients, understanding their unique
              needs, and exceeding their expectations.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg border border-white/10">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
              alt="Our Team"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;