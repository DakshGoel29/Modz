import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Sparkles, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TARGET_KEYWORDS_LIST } from '../../data/mockData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      onClose();
      setQuery('');
    }
  };

  const handleKeywordClick = (keyword: string) => {
    navigate(`/shop?search=${encodeURIComponent(keyword)}`);
    onClose();
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-50"
          >
            <div className="bg-[#0F172A] border border-[#1E293B] rounded-3xl p-6 shadow-2xl">
              <form onSubmit={handleSearch} className="relative mb-6">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search ambient light, dash cam, Baleno, seat covers..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-white/10 border-2 border-white/20 text-white rounded-2xl py-4 pl-14 pr-14 text-base md:text-lg outline-none focus:border-[#D4AF37] transition-all placeholder:text-gray-500 font-sans"
                />
                <button 
                  type="button"
                  aria-label="Close search"
                  onClick={onClose}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </form>

              {/* Popular Target Searches */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">
                  <TrendingUp size={14} /> Popular Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {TARGET_KEYWORDS_LIST.map((kw) => (
                    <button
                      key={kw}
                      type="button"
                      onClick={() => handleKeywordClick(kw)}
                      className="text-xs bg-white/5 hover:bg-[#D4AF37] hover:text-black text-gray-300 border border-white/10 hover:border-[#D4AF37] px-3.5 py-1.5 rounded-full transition-all text-left"
                    >
                      {kw}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
