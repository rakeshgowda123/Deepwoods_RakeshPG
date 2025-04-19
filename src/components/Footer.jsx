import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 Environmental Awareness Campaign. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="/contact" className="hover:text-green-300 transition-colors">Contact</a>
            <a href="/campaign" className="hover:text-green-300 transition-colors">Campaign</a>
            <a href="/solutions" className="hover:text-green-300 transition-colors">Solutions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;