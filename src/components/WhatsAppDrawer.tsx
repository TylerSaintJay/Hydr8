import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, Send, MessageCircle } from 'lucide-react';
import productsData from '../data/productsData.json';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  quantity: number;
  category: string;
}

interface WhatsAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
  onAddToCart: (item: any) => void;
}

export default function WhatsAppDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onClearCart,
  onAddToCart
}: WhatsAppDrawerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const phoneNumber = '27621836915'; // Hydr8 Official WhatsApp 062 183 6915

  const categories = ['All', 'Water', 'Biltong', 'Coffee', 'Bakery', 'Spices'];

  const allProducts = productsData.flatMap(cat => cat.items);

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return '';
    let text = `*Hi Hydr8 (Linmeyer)! I'd like to place an order:*\n\n`;
    cart.forEach((item, i) => {
      text += `${i + 1}. ${item.quantity}x *${item.name}* (${item.priceDisplay}) = R${(item.price * item.quantity).toFixed(2)}\n`;
    });
    text += `\n*Total Estimated Order:* R${totalAmount.toFixed(2)}\n`;
    text += `\n📍 *Pickup Location:* 35 Elizabeth Ave, Linmeyer\n_Please confirm availability and prep time!_`;
    return encodeURIComponent(text);
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-brand-slate/70 backdrop-blur-md"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-brand-cream border-l border-brand-blue/10 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-slate text-white p-6 relative flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white uppercase tracking-wider">Quick Order via WhatsApp</h3>
                  <p className="text-xs text-emerald-400 font-medium">Fast Pickup • 35 Elizabeth Ave</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Category Filter Tabs */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block mb-2">
                  Browse Menu Items
                </span>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                        selectedCategory === cat
                          ? 'bg-brand-blue text-white shadow-md'
                          : 'bg-white text-brand-navy border border-brand-blue/10 hover:bg-brand-cream-warm'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Add Grid */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block">
                  Select Items to Add
                </span>
                <div className="grid grid-cols-1 gap-2 max-h-52 overflow-y-auto pr-1">
                  {filteredProducts.map((prod) => {
                    const inCart = cart.find(c => c.id === prod.id);
                    return (
                      <div
                        key={prod.id}
                        className="flex items-center justify-between p-3 rounded-2xl bg-white border border-brand-blue/10 hover:border-brand-blue/30 transition-all shadow-sm"
                      >
                        <div>
                          <div className="text-sm font-bold text-brand-navy">{prod.name}</div>
                          <div className="text-xs font-semibold text-brand-blue">{prod.priceDisplay} <span className="text-brand-base/40 text-[10px]">/{prod.unit}</span></div>
                        </div>
                        {inCart ? (
                          <div className="flex items-center gap-2 bg-brand-cream-warm px-2 py-1 rounded-xl border border-brand-blue/10">
                            <button
                              onClick={() => onUpdateQuantity(prod.id, -1)}
                              className="h-6 w-6 rounded-lg bg-white text-brand-navy flex items-center justify-center font-bold shadow-xs hover:bg-brand-blue hover:text-white transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-xs font-bold text-brand-navy px-1">{inCart.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(prod.id, 1)}
                              className="h-6 w-6 rounded-lg bg-brand-blue text-white flex items-center justify-center font-bold shadow-xs hover:bg-brand-blue/90 transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => onAddToCart(prod)}
                            className="px-3 py-1.5 rounded-xl bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-white font-bold text-xs transition-colors flex items-center gap-1"
                          >
                            <Plus className="h-3.5 w-3.5" />
                            Add
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Cart Items List */}
              <div className="pt-4 border-t border-brand-blue/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                    Your Selected Order ({totalItemsCount})
                  </span>
                  {cart.length > 0 && (
                    <button
                      onClick={onClearCart}
                      className="text-xs text-rose-600 font-bold hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-8 bg-white/60 rounded-2xl border border-dashed border-brand-blue/20">
                    <ShoppingBag className="h-8 w-8 text-brand-navy/30 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-brand-navy/60">Your cart is empty.</p>
                    <p className="text-xs text-brand-navy/40 mt-1">Tap "+ Add" on items above to build your order.</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 rounded-2xl bg-white border border-brand-blue/10 shadow-xs"
                      >
                        <div className="flex-1 pr-2">
                          <div className="text-sm font-bold text-brand-navy">{item.name}</div>
                          <div className="text-xs font-semibold text-brand-blue">
                            R{(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 bg-brand-cream-warm px-2 py-1 rounded-xl">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="h-6 w-6 rounded-lg bg-white text-brand-navy flex items-center justify-center font-bold shadow-xs hover:bg-brand-blue hover:text-white transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-xs font-bold text-brand-navy px-1">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="h-6 w-6 rounded-lg bg-brand-blue text-white flex items-center justify-center font-bold shadow-xs hover:bg-brand-blue/90 transition-colors"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Footer Checkout Action */}
            <div className="p-6 bg-white border-t border-brand-blue/10 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-brand-navy uppercase tracking-wider">Total Order:</span>
                <span className="text-2xl font-black text-brand-blue">R{totalAmount.toFixed(2)}</span>
              </div>

              {cart.length > 0 ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 flex items-center justify-center gap-3 transition-all shadow-lg shadow-emerald-600/20 active:scale-98"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Order via WhatsApp</span>
                </a>
              ) : (
                <button
                  disabled
                  className="w-full rounded-2xl bg-gray-200 text-gray-400 font-bold py-4 px-6 text-center cursor-not-allowed"
                >
                  Select Items to Order
                </button>
              )}
              <p className="text-[11px] text-center text-brand-navy/50 font-medium mt-3">
                Direct WhatsApp link to Hydr8 Linmeyer (062 183 6915)
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
