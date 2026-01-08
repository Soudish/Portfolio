import React from 'react';
import { motion } from 'framer-motion';

const ProjectPlaceholder = ({ index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      // 1. 3D PERSPECTIVE TILT
      whileHover={{ y: -12, rotateX: 5, rotateY: 5 }}
      className="group relative perspective-1000"
    >
      {/* 2. MECHANICAL WINDOW HEADER */}
      <div className="absolute -top-7 left-0 flex items-center gap-4 bg-[#020617] border-t border-l border-r border-cyan-500/30 px-4 py-1.5 z-20">
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
        </div>
        <span className="font-mono text-[8px] text-cyan-500 uppercase tracking-[0.3em] font-black">
          VOL_STORAGE_0x0{index + 1}
        </span>
      </div>

      {/* 3. MAIN TERMINAL BODY */}
      <div className="relative aspect-video bg-slate-950/80 border-2 border-cyan-500/20 backdrop-blur-xl p-8 overflow-hidden group-hover:border-purple-500/60 transition-all duration-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
        
        {/* Holographic Light Sweep */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(transparent_50%,rgba(34,211,238,0.1)_50%)] bg-[length:100%_4px]" />
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent skew-x-12"
        />

        {/* 4. THE NEURAL CORE ICON */}
        <div className="relative mb-6 flex justify-center items-center h-24">
          <div className="absolute w-20 h-20 border border-dashed border-cyan-900 rounded-full animate-[spin_15s_linear_infinite] group-hover:border-purple-500/40" />
          <div className="absolute w-16 h-16 border border-cyan-500/10 rounded-full group-hover:border-purple-500/20" />
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-3xl text-cyan-500/40 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-500 font-black italic">
              ?
            </span>
            <div className="mt-2 w-8 h-[1px] bg-cyan-900 group-hover:bg-purple-900 transition-colors" />
          </div>
          
          {/* Active Ping */}
          <div className="absolute w-2 h-2 bg-cyan-500 rounded-full animate-ping opacity-20" />
        </div>

        {/* 5. DATA LABELS */}
        <div className="text-center relative z-10">
          <h3 className="text-white font-mono text-[11px] uppercase tracking-[0.5em] mb-3 font-black group-hover:text-purple-400 transition-colors">
            ACCESS_DENIED
          </h3>
          <div className="flex justify-center gap-3 opacity-40">
             <span className="text-[7px] font-mono text-cyan-600 border border-cyan-900 px-1">ST_244</span>
             <span className="text-[7px] font-mono text-cyan-600 border border-cyan-900 px-1">MEM_88%</span>
          </div>
        </div>

        {/* 6. SYSTEM STATUS BAR */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-cyan-950/20">
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "45%" }} 
            viewport={{ once: true }}
            className="h-full bg-gradient-to-r from-cyan-600 to-purple-600 relative"
          >
             <div className="absolute right-0 top-0 w-1 h-full bg-white shadow-[0_0_10px_#fff]" />
          </motion.div>
        </div>

        {/* Corner Brackets */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-500/40 group-hover:border-purple-500" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-500/40 group-hover:border-purple-500" />
        <div className="absolute bottom-4 left-2 w-2 h-2 border-b border-l border-cyan-500/40 group-hover:border-purple-500" />
        <div className="absolute bottom-4 right-2 w-2 h-2 border-b border-r border-cyan-500/40 group-hover:border-purple-500" />
      </div>
    </motion.div>
  );
};

export default function ProjectSection() {
  const placeholders = Array.from({ length: 6 });

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 bg-transparent overflow-hidden">
      
      {/* BACKGROUND RADAR SWEEP */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(168,85,247,0.03)_90deg,transparent_100deg)] animate-[spin_25s_linear_infinite] pointer-events-none" />

      {/* GIANT BACKGROUND WATERMARK */}
      <div className="absolute top-40 left-0 w-full text-center pointer-events-none select-none opacity-[0.02]">
        <h3 className="text-[20vw] font-black text-cyan-500 uppercase tracking-tighter italic">
          DATABASE
        </h3>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-32 relative">
          
          <h2 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter leading-none uppercase">
            REP.<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">MANIFEST</span>
          </h2>
        </div>

        {/* Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {placeholders.map((_, idx) => (
            <ProjectPlaceholder key={idx} index={idx} />
          ))}
        </div>

        
      </div>
    </section>
  );
}