import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import connectAnimation from '../assets/lottie/Connect with us.json'; // Ensure the path matches your project structure

export default function ContactSection() {
  const [status, setStatus] = useState("AWAITING_INPUT");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("TRANSMITTING_DATA_PACKET...");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const formId = import.meta.env.VITE_FORMSPREE_ID;
    try {
      const response = await fetch("https://formspree.io/f/{formID}", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("PACKET_DELIVERED_SUCCESSFULLY");
        setIsSuccess(true);
        e.target.reset();
        setTimeout(() => setIsSuccess(false), 6000); // Overlay persists for 6 seconds
      } else {
        setStatus("TRANSMISSION_ERROR_0x404");
      }
    } catch (error) {
      setStatus("SIGNAL_LOST_CRITICAL_FAILURE");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Title with Glitch Aesthetics */}
        <div className="mb-20">

          <h2 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter leading-none uppercase">
            COMM.<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] py-2 inline-block pr-12">TERMINAL</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* --- LEFT: HOLOGRAPHIC SVG AREA --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            {/* Holographic Projection Base */}
            <div className="relative z-10 brightness-110 contrast-125 grayscale-[20%] hover:grayscale-0 transition-all duration-500">
              <Lottie animationData={connectAnimation} loop={true} />
            </div>

            {/* Ambient Glow & Radar Sweep */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-4 bg-cyan-500/20 blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-cyan-500/5 rounded-full animate-[ping_4s_linear_infinite]" />

            <div className="mt-12 p-6 border-l-4 border-cyan-500 bg-cyan-500/5 font-mono">
              <p className="text-[10px] text-cyan-400 uppercase tracking-widest leading-relaxed">
                Security: AES-256_ENCRYPTED <br />
                Node_Loc: NEW_TOWN_WB_700156 <br />
                Status: <span className="text-white">{status}</span>
              </p>
            </div>
          </motion.div>

          {/* --- RIGHT: THE INTERACTIVE TERMINAL --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            {/* Terminal Window Frame */}
            <div className="relative bg-slate-950/80 border-2 border-cyan-500/20 p-8 backdrop-blur-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">

              {/* Scanline & Noise Overlays */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-30" />
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-cyan-500 uppercase tracking-widest">User_Identity</label>
                    <input name="name" type="text" className="w-full bg-black/60 border border-cyan-900/50 p-4 text-white font-mono text-xs focus:border-cyan-400 transition-all outline-none" placeholder="Enter_Name..." required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-cyan-500 uppercase tracking-widest">Return_Path</label>
                    <input name="email" type="email" className="w-full bg-black/60 border border-cyan-900/50 p-4 text-white font-mono text-xs focus:border-cyan-400 transition-all outline-none" placeholder="User@Node.Sys" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-cyan-500 uppercase tracking-widest">Message_Payload</label>
                  <textarea name="message" rows="5" className="w-full bg-black/60 border border-cyan-900/50 p-4 text-white font-mono text-xs focus:border-cyan-400 transition-all outline-none resize-none" placeholder="Type_Message..." required />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status.includes("TRANSMITTING")}
                  className="w-full py-5 bg-cyan-500 text-black font-black uppercase text-sm tracking-[0.4em] italic shadow-[6px_6px_0px_#0891b2] transition-all disabled:opacity-50"
                >
                  {status.includes("TRANSMITTING") ? "UPLOADING..." : "EXECUTE_TRANSMISSION"}
                </motion.button>
              </form>

              {/* SUCCESS OVERLAY: Triggered on Packet Delivery */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                    animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 bg-cyan-500 flex flex-col items-center justify-center text-black p-10 text-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-7xl mb-6 font-black"
                    >
                      OK
                    </motion.div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 italic">
                      SYSTEM_SYNC_SUCCESS
                    </h3>
                    <p className="font-mono text-[11px] uppercase font-bold tracking-[0.3em] opacity-80">
                      Message_Packet_Relayed_To: SOUDISH.SYS
                    </p>
                    {/* Retro Glitch Lines */}
                    <div className="absolute inset-0 w-full h-[2px] bg-black/10 top-1/4 animate-pulse" />
                    <div className="absolute inset-0 w-full h-[1px] bg-black/10 top-3/4 animate-pulse" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* System Footer Log */}

      </div>
    </section>
  );
}