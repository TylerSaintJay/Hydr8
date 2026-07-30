import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Wifi, Clock, ShoppingBag, Droplets } from 'lucide-react';

interface HeaderProps {
  onOpenOrderDrawer: () => void;
  cartCount: number;
}

export default function Header({ onOpenOrderDrawer, cartCount }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real-time store status calculation based on South Africa local time
  useEffect(() => {
    const checkStoreStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
      const hour = now.getHours();

      let open = false;
      if (day >= 1 && day <= 5) {
        // Mon - Fri: 8am - 7pm
        open = hour >= 8 && hour < 19;
      } else if (day === 6) {
        // Sat: 8am - 5pm
        open = hour >= 8 && hour < 17;
      } else if (day === 0) {
        // Sun: 8am - 2pm
        open = hour >= 8 && hour < 14;
      }
      setIsOpenNow(open);
    };

    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Specials', href: '#specials' },
    { name: 'Offerings', href: '#offerings' },
    { name: 'Store Gallery', href: '#gallery' },
    { name: 'Water / RO System', href: '#water-education', isFeatured: true },
    { name: 'Braai & Wellness', href: '#wellness' },
    { name: 'Find Us', href: '#location' },
  ];

  return (
    <>
      {/* Top Banner Announcement Bar */}
      <div className="bg-brand-slate text-white text-xs font-semibold py-2 px-4 border-b border-white/10 z-50 relative">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
          
          {/* Amenity & Store Hours Status */}
          <div className="flex items-center gap-4">
            {/* Live Open Status Indicator */}
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <span className={`h-2 w-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="font-bold text-[11px] uppercase tracking-wider text-white">
                {isOpenNow ? 'Open Now' : 'Closed • Opens 8AM'}
              </span>
            </div>

            {/* Operating Hours Note */}
            <span className="hidden sm:flex items-center gap-1.5 text-white/70">
              <Clock className="h-3.5 w-3.5 text-brand-blue" />
              M-F: 8am-7pm | Sat: 8am-5pm | Sun: 8am-2pm
            </span>
          </div>

          {/* Lounge Amenity Badge */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-300 font-bold bg-amber-400/10 px-3 py-1 rounded-full border border-amber-300/20">
              <Wifi className="h-3.5 w-3.5" />
              Free WiFi • Sit & Stay
            </span>
            <span className="hidden md:inline text-white/50">📍 35 Elizabeth Ave, Linmeyer</span>
          </div>

        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`fixed top-9 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-brand-cream/90 backdrop-blur-xl shadow-md py-3.5 border-b border-brand-blue/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          
          {/* Left: Brand Wordmark */}
          <a href="#" className="flex items-center gap-2 cursor-pointer group">
            <div className="h-9 w-9 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <Droplets className="h-5 w-5" />
            </div>
            <span className="text-2xl font-black tracking-tight text-brand-blue uppercase">Hydr8</span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold tracking-wide uppercase transition-colors ${
                  link.isFeatured
                    ? 'bg-brand-blue/10 text-brand-blue px-3 py-1.5 rounded-xl border border-brand-blue/20 hover:bg-brand-blue hover:text-white'
                    : 'text-brand-base hover:text-brand-blue'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Quick Order Drawer Trigger & CTA */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Quick Order Button */}
            <button
              onClick={onOpenOrderDrawer}
              className="relative inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-emerald-500 shadow-md shadow-emerald-600/20 active:scale-95"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Quick Order</span>
              {cartCount > 0 && (
                <span className="h-5 w-5 rounded-full bg-amber-400 text-brand-slate flex items-center justify-center font-extrabold text-[10px]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Visit Directions CTA */}
            <a
              href="https://maps.google.com/?q=35+Elizabeth+Ave,+Linmeyer,+Johannesburg"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-2xl bg-brand-blue px-4 py-2 text-xs font-bold text-white transition-all hover:bg-brand-blue/90 shadow-md shadow-brand-blue/20"
            >
              Visit Store
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center h-9 w-9 rounded-full bg-brand-cream border border-brand-blue/20 text-brand-blue hover:bg-brand-blue/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-brand-cream/98 backdrop-blur-2xl pt-28 pb-8 px-6 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl font-bold uppercase tracking-wider transition-colors ${
                    link.isFeatured ? 'text-brand-blue' : 'text-brand-navy hover:text-brand-blue'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="space-y-3 pt-6 border-t border-brand-blue/10">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenOrderDrawer();
                }}
                className="w-full rounded-2xl bg-emerald-600 py-3.5 text-center font-bold text-white text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Open WhatsApp Quick Order</span>
              </button>

              <a
                href="https://maps.google.com/?q=35+Elizabeth+Ave,+Linmeyer,+Johannesburg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-2xl bg-brand-blue py-3.5 text-center font-bold text-white text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                Get Directions to Linmeyer
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
