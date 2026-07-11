import { X, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, cartTotal, itemCount } = useCart();

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
                <ShoppingBag size={24} /> Cart ({itemCount})
              </h2>
              <button 
                aria-label="Close cart"
                onClick={onClose}
                className="text-gray-400 hover:text-[#0F172A] transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center text-gray-500 py-12 flex flex-col items-center gap-4">
                  <ShoppingBag size={48} className="text-gray-300" />
                  <p className="text-lg">Your cart is empty.</p>
                  <Button onClick={onClose} variant="outline" className="mt-4">Continue Shopping</Button>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 p-4 rounded-xl items-center">
                    <ImagePlaceholder src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" fallbackText={item.name} fallbackIcon={false} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#0F172A] text-sm md:text-base line-clamp-1">{item.name}</h4>
                      <div className="text-[#D4AF37] font-bold mt-1">₹{item.price.toLocaleString('en-IN')}</div>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center bg-white border border-gray-200 rounded-md">
                          <button 
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-[#0F172A] hover:bg-gray-100 rounded-l-md transition-colors"
                          >
                            -
                          </button>
                          <span className="text-xs font-semibold w-6 text-center">{item.quantity}</span>
                          <button 
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-[#0F172A] hover:bg-gray-100 rounded-r-md transition-colors"
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
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 font-medium">Subtotal</span>
                  <span className="text-2xl font-heading font-bold text-[#0F172A]">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <Button className="w-full h-14 text-lg">Checkout</Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
