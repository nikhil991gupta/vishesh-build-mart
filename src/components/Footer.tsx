
import { Link } from 'react-router-dom';
import { Building, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building className="h-6 w-6 text-orange-500" />
              <h3 className="text-lg font-bold">Vishesh Build Mart</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for premium building materials since 1990. 
              Quality, reliability, and excellence in every project.
            </p>
            <div className="flex items-center space-x-2 text-orange-400">
              <span className="font-semibold">Since 1990</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-orange-400">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-orange-400">Our Projects</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-orange-400">FAQ</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-orange-400">Testimonials</Link></li>
              <li><Link to="/store-locator" className="text-gray-300 hover:text-orange-400">Store Locator</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Product Categories</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Cement & TMT Rebars</li>
              <li>MS Structures</li>
              <li>Faucets & Sanitaryware</li>
              <li>Water Tanks</li>
              <li>Waterproofing</li>
              <li>Paint & Adhesives</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <div className="text-gray-300">
                  <p>Main Store Address</p>
                  <p>Bilaspur, Chhattisgarh</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">info@visheshbuildmart.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Vishesh Build Mart. All rights reserved. | Founded by Mr. Pawan Ajmani
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Led by Mr. Vishesh Ajmani & CA Vishal Ajmani
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
