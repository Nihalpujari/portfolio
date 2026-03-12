"use client";
import { motion } from "framer-motion";
import data from "@/data/resume.json";

export default function ProjectGrid() {
  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight">Technical Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative glass-card p-8 rounded-3xl overflow-hidden border border-white/5"
          >
            <div className="relative z-10">
              <span className="text-xs font-mono text-blue-500 uppercase tracking-widest">
                {project.stack}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4">
                {project.title}
              </h3>
              <ul className="text-zinc-400 space-y-2">
                {project.bullets?.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-blue-500/50">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}