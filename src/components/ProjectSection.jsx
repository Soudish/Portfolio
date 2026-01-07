import React from 'react';
import { motion } from 'framer-motion';

const ProjectPlaceholder = ({ index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* 1. Terminal Header for Card */}
      <div className="absolute -top-6 left-0 px-3 py-1 bg-[#020617] border-t border-l border-r border-cyan-500/30 font-mono text-[8px] text-cyan-500 tracking-[0.2em]">
        LOCKED_VOLUME_0{index + 1}
      </div>

      {/* 2. Main Encrypted Card Body */}
      <div className="relative aspect-video bg-slate-950/40 border border-cyan-500/20 backdrop-blur-sm p-6 overflow-hidden flex flex-col justify-center items-center group-hover:border-purple-500/50 transition-all duration-500 shadow-[inset_0_0_20px_rgba(34,211,238,0.02)]">
        
        {/* Background "Scanning" Animation */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(34,211,238,0.2)_50%)] bg-[length:100%_4px] animate-pulse" />
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-10 bg-cyan-500/20 blur-xl"
          />
        </div>

        {/* 3. Restricted Data Icon */}
        <div className="relative mb-4">
          <div className="w-16 h-16 border-2 border-dashed border-cyan-900 flex items-center justify-center animate-[spin_10s_linear_infinite] group-hover:border-purple-500/40 transition-colors">
            <span className="text-2xl text-cyan-900 group-hover:text-purple-500 transition-colors">?</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-10 h-10 border border-cyan-500/20 animate-ping" />
          </div>
        </div>

        {/* 4. Text Data */}
        <div className="text-center relative z-10">
          <h3 className="text-white font-mono text-xs uppercase tracking-[0.4em] mb-2 group-hover:text-purple-400 transition-colors">
            ACCESS_PENDING
          </h3>
          <p className="text-slate-600 font-mono text-[9px] uppercase italic">
            Decrypting Manifest... 0x8F21
          </p>
        </div>

        {/* 5. Progress Indicator */}
        <div className="absolute bottom-4 left-6 right-6 h-0.5 bg-cyan-950/50">
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "35%" }} // Stays partially loaded for "Coming Soon"
            viewport={{ once: true }}
            className="h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee] opacity-30"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectSection() {
  // Creating a list of 6 placeholders for the repository
  const placeholders = Array.from({ length: 6 });

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 bg-transparent overflow-visible">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 relative">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-12 bg-cyan-500/50" />
             
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-none uppercase">
            REPOSITORY.<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] py-2 inline-block pr-12">MANIFEST</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {placeholders.map((_, idx) => (
            <ProjectPlaceholder key={idx} index={idx} />
          ))}
        </div>

        {/* System Footer Decoration */}
        <div className="mt-24 pt-8 border-t border-cyan-950 flex flex-wrap justify-between items-center gap-8 font-mono text-[9px] text-slate-700 uppercase tracking-widest">
          
        </div>
      </div>
    </section>
  );
}