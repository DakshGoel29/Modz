import { useState } from 'react';
import { FAQS } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-24">
      <div className="bg-[#0F172A] relative py-20 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <ImagePlaceholder src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="FAQ Background" fallbackText="FAQ" />
        </div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-widest text-[#D4AF37]">Frequently Asked Questions</h1>
          <p className="text-gray-400 text-lg">Everything you need to know about our products and services.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 last:border-0">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <h3 className={`font-heading font-semibold text-lg transition-colors pr-8 ${openIndex === i ? 'text-[#D4AF37]' : 'text-[#0F172A] group-hover:text-[#D4AF37]'}`}>
                  {faq.q}
                </h3>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-[#1E293B] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-[#1E293B] group-hover:text-white'}`}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 leading-relaxed pl-2 border-l-2 border-[#D4AF37] ml-2">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-[#0F172A] p-12 rounded-3xl text-white">
          <div className="w-16 h-16 bg-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="text-[#D4AF37]" size={32} />
          </div>
          <h2 className="text-2xl font-heading font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Can't find the answer you're looking for? Please contact our friendly team for assistance.</p>
          <Link to="/contact">
            <Button className="uppercase tracking-widest px-10">Get In Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
