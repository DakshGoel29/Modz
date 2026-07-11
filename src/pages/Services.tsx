import { motion } from 'motion/react';
import { SERVICES } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';

export default function Services() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      {/* Header */}
      <div className="bg-[#0F172A] relative py-20 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <ImagePlaceholder src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Background" fallbackText="Services" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6"
          >
            Currently Available in Gurugram Only
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Premium Auto Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Expert installation, detailing, and custom modifications to elevate your driving experience.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              key={service.id}
              className="border border-gray-100 rounded-[2rem] p-8 hover:shadow-2xl transition-all duration-500 hover:border-[#D4AF37]/30 group bg-white relative overflow-hidden flex flex-col shadow-sm"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gray-50 rounded-bl-full -z-10 group-hover:bg-[#D4AF37]/5 transition-colors duration-700"></div>
              
              <div className="w-full h-56 rounded-2xl overflow-hidden mb-8 relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <motion.div 
                  className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white font-medium text-sm text-center"
                >
                  View Details
                </motion.div>
                <ImagePlaceholder src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out" fallbackText={service.name} />
              </div>

              <h3 className="text-2xl font-heading font-extrabold text-[#0F172A] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300 tracking-tight">{service.name}</h3>
              <p className="text-gray-500 mb-8 flex-grow leading-relaxed font-light">{service.description}</p>
              
              <div className="mb-8 p-5 bg-[#F8FAFC] rounded-2xl border border-gray-100 group-hover:border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/5 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#D4AF37]/10 rounded-full blur-xl group-hover:bg-[#D4AF37]/20 transition-all duration-500"></div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1 font-bold">Starting from</span>
                <span className="text-3xl font-heading font-extrabold text-[#0F172A] group-hover:text-[#D4AF37] transition-colors duration-300">₹{service.startPrice.toLocaleString('en-IN')}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {['Premium Quality Assessment', 'Expert Technicians', 'Guaranteed Satisfaction'].map((feature, j) => (
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (j * 0.1), duration: 0.5 }}
                    viewport={{ once: true }}
                    key={j} 
                    className="flex items-center gap-3 text-sm text-gray-600 font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#0F172A] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors duration-300">
                      <CheckCircle2 size={12} className="text-white" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#0F172A] text-white py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-2 group/btn hover:bg-[#D4AF37] transition-colors duration-300 mt-auto"
              >
                Book Consultation <ChevronRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-rotate-45 transition-all duration-300" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-32 pt-24 pb-32 bg-[#050505] text-white rounded-[3rem] relative overflow-hidden -mx-4 md:-mx-8 px-8 md:px-16 shadow-2xl">
          {/* Background effect */}
          <div className="absolute inset-0 bg-[#0F172A]/20"></div>
          <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_#D4AF3715_0%,_transparent_60%)] pointer-events-none"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white tracking-tighter">
              The EliteModz <span className="text-[#D4AF37]">Process</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              A meticulously engineered sequence to translate your vision into reality. Every phase curated for absolute perfection.
            </p>
          </motion.div>
          
          <div className="relative max-w-7xl mx-auto z-10">
            {/* Animated Connecting Line */}
            <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-white/10 -z-10">
               <motion.div 
                  className="h-full bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-transparent"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
               />
            </div>
            
            <div className="grid md:grid-cols-4 gap-12 md:gap-8">
              {[
                { num: '01', title: 'Consultation', desc: 'Detailed discussion of your vision and vehicle requirements with our experts.' },
                { num: '02', title: 'Quotation', desc: 'Transparent pricing with a detailed breakdown of premium parts and labor.' },
                { num: '03', title: 'Execution', desc: 'Precision work by trained technicians in our clean-room facilities.' },
                { num: '04', title: 'Delivery', desc: 'Final inspection, detailing, and an unforgettable handover experience.' }
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center group relative"
                >
                  {/* Number Badge */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#050505] border-[3px] border-[#D4AF37]/30 text-[#D4AF37] font-bold text-xl md:text-2xl flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-all duration-500 overflow-hidden z-10 mx-auto mb-6 md:mb-8">
                    <span className="relative z-10">{step.num}</span>
                  </div>
                  
                  {/* Content */}
                  <div>
                     <motion.h4 
                        className="text-2xl md:text-2xl font-heading font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors duration-500"
                     >
                        {step.title}
                     </motion.h4>
                     <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
