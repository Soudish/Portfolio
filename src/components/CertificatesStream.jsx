import React from 'react';
import { motion } from 'framer-motion';

// 1. IMPORT (Ensure extensions match your local files exactly)
import publicSpeakingImg from '../assets/Certificates/publicspeaking.png';
import softSkillImg from '../assets/Certificates/softskill.png';
import javaScriptImg from '../assets/Certificates/JavaScript.png';
import educathonImg from '../assets/Certificates/Educ-a-thon.png';
import innovathonImg from '../assets/Certificates/Innov-a-thon.png';
import pythonImg from '../assets/Certificates/python.png';
import openSourceImg from '../assets/Certificates/Open-source.png';
import photoContestImg from '../assets/Certificates/photo.png';
import pythonFlaskImg from '../assets/Certificates/python2.png';
import posterDesignImg from '../assets/Certificates/poster.png';
import techquizImg from '../assets/Certificates/techquiz.jpg';

const CertificateCard = ({ cert, index }) => {
  return (
    // Increased width for "Little Big" images
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="flex-shrink-0 w-[300px] md:w-[420px] px-4 group perspective-1000"
    >
      <div className="relative bg-slate-950/60 border-2 border-cyan-500/20 p-2 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-cyan-400 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">

        {/* Dynamic HUD Scanline */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-30" />

        {/* Header Metadata */}
        <div className="flex justify-between items-center mb-2 px-2 border-b border-cyan-900/50 pb-2">
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 bg-red-500/50 rounded-full" />
            <div className="w-1.5 h-1.5 bg-yellow-500/50 rounded-full" />
            <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse rounded-full" />
          </div>
          <span className="text-[8px] font-mono text-cyan-600 tracking-widest uppercase font-black">
            SYNC_ID: {index + 1024}
          </span>
        </div>

        {/* Larger Image Container */}
        <div className="relative aspect-video overflow-hidden bg-black border border-cyan-900/30">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-105 transition-all duration-1000 ease-in-out"
          />
          {/* Holographic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="mt-4 font-mono px-2 pb-2">
          <h4 className="text-white text-[11px] md:text-[13px] uppercase tracking-tighter truncate font-black group-hover:text-cyan-400 transition-colors">
            {cert.title}
          </h4>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-[1px] bg-cyan-500/30" />
              <span className="text-[7px] text-slate-500 uppercase tracking-widest">Protocol: Secure_Verified</span>
            </div>
            <span className="text-[8px] text-cyan-900 font-bold tracking-tighter">0x{index.toString(16).toUpperCase()}FF</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CertificateStream() {
  const certs = [
    { title: "PUBLIC_SPEAKING_MASTERCLASS.SYS", image: publicSpeakingImg },
    { title: "ENGLISH_RHYTHM_SOFT_SKILLS.SYS", image: softSkillImg },
    { title: "WEB_DEV_JS_PHP_PYTHON.SYS", image: javaScriptImg },
    { title: "EDUC_A_THON_PRELIMS_2024.EXE", image: educathonImg },
    { title: "INNOV_A_THON_SAFALYA_2025.EXE", image: innovathonImg },
    { title: "PYTHON_30+_HANDS_ON_TASKS.SYS", image: pythonImg },
    { title: "OPEN_SOURCE_HACKTOBERFEST.EXE", image: openSourceImg },
    { title: "PHOTOGRAPHY_CONTEST_CLASH.EXE", image: photoContestImg },
    { title: "PYTHON_FLASK_HTML_ESSENTIALS.SYS", image: pythonFlaskImg },
    { title: "POSTER_DESIGN_CLASH_2024.EXE", image: posterDesignImg },
    { title: "TECH_QUIZ_MASTERMIND_2023.EXE", image: techquizImg },
  ];

  // Tripled for seamless infinite scrolling
  const scrollingCerts = [...certs, ...certs, ...certs];

  return (
    <section className="relative py-32 bg-transparent overflow-hidden border-t border-cyan-500/10">

      {/* Dynamic Background: Rotating Radar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(34,211,238,0.03)_90deg,transparent_100deg)] animate-[spin_15s_linear_infinite] pointer-events-none z-0" />

      <div className="relative z-10 w-full">
        {/* Section Header with Glitch Intro */}
        <div className="mb-20 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter leading-none uppercase">
            VAULT.<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] py-2 inline-block pr-12">DOCS</span>
          </h2>
        </div>

        {/* --- SINGLE LARGE TRACK --- */}
        <div className="flex py-10 relative group/track">
          {/* Shaders for edge fading */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#020617] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#020617] to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-33.33%"] }} // Adjusted for tripled array
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
              pauseOnHover: true // Pauses scroll so user can read the larger cards
            }}
          >
            {scrollingCerts.map((cert, idx) => (
              <CertificateCard key={`${idx}`} cert={cert} index={idx % certs.length} />
            ))}
          </motion.div>
        </div>



      </div>
    </section>
  );
}