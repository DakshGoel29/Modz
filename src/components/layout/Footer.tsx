import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-gray-400 pt-20 pb-10 border-t border-[#1E293B]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
          
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-heading font-bold text-2xl text-white tracking-widest uppercase">
                Elite<span className="text-[#D4AF37]">Modz</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              India's trusted destination for premium automotive accessories, custom styling, 
              and professional detailing solutions. Transforming every drive into an experience.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">Our Story</Link></li>
              <li><Link to="/shop" className="hover:text-[#D4AF37] transition-colors">Shop Accessories</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">Premium Services</Link></li>
              <li><Link to="/reviews" className="hover:text-[#D4AF37] transition-colors">Customer Reviews</Link></li>
              <li><Link to="/careers" className="hover:text-[#D4AF37] transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="hover:text-[#D4AF37] transition-colors">FAQ</Link></li>
              <li><Link to="/#shipping" className="hover:text-[#D4AF37] transition-colors">Shipping Policy</Link></li>
              <li><Link to="/#returns" className="hover:text-[#D4AF37] transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/#privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#D4AF37] shrink-0 mt-1" />
                <span>Sector 44,<br/>Gurugram, Haryana 122003</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#D4AF37] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#D4AF37] shrink-0" />
                <span>support@elitemodz.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#1E293B] pt-8 pb-4 mb-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-400">Popular Searches:</strong> car accessories, car lights, car decoration, car dashboard accessories, car hanging accessories, car interior accessories, baleno car accessories, brezza car accessories, car perfume, car seat cover, car shades, car dash cam, EliteModz Gurugram, car accessories online, best car accessories.
          </p>
        </div>

        <div className="border-t border-[#1E293B] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} EliteModz. All rights reserved.
          </p>
          <div className="flex gap-4 items-center">
            <span className="font-heading font-bold text-xl italic text-gray-500 hover:text-white transition-colors">VISA</span>
            <span className="font-heading font-bold text-xl italic text-gray-500 hover:text-white transition-colors">mastercard</span>
            <span className="font-heading font-bold text-xl italic text-gray-500 hover:text-white transition-colors">RuPay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
