import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mockData';

export function TestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextSlide = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentTestimonial];

  return (
    <div 
      className="relative max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Viewport with ample height to prevent any clipping */}
      <div className="relative min-h-[380px] sm:min-h-[340px] md:min-h-[320px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
            className="w-full flex flex-col items-center text-center justify-between py-4"
          >
            {/* Stars & Decorative Quote Icon */}
            <div className="flex items-center gap-2 mb-4">
              <Quote className="text-[#D4AF37]/40 w-6 h-6 mr-1" />
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  className={star <= current.rating ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-600"}
                />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-xl md:text-2xl font-heading font-light leading-relaxed text-gray-100 max-w-2xl mx-auto mb-8 px-2">
              "{current.text}"
            </p>

            {/* Reviewer Details — Prominently Styled & Always Visible */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8B7322] flex items-center justify-center text-base font-bold text-[#0F172A] shadow-md ring-2 ring-[#D4AF37]/50 shrink-0">
                {current.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2)}
              </div>
              <div className="text-left">
                <div className="text-base sm:text-lg font-heading font-bold text-white tracking-wide">
                  {current.name}
                </div>
                <div className="text-xs text-[#D4AF37] font-semibold tracking-widest uppercase mt-0.5">
                  {current.car} • Verified Owner
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/15 shadow-lg"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/15 shadow-lg"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Navigation Indicator Dots */}
      <div className="flex justify-center items-center gap-2.5 mt-8">
        {TESTIMONIALS.map((testimonial, idx) => (
          <button
            key={idx}
            aria-label={`Go to testimonial by ${testimonial.name}`}
            onClick={() => setCurrentTestimonial(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentTestimonial === idx 
                ? 'w-10 h-2 bg-[#D4AF37]' 
                : 'w-2.5 h-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
