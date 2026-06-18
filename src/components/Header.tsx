import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Offerings', href: '#offerings' },
    { name: 'Our Process', href: '#process' },
    { name: 'Find Us', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-brand-cream/90 backdrop-blur-xl shadow-sm py-4 border-b border-brand-blue/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          
          {/* Left: Logo */}
          <div className="flex items-center cursor-pointer">
            <span className="text-2xl font-bold tracking-tight text-brand-blue uppercase">Hydr8</span>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-brand-base hover:text-brand-blue transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://maps.google.com/?q=35+Elizabeth+Ave,+Linmeyer,+Johannesburg"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-blue px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-brand-blue/90 shadow-md shadow-brand-blue/20"
            >
              Visit Us in Linmeyer
              <ArrowRight className="h-4 w-4" />
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-brand-cream border border-brand-blue/20 text-brand-blue hover:bg-brand-blue/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-cream/95 backdrop-blur-2xl pt-24 pb-8 px-6 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-brand-base hover:text-brand-blue transition-colors uppercase"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href="https://maps.google.com/?q=35+Elizabeth+Ave,+Linmeyer,+Johannesburg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-blue w-full px-6 py-4 text-center font-bold text-white transition-all hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/20"
            >
              Visit Us in Linmeyer
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
