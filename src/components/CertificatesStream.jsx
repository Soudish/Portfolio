import React from 'react';
import { motion } from 'framer-motion';

const CertificateCard = ({ cert, index }) => {
  return (
    <div className="flex-shrink-0 w-[200px] md:w-[260px] px-2 group">
      <div className="relative bg-slate-950/40 border border-cyan-500/20 p-1.5 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.02)] group-hover:border-cyan-400 transition-all duration-500 group-hover:-translate-y-1">
        
        {/* Card Scanline */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />

        <div className="flex justify-between items-center mb-1 px-1 border-b border-cyan-950/50 pb-1">
          <span className="text-[7px] font-mono text-cyan-800 tracking-tighter uppercase font-bold">DATA_REC_{index + 1}</span>
          <div className="w-1 h-1 bg-cyan-500/40 group-hover:bg-cyan-400 animate-pulse" />
        </div>

        <div className="relative aspect-video overflow-hidden bg-black border border-white/5">
          <img 
            src={cert.image} 
            alt={cert.title} 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
          />
        </div>

        <div className="mt-2 font-mono px-1">
          <h4 className="text-white text-[9px] uppercase tracking-tighter truncate leading-none mb-1 group-hover:text-cyan-400">
            {cert.title}
          </h4>
          <div className="flex justify-between text-[6px] text-slate-700 uppercase">
            <span>Status: Decrypted</span>
            <span>0x{index}7F</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CertificateStream() {
  const certs = [
    { title: "ADVANCED_REACT.SYS", image: "https://via.placeholder.com/400x225/020617/22d3ee?text=CERT_A" },
    { title: "AWS_ARCHITECT.SYS", image: "https://via.placeholder.com/400x225/020617/22d3ee?text=CERT_B" },
    { title: "FULLSTACK_DEV.SYS", image: "https://via.placeholder.com/400x225/020617/22d3ee?text=CERT_C" },
    { title: "DSA_EXPERTISE.SYS", image: "https://via.placeholder.com/400x225/020617/22d3ee?text=CERT_D" },
    { title: "NODE_BACKEND.SYS", image: "https://via.placeholder.com/400x225/020617/22d3ee?text=CERT_E" },
    { title: "CYBER_SEC_V1.SYS", image: "https://via.placeholder.com/400x225/020617/22d3ee?text=CERT_F" },
  ];

  const row1 = [...certs, ...certs];
  const row2 = [...certs.reverse(), ...certs];

  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-cyan-500/10">
      
      {/* --- BACKGROUND EFFECTS LAYER --- */}
      
      {/* 1. Large Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <h3 className="text-[15vw] font-black text-cyan-500/[0.03] uppercase tracking-tighter italic">
          Credentials
        </h3>
      </div>

      {/* 2. HUD Radar Sweep */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.05)_90deg,transparent_100deg)] animate-[spin_10s_linear_infinite] pointer-events-none z-0" />

      {/* 3. Decorative Frame Brackets */}
      <div className="absolute inset-x-0 top-0 h-20 border-l border-r border-cyan-500/10 mx-6 md:mx-12 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-20 border-l border-r border-cyan-500/10 mx-6 md:mx-12 pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* Section Header */}
        <div className="mb-16 px-6 md:px-12 relative">
          <div className="absolute -left-2 top-0 w-1 h-full bg-cyan-500/40 animate-pulse" />
          <p className="text-cyan-500 font-mono tracking-[0.5em] text-[10px] uppercase mb-1 opacity-70">
            &gt; Initializing_Credential_Sync...
          </p>
          <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter leading-none">
            VAULT.<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">DOCS</span>
          </h2>
        </div>

        {/* --- DUAL ROW CONTENT TRACKS --- */}
        <div className="flex flex-col gap-6 py-8 relative">
          {/* Track Glow Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none" />

          {/* ROW 1 */}
          <div className="flex overflow-hidden relative">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {row1.map((cert, idx) => (
                <CertificateCard key={`row1-${idx}`} cert={cert} index={idx % certs.length} />
              ))}
            </motion.div>
          </div>

          {/* ROW 2 */}
          <div className="flex overflow-hidden relative">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {row2.map((cert, idx) => (
                <CertificateCard key={`row2-${idx}`} cert={cert} index={idx % certs.length} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* System Metadata Footer */}
        
      </div>
    </section>
  );
}