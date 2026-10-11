import { X, Trash2, ShoppingBag, MessageSquare, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, itemCount } = useCart();

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
              <h2 className="text-xl font-heading font-bold text-[#0F172A] flex items-center gap-2">
                <ShoppingBag size={20} className="text-[#D4AF37]" /> Saved Showcase Items ({itemCount})
              </h2>
              <button 
                aria-label="Close drawer"
                onClick={onClose}
                className="text-gray-400 hover:text-[#0F172A] transition-colors p-2"
              >
                <X size={20} />
              </button>
            </div>

            {/* Informational Notice */}
            <div className="bg-amber-50 px-6 py-3 border-b border-amber-100 flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
              <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Educational Showcase:</strong> EliteModz is a digital portfolio and inspiration catalog. We do not sell products, operate a physical storefront, or accept online orders or payments.
              </span>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center text-gray-500 py-16 flex flex-col items-center gap-4">
                  <ShoppingBag size={44} className="text-gray-300" />
                  <p className="text-base font-medium">No items saved in showcase list.</p>
                  <Button onClick={onClose} variant="outline" className="text-xs uppercase tracking-wider">
                    Browse Accessories
                  </Button>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 p-3.5 rounded-2xl items-center border border-gray-100">
                    <ImagePlaceholder src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl shrink-0" fallbackText={item.name} fallbackIcon={false} />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-semibold text-[#0F172A] text-xs md:text-sm truncate">{item.name}</h4>
                      <div className="text-gray-500 font-medium text-xs mt-0.5">Showcase Reference Item</div>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center bg-white border border-gray-200 rounded-md">
                          <button 
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-[#0F172A] hover:bg-gray-100 rounded-l-md transition-colors text-xs"
                          >
                            -
                          </button>
                          <span className="text-xs font-semibold w-6 text-center">{item.quantity}</span>
                          <button 
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-[#0F172A] hover:bg-gray-100 rounded-r-md transition-colors text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button 
                      aria-label="Remove item"
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 p-2 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="mb-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold block mb-1">Catalog Reference</span>
                  <span className="text-sm font-semibold text-gray-700">{items.length} item{items.length > 1 ? 's' : ''} saved for styling inspiration</span>
                </div>
                <Link to="/contact" onClick={onClose} className="block w-full">
                  <Button className="w-full h-12 text-xs font-bold uppercase tracking-wider bg-[#0F172A] hover:bg-[#D4AF37] hover:text-black flex items-center justify-center gap-2">
                    <MessageSquare size={16} />
                    <span>Inquire About Vehicle Fitment</span>
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
