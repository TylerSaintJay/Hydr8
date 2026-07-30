import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ChalkboardSpecials from './components/ChalkboardSpecials';
import Pillars from './components/Pillars';
import ProductOfferings from './components/ProductOfferings';
import WaterEducation from './components/WaterEducation';
import WaterLab from './components/WaterLab';
import Calculator from './components/Calculator';
import MediaCarousel from './components/MediaCarousel';
import StorePreview from './components/StorePreview';
import BraaiWellnessTips from './components/BraaiWellnessTips';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppDrawer, { CartItem } from './components/WhatsAppDrawer';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);

  const handleAddToCart = (product: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id || item.name === product.name);
      if (existing) {
        return prev.map(item =>
          (item.id === product.id || item.name === product.name)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: product.id || product.name.toLowerCase().replace(/\s+/g, '-'),
            name: product.name,
            price: product.price || 25,
            priceDisplay: product.priceDisplay || `R${product.price}`,
            quantity: 1,
            category: product.category || 'General'
          }
        ];
      }
    });
    setIsOrderDrawerOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
        .filter(item => item.quantity > 0)
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue/30 bg-brand-cream relative">
      
      {/* Header */}
      <Header
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
        cartCount={totalCartCount}
      />

      <main className="pt-8">
        <Hero />

        {/* Animated Daily Blackboard Specials */}
        <ChalkboardSpecials onAddToCart={handleAddToCart} />

        {/* 5 Lifestyle Pillars */}
        <Pillars />

        {/* 6 Product Offerings Showcase */}
        <ProductOfferings onAddToCart={handleAddToCart} />

        {/* Water Education Section: 8-Stage RO System */}
        <WaterEducation />

        {/* Water Lab Refill Rates & Master Label */}
        <WaterLab />

        {/* Cost & Savings Calculator */}
        <Calculator />

        {/* Storefront Media Carousel */}
        <MediaCarousel />

        {/* Store Preview Gallery */}
        <StorePreview />

        {/* Braai & Wellness Magazine Tips */}
        <BraaiWellnessTips />

        {/* Customer Testimonials */}
        <Testimonials />
      </main>

      <Footer />

      {/* Slide-over WhatsApp Order Drawer Modal */}
      <WhatsAppDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Sticky Quick Order Button (Bottom Right) */}
      <button
        onClick={() => setIsOrderDrawerOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-white"
        aria-label="Open WhatsApp Quick Order"
      >
        <ShoppingBag className="h-6 w-6" />
        {totalCartCount > 0 && (
          <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-amber-400 text-brand-slate font-black text-xs flex items-center justify-center border-2 border-white animate-bounce">
            {totalCartCount}
          </span>
        )}
      </button>

    </div>
  );
}
