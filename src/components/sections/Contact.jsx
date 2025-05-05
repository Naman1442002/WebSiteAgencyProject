import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Contact Us" />
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/10">
          <p className="text-gray-300 text-lg text-center mb-8">
            Ready to get started? Contact us today for a free consultation.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;