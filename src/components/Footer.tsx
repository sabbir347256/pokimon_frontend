
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import logo from '../assets/Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101828] text-gray-400 py-12 px-6 md:px-12 lg:px-20 ">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {/* Placeholder for Poke Pixels Logo */}
              <div className="text-[#4DA3FF] text-2xl font-black tracking-tighter italic flex flex-col leading-none">
                <img src={logo} alt="" />
              </div>
            </div>
            <p className="text-sm  tracking-wider max-w-70">
              Your trusted marketplace for Pokémon cards, booster packs, and collectibles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Browse Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News & Articles</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold mb-6">Customer Service</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

    
          <div>
            <h4 className="text-white font-bold mb-6">Stay Connected</h4>
            <p className="text-sm mb-4">Subscribe for exclusive offers!</p>
            <div className="flex gap-2 mb-6">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#1A2333] border border-gray-700 rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-500"
              />
              <button className="bg-[#1E6BFF] hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold transition-colors">
                Join
              </button>
            </div>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs   tracking-wider">
            © {currentYear} POKE PIXELS. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            <span className="text-xs">We Accept:</span>
            <div className="flex gap-2">
              {['VISA', 'MasterCard', 'PayPal', 'Amex'].map((brand) => (
                <span 
                  key={brand} 
                  className="bg-white text-[#0B1221] text-[10px] font-bold px-2 py-1 rounded-sm min-w-11.25 text-center"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;