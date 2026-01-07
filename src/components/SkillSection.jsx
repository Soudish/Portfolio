import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import brainAnimation from '../assets/lottie/Technology isometric ai robot brain.json'; // Ensure path is correct

const BlockProgressBar = ({ level }) => {
  const totalBlocks = 10;
  const filledBlocks = Math.floor((level / 100) * totalBlocks);

  return (
    <div className="flex gap-1.5 mt-2">
      {[...Array(totalBlocks)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, backgroundColor: "#0f172a" }}
          whileInView={{ 
            opacity: 1, 
            backgroundColor: i < filledBlocks ? "#22d3ee" : "#0f172a",
            boxShadow: i < filledBlocks ? "0 0 15px rgba(34, 211, 238, 0.7)" : "none"
          }}
          transition={{ delay: i * 0.05, duration: 0.2 }}
          viewport={{ once: true }}
          className="h-4 w-full border border-cyan-500/30 skew-x-[-20deg]"
        />
      ))}
    </div>
  );
};

const DiagnosticFolder = ({ title, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative mb-14 z-10" // Ensured content stays above the background brain
    >
      <div className="absolute -top-7 left-0 px-4 py-1.5 border-t-2 border-l-2 border-r-2 border-cyan-500/40 bg-[#020617] font-mono text-[9px] text-cyan-400">
        MODULE_REF:_{title.toUpperCase()}
      </div>

      <div className="relative bg-[#020617]/80 border-2 border-cyan-500/20 p-6 pt-12 backdrop-blur-sm shadow-[0_0_30px_rgba(34,211,238,0.05)] overflow-visible group hover:border-cyan-400/60 transition-all duration-500">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] opacity-10" />
        {skills.map((s, i) => (
          <div key={i} className="mb-6">
            <div className="flex justify-between font-mono text-[10px] text-cyan-400 mb-1 uppercase">
              <span>{s.name}</span>
              <span className="font-black">{s.level}%</span>
            </div>
            <BlockProgressBar level={s.level} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const partitions = [
    { category: "Langs_Env", skills: [{ name: "CPP_STDLIB", level: 90 }, { name: "PYTHON_3", level: 85 }, { name: "JAVA_CORE", level: 80 }, { name: "C_CORE", level: 88 }] },
    { category: "Web_Systems", skills: [{ name: "REACT_NEXT", level: 92 }, { name: "NODE_EXPRESS", level: 85 }, { name: "TAILWIND_UI", level: 95 }, { name: "MONGODB_SQL", level: 88 }] },
    { category: "Infra_Cloud", skills: [{ name: "AWS_SERVICES", level: 75 }, { name: "DOCKER_CONT", level: 82 }, { name: "GIT_VERSION", level: 90 }, { name: "CI_CD_CORE", level: 70 }] },
    { category: "Intelligence", skills: [{ name: "D_S_A", level: 88 }, { name: "MACHINE_LEARN", level: 78 }, { name: "NEURAL_NETS", level: 72 }, { name: "TYPESCRIPT", level: 80 }] }
  ];

  return (
    <section id="skills" className="relative min-h-screen py-24 px-6 md:px-12 bg-transparent overflow-hidden">
      
      {/* --- NEW: BACKGROUND AI BRAIN ANIMATION --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-full max-w-4xl opacity-10 md:opacity-15 grayscale contrast-125 brightness-150">
          <Lottie 
            animationData={brainAnimation} 
            loop={true} 
            style={{ filter: 'drop-shadow(0 0 50px rgba(34,211,238,0.2))' }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-24 text-center md:text-left">
          
          <h2 className="text-6xl sm:text-7xl md:text-9xl font-black text-white leading-none tracking-tighter italic overflow-visible">
            CORE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] py-2 inline-block pr-12">
              SYSCAP.LOG
            </span>
          </h2>
        </div>

        {/* Grid of Partitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {partitions.map((part, idx) => (
            <DiagnosticFolder key={idx} title={part.category} skills={part.skills} index={idx} />
          ))}
        </div>

        {/* Metadata Footer */}
        
      </div>
    </section>
  );
}