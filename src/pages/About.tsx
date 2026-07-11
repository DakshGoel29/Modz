import { motion } from 'motion/react';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';

export default function About() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        
        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center mb-24 lg:min-h-[600px] shadow-2xl">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Premium sports car in garage"
          />
          <div className="relative z-20 text-center text-white px-4">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-6 tracking-tighter"
            >
              Driven By Passion.<br/>Powered By Innovation.
            </motion.h1>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-semibold mb-6">Our Story</h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Founded in 2018, EliteModz started with a simple mission: to bring premium automotive accessories and customization solutions to car enthusiasts across India.
            What began as a small garage operation offering the best car accessories in Gurugram has grown into one of India's fastest-growing automotive lifestyle brands. Today, we are the go-to destination for car accessories online, from bespoke car decoration and luxury car seat covers to cutting-edge car dash cams and car shades.
          </p>
        </div>

        {/* Timeline */}
        <div className="bg-[#0F172A] text-white rounded-3xl p-12 md:p-20 mb-24 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF3715_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 opacity-5 pointer-events-none"
          >
            <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle><line x1="12" y1="2" x2="12" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line></svg>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-extrabold mb-20 text-center tracking-tight"
          >
            Journey of <span className="text-[#D4AF37]">Excellence</span>
          </motion.h2>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-[4.5rem] left-0 right-0 h-[1px] bg-white/20 hidden md:block">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#D4AF37] to-white"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {[
                { year: '2018', event: 'Founded' },
                { year: '2019', event: 'First 1k Customers' },
                { year: '2021', event: 'PAN India Expansion' },
                { year: '2023', event: '50k+ Orders' },
                { year: '2025', event: 'Smart Tech Launch' },
              ].map((milestone, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  key={i} 
                  className="text-center relative group/item"
                >
                  <motion.div 
                    className="text-4xl font-heading font-bold text-[#D4AF37] mb-6 opacity-40 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300"
                  >
                    {milestone.year}
                  </motion.div>
                  <div className="w-6 h-6 rounded-full mx-auto mb-6 relative z-10 bg-[#0F172A] border-2 border-[#D4AF37] flex items-center justify-center group-hover/item:shadow-[0_0_15px_#D4AF37]">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.3 }}
                      className="w-2 h-2 bg-white rounded-full group-hover/item:bg-[#D4AF37] transition-colors"
                    />
                  </div>
                  <div className="text-sm font-medium tracking-widest uppercase text-gray-400 group-hover/item:text-white transition-colors duration-300">
                    {milestone.event}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team / Visionaries (Dynamic Slider) */}
        <div className="text-center mb-16 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-semibold mb-3">The Minds Behind EliteModz</h2>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 text-[#0F172A] tracking-tight">The Visionaries</h2>
          </motion.div>
          
          <div className="max-w-6xl mx-auto relative px-4 md:px-12">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-8 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              >
                {/* Double the array for seamless infinite loop */}
                {[
                  { name: 'Daksh Goel', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
                  { name: 'Karan Bedi', role: 'Head Of Operations', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
                  { name: 'Riya Kapoor', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
                  { name: 'Siddharth Jain', role: 'Technology Lead', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
                  { name: 'Daksh Goel', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
                  { name: 'Karan Bedi', role: 'Head Of Operations', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
                  { name: 'Riya Kapoor', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
                  { name: 'Siddharth Jain', role: 'Technology Lead', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
                ].map((member, i) => (
                  <div key={i} className="min-w-[280px] md:min-w-[320px] shrink-0 group overflow-hidden rounded-3xl bg-white border border-gray-100 p-10 text-center hover:border-[#D4AF37]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#0F172A] to-gray-700 text-white flex items-center justify-center text-3xl font-bold font-heading mx-auto mb-8 shadow-xl relative group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {member.name.split(' ').map(n => n[0]).join('').substring(0,2)}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-[#0F172A] group-hover:text-[#D4AF37] transition-colors">{member.name}</h3>
                    <p className="text-gray-500 font-semibold tracking-widest text-xs uppercase mt-3">{member.role}</p>
                    <div className="w-12 h-1 bg-gray-100 mx-auto mt-6 group-hover:bg-[#D4AF37] transition-colors duration-500"></div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Edge fades for seamless effect */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>

        <div className="text-center py-16 border-t border-gray-200">
           <h2 className="text-2xl md:text-4xl font-heading font-semibold text-gray-800 leading-tight">
             "To redefine automotive personalization through premium products <br/>and exceptional customer experiences."
           </h2>
        </div>
      </div>
    </div>
  );
}
