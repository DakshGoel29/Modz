import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Sparkles, Mail, ShieldAlert } from 'lucide-react';
import { TARGET_KEYWORDS_LIST, POPULAR_CAR_MODELS } from '../../data/mockData';

export function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-gray-400 pt-16 pb-10 border-t border-[#1E293B]">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Student Project & Educational Showcase Notice */}
        <div className="bg-[#131B2E] border border-amber-500/30 rounded-2xl p-5 mb-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldAlert size={20} className="text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs md:text-sm font-semibold text-gray-200">
                Educational Showcase & Digital Marketing Case Study
              </p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                EliteModz is an academic project built for learning and practicing digital marketing, search engine optimization, and web architecture. This website is purely an informational inspiration showcase. We do not sell products, operate a physical retail store, or process online payments.
              </p>
            </div>
          </div>
          <Link 
            to="/faq" 
            className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline shrink-0"
          >
            Learn More In FAQ
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-heading font-bold text-2xl text-white tracking-widest uppercase">
                Elite<span className="text-[#D4AF37]">Modz</span>
              </span>
            </Link>
            <p className="text-xs md:text-sm leading-relaxed text-gray-400">
              India's dedicated automotive showcase for ambient light for car, car projector light, the best dash cam for car in India, custom seat covers, and dedicated accessories for Baleno, Brezza, Swift & Wagon R.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Facebook size={18} /></a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Youtube size={18} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider text-xs md:text-sm mb-6 text-[#D4AF37]">
              Popular Car Models
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              {POPULAR_CAR_MODELS.map(m => (
                <li key={m.name}>
                  <Link to={`/shop?model=${m.name}`} className="hover:text-[#D4AF37] transition-colors capitalize">
                    {m.tag}
                  </Link>
                </li>
              ))}
              <li><Link to="/shop?category=Lighting" className="hover:text-[#D4AF37] transition-colors">Ambient Light for Car Kits</Link></li>
              <li><Link to="/shop?category=Electronics" className="hover:text-[#D4AF37] transition-colors">Best Dash Cam for Car in India</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider text-xs md:text-sm mb-6 text-[#D4AF37]">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li><Link to="/shop" className="hover:text-[#D4AF37] transition-colors">Inspiration Catalog</Link></li>
              <li><Link to="/services" className="hover:text-[#D4AF37] transition-colors">Fitting Concepts & Guides</Link></li>
              <li><Link to="/blog" className="hover:text-[#D4AF37] transition-colors">Guides & Articles</Link></li>
              <li><Link to="/reviews" className="hover:text-[#D4AF37] transition-colors">Community Reviews</Link></li>
              <li><Link to="/faq" className="hover:text-[#D4AF37] transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">About Our Showcase</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider text-xs md:text-sm mb-6 text-[#D4AF37]">
              Project Information
            </h4>
            <ul className="space-y-4 text-xs md:text-sm">
              <li className="flex items-start gap-3">
                <Sparkles size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Student Digital Marketing & Automotive SEO Study Project</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                <span>project@elitemodz.example</span>
              </li>
              <li className="text-gray-500 text-xs leading-relaxed">
                Platform strictly for informational exploration and educational case study purposes across India.
              </li>
            </ul>
          </div>

        </div>

        {/* Targeted Keyword Cloud for Search Engines */}
        <div className="border-t border-[#1E293B] pt-8 pb-4 mb-4">
          <div className="text-xs text-gray-500 leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-1.5">
            <strong className="text-gray-400 mr-1">Popular Brand Searches:</strong>
            {TARGET_KEYWORDS_LIST.map((kw, idx, arr) => (
              <span key={kw} className="inline-flex items-center">
                <Link 
                  to={`/shop?search=${encodeURIComponent(kw)}`}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {kw}
                </Link>
                {idx < arr.length - 1 && <span className="ml-2 text-gray-700">|</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-[#1E293B] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} EliteModz. Non-commercial educational showcase. Car accessories reference guide India.
          </p>
          <div className="text-xs text-gray-500 font-medium">
            Academic SEO & Marketing Demonstration Project
          </div>
        </div>
      </div>
    </footer>
  );
}
