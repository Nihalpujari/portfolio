"use client";
import { motion } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";
import data from "@/data/resume.json";

export default function AchievementShowcase() {
  const icons = [<Trophy key="1" />, <Star key="2" />, <Award key="3" />];

  return (
    <motion.section
      className="space-y-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="space-y-3">
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400">
          RECOGNITION // IMPACT
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-emerald-400 to-transparent" />
          <span className="text-white">System Highlights</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative overflow-hidden rounded-none border border-cyan-500/20 bg-zinc-950 shadow-[0_0_15px_rgba(6,182,212,0.05)] transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-900/20 via-transparent to-emerald-900/20 blur-2xl transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-emerald-400" />
            <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-emerald-400" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-none border border-cyan-500/50 bg-zinc-900 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 group-hover:border-cyan-400 transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                {icons[idx % icons.length]}
              </div>
              <h4 className="text-lg font-bold mb-2 text-zinc-100 group-hover:text-cyan-300 transition-colors">
                {ach.title}
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed flex-grow font-mono">
                {ach.context}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}