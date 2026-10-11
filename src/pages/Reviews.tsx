import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS, POPULAR_CAR_MODELS } from '../data/mockData';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Link } from 'react-router-dom';

export default function Reviews() {
  const reviews = TESTIMONIALS;

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-24">
      <SEO 
        title="Customer Reviews: Car Accessories & Upgrades | EliteModz"
        description="Read real customer reviews on ambient light for car, car projector light, best dash cam for car in India, custom seat covers & accessories for Baleno & Brezza."
        canonicalPath="/reviews"
      />
      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: 'Reviews' }]} className="mb-6" />
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-extrabold mb-4 uppercase tracking-wider text-[#0F172A]"
          >
            Verified Customer Reviews
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed"
          >
            Real feedback from car owners who elevated their driving experience with our <strong>ambient light for car</strong>, <strong>seat cover for car</strong>, <strong>best dash cam for car in India</strong>, and dedicated model accessories.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-4 bg-white px-8 py-3.5 rounded-full shadow-md border border-gray-100"
          >
             <div className="flex">
               {[1,2,3,4,5].map(s => <Star key={s} className="text-[#D4AF37] fill-[#D4AF37]" size={20} />)}
             </div>
             <div className="text-[#0F172A] font-extrabold text-lg">4.9 / 5.0</div>
             <div className="text-gray-400 text-xs font-medium">Over 50,000+ Happy Drivers in India</div>
          </motion.div>
        </div>

        {/* Model tags filter reminder */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {POPULAR_CAR_MODELS.map(m => (
            <Link
              key={m.name}
              to={`/shop?model=${m.name}`}
              className="text-xs bg-white border border-gray-200 hover:border-[#D4AF37] text-gray-700 px-4 py-2 rounded-full font-medium transition-all shadow-sm"
            >
              Reviews for {m.tag}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              key={r.id}
              className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} size={16} fill="#D4AF37" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={12} /> Verified Purchase
                  </span>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  "{r.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img 
                  src={r.avatar} 
                  alt={r.name} 
                  className="w-11 h-11 rounded-full object-cover border border-[#D4AF37]" 
                />
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#0F172A]">{r.name}</h4>
                  <div className="text-xs text-gray-400">
                    {r.car} • {r.city}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
