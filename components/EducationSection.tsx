"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import data from "@/data/resume.json";

export default function EducationSection() {
  return (
    <section className="space-y-12">
      <div className="space-y-3">
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400">
          KNOWLEDGE // BASE // ACQUISITION
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <GraduationCap className="text-emerald-400" /> Academic 
        </h2>
      </div>
      <div className="grid gap-6">
        {data.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden p-6 rounded-none border border-cyan-500/20 bg-zinc-950/80 hover:bg-cyan-950/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
          >
            <div className="absolute top-0 left-0 w-8 h-[2px] bg-cyan-400" />
            <div className="absolute top-0 left-0 w-[2px] h-8 bg-cyan-400" />
            
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-cyan-300 transition-colors">{edu.degree}</h3>
                <p className="text-emerald-400/90 mt-1 font-mono text-sm">{edu.institution}</p>
              </div>
              <span className="text-cyan-300/80 font-mono text-sm bg-cyan-950/50 border border-cyan-500/30 px-4 py-1.5 rounded-none w-fit backdrop-blur-md">
                [{edu.dates}]
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}