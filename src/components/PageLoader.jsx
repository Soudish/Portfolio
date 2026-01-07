import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import loadingHandAnimation from '../assets/lottie/loading-hand.json';

const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const loadingStatuses = [
    "Initializing Neural Link...",
    "Mounting Cyber-Grid...",
    "Syncing Assets...",
    "Bypassing Firewalls...",
    "System Ready."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // Slightly slower for a more "intentional" feel

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Cycle through status messages based on progress
    const index = Math.min(Math.floor(progress / 25), loadingStatuses.length - 1);
    setStatusIndex(index);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] overflow-hidden font-mono">
      
      {/* 1. Enhanced Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
          }}
        />
      </div>

      {/* 2. Cyber Scanline & Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 w-full h-[2px] bg-cyan-500/20 shadow-[0_0_15px_#22d3ee] top-0 animate-[scan_4s_linear_infinite]" />

      <div className="relative flex flex-col items-center justify-center">
        
        {/* 3. The "Reactor" HUD */}
        <div className="relative mb-12">
          {/* Outer Orbiting Ring */}
          <div className="absolute -inset-10 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
          
          {/* Pulsing Glitch Ring */}
          <div className="absolute -inset-6 border-2 border-t-cyan-500 border-b-purple-500 rounded-full animate-pulse opacity-40" />

          {/* Core Animation Container */}
          <div className="relative w-44 h-44 sm:w-60 sm:h-60 flex items-center justify-center bg-slate-900/60 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl overflow-hidden">
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)]" />
            
            <Lottie
              animationData={loadingHandAnimation}
              loop
              autoplay
              style={{ width: '75%', height: '75%', filter: 'drop-shadow(0 0 10px rgba(34,211,238,0.5))' }}
            />
          </div>
        </div>

        {/* 4. Data Terminal readout */}
        <div className="w-64 space-y-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" />
              <p className="text-cyan-400 text-[10px] tracking-[0.4em] uppercase font-bold">
                {loadingStatuses[statusIndex]}
              </p>
            </div>
            
            {/* Precision Progress Bar */}
            <div className="w-full h-1 bg-slate-800/50 rounded-full relative overflow-hidden border border-white/5">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-600 to-cyan-400 transition-all duration-300 ease-out shadow-[0_0_10px_#22d3ee]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="w-full flex justify-between mt-2">
               <span className="text-[10px] text-slate-500 uppercase">Load_Seq</span>
               <span className="text-[10px] text-cyan-500/80 font-bold">{progress}%</span>
            </div>
          </div>
        </div>

        {/* 5. Random Bit Data (Bottom Decoration) */}
        <div className="absolute bottom-10 left-10 hidden lg:block text-[8px] text-slate-600 text-left">
          <p>SRC: PORTFOLIO_V2.0</p>
          <p>LOC: NEW_TOWN_WB</p>
          <p>STABLE_BUILD_2026</p>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: -5%; }
          100% { top: 105%; }
        }
        
        /* Subtle glitch effect on the loader container */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;