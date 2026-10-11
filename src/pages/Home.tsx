import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { TestimonialSlider } from '../components/ui/TestimonialSlider';
import { FEATURED_CATEGORIES, PRODUCTS, POPULAR_CAR_MODELS, TARGET_KEYWORDS_LIST } from '../data/mockData';
import { ArrowRight, Star, ShieldCheck, Wrench, Truck, Sparkles, CheckCircle2, Car } from 'lucide-react';
import { SEO } from '../components/common/SEO';

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
      <SEO 
        title="EliteModz: Ambient Light For Car & Car Accessories India"
        description="Explore ambient light for car, car projector lights, best dash cam for car in India, seat covers & sun shades for Baleno, Brezza, Swift & Wagon R at EliteModz."
        canonicalPath="/"
      />
      {/* Sleek Abstract Hero Section */}
      <section 
        className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#020617] pt-24 pb-16"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      >
        {/* Animated Background Slider & Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#0a0a0a]">
          <div className="absolute inset-0 z-0 overflow-hidden bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#000000_100%)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e51a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e51a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>

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
          
          <motion.div style={{ x: parallax3X, y: parallax3Y, willChange: "transform" }} className="absolute inset-0 z-0 hidden md:block">
            <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-[linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:100%_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_100%,#000_60%,transparent_100%)] transform perspective-[1000px] rotateX-[60deg] scale-150 origin-bottom blur-[1px]"></div>
          </motion.div>
          
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
        
        <div className="container relative z-20 mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-full px-5 py-2 mb-6 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#D4AF37]">
                <Sparkles size={16} /> India's Premium Automotive Customization Hub
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-heading font-extrabold leading-[1.05] tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 drop-shadow-sm">
                REDEFINE<br/>YOUR DRIVE
              </h1>
              <span className="block text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-6">
                Ambient Light For Car • Seat Covers • Car Projector Lights • Dash Cams
              </span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Discover India's most sought-after car upgrades: <strong>ambient light for car</strong>, precision <strong>car projector light</strong> retrofits, the <strong>best dash cam for car in India</strong>, breathable <strong>seat cover for car</strong> solutions, magnetic <strong>sun shades for car</strong>, <strong>best car perfume</strong>, and specialized <strong>exterior car accessories</strong> for <strong>Baleno</strong>, <strong>Brezza</strong>, <strong>Swift</strong>, and <strong>Wagon R</strong>.
            </motion.p>
            
            {/* Quick Model Links */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-2 mb-10 text-xs md:text-sm font-medium"
            >
              <span className="text-gray-400 self-center mr-1">Top Models:</span>
              {POPULAR_CAR_MODELS.map(model => (
                <Link
                  key={model.name}
                  to={`/shop?model=${model.name}`}
                  className="bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A0A0A] border border-white/20 px-3.5 py-1.5 rounded-full transition-all text-gray-200"
                >
                  {model.tag}
                </Link>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row justify-center gap-5"
            >
              <Link to="/shop">
                <button className="w-full sm:w-auto relative group bg-[#D4AF37] text-[#0A0A0A] hover:bg-white py-4 px-10 rounded-full font-bold transition-colors duration-300 text-xs tracking-[0.2em] uppercase h-14">
                  <span className="relative z-10 flex items-center justify-center gap-2">Explore Showcase <ArrowRight size={16} /></span>
                </button>
              </Link>
              <Link to="/services">
                <button className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-white/50 py-4 px-10 rounded-full font-bold transition-all text-xs tracking-[0.2em] uppercase h-14">
                  Fitment Guides
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
      </section>

      {/* Target Model Spotlight Section */}
      <section className="py-20 bg-[#050505] text-white border-b border-white/10 relative z-30">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-2">Dedicated Vehicle Collections</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">Engineered For Your Car</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
              Precision-fit seat covers, magnetic sun shades, ambient lighting, and exterior accessories designed for India's best-selling cars.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_CAR_MODELS.map((model, idx) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#0F172A]/70 border border-white/10 rounded-3xl p-6 hover:border-[#D4AF37]/60 hover:bg-[#0F172A] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                    <Car size={24} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {model.name}
                  </h4>
                  <div className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mb-3">
                    {model.tag}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6">
                    {model.desc}
                  </p>
                </div>
                <Link
                  to={`/shop?model=${model.name}`}
                  className="inline-flex items-center justify-between text-xs font-bold text-white uppercase tracking-widest py-2.5 px-4 rounded-xl bg-white/5 group-hover:bg-[#D4AF37] group-hover:text-black transition-all"
                >
                  <span>Explore Kit</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-28 bg-white relative">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-2">High-Intent Upgrades</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#0F172A] tracking-tight">Trending Categories</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/shop" className="group inline-flex items-center gap-3 font-semibold text-[#0F172A] hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-xs md:text-sm pb-2 border-b-2 border-transparent hover:border-[#D4AF37]">
                View All Categories <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_CATEGORIES.map((cat, i) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-100 h-80 flex flex-col justify-end"
              >
                <Link to={`/shop?search=${encodeURIComponent(cat.keyword)}`} className="block w-full h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent z-10 transition-opacity duration-500 group-hover:from-[#0F172A]"></div>
                  <ImagePlaceholder 
                    src={cat.image} 
                    alt={`${cat.name} - ${cat.badge}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fallbackIcon={false}
                    fallbackText={cat.name}
                  />
                  <div className="absolute top-4 left-4 z-20 bg-[#D4AF37] text-[#0A0A0A] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {cat.badge}
                  </div>
                  <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end">
                    <h3 className="text-white font-heading font-bold text-xl md:text-2xl tracking-tight mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {cat.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-widest">
                      Explore Showcase <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Spotlight */}
      <section className="py-24 bg-[#F8FAFC] border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-2">Most Popular Products</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-[#0F172A]">Top Rated By Enthusiasts</h3>
            <p className="text-gray-600 mt-3 text-sm md:text-base">
              Equip your vehicle with India's best dash cam, ambient light, projector headlights, custom seat covers, and sun shades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 6).map((prod) => (
              <div 
                key={prod.id} 
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-52 rounded-2xl overflow-hidden mb-6 relative bg-gray-100">
                    <ImagePlaceholder 
                      src={prod.image} 
                      alt={prod.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fallbackText={prod.name}
                    />
                    <span className="absolute top-3 left-3 bg-[#0F172A] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {prod.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#D4AF37] text-xs mb-2">
                    <Star size={14} fill="#D4AF37" />
                    <span className="font-bold text-gray-800">{prod.rating}</span>
                    <span className="text-gray-400">({prod.reviews} reviews)</span>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-[#0F172A] mb-2 leading-snug group-hover:text-[#D4AF37] transition-colors">
                    {prod.name}
                  </h4>
                  <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed mb-4">
                    {prod.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {prod.compatibleCars.map(c => (
                      <span key={c} className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">
                    Showcase Spec
                  </span>
                  <Link
                    to={`/shop?search=${encodeURIComponent(prod.targetKeyword)}`}
                    className="text-xs font-bold uppercase tracking-wider bg-[#0F172A] hover:bg-[#D4AF37] hover:text-black text-white px-4 py-2.5 rounded-xl transition-colors"
                  >
                    Explore Specs
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-[#0F172A] hover:text-white uppercase tracking-widest text-xs px-8">
                Explore Full 2026 Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#D4AF37]/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-3 inline-block border border-[#D4AF37]/30 rounded-full px-6 py-2">
              The Elite Advantage
            </h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mt-4 tracking-tight">
              Why Car Owners Trust EliteModz
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "100% Warranty Safe", 
                desc: "All our ambient light for car, car projector light, and dash cam guides feature zero-wire-cut fuse tap and OEM coupler specifications." 
              },
              { 
                icon: Wrench, 
                title: "Non-Destructive Fitting", 
                desc: "Technical wiring and placement walkthroughs created for DIY enthusiasts and independent car accessory technicians across India." 
              },
              { 
                icon: Truck, 
                title: "Curated Buying Research", 
                desc: "Unbiased testing benchmarks, vehicle compatibility matrices, and styling recommendations for Baleno, Brezza, Swift, and Wagon R." 
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-[#D4AF37]">
                  <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-heading font-semibold mb-3 text-white">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-[#1E293B] text-white relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs md:text-sm font-semibold mb-2">
              Community & Owner Reviews
            </h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">
              Loved by Baleno, Brezza, Swift & Wagon R Owners
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialSlider />
          </div>
        </div>
      </section>
      
      {/* Dynamic CTA Section */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white">
        <div className="container relative z-20 mx-auto px-4 text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/15 p-10 md:p-16 rounded-[2.5rem] shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight">
              Ready To Upgrade <span className="text-[#D4AF37]">Your Car?</span>
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore ambient light for car, car projector light, the best dash cam for car in India, custom seat covers, and exterior car accessories in our curated design showcase.
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-[#D4AF37] text-black hover:bg-white text-xs md:text-sm font-bold uppercase tracking-widest px-10 h-14">
                Explore Showcase & Fitment Specs
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
