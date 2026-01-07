import React from 'react';
import { motion } from 'framer-motion';

// 1. Animation Variants for the staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const InterestModule = ({ title, subtitle, icon, details }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02, y: -5 }} // Subtle "lift" on hover
      className="relative group"
    >
      {/* Terminal Window Header */}
      <div className="bg-cyan-950/40 border-t border-l border-r border-cyan-500/30 px-3 py-1.5 flex justify-between items-center backdrop-blur-md relative overflow-hidden">
        {/* Animated Scanline for the header */}
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent pointer-events-none"
        />
        
        <div className="flex gap-1.5 relative z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
          <motion.div 
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-500" 
          />
        </div>
        <span className="text-[7px] font-mono text-cyan-500/60 uppercase tracking-widest relative z-10">{title}</span>
      </div>

      {/* Content Body */}
      <div className="relative bg-slate-950/60 border-b border-l border-r border-cyan-500/20 p-5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-cyan-400/50 transition-all duration-300">
        
        {/* Glow effect that intensifies on hover */}
        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/[0.03] transition-colors pointer-events-none" />

        <div className="flex items-center gap-4 relative z-10">
          {/* Animated Icon Container */}
          <motion.div 
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className="w-10 h-10 shrink-0 border border-cyan-900 flex items-center justify-center text-xl text-cyan-500 bg-cyan-500/5 shadow-[inset_0_0_10px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
          >
            {icon}
          </motion.div>

          <div className="space-y-0.5">
            <h3 className="text-white font-mono text-[11px] uppercase tracking-[0.2em] font-black group-hover:text-cyan-400 transition-colors">
              {subtitle}
            </h3>
            <div className="flex items-center gap-2">
               <span className="h-1 w-1 bg-cyan-500 rounded-full animate-ping" />
               <p className="text-[8px] font-mono text-cyan-800 uppercase tracking-tighter">PROCESS_ACTIVE</p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-[9px] font-mono text-slate-500 leading-relaxed uppercase italic border-t border-cyan-950 pt-3 group-hover:text-slate-300 transition-colors relative z-10">
          {details}
        </p>

        {/* Floating "Bits" decoration inside the card */}
        <div className="absolute bottom-1 right-2 opacity-10 pointer-events-none">
           <p className="text-[6px] font-mono text-cyan-500 uppercase tracking-widest">SECURE_THREAD</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function InterestsSection() {
  const interests = [
    { title: "OPTIC_CAPTURE.exe", subtitle: "Photography", icon: "📸", details: "Capturing light data and preserving visual state buffers. Processing environmental geometry." },
    { title: "COSMOS_SIM.sys", subtitle: "Astrophysics", icon: "🌌", details: "Simulating stellar dynamics and mapping celestial coordinates. Analyzing macro-kernel physics." },
    { title: "CALC_ENGINE.dll", subtitle: "Mathematics", icon: "Σ", details: "Modeling continuous change and logic structures. Solving manifests to optimize processing." },
    { title: "AUDIO_STREAM.wav", subtitle: "Music", icon: "♫", details: "Parsing harmonic frequencies for neural stabilization. High influence from cultural root-files." },
    { title: "RESONANCE.io", subtitle: "Guitar", icon: "🎸", details: "Manual frequency modulation via mechanical string tension. Real-time analog signal generation." },
    { title: "VECTOR_RENDER.gfx", subtitle: "Drawing", icon: "✎", details: "Manual rendering of conceptual geometry. Translating neural imagery into structured output." }
  ];

  return (
    <section id="interests" className="relative py-24 px-6 md:px-12 bg-transparent overflow-hidden">
      
      {/* 2. LOCAL BACKGROUND ANIMATION: Falling "01" Binary bits */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, x: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ y: 800, opacity: [0, 1, 0] }}
            transition={{ 
              duration: Math.random() * 10 + 5, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute text-cyan-500 font-mono text-[10px]"
          >
            {Math.random() > 0.5 ? "0" : "1"}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header with "Glitch" intro */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          
          <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
            EXTERNAL.<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">THREADS</span>
          </h2>
        </motion.div>

        {/* 3. STAGGERED GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {interests.map((item, idx) => (
            <InterestModule key={idx} {...item} />
          ))}
        </motion.div>

        {/* Metadata Footer */}
        
      </div>
    </section>
  );
}