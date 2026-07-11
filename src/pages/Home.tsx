import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { TestimonialSlider } from '../components/ui/TestimonialSlider';
import { FEATURED_CATEGORIES, PRODUCTS, TESTIMONIALS } from '../data/mockData';
import { ArrowRight, Star, ShieldCheck, Wrench, Truck, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  // Parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const parallax1X = useTransform(smoothMouseX, value => value * -30);
  const parallax1Y = useTransform(smoothMouseY, value => value * -30);
  
  const parallax2X = useTransform(smoothMouseX, value => value * 40);
  const parallax2Y = useTransform(smoothMouseY, value => value * 40);

  const parallax3X = useTransform(smoothMouseX, value => value * -15);
  const parallax3Y = useTransform(smoothMouseY, value => value * -15);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div className="bg-background overflow-hidden relative">
      {/* Sleek Abstract Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#020617] pt-20"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      >
        {/* Animated Background Slider & Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#0a0a0a]">
          {/* Deep Blue/Purple Gradient Mesh Background */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#000000_100%)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e51a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e51a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>

          {/* Continuous Glowing Waves Overlay - Hardware Accelerated */}
          <div className="absolute inset-0 z-0 hidden md:block opacity-60">
            <motion.div style={{ x: parallax1X, y: parallax1Y, willChange: "transform" }} className="absolute inset-0">
              <motion.div 
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[30%] -left-[10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_#D4AF3715_0%,_transparent_50%)] blur-[80px]"
              />
            </motion.div>
            <motion.div style={{ x: parallax2X, y: parallax2Y, willChange: "transform" }} className="absolute inset-0">
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute top-[10%] -right-[20%] w-[100%] h-[100%] bg-[radial-gradient(ellipse_at_center,_#3b82f61A_0%,_transparent_50%)] blur-[80px]"
              />
            </motion.div>
          </div>
          
          {/* Perspective Grid Line (Horizontal Only) - Hidden on mobile for performance */}
          <motion.div style={{ x: parallax3X, y: parallax3Y, willChange: "transform" }} className="absolute inset-0 z-0 hidden md:block">
            <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-[linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:100%_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_100%,#000_60%,transparent_100%)] transform perspective-[1000px] rotateX-[60deg] scale-150 origin-bottom blur-[1px]"></div>
          </motion.div>
          
          {/* Subtle noise texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
        
        <div className="container relative z-20 mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-heading font-extrabold leading-[1.05] tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 drop-shadow-sm">
                REDEFINE<br/>YOUR DRIVE
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-gray-300/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Where supreme aesthetics meet unyielding performance. Curating India’s most exclusive car accessories, from premium car lights and dash cams to luxury car interior accessories, car seat covers, and car shades at EliteModz Gurugram.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <Link to="/shop">
                <button className="w-full sm:w-auto relative group bg-[#D4AF37] text-[#0A0A0A] hover:bg-white py-4 px-10 rounded-full font-bold transition-colors duration-300 text-xs tracking-[0.2em] uppercase h-14">
                  <span className="relative z-10 flex items-center justify-center gap-2">Enter The Gallery</span>
                </button>
              </Link>
              <Link to="/about">
                <button className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-white/50 py-4 px-10 rounded-full font-bold transition-all text-xs tracking-[0.2em] uppercase h-14">
                  Discover Our Vision
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Dynamic bottom fade to avoid harsh borders */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
      </section>

      {/* Trust Counters */}
      <section className="py-16 bg-[#050505] text-white relative z-30">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { label: 'Happy Customers', value: '50k+' },
              { label: 'Premium Products', value: '10k+' },
              { label: 'Cities Nationwide', value: '120+' },
              { label: 'Average Rating', value: '4.9/5' }
            ].map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                key={i} 
                className="text-center p-8 rounded-3xl bg-[#0F172A]/40 border border-white/5 backdrop-blur-xl hover:bg-[#0F172A]/70 hover:border-[#D4AF37]/50 transition-all shadow-2xl relative overflow-hidden group cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div 
                  className="text-4xl md:text-6xl font-heading font-semibold text-white mb-3 relative z-10"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm text-[#D4AF37] font-bold tracking-[0.1em] uppercase relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories (Bento Grid) */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-semibold mb-3">Curated Selection</h2>
              <h3 className="text-4xl md:text-6xl font-heading font-bold text-[#0F172A] tracking-tight">The Essentials</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/shop" className="group inline-flex items-center gap-3 font-semibold text-[#0F172A] hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-sm pb-2 border-b-2 border-transparent hover:border-[#D4AF37]">
                View All Categories <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {FEATURED_CATEGORIES.slice(0, 5).map((cat, i) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ${
                  i === 0 ? 'md:col-span-8 md:row-span-2' : 
                  i === 1 ? 'md:col-span-4 md:row-span-1' :
                  i === 2 ? 'md:col-span-4 md:row-span-1' :
                  i === 3 ? 'md:col-span-6 md:row-span-1' :
                  'md:col-span-6 md:row-span-1'
                } h-64 md:h-auto`}
              >
                <Link to={`/shop?category=${cat.filterCategory}`} className="block w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent z-10 transition-opacity duration-500 group-hover:from-[#D4AF37]/90"></div>
                  <ImagePlaceholder 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    fallbackIcon={false}
                    fallbackText={cat.name}
                  />
                  <div className="absolute inset-0 p-8 z-20 flex flex-col justify-end">
                    <motion.div 
                      className="transform transition-transform duration-500 group-hover:-translate-y-4"
                    >
                      <h3 className="text-white font-heading font-medium text-2xl md:text-3xl tracking-wide mb-2">{cat.name}</h3>
                      <div className="flex items-center gap-2 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm font-semibold uppercase tracking-widest">
                        Explore <ArrowRight size={16} />
                      </div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dynamic */}
      <section className="py-32 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#D4AF37]/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-semibold mb-3 inline-block border border-[#D4AF37]/30 rounded-full px-6 py-2"
            >
              The Elite Advantage
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-bold mt-6 tracking-tight"
            >
              Why Choose EliteModz
            </motion.h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: ShieldCheck, title: "Premium Quality", desc: "We source and manufacture only the highest-grade materials. Genuine 5-year warranty coverage included." },
              { icon: Wrench, title: "Master Craftsmanship", desc: "Professional fitting available through our nationwide network of certified master technicians." },
              { icon: Truck, title: "White-Glove Delivery", desc: "Secure, reliable, and fully insured shipping to over 120+ cities nationwide with elite tracking." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-10 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-4"
              >
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#D4AF37]/10 group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-heading font-semibold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed font-light text-lg">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Brands (Continuous Slider) */}
      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-y border-gray-200">
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        <div className="container mx-auto px-4 mb-20 text-center relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-bold mb-4">Precision Engineering For</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-extrabold text-[#0F172A] tracking-tight">Vehicles We <span className="text-[#D4AF37]">Elevate</span></h3>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-8"></div>
          </motion.div>
        </div>

        <div className="flex w-full overflow-hidden py-10">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            style={{ willChange: 'transform' }}
            className="flex gap-6 md:gap-8 whitespace-nowrap pl-6 md:pl-8 items-center w-max"
          >
            {/* Map brands twice for seamless continuous loop */}
            {[
              { name: 'BMW', logo: 'https://cdn.simpleicons.org/bmw/0F172A' },
              { name: 'Audi', logo: 'https://cdn.simpleicons.org/audi/0F172A' },
              { name: 'Porsche', logo: 'https://cdn.simpleicons.org/porsche/0F172A' },
              { name: 'Jeep', logo: 'https://cdn.simpleicons.org/jeep/0F172A' },
              { name: 'Toyota', logo: 'https://cdn.simpleicons.org/toyota/0F172A' },
              { name: 'Kia', logo: 'https://cdn.simpleicons.org/kia/0F172A' },
              { name: 'Hyundai', logo: 'https://cdn.simpleicons.org/hyundai/0F172A' },
              { name: 'Volkswagen', logo: 'https://cdn.simpleicons.org/volkswagen/0F172A' },
              { name: 'Skoda', logo: 'https://cdn.simpleicons.org/skoda/0F172A' },
              { name: 'Volvo', logo: 'https://cdn.simpleicons.org/volvo/0F172A' },
              { name: 'Nissan', logo: 'https://cdn.simpleicons.org/nissan/0F172A' },
              { name: 'BMW', logo: 'https://cdn.simpleicons.org/bmw/0F172A' },
              { name: 'Audi', logo: 'https://cdn.simpleicons.org/audi/0F172A' },
              { name: 'Porsche', logo: 'https://cdn.simpleicons.org/porsche/0F172A' },
              { name: 'Jeep', logo: 'https://cdn.simpleicons.org/jeep/0F172A' },
              { name: 'Toyota', logo: 'https://cdn.simpleicons.org/toyota/0F172A' },
              { name: 'Kia', logo: 'https://cdn.simpleicons.org/kia/0F172A' },
              { name: 'Hyundai', logo: 'https://cdn.simpleicons.org/hyundai/0F172A' },
              { name: 'Volkswagen', logo: 'https://cdn.simpleicons.org/volkswagen/0F172A' },
              { name: 'Skoda', logo: 'https://cdn.simpleicons.org/skoda/0F172A' },
              { name: 'Volvo', logo: 'https://cdn.simpleicons.org/volvo/0F172A' },
              { name: 'Nissan', logo: 'https://cdn.simpleicons.org/nissan/0F172A' }
            ].map((brand, i) => (
              <div key={i} className="flex-shrink-0 group px-2">
                <div className="w-[180px] md:w-[220px] bg-white rounded-[2rem] p-8 border border-gray-100 shadow-md hover:shadow-2xl hover:border-[#D4AF37]/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden relative flex flex-col items-center justify-center gap-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F8FAFC] rounded-2xl flex items-center justify-center p-5 group-hover:scale-110 group-hover:bg-[#D4AF37]/5 transition-all duration-300 relative z-10 shadow-inner">
                    <img src={brand.logo} alt={brand.name} loading="lazy" className="w-full h-full object-contain filter opacity-100 group-hover:drop-shadow-lg transition-all duration-300" />
                  </div>
                  
                  <span className="font-heading font-extrabold text-sm md:text-base text-gray-700 group-hover:text-[#0F172A] tracking-widest uppercase transition-colors duration-300 relative z-10">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dynamic Testimonial Slider */}
      <section className="py-32 bg-[#1E293B] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(#pattern)"/></svg>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4AF37] tracking-[0.2em] uppercase text-sm font-semibold mb-3 inline-block"
            >
              Elite Community
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-bold mt-2"
            >
              Driven Experiences
            </motion.h3>
          </div>

          <div className="max-w-4xl mx-auto relative min-h-[300px]">
            <TestimonialSlider />
          </div>
        </div>
      </section>
      
      {/* Dynamic CTA Section */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[500px]">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[10%] w-[100%] h-[200%] bg-gradient-to-tr from-[#D4AF37] via-[#FDE047] to-[#D4AF37] opacity-90 block"
        />
        <div className="absolute inset-0 bg-[#0F172A]/10 backdrop-blur-[100px] z-10" />

        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 md:p-20 rounded-[3rem] shadow-2xl max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-7xl font-heading font-extrabold text-[#0F172A] mb-8 tracking-tighter">
              Ready To Upgrade <br/> <span className="text-white">Your Drive?</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#0F172A]/80 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the pinnacle of automotive customization. Masterfully crafted aesthetics, engineering, and passion.
            </p>
            <Link to="/shop">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-[#0F172A] text-white overflow-hidden rounded-full uppercase tracking-[0.2em] text-lg font-semibold px-12 h-20 inline-flex items-center justify-center shadow-2xl"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span>Begin Your Journey</span>
                <ArrowRight size={24} className="ml-4 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
