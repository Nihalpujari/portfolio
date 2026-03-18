"use client";
import { motion } from "framer-motion";
import data from "@/data/resume.json";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="space-y-12">
      <div className="space-y-3">
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400">
          LOG // SYSTEM // HISTORY
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
           <span className="text-emerald-500 shrink-0">{"{ }"}</span> Experience
        </h2>
      </div>
      <div className="space-y-8">
        {data.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden p-8 rounded-none border-l-4 border-cyan-500/80 bg-zinc-950/80 hover:bg-cyan-950/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 backdrop-blur-sm"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent" />

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors">{exp.role} </h3>
                <p className="text-emerald-400 font-mono tracking-wide">{exp.company} </p>
              </div>
              <span className="text-cyan-300/80 font-mono mt-3 md:mt-0 bg-cyan-950/50 border border-cyan-500/30 px-4 py-1.5 rounded-none text-sm w-fit backdrop-blur-md">[{exp.dates}]</span>
            </div>
            <ul className="space-y-4 text-zinc-400 text-base leading-relaxed font-mono text-sm mix-blend-screen w-full">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-emerald-500 mt-0.5 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">{">"}</span>
                  <span>{bullet} </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}