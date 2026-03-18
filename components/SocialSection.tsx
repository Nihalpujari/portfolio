"use client";
import { motion } from "framer-motion";
import { Users, Code2 } from "lucide-react";
import data from "@/data/resume.json";

export default function SocialSection() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400">
          NETWORK // PROTOCOLS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-emerald-400 to-transparent" />
          <span className="inline-flex items-center gap-2 text-white">
            <Users className="text-emerald-500" />
            <span>Community & Node Leadership</span>
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.social_engagement.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex items-start gap-5 rounded-none border border-cyan-500/20 bg-zinc-950 p-8 shadow-xl shadow-cyan-500/5 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-sm"
          >
            <div className="p-4 bg-zinc-900 border border-cyan-500/30 group-hover:bg-cyan-950/50 group-hover:scale-110 transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.1)] relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-emerald-400" />
              <Code2 className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={24} />
            </div>
            <p className="text-zinc-400 text-base leading-relaxed pt-1 group-hover:text-zinc-100 transition-colors font-mono text-sm">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}