import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = ["HOME", "SKILLS", "PROJECTS", "CONTACT"];

  return (
    // STEP 1: Move background and border here to ensure it spans 100% width
    <nav className="fixed top-0 left-0 w-full z-[100] font-mono bg-black/80 backdrop-blur-md border-b-2 border-cyan-500/50">
      
      {/* STEP 2: Use a container only for the content (Logo + Links) to keep them aligned with your Hero/Skills */}
      <div className="w-full px-6 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="text-cyan-500 font-bold text-xl animate-pulse">&gt;</span>
          <span className="text-lg font-black tracking-[0.2em] text-white uppercase">
            SOUDISH<span className="text-cyan-500">.SYS</span>
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center text-slate-400">
          {navLinks.map((link, index) => (
            <li key={link} className="relative group">
              <a href={`#${link.toLowerCase()}`} className="flex items-center gap-2 px-3 py-1 transition-all group-hover:text-cyan-400 group-hover:bg-cyan-500/10">
                <span className="text-[10px] text-cyan-700">0{index + 1}</span>
                <span className="tracking-widest font-bold uppercase">{link}</span>
              </a>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Retro Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative px-4 py-1 border-2 border-cyan-500 bg-cyan-900/20 shadow-[4px_4px_0px_#0891b2] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all group"
        >
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_2px] opacity-30" />
          <span className="text-cyan-400 font-black text-sm tracking-tighter uppercase flex items-center gap-2">
             <span className="text-[10px] animate-pulse">■</span>
             {open ? "EXIT" : "MENU"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b-4 border-cyan-600 shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:20px_20px]" />
            <ul className="relative z-10 flex flex-col items-center gap-0 py-4">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link}
                  className="w-full border-b border-cyan-900/30 last:border-none"
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-10 py-6 text-xl font-black text-slate-300 hover:text-cyan-400 transition-all uppercase group"
                  >
                    <div className="flex items-center gap-4">
                       <span className="text-xs font-mono text-cyan-700">ID:0{index}</span>
                       <span>{link}</span>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}