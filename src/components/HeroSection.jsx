import React, { useState, useEffect, useCallback } from 'react';
import profileImage from '../assets/picture1.jpg';

const RetroTyping = ({ roles }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(false);
  const chars = "!@#$%^&*()_+{}[]|;:,.<>?/0123456789";

  const scramble = useCallback((targetWord) => {
    let iteration = 0;
    setIsScrambling(true);
    const interval = setInterval(() => {
      setDisplayText(prev => 
        targetWord.split("").map((char, index) => {
          if (index < iteration) return targetWord[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iteration >= targetWord.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }
      iteration += 1 / 3;
    }, 30);
  }, [chars]);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      const nextIndex = (currentRole + 1) % roles.length;
      setCurrentRole(nextIndex);
      scramble(roles[nextIndex]);
    }, 3000);
    if (displayText === "") scramble(roles[0]);
    return () => clearInterval(roleInterval);
  }, [currentRole, scramble, roles, displayText]);

  return (
    <div className="relative bg-cyan-950/20 border-l-2 border-cyan-500 p-3 md:p-5 w-full max-w-[400px] backdrop-blur-md mx-auto md:mx-0">
      <div className="flex items-center gap-3">
        <span className="text-cyan-500 font-mono animate-pulse font-bold">L_</span>
        <span className={`text-lg md:text-2xl font-mono uppercase ${isScrambling ? 'text-cyan-400' : 'text-white shadow-[0_0_10px_rgba(34,211,238,0.5)]'}`}>
          {displayText}
          <span className="inline-block w-2 h-5 bg-cyan-500 ml-1 animate-blink" />
        </span>
      </div>
    </div>
  );
};

export default function HeroSection() {
  const roles = ["WEB_DEVELOPER", "VIDEO_EDITOR", "PROBLEM_SOLVER"];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20 pb-10">
      
      {/* 1. Global CRT Screen Effect */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.12] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <div className="relative z-20 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* --- TOP: Profile Monitor (Order 1 on mobile) --- */}
        <div className="relative w-full max-w-[320px] sm:max-w-md md:max-w-none flex-1 flex justify-center items-center order-1 md:order-2">
          
          {/* THE BUBBLE: Styled as a System Alert Box */}
          <div className="absolute z-30 -top-8 -left-4 sm:-left-10 md:-top-12 md:-left-12 w-64 sm:w-72 animate-float">
            <div className="bg-black border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)] overflow-hidden">
              <div className="bg-cyan-500 px-2 py-0.5 flex justify-between items-center">
                <span className="text-[9px] font-black text-black">COMMS_LINK_v1.0</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-black/20 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-black/50 rounded-full" />
                </div>
              </div>
              <p className="p-3 text-[11px] sm:text-xs font-mono text-cyan-400 leading-tight">
                &gt; USER: SOUDISH_LAHA <br/>
                &gt; STATUS: LEARNING...
              </p>
            </div>
          </div>

          {/* MONITOR FRAME around your photo */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[30rem] lg:h-[30rem] p-2 bg-slate-900 border border-white/10 rounded-sm shadow-2xl">
            {/* HUD Corner Elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500" />
            
            <div className="relative w-full h-full overflow-hidden bg-black group">
              <img 
                src={profileImage} 
                alt="Soudish" 
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100" 
              />
              {/* Scanline Overlay over image only */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px]" />
            </div>
          </div>
        </div>

        {/* --- BOTTOM: Identity Section (Order 2 on mobile) --- */}
        <div className="flex-1 text-center md:text-left space-y-6 md:space-y-10 order-2 md:order-1 overflow-visible">
          <div className="space-y-2 overflow-visible">
            <p className="text-cyan-500 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
              // Authenticating_Identity
            </p>

            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-white leading-[0.8] tracking-tight overflow-visible">
              <span className="inline-block animate-glitch pr-6">SOUDISH</span>
              <br />
              {/* Clipping Fix: pr-16 and py-4 ensures the glow isn't cut off */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] pr-16 inline-block py-4">
                LAHA
              </span>
            </h1>
          </div>

          <RetroTyping roles={roles} />

          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
            <a href="#projects" className="px-10 py-4 bg-cyan-500 text-black font-black uppercase text-xs tracking-widest shadow-[4px_4px_0px_#0891b2] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
              RUN_PROJECTS.EXE
            </a>
            <a href="#contact" className="px-10 py-4 border border-cyan-500/50 text-cyan-500 font-bold uppercase text-xs tracking-widest hover:bg-cyan-500/10 transition-all">
              _CONTACT_INIT
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-blink { animation: blink 0.8s infinite; }
        
        @keyframes glitch {
          0%, 100% { text-shadow: -3px 0 #ff00c1, 3px 0 #00fff9; }
          50% { text-shadow: 3px 0 #ff00c1, -3px 0 #00fff9; }
        }
        .animate-glitch { animation: glitch 4s infinite; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}