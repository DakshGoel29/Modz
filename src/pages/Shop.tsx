import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import { motion } from 'motion/react';
import { Search, Filter, Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCategory = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(rawCategory || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState(50000);
  const categories = ['All', 'Interior', 'Exterior', 'Electronics', 'Detailing'];
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    if (rawCategory && categories.includes(rawCategory)) {
      setActiveCategory(rawCategory);
    }
  }, [rawCategory]);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchPrice = p.price <= priceRange;
      return matchCategory && matchSearch && matchPrice;
    });
  }, [activeCategory, searchQuery, priceRange]);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const toggleWishlist = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-24">
      {/* Page Header */}
      <div className="bg-[#0F172A] text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-widest text-[#D4AF37]">Premium Accessories</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore our extensive catalog of high-performance and luxury modifications.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 shrink-0 space-y-8">
          <div>
            <h3 className="font-heading font-semibold text-xl mb-4 flex items-center gap-2">
              <Filter size={20} className="text-[#D4AF37]" /> Categories
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`text-left px-3 py-2 rounded-md transition-colors ${activeCategory === cat ? 'bg-[#0F172A] text-white' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-xl mb-4">Max Price: ₹{priceRange.toLocaleString('en-IN')}</h3>
            <input 
              type="range" 
              min="0" 
              max="50000" 
              step="1000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-[#D4AF37]" 
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>₹0</span>
              <span>₹50,000</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-500">Showing {filteredProducts.length} results</p>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..." 
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all bg-white"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                key={product.id} 
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <ImagePlaceholder src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" fallbackText={product.name} />
                  
                  {/* Always Visible Heart Icon */}
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2.5 rounded-full hover:bg-red-500 hover:text-white transition-colors z-10 shadow-sm"
                  >
                    <Heart size={18} className={isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""} />
                  </button>
                </div>

                <div className="p-5">
                  <div className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mb-1">{product.brand}</div>
                  <h3 className="font-heading font-medium text-lg text-[#0F172A] mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} size={14} className={star <= Math.floor(product.rating) ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-300"} />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg text-[#0F172A]">₹{product.price.toLocaleString('en-IN')}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                      )}
                    </div>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="bg-[#0F172A] text-white p-2.5 rounded-lg hover:bg-[#D4AF37] transition-colors"
                      title="Add to Cart"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-500 text-lg">No products found for this section.</p>
              <Button onClick={() => { setActiveCategory('All'); setSearchQuery(''); setPriceRange(50000); }} className="mt-4 border border-gray-300" variant="ghost">Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
