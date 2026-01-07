import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiInstagram, SiLeetcode } from 'react-icons/si';
import { Mail, Phone } from 'lucide-react';

const SocialLink = ({ name, icon, url, id }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="group relative flex flex-col items-center gap-2"
  >
    <div className="w-10 h-10 border border-cyan-500/30 flex items-center justify-center bg-cyan-500/5 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 transition-all duration-300">
      <div className="text-xl text-cyan-500 group-hover:text-cyan-400 transition-colors">
        {icon}
      </div>
    </div>
    <span className="text-[7px] font-mono text-cyan-900 group-hover:text-cyan-600 uppercase tracking-widest transition-colors">
      STATION_{id}
    </span>
  </motion.a>
);

export default function Footer() {
  const socialStations = [
    { name: 'GitHub', icon: <SiGithub />, url: 'https://github.com/Soudish', id: '01' },
    { name: 'Instagram', icon: <SiInstagram />, url: 'https://instagram.com/soudish__laha', id: '02' },
    { name: 'LeetCode', icon: <SiLeetcode />, url: 'https://leetcode.com/u/SoudishLaha/', id: '03' }
  ];

  return (
    <footer className="relative py-16 px-6 bg-transparent overflow-hidden border-t-2 border-cyan-500/20">
      {/* Background Bit-Stream */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap select-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="font-mono text-[100px] font-black text-cyan-500 flex gap-20"
        >
          <span>SOUDISH_LAHA.SYS</span>
          <span>TERMINAL_OFFLINE</span>
          <span>SOUDISH_LAHA.SYS</span>
          <span>TERMINAL_OFFLINE</span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {socialStations.map((station) => (
            <SocialLink key={station.name} {...station} />
          ))}
        </div>

        {/* Contact Comms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full border-y border-cyan-950/50 py-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[8px] font-mono text-cyan-700 uppercase tracking-[0.4em]">Direct_Relay_01</p>
            <a href="mailto:lahasoudish2006@gmail.com" className="flex items-center gap-2 text-white font-mono text-sm hover:text-cyan-400 transition-colors">
              <Mail size={14} className="text-cyan-500" /> lahasoudish2006@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[8px] font-mono text-cyan-700 uppercase tracking-[0.4em]">Direct_Relay_02</p>
            <div className="flex items-center gap-2 text-white font-mono text-sm tracking-widest">
              <Phone size={14} className="text-cyan-500 animate-pulse" /> +91 9907109984
            </div>
          </div>
        </div>

        {/* Final Metadata */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[9px] text-slate-600 uppercase tracking-[0.2em]">
          <p>Node: New_Town_WB_700156</p>
          <p className="animate-pulse">© 2026 SOUDISH_LAHA.SYS</p>
          <p>Status: TERMINAL_SECURE</p>
        </div>
      </div>
    </footer>
  );
}