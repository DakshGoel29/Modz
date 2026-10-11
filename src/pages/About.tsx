import { motion } from 'motion/react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { POPULAR_CAR_MODELS } from '../data/mockData';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Wrench, HeartHandshake, ShieldAlert } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <SEO 
        title="About EliteModz: Car Accessories & Styling Hub India"
        description="Discover EliteModz, an educational showcase for ambient light for car, car projector light, best dash cam for car in India & custom seat covers."
        canonicalPath="/about"
      />
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: 'About Us' }]} className="mb-4" />
        
        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden min-h-[480px] flex items-center justify-center mb-20 lg:min-h-[550px] shadow-2xl">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="EliteModz Automotive Styling & Educational Showcase"
          />
          <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
              <Sparkles size={14} /> Educational Showcase & Automotive Styling Hub
            </div>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 tracking-tight leading-tight"
            >
              Driven By Passion.<br/>Engineered For India.
            </motion.h1>
            <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              Curating architectural insights on ambient lighting, high-throw optical headlights, high-end dash cams, and custom-tailored interior comfort accessories for Indian car owners.
            </p>
          </div>
        </div>

        {/* Academic Project Disclaimer */}
        <div className="max-w-4xl mx-auto mb-16 p-6 rounded-3xl bg-amber-50 border border-amber-200 flex items-start gap-4 text-amber-900">
          <ShieldAlert size={22} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs md:text-sm leading-relaxed">
            <strong className="text-amber-950 font-bold block mb-1">Non-Commercial Student Demonstration Project</strong>
            EliteModz is an academic educational portfolio created for studying digital marketing strategies, web design, and search engine optimization in the automotive accessory vertical. We do not sell physical products, operate a commercial storefront, or process financial transactions. All content is intended for research, knowledge sharing, and styling inspiration.
          </div>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-4">Our Mission & Concept</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] mb-6">
            An Informational Hub Built Around Automotive Passion
          </h3>
          <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-6 font-normal">
            EliteModz was established to explore how Indian car enthusiasts research and personalize their vehicles with warranty-safe, plug-and-play accessories. Rather than relying on generic mass-market components, we document durable solutions tailored to Indian roads, climate, and driving dynamics.
          </p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Today, EliteModz acts as a comprehensive reference guide for high-grade <strong>ambient light for car</strong>, optically aligned <strong>car projector light</strong> units, the <strong>best dash cam for car in India</strong>, luxurious <strong>seat cover for car</strong> kits, UV-blocking magnetic <strong>sun shades for car</strong>, solar <strong>best car perfume</strong>, and specialized <strong>exterior car accessories</strong> for <strong>Baleno</strong>, <strong>Brezza</strong>, <strong>Swift</strong>, and <strong>Wagon R</strong>.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center hover:border-[#D4AF37]/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-[#D4AF37] flex items-center justify-center mx-auto mb-6">
              <Shield size={28} />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#0F172A] mb-2">Zero-Splicing Principles</h4>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              Every light and electronics accessory guide emphasizes OEM fuse taps and coupler connections, promoting manufacturer warranty safety.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center hover:border-[#D4AF37]/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-[#D4AF37] flex items-center justify-center mx-auto mb-6">
              <Wrench size={28} />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#0F172A] mb-2">Laser-Measured Tailoring</h4>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              Seat covers and sun shades feature 3D laser-scanned specifications for millimeter precision in Swift, Baleno, Brezza, and Wagon R.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 text-center hover:border-[#D4AF37]/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0F172A] text-[#D4AF37] flex items-center justify-center mx-auto mb-6">
              <HeartHandshake size={28} />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#0F172A] mb-2">All-India Car Community</h4>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              Connecting automotive enthusiasts and DIY installers with verified buying benchmarks, troubleshooting tips, and styling ideas.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-[#0F172A] text-white rounded-3xl p-10 md:p-16 mb-24 relative overflow-hidden group">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-16 text-center tracking-tight">
            Journey of <span className="text-[#D4AF37]">The Project</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { year: '2024', event: 'Digital Showcase Inception' },
              { year: '2025', event: 'Ambient Light & Camera Guides' },
              { year: '2025', event: 'Maruti Model Collections' },
              { year: '2026', event: '50k+ Community Readers' },
            ].map((milestone, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-heading font-bold text-[#D4AF37] mb-2">
                  {milestone.year}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                  {milestone.event}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Specific Models */}
        <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-[#0F172A] mb-3">
            Ready to Discover Accessories for Your Vehicle?
          </h3>
          <p className="text-sm text-gray-600 mb-8 max-w-xl mx-auto">
            Browse our dedicated collections for Baleno car accessories, Brezza car accessories, Swift car accessories, and Wagon R car accessories.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {POPULAR_CAR_MODELS.map(m => (
              <Link
                key={m.name}
                to={`/shop?model=${m.name}`}
                className="bg-white border border-gray-300 hover:border-[#D4AF37] text-[#0F172A] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#0F172A] hover:text-white transition-all shadow-sm"
              >
                {m.tag}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
