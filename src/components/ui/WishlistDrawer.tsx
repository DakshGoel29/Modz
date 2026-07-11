import { X, Trash2, Heart, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WishlistDrawer({ isOpen, onClose }: WishlistDrawerProps) {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
    removeFromWishlist(item.id);
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
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-2xl font-heading font-bold text-[#0F172A] flex items-center gap-2">
                <Heart size={24} className="text-red-500 fill-red-500" /> Wishlist ({items.length})
              </h2>
              <button 
                aria-label="Close wishlist"
                onClick={onClose}
                className="text-gray-400 hover:text-[#0F172A] transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center text-gray-500 py-12 flex flex-col items-center gap-4">
                  <Heart size={48} className="text-gray-300" />
                  <p className="text-lg">Your wishlist is empty.</p>
                  <Button onClick={onClose} variant="outline" className="mt-4">Explore Products</Button>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-xl items-center relative group">
                    <ImagePlaceholder src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" fallbackText={item.name} fallbackIcon={false} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#0F172A] text-sm md:text-base line-clamp-1">{item.name}</h4>
                      <div className="text-[#D4AF37] font-bold mt-1">₹{item.price.toLocaleString('en-IN')}</div>
                      
                      <button 
                        onClick={() => handleAddToCart(item)}
                        className="mt-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#D4AF37] flex items-center gap-1 transition-colors"
                      >
                        <ShoppingCart size={14} /> Move to Cart
                      </button>
                    </div>
                    <button 
                      aria-label="Remove from wishlist"
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 text-gray-300 hover:text-red-500 p-2 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
