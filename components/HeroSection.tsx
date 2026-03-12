"use client";
import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin } from "lucide-react"; // Added Github and Linkedin
import data from "@/data/resume.json";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative pt-20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center space-y-6"
      >
        <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-widest uppercase">
          {data.basics.location}
        </span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gradient">
          {data.basics.name}
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-zinc-400 px-6 leading-relaxed">
          {data.basics.summary}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {/* Main Action Button */}
          <button 
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
          >
            View Experience
          </button>

          {/* Resume Download */}
          <a 
            href="/resume.pdf" 
            download="Nihal_Pujari_Resume.pdf"
            className="px-8 py-3 border border-zinc-700 font-semibold rounded-full flex items-center gap-2 hover:bg-zinc-900 transition-all cursor-pointer"
          >
            <Download size={18} /> Resume
          </a>

          {/* GitHub Link */}
          <a 
            href={data.basics.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 border border-zinc-700 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
            aria-label="GitHub Profile"
          >
            <Github size={22} />
          </a>

          {/* LinkedIn Link */}
          <a 
            href={data.basics.links.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 border border-zinc-700 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
      >
        <ChevronDown className="text-zinc-500" />
      </motion.div>
    </section>
  );
}