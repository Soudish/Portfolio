import React from 'react';
import { motion } from 'framer-motion';

// 1. IMPORT YOUR IMAGE
import urlShortenerImg from '../assets/project/url.jpg'; 

const ProjectCard = ({ project, index }) => {
  const isLocked = !project;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12, rotateX: 2, rotateY: 2 }}
      className="group relative perspective-1000"
    >
      <CardContent project={project} index={index} isLocked={isLocked} />
    </motion.div>
  );
};

const CardContent = ({ project, index, isLocked }) => (
  <>
    {/* Mechanical Header */}
    <div className="absolute -top-7 left-0 flex items-center gap-4 bg-[#020617] border-t border-l border-r border-cyan-500/30 px-4 py-1.5 z-30">
      <div className="flex gap-1">
        <div className={`w-1 h-1 rounded-full ${isLocked ? 'bg-cyan-500 animate-pulse' : 'bg-green-500 animate-pulse'}`} />
        <div className="w-1 h-1 bg-cyan-500/30 rounded-full" />
      </div>
      <span className="font-mono text-[8px] text-cyan-500 uppercase tracking-[0.3em] font-black">
        {isLocked ? `VOL_STORAGE_0x0${index + 1}` : `PROJ_LIVE_NODE_0x0${index + 1}`}
      </span>
    </div>

    {/* Main Card Body */}
    <div className={`relative aspect-video bg-slate-950/90 border-2 backdrop-blur-xl overflow-hidden transition-all duration-700 shadow-[0_0_50px_rgba(0,0,0,0.5)] ${
      isLocked 
      ? 'border-cyan-500/20 group-hover:border-purple-500/60' 
      : 'border-green-500/20 group-hover:border-green-400'
    }`}>
      
      {/* 2. IMAGE / PLACEHOLDER AREA */}
      <div className="absolute inset-0 z-0">
        {!isLocked && project.image ? (
          <div className="relative w-full h-full">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700"
            />
            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-20" />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
             <div className="w-20 h-20 border border-dashed border-cyan-900 rounded-full animate-[spin_15s_linear_infinite] opacity-20" />
          </div>
        )}
      </div>

      {/* 3. CONTENT OVERLAY */}
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent">
        <div className="relative z-20">
          <h3 className={`font-mono text-[12px] uppercase tracking-[0.4em] mb-1 font-black transition-colors ${isLocked ? 'text-white/40' : 'text-green-400'}`}>
            {isLocked ? "ACCESS_DENIED" : project.title}
          </h3>
          <p className="text-[8px] font-mono text-slate-400 uppercase tracking-tighter line-clamp-2 mb-4">
            {isLocked ? "Decrypting Manifest... 0x8F21" : project.desc}
          </p>

          {/* 4. ACTION BUTTONS: Now with higher z-index and translateZ */}
          {!isLocked && (
            <div 
              className="flex gap-3 relative z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ transform: "translateZ(50px)" }}
            >
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[8px] font-mono text-white bg-green-500/20 border border-green-500 px-3 py-1.5 hover:bg-green-500 hover:text-black transition-all uppercase tracking-widest font-bold"
              >
                [ LIVE_RELAY ]
              </a>
              <a 
                href={project.source} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[8px] font-mono text-white bg-cyan-500/20 border border-cyan-500 px-3 py-1.5 hover:bg-cyan-500 hover:text-black transition-all uppercase tracking-widest font-bold"
              >
                [ SRC_CODE ]
              </a>
            </div>
          )}
        </div>
      </div>

      {/* System Status Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-cyan-950/20 z-30">
        <motion.div 
          initial={{ width: "0%" }}
          whileInView={{ width: isLocked ? "45%" : "100%" }} 
          viewport={{ once: true }}
          className={`h-full relative ${isLocked ? 'bg-gradient-to-r from-cyan-600 to-purple-600' : 'bg-green-500 shadow-[0_0_15px_#22c55e]'}`}
        />
      </div>
    </div>
  </>
);

export default function ProjectSection() {
  const myProjects = [
    {
      title: "SHORTURL_MAKER.SYS",
      tag: "WEB_TOOL",
      desc: "A high-speed URL shortening interface for optimizing data relay paths and link management.",
      url: "https://shorturl-maker.netlify.app/",
      source: "https://github.com/Soudish/ShortURL", // Replace with your repo link
      image: urlShortenerImg //
    },
  ];

  const displayList = [...myProjects, ...Array(6 - myProjects.length).fill(null)];

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 bg-[#020617] overflow-hidden">
      {/* Standard Background Watermarks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(168,85,247,0.02)_90deg,transparent_100deg)] animate-[spin_25s_linear_infinite] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* UNIFORM 9XL HEADER */}
        <div className="mb-32 relative text-left">
          <p className="text-cyan-500 font-mono tracking-[0.7em] text-[10px] uppercase mb-2 opacity-60">
            // Accessing_Project_Archive_Sub_Root...
          </p>
          <h2 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter leading-none uppercase">
            REP.<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] py-2 inline-block pr-12">MANIFEST</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {displayList.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}