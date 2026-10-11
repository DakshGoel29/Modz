import { motion } from 'motion/react';
import { SERVICES, POPULAR_CAR_MODELS } from '../data/mockData';
import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Link } from 'react-router-dom';

export default function Services() {
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Car Accessories Fitment and Installation Guides",
    "description": "Guides for ambient light for car, car projector light, dash cam hardwiring, and custom seat covers for Baleno, Brezza, Swift, and Wagon R.",
    "itemListElement": SERVICES.map((service, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": service.name,
      "description": service.description
    }))
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <SEO 
        title="Car Accessories & Fitment Guides | EliteModz"
        description="Installation guides for ambient light for car, car projector light, dash cam setups & custom seat covers for Baleno, Brezza, Swift & Wagon R."
        canonicalPath="/services"
        schema={serviceListSchema}
      />
      {/* Header */}
      <div className="bg-[#0F172A] relative py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <ImagePlaceholder src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="EliteModz Car Customization & Installation Showcase" fallbackText="Services" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles size={14} /> Non-Commercial Educational Showcase & Guides
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 uppercase tracking-wider">
            Car Customization & Fitment Guides
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technical installation walkthroughs for <strong>ambient light for car</strong>, <strong>car projector light</strong>, the <strong>best dash cam for car in India</strong>, custom <strong>seat cover for car</strong>, <strong>sun shades for car</strong>, and <strong>exterior car accessories</strong> for <strong>Baleno</strong>, <strong>Brezza</strong>, <strong>Swift</strong>, and <strong>Wagon R</strong>.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-6 relative z-20">
        <div className="max-w-5xl mx-auto mb-6">
          <Breadcrumbs items={[{ label: 'Fitment Guides' }]} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              key={service.id}
              className="border border-gray-100 rounded-[2rem] p-8 hover:shadow-2xl transition-all duration-300 hover:border-[#D4AF37]/40 group bg-white relative overflow-hidden flex flex-col shadow-sm"
            >
              <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 relative">
                <ImagePlaceholder 
                  src={service.image} 
                  alt={`${service.name} - Fitment Architecture Guide`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                  fallbackText={service.name} 
                />
              </div>

              <h3 className="text-2xl font-heading font-bold text-[#0F172A] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-gray-500 mb-6 flex-grow leading-relaxed text-sm">
                {service.description}
              </p>
              
              <div className="mb-6 p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 group-hover:border-[#D4AF37]/20 transition-colors">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1 font-bold">Fitment Specification</span>
                <span className="text-sm font-heading font-bold text-[#0F172A]">
                  Zero-Wire Splicing & Plug-and-Play Couplers
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  '100% Zero-Wire-Cut Fuse Tap Installation',
                  'Vehicle-Specific Coupler Fitment',
                  'Warranty-Safe Electrical Architecture'
                ].map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-xs md:text-sm text-gray-600 font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#0F172A] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors">
                      <CheckCircle2 size={12} className="text-white group-hover:text-black" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="mt-auto">
                <button className="w-full bg-[#0F172A] text-white py-3.5 rounded-full font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 group/btn hover:bg-[#D4AF37] hover:text-black transition-colors">
                  <span>Inquire About Fitment</span>
                  <ChevronRight size={16} />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Vehicle Compatibility Banner */}
        <div className="mt-20 p-8 rounded-3xl bg-[#F8FAFC] border border-gray-200 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-heading font-bold text-[#0F172A] mb-2">
            Specialized Fitment Specs for Top Models
          </h3>
          <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto mb-6">
            We document custom wiring harness diagrams and mounting brackets specifically for Maruti Baleno car accessories, Maruti Brezza car accessories, Maruti Swift car accessories, and Maruti Wagon R car accessories.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {POPULAR_CAR_MODELS.map(m => (
              <Link
                key={m.name}
                to={`/shop?model=${m.name}`}
                className="bg-white border border-gray-200 hover:border-[#D4AF37] px-4 py-2 rounded-xl text-xs font-semibold text-gray-700 hover:text-[#0F172A] transition-all"
              >
                {m.tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-24 pt-20 pb-24 bg-[#050505] text-white rounded-[3rem] px-8 md:px-16 shadow-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              The EliteModz <span className="text-[#D4AF37]">Installation Standard</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Every upgrade guide—from ambient light for car to dash cameras and projector headlights—is researched and documented for safe aftermarket execution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Inspection', desc: 'Pre-install voltage check and vehicle trim safety mapping.' },
              { num: '02', title: 'Coupler Wiring', desc: 'Plug-and-play OEM-grade couplers without slicing original wires.' },
              { num: '03', title: 'Precision Fit', desc: 'Laser-aligned projector headlamps and seamless acrylic light tucking.' },
              { num: '04', title: 'Road Testing', desc: 'Optical beam check and full mobile application sync verification.' }
            ].map((step, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37] text-black font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h4 className="font-heading font-semibold text-lg text-white mb-2">{step.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
