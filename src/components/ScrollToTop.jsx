import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] group"
        >
          {/* Main Button Container */}
          <div className="relative bg-slate-950/80 border-2 border-cyan-500/30 p-3 backdrop-blur-xl flex flex-col items-center justify-center transition-colors group-hover:border-cyan-400">
            
            {/* Terminal Arrow Icon */}
            <span className="text-cyan-500 text-xl font-black leading-none group-hover:animate-bounce">
              ▲
            </span>
            
            {/* System Label */}
            <span className="text-[7px] font-mono text-cyan-900 group-hover:text-cyan-400 uppercase tracking-tighter mt-1">
              0x_TOP
            </span>

            {/* Corner Decorative Brackets */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-cyan-500 opacity-50" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-cyan-500 opacity-50" />
            
            {/* Active Pulse Glow */}
            <div className="absolute -inset-1 bg-cyan-500/5 blur-md rounded-full -z-10 animate-pulse" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}