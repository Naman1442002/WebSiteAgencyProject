import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        &copy; {new Date().getFullYear()} Local Web Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;