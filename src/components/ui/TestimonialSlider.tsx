import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mockData';

export function TestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden relative min-h-[300px]">
        {TESTIMONIALS.map((testimonial, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center ${currentTestimonial === idx ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
          >
            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} className={star <= testimonial.rating ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-600"} />
              ))}
            </div>
            <p className="text-2xl md:text-4xl text-center mb-10 font-heading font-light leading-relaxed text-gray-200">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8B7322] flex items-center justify-center text-xl font-bold text-[#0F172A]">
                {testimonial.name.split(' ').map((n: string) => n[0]).join('').substring(0,2)}
              </div>
              <div className="text-left">
                <div className="text-lg font-heading font-semibold text-white tracking-wide">{testimonial.name}</div>
                <div className="text-sm text-[#D4AF37] font-semibold tracking-widest uppercase">{testimonial.car}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-12">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => setCurrentTestimonial(idx)}
            className={`transition-all duration-300 rounded-full ${currentTestimonial === idx ? 'w-12 h-2 bg-[#D4AF37]' : 'w-2 h-2 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
}
