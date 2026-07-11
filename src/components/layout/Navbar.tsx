import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingCart, Search, Heart, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { CartDrawer } from '../ui/CartDrawer';
import { SearchModal } from '../ui/SearchModal';
import { WishlistDrawer } from '../ui/WishlistDrawer';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [logoClicks, setLogoClicks] = useState<{id: number, x: number, y: number}[]>([]);
  const prevItemCount = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const { items: wishlistItems } = useWishlist();

  const handleLogoClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newClick = { id: Date.now(), x, y };
    setLogoClicks(prev => [...prev, newClick]);
    
    setTimeout(() => {
      setLogoClicks(prev => prev.filter(click => click.id !== newClick.id));
    }, 1000);
  };

  useEffect(() => {
    if (itemCount > prevItemCount.current) {
      setShowCartPopup(true);
      const timer = setTimeout(() => setShowCartPopup(false), 3000);
      prevItemCount.current = itemCount;
      return () => clearTimeout(timer);
    }
    prevItemCount.current = itemCount;
  }, [itemCount]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          (isScrolled || location.pathname !== '/') ? "bg-[#0F172A]/95 backdrop-blur-md border-[#1E293B] shadow-lg py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-white z-50 relative p-1 transition-transform active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} className="text-[#D4AF37]" /> : <Menu size={24} />}
            </button>
            <Link to="/" className="flex items-center gap-3 z-50 relative" onClick={handleLogoClick}>
              {logoClicks.map(click => (
                <motion.div
                  key={click.id}
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute bg-[#D4AF37] rounded-full pointer-events-none z-0"
                  style={{ left: click.x - 20, top: click.y - 20, width: 40, height: 40 }}
                />
              ))}
              <span className="font-heading font-bold text-2xl text-white tracking-widest uppercase relative z-10 hidden sm:block">
                Elite<span className="text-[#D4AF37]">Modz</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-medium text-sm transition-colors uppercase tracking-wider",
                  location.pathname === link.path 
                    ? "text-[#D4AF37]" 
                    : "text-gray-300 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

           {/* Icons */}
          <div className="hidden lg:flex items-center gap-6 text-white relative">
            <button aria-label="Search" onClick={() => setIsSearchOpen(true)} className="hover:text-[#D4AF37] transition-colors"><Search size={20} /></button>
            <button aria-label="Wishlist" className="hover:text-[#D4AF37] transition-colors relative" onClick={() => setIsWishlistOpen(true)}>
              <Heart size={20} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{wishlistItems.length}</span>
              )}
            </button>
            <div className="relative">
              <button aria-label="Cart" onClick={() => setIsCartOpen(true)} className="hover:text-[#D4AF37] transition-colors relative flex items-center justify-center">
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{itemCount}</span>
                )}
              </button>
              <AnimatePresence>
                {showCartPopup && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    className="absolute top-10 right-0 w-48 bg-[#0F172A]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-3 flex items-center gap-3"
                  >
                    <div className="bg-[#D4AF37]/20 p-2 rounded-full flex-shrink-0">
                      <CheckCircle2 size={16} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">Added to Cart</p>
                      <p className="text-gray-400 text-[10px]">Ready for checkout</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/contact">
              <Button variant="outline" size="sm" className="ml-2 uppercase tracking-widest">Contact</Button>
            </Link>
          </div>

          {/* Mobile Right Icons (Search and Cart only) */}
          <div 
            className="lg:hidden text-white z-50 relative flex items-center gap-4"
          >
            <button aria-label="Search" onClick={() => setIsSearchOpen(true)} className="hover:text-[#D4AF37] transition-colors">
              <Search size={22} />
            </button>
            <button aria-label="Cart" onClick={() => setIsCartOpen(true)} className="relative hover:text-[#D4AF37] transition-colors">
              <ShoppingCart size={22} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{itemCount}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0F172A]/90 backdrop-blur-xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 bottom-0 w-[80%] max-w-sm bg-[#0F172A] border-r border-[#1E293B] flex flex-col pt-24 px-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.1) }}
                    key={link.name}
                  >
                    <Link
                      to={link.path}
                      className="font-heading font-medium text-2xl text-white uppercase tracking-widest hover:text-[#D4AF37] transition-colors block border-b border-[#1E293B] pb-4"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (navLinks.length * 0.1) }}
                  className="flex items-center gap-6 mt-4"
                >
                  <button onClick={() => { setIsMobileMenuOpen(false); setIsWishlistOpen(true); }} className="text-white hover:text-[#D4AF37] transition-colors flex items-center gap-2 relative">
                    <Heart size={20} /> <span className="uppercase tracking-widest text-sm">Wishlist</span>
                    {wishlistItems.length > 0 && (
                      <span className="bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ml-1">{wishlistItems.length}</span>
                    )}
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (navLinks.length * 0.1) }}
                >
                  <Link to="/contact" className="block mt-4">
                    <Button className="w-full uppercase tracking-widest bg-[#D4AF37] text-[#0F172A] hover:bg-white hover:text-[#0F172A]">Contact Us</Button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
