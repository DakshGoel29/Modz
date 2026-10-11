import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS, TARGET_KEYWORDS_LIST, POPULAR_CAR_MODELS } from '../data/mockData';
import { motion } from 'motion/react';
import { Search, Filter, Star, Heart, Bookmark, Car, Sparkles, Check, Info } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const rawCategory = searchParams.get('category');
  const rawModel = searchParams.get('model');
  const rawSearch = searchParams.get('search') || searchParams.get('q') || '';
  
  const [activeCategory, setActiveCategory] = useState(rawCategory || 'All');
  const [activeModel, setActiveModel] = useState(rawModel || 'All');
  const [searchQuery, setSearchQuery] = useState(rawSearch);

  const categories = ['All', 'Lighting', 'Interior', 'Electronics', 'Exterior', 'Car Specific'];
  const models = ['All', 'Baleno', 'Brezza', 'Swift', 'Wagon R'];

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Sync state with URL params
  useEffect(() => {
    if (rawCategory && categories.includes(rawCategory)) {
      setActiveCategory(rawCategory);
    } else if (!rawCategory) {
      setActiveCategory('All');
    }
  }, [rawCategory]);

  useEffect(() => {
    if (rawModel && models.includes(rawModel)) {
      setActiveModel(rawModel);
    } else if (!rawModel) {
      setActiveModel('All');
    }
  }, [rawModel]);

  useEffect(() => {
    if (rawSearch) {
      setSearchQuery(rawSearch);
    }
  }, [rawSearch]);

  const updateFilters = (newCat: string, newModel: string, newQuery: string) => {
    const params = new URLSearchParams();
    if (newCat !== 'All') params.set('category', newCat);
    if (newModel !== 'All') params.set('model', newModel);
    if (newQuery.trim()) params.set('search', newQuery.trim());
    setSearchParams(params);
  };

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    updateFilters(cat, activeModel, searchQuery);
  };

  const handleModelClick = (model: string) => {
    setActiveModel(model);
    updateFilters(activeCategory, model, searchQuery);
  };

  const handleKeywordPillClick = (kw: string) => {
    setSearchQuery(kw);
    updateFilters(activeCategory, activeModel, kw);
  };

  const clearAllFilters = () => {
    setActiveCategory('All');
    setActiveModel('All');
    setSearchQuery('');
    setSearchParams(new URLSearchParams());
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchModel = activeModel === 'All' || p.compatibleCars.includes(activeModel) || p.compatibleCars.includes('Universal');
      
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        p.name.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) ||
        p.targetKeyword.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.compatibleCars.some(c => c.toLowerCase().includes(q));

      return matchCategory && matchModel && matchSearch;
    });
  }, [activeCategory, activeModel, searchQuery]);

  const handleSaveToInspiration = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      category: product.category
    });
  };

  const toggleWishlist = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        image: product.image,
        category: product.category
      });
    }
  };

  const itemListSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Car Accessories & Styling Showcase Catalog",
    "description": "Curated catalog of ambient light for car, car projector lights, best dash cam for car in India, and seat covers for Baleno, Brezza, Swift, and Wagon R.",
    "numberOfItems": PRODUCTS.length,
    "itemListElement": PRODUCTS.slice(0, 12).map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "image": item.image,
      "description": item.description
    }))
  }), []);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-24">
      <SEO 
        title="Car Accessories: Ambient Light & Seat Covers | EliteModz"
        description="Explore ambient light for car, car projector lights, best dash cam for car in India, custom seat covers & sun shades for Baleno, Brezza, Swift & Wagon R."
        canonicalPath="/shop"
        schema={itemListSchema}
      />

      {/* Header */}
      <div className="bg-[#0F172A] text-white py-16 mb-8">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={14} /> Automotive Styling & Inspiration Catalog
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 uppercase tracking-wider text-white">
            Car Accessories & Upgrades
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Explore <strong>ambient light for car</strong>, <strong>car projector light</strong>, the <strong>best dash cam for car in India</strong>, <strong>seat cover for car</strong>, <strong>sun shades for car</strong>, <strong>best car perfume</strong>, and specialized kits for <strong>Baleno car accessories</strong>, <strong>Brezza car accessories</strong>, <strong>Swift car accessories</strong>, and <strong>Wagon R car accessories</strong>.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: 'Showcase Catalog' }]} className="mb-4" />
        {/* Showcase Platform Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-amber-900 text-xs md:text-sm">
          <div className="flex items-start sm:items-center gap-3">
            <Info size={18} className="text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong>Educational Showcase Catalog:</strong> This platform is a digital marketing case study and vehicle styling guide. We do not sell products, operate a store, or process payments. For compatibility guidance, visit our Contact page.
            </span>
          </div>
          <Link to="/faq" className="shrink-0 text-xs font-bold text-amber-800 underline hover:text-amber-950">
            Read FAQ
          </Link>
        </div>

        {/* Popular Targeted Keyword Search Chips */}
        <div className="bg-white rounded-2xl p-5 mb-8 border border-gray-200 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span>Popular Keyword Searches:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {TARGET_KEYWORDS_LIST.map((kw) => {
              const isSelected = searchQuery.toLowerCase() === kw.toLowerCase();
              return (
                <button
                  key={kw}
                  onClick={() => handleKeywordPillClick(kw)}
                  className={`text-xs px-3.5 py-1.5 rounded-full transition-all font-medium ${
                    isSelected 
                      ? 'bg-[#0F172A] text-white shadow-sm font-semibold' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {kw}
                </button>
              );
            })}
          </div>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm space-y-6 sticky top-28">
              
              {/* Search Bar */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">Search Catalog</label>
                <div className="relative">
                  <Search size={16} className="absolute left-3.5 top-3 text-gray-400" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      updateFilters(activeCategory, activeModel, e.target.value);
                    }}
                    placeholder="Search ambient, Baleno..." 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => {
                        setSearchQuery('');
                        updateFilters(activeCategory, activeModel, '');
                      }}
                      className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600"
                    >
                      &times;
                    </button>
                  )}
                </div>
              </div>

              {/* Vehicle Compatibility Filter */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3 flex items-center gap-1.5">
                  <Car size={14} className="text-[#D4AF37]" />
                  <span>Car Model</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {models.map(m => (
                    <button
                      key={m}
                      onClick={() => handleModelClick(m)}
                      className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                        activeModel === m
                          ? 'bg-[#0F172A] text-white border-[#0F172A] font-semibold'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3 flex items-center gap-1.5">
                  <Filter size={14} className="text-[#D4AF37]" />
                  <span>Category</span>
                </span>
                <div className="space-y-1.5">
                  {categories.map(c => (
                    <button
                      key={c}
                      onClick={() => handleCategoryClick(c)}
                      className={`w-full text-left text-xs px-3 py-2 rounded-xl transition-all flex items-center justify-between ${
                        activeCategory === c
                          ? 'bg-[#0F172A] text-white font-semibold'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{c}</span>
                      {activeCategory === c && <Check size={14} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Notice */}
              <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100 text-[11px] text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700 block mb-1">Catalog Reference</span>
                Items are catalogued for student study, product comparison, and styling inspiration across India.
              </div>

              {/* Reset Filters */}
              {(activeCategory !== 'All' || activeModel !== 'All' || searchQuery !== '') && (
                <button
                  onClick={clearAllFilters}
                  className="w-full text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-700 py-2 border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
                >
                  Reset All Filters
                </button>
              )}

            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Showing <span className="text-[#0F172A]">{filteredProducts.length}</span> Verified Upgrades
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-200">
                <p className="text-gray-500 text-base mb-4">No accessories found matching your selected filters.</p>
                <Button onClick={clearAllFilters} className="bg-[#D4AF37] text-black">
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => {
                  const inWish = isInWishlist(product.id);
                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* Image & Badges */}
                        <div className="w-full h-48 rounded-2xl overflow-hidden relative mb-4 bg-gray-100">
                          <ImagePlaceholder 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            fallbackText={product.name}
                          />
                          <span className="absolute top-3 left-3 bg-[#0F172A] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {product.category}
                          </span>
                          <button
                            onClick={() => toggleWishlist(product)}
                            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors shadow-sm"
                            aria-label="Wishlist"
                          >
                            <Heart size={16} className={inWish ? "fill-red-500 text-red-500" : ""} />
                          </button>
                        </div>

                        {/* Rating & Brand */}
                        <div className="flex items-center justify-between text-xs mb-2">
                          <div className="flex items-center gap-1 text-[#D4AF37]">
                            <Star size={13} fill="#D4AF37" />
                            <span className="font-bold text-gray-800">{product.rating}</span>
                            <span className="text-gray-400">({product.reviews})</span>
                          </div>
                          <span className="text-gray-400 text-[11px] font-medium">{product.brand}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading font-bold text-base text-[#0F172A] mb-2 leading-snug group-hover:text-[#D4AF37] transition-colors">
                          {product.name}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
                          {product.description}
                        </p>

                        {/* Compatible Vehicles */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {product.compatibleCars.map(c => (
                            <span key={c} className="text-[10px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Showcase Badge & Save Action */}
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-3 py-1.5 rounded-lg">
                          Showcase Spec
                        </span>
                        <button
                          onClick={() => handleSaveToInspiration(product)}
                          className="bg-[#0F172A] hover:bg-[#D4AF37] hover:text-black text-white px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 text-xs font-bold"
                          title="Save to Showcase Inspiration"
                        >
                          <Bookmark size={14} />
                          <span>Save</span>
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
