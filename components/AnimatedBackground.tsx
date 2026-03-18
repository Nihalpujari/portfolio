"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Create a pure CSS/Framer motion data-particle effect
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-zinc-950">
      {/* Dynamic Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #06b6d4 1px, transparent 1px),
            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />

      {/* Cyber/AI Glows */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-cyan-700/20 blur-[120px] mix-blend-screen"
        animate={{ x: [0, 30, -20, 0], y: [0, 20, -30, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute bottom-[-10rem] right-[-10rem] h-[50rem] w-[50rem] rounded-full bg-emerald-600/15 blur-[150px] mix-blend-screen"
        animate={{ x: [0, -40, 30, 0], y: [0, -30, 40, 0], scale: [1, 1.2, 0.8, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Data Nodes */}
      {mounted && [...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.3
          }}
          animate={{ 
            y: [null, Math.random() * -200 - 100],
            opacity: [null, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950/90" />
    </div>
  );
}