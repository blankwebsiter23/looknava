import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Looknava
            </h3>
            <p className="text-gray-400 mb-4">
              Elevate your style with our innovative clothing designs that merge fashion and technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/new-arrivals" className="text-gray-400 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/category/men" className="text-gray-400 hover:text-white transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/category/women" className="text-gray-400 hover:text-white transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-400 hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
              <li>
                <Link to="/lookbook" className="text-gray-400 hover:text-white transition-colors">
                  Lookbook
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help & Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Help & Info</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/customer-service" className="text-gray-400 hover:text-white transition-colors">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-400 hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Fashion Avenue, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-purple-400 mr-2" />
                <a href="tel:+12125551234" className="text-gray-400 hover:text-white transition-colors">
                  +1 (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-400 mr-2" />
                <a href="mailto:info@looknava.com" className="text-gray-400 hover:text-white transition-colors">
                  info@looknava.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="md:flex justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold text-lg mb-2">Subscribe to our newsletter</h4>
              <p className="text-gray-400">
                Get the latest updates on new products and upcoming sales
              </p>
            </div>
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow min-w-0 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-4 py-2 rounded-r-md font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Looknava. All rights reserved.</p>
          <p className="mt-1">
            Designed with passion for fashion forward individuals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;