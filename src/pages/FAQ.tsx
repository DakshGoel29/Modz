import { useState, useMemo } from 'react';
import { FAQS, FAQ_CATEGORIES } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircle, Search, HelpCircle, Sparkles, BookOpen, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Exact 22-item JSON-LD Schema provided by user
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const filteredFaqs = useMemo(() => {
    return FAQS.filter(faq => {
      const matchCategory = activeCategory === "All" || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        faq.q.toLowerCase().includes(q) || 
        faq.a.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-24">
      <SEO 
        title="Car Accessories FAQ: Ambient Lights & Cams | EliteModz"
        description="Got questions on ambient light for car, car projector light, best dash cam for car in India, seat covers or accessories for Baleno & Brezza? Find answers here."
        canonicalPath="/faq"
        schema={faqSchema}
      />
      {/* Hero Header */}
      <div className="bg-[#0F172A] relative py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <ImagePlaceholder src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="EliteModz Customer Support and Frequently Asked Questions" fallbackText="FAQ" />
        </div>
        <div className="container mx-auto px-4 text-center text-white relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <HelpCircle size={14} /> Knowledge Hub & Common Questions
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 uppercase tracking-wider text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Clear answers about ambient lighting, custom seat covers, warranty safety, legal regulations in India, and how to explore accessories on EliteModz.
          </p>

          {/* Quick Search */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. warranty, airbag, legal, battery)..."
              className="w-full bg-white/10 border-2 border-white/20 text-white rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-[#D4AF37] placeholder:text-gray-400 backdrop-blur-md"
            />
            <Search size={18} className="absolute left-4 top-4 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-3.5 text-xs text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumbs items={[{ label: 'FAQ Hub' }]} className="mb-6" />
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {FAQ_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`text-xs md:text-sm font-semibold px-4 py-2 rounded-full transition-all border ${
                activeCategory === category
                  ? "bg-[#0F172A] text-white border-[#0F172A] shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#D4AF37] hover:text-[#0F172A]"
              }`}
            >
              {category}
              {category === "All" && ` (${FAQS.length})`}
            </button>
          ))}
        </div>

        {/* Informational Platform Disclaimer Badge */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 flex items-start gap-3 text-amber-900 text-xs md:text-sm">
          <Sparkles size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Showcase & Inspiration Platform:</strong> EliteModz does not accept online payments or direct purchases. You can explore products in our Shop showcase, read guides on our Blog, and contact our team for vehicle-specific advice.
          </div>
        </div>

        {/* FAQs List */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-sm mb-4">No questions found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 last:border-0">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-5 flex items-start justify-between text-left focus:outline-none group gap-4"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-1">
                      {faq.category}
                    </span>
                    <h3 className={`font-heading font-semibold text-base md:text-lg transition-colors ${openIndex === i ? 'text-[#D4AF37]' : 'text-[#0F172A] group-hover:text-[#D4AF37]'}`}>
                      {faq.q}
                    </h3>
                  </div>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors mt-1 ${openIndex === i ? 'bg-[#1E293B] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-[#1E293B] group-hover:text-white'}`}>
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
                      <p className="pb-6 text-gray-600 leading-relaxed pl-3 border-l-2 border-[#D4AF37] ml-2 text-sm md:text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          )}
        </div>

        {/* Quick Action Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <Link 
            to="/shop" 
            className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <ShoppingBag size={20} className="text-[#D4AF37] mb-2" />
              <h4 className="font-heading font-bold text-sm text-[#0F172A] mb-1">Browse Shop Showcase</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Explore accessories & compare features for your vehicle.</p>
            </div>
            <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#D4AF37] mt-3 flex items-center gap-1 uppercase tracking-wider">
              Explore Shop <ArrowRight size={12} />
            </span>
          </Link>

          <Link 
            to="/blog" 
            className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <BookOpen size={20} className="text-[#D4AF37] mb-2" />
              <h4 className="font-heading font-bold text-sm text-[#0F172A] mb-1">Read Buying Guides</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Deep-dive tips on ambient lights, dash cams and seat covers.</p>
            </div>
            <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#D4AF37] mt-3 flex items-center gap-1 uppercase tracking-wider">
              Read Guides <ArrowRight size={12} />
            </span>
          </Link>

          <Link 
            to="/contact" 
            className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#D4AF37] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <MessageCircle size={20} className="text-[#D4AF37] mb-2" />
              <h4 className="font-heading font-bold text-sm text-[#0F172A] mb-1">Ask A Question</h4>
              <p className="text-gray-500 text-xs leading-relaxed">Share your car model & questions with our technical team.</p>
            </div>
            <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#D4AF37] mt-3 flex items-center gap-1 uppercase tracking-wider">
              Contact Team <ArrowRight size={12} />
            </span>
          </Link>
        </div>

        {/* Contact Banner */}
        <div className="mt-14 text-center bg-[#0F172A] p-10 md:p-14 rounded-3xl text-white">
          <div className="w-16 h-16 bg-[#1E293B] rounded-full flex items-center justify-center mx-auto mb-5">
            <MessageCircle className="text-[#D4AF37]" size={30} />
          </div>
          <h2 className="text-2xl font-heading font-bold mb-3">Still Have A Question About Your Car?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto text-xs md:text-sm leading-relaxed">
            Visit our Contact page and tell us your car make, model and year so we can provide personalized recommendations.
          </p>
          <Link to="/contact">
            <Button className="bg-[#D4AF37] text-black hover:bg-white uppercase tracking-wider px-8 text-xs font-bold">
              Send Us A Question
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
