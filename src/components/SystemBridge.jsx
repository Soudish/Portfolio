import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import bridgeAnimation from '../assets/lottie/bridge-animation.json';

// 1. IMPORT YOUR RESUME USING A RELATIVE PATH
// Assuming this file is in src/components and resume is in src/assets
import resumePDF from '../assets/Resume.pdf'; 

export default function SystemBridge() {
  const [quote, setQuote] = useState("");
  const quotes = [
    "The grid is a playground for the mind.",
    "First, solve the problem. Then, write the code.",
    "Hardware is the body; software is the soul.",
    "Code is the modern-day alchemy.",
    "Digital dreams are built with binary bricks.",
    "Simplicity is the soul of efficiency."
  ];

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <section className="relative min-h-[70vh] py-20 px-6 md:px-12 flex items-center bg-transparent overflow-visible">
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* --- LEFT COLUMN --- */}
        <div className="flex flex-col gap-16 md:gap-24 order-2 md:order-1">
          
          {/* THE QUOTE BOX */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group max-w-lg"
          >
            <div className="absolute -top-7 left-0 px-4 py-1.5 bg-[#020617] border-t-2 border-l-2 border-r-2 border-cyan-500/40 font-mono text-[10px] text-cyan-400 flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse" />
              INCOMING_FEED.TXT
            </div>

            <div className="relative bg-slate-950/60 border-2 border-cyan-500/20 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.05)] overflow-visible">
               <div className="absolute top-2 right-2 flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-900" />
                  <div className="w-2 h-2 rounded-full bg-cyan-500/40" />
               </div>

               <p className="text-2xl md:text-4xl font-mono text-white italic leading-tight tracking-tighter pr-4">
                  "{quote}"
               </p>

               <div className="mt-8 flex justify-between items-center text-[9px] font-mono text-cyan-900 uppercase">
                  <span>Packet_ID: 0x44F9</span>
                  <span className="animate-pulse">Transmission_Verified</span>
               </div>
               
               <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />
            </div>
          </motion.div>

          {/* --- THE RESUME BUTTON (Style Unchanged, Functionality Added) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-xs"
          >
            {/* 2. UPDATED HREF AND DOWNLOAD ATTRIBUTE */}
            <motion.a 
              href={resumePDF} 
              download="Soudish_Laha_Resume.pdf" // Renames the file for the user on download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center justify-center p-8 border-2 border-purple-500 bg-purple-500/5 shadow-[8px_8px_0px_rgba(124,58,237,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer"
            >
              <div className="relative z-10 flex items-center gap-4 text-purple-400">
                <span className="text-3xl animate-bounce">▼</span>
                <div className="flex flex-col">
                  <span className="font-mono font-black text-xl tracking-tighter uppercase leading-none">EXTRACT</span>
                  <span className="font-mono text-[9px] tracking-[0.2em] opacity-60">RESUME_V2.BIN</span>
                </div>
              </div>

              <div className="absolute top-1 left-1 w-1 h-1 bg-purple-900 rounded-full" />
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-purple-900 rounded-full" />
              <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </motion.a>
            <p className="text-[8px] font-mono text-slate-700 mt-4 uppercase tracking-[0.3em] text-center md:text-left pr-4">
              Authorized extraction only // CRC32: 0x82A1
            </p>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="absolute bottom-4 right-1/2 translate-x-1/2 md:right-24 md:translate-x-0 w-64 h-2 bg-cyan-500/30 blur-2xl animate-pulse" />
          
          <div className="relative w-full max-w-[550px] aspect-square brightness-110 contrast-125">
            <Lottie 
              animationData={bridgeAnimation} 
              loop={true} 
              className="drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            />
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500/20 animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-purple-500/20 animate-pulse" />
            <div className="absolute top-1/4 -right-8 hidden lg:block">
              <p className="text-[8px] font-mono text-cyan-600/60 vertical-text tracking-[1em] uppercase">
                Neural_Processing_Core
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}