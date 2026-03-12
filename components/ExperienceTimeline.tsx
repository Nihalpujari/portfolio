"use client";
import { motion } from "framer-motion";
import data from "@/data/resume.json";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight">Professional Journey</h2>
      <div className="space-y-8">
        {data.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl group hover:border-blue-500/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">{exp.role} </h3>
                <p className="text-blue-400 font-medium">{exp.company} </p>
              </div>
              <span className="text-zinc-500 font-mono mt-2 md:mt-0">{exp.dates} </span>
            </div>
            <ul className="space-y-4 text-zinc-400">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-blue-500 mt-1.5">•</span>
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