import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import headerLogo from '@/imports/vericath.png';

export function Header() {
  const [hidden, setHidden] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const lastScrollYRef = React.useRef(0);
  const scrollRafRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (scrollRafRef.current != null) return;
      scrollRafRef.current = requestAnimationFrame(() => {
        scrollRafRef.current = null;
        const currentScrollY = window.scrollY;
        const lastScrollY = lastScrollYRef.current;
        lastScrollYRef.current = currentScrollY;

        const shouldHide =
          currentScrollY > lastScrollY && currentScrollY > 100;

        if (shouldHide) {
          setHidden((h) => (h ? h : true));
          setMobileMenuOpen((open) => (open ? false : open));
        } else {
          setHidden((h) => (h ? false : h));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollRafRef.current != null) {
        cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = null;
      }
    };
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: hidden ? -100 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 will-change-transform bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={headerLogo} 
            alt="VeriCath" 
            className="h-auto w-40 md:w-[250px]"
          />
        </div>
        
        <nav className="hidden lg:flex gap-8 items-center">
          <a href="#story" className="text-gray-700 hover:text-[#67276D] transition-colors">
            Story
          </a>
          <a href="#insight" className="text-gray-700 hover:text-[#67276D] transition-colors">
            Insight
          </a>
          <a href="#solution" className="text-gray-700 hover:text-[#67276D] transition-colors">
            Solution
          </a>
          <a href="#market" className="text-gray-700 hover:text-[#67276D] transition-colors">
            Market
          </a>
          <a href="#outcome" className="text-gray-700 hover:text-[#67276D] transition-colors">
            Outcome
          </a>
          <a href="#team" className="text-gray-700 hover:text-[#67276D] transition-colors">
            Team
          </a>
          <a href="#invest" className="text-gray-700 hover:text-[#67276D] transition-colors" onClick={handleLinkClick}>
            Invest
          </a>
          <a 
            href="mailto:info@vericath.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#67276D] text-white rounded-lg hover:bg-[#8a3d8e] transition-all duration-300 hover:shadow-lg" 
            onClick={handleLinkClick}
          >
            Connect with us
            <ArrowRight className="w-4 h-4" />
          </a>
        </nav>

        <button
          className="lg:hidden inline-flex items-center gap-2 px-6 py-2.5 bg-[#67276D] text-white rounded-lg hover:bg-[#8a3d8e] transition-all duration-300 hover:shadow-lg hover:scale-105"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ 
              height: 'auto' 
            }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <motion.nav 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col gap-6 px-6 py-6"
            >
              <a href="#story" className="text-gray-700 hover:text-[#67276D] transition-colors" onClick={handleLinkClick}>
                Story
              </a>
              <a href="#insight" className="text-gray-700 hover:text-[#67276D] transition-colors" onClick={handleLinkClick}>
                Insight
              </a>
              <a href="#solution" className="text-gray-700 hover:text-[#67276D] transition-colors" onClick={handleLinkClick}>
                Solution
              </a>
              <a href="#market" className="text-gray-700 hover:text-[#67276D] transition-colors" onClick={handleLinkClick}>
                Market
              </a>
              <a href="#outcome" className="text-gray-700 hover:text-[#67276D] transition-colors" onClick={handleLinkClick}>
                Outcome
              </a>
              <a href="#team" className="text-gray-700 hover:text-[#67276D] transition-colors" onClick={handleLinkClick}>
                Team
              </a>
              <a href="#invest" className="text-gray-700 hover:text-[#67276D] transition-colors" onClick={handleLinkClick}>
                Invest
              </a>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#67276D] text-white rounded-lg hover:bg-[#8a3d8e] transition-all duration-300 hover:shadow-lg" onClick={handleLinkClick}>
                Connect with us
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}