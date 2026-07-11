import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/mockData';

export default function Reviews() {
  const reviews = TESTIMONIALS.slice(0, 10);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-heading font-extrabold mb-4 uppercase tracking-tighter text-[#0F172A]"
          >
            Customer Reviews
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg mb-8"
          >
            Hear from satisfied customers who trusted us to redefine their drive.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-lg border border-gray-100"
          >
             <div className="flex">
               {[1,2,3,4,5].map(s => <Star key={s} className="text-[#D4AF37] fill-[#D4AF37]" size={24} />)}
             </div>
             <div className="text-[#0F172A] font-bold text-xl">4.9/5</div>
             <div className="text-gray-400 text-sm">Based on 10,000+ reviews</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              key={r.id}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-[#D4AF37]/10 transition-all border border-gray-50 relative overflow-hidden group"
            >
              <div className="absolute -top-6 -right-6 text-[#D4AF37]/5 group-hover:text-[#D4AF37]/10 transition-colors transform group-hover:scale-110 duration-500">
                <Quote size={120} />
              </div>
              
              <div className="flex items-center gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map(star => (
                   <Star key={star} size={16} className={star <= r.rating ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-200"} />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg relative z-10 font-light">"{r.text}"</p>
              
              <div className="border-t border-gray-100 pt-6 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0F172A] text-[#D4AF37] flex items-center justify-center font-bold text-sm">
                    {r.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-[#0F172A] mb-0.5">{r.name}</div>
                    <div className="text-xs text-[#D4AF37] uppercase tracking-widest font-bold">{r.city}</div>
                  </div>
                </div>
                <div className="text-xs text-[#0F172A] font-bold tracking-widest px-3 py-1.5 rounded-md bg-gray-100 uppercase">
                  {r.car}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
