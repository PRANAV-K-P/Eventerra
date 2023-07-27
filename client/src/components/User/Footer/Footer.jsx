import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-6 flex-shrink-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          <a href="/about" className="footer-link">About</a>
          <a href="/events" className="footer-link">Events</a>
          <a href="/upcoming-events" className="footer-link">Upcoming Events</a>
          <a href="/careers" className="footer-link">Careers</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        </div>
        <p className="text-center mt-4 text-sm">© {currentYear} Eventerra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
