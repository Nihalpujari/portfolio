"use client";
import { motion } from "framer-motion";
import data from "@/data/resume.json";

export default function SkillsSection() {
  return (
    <section className="space-y-12">
      <div className="space-y-3 mb-10">
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400">
          CAPABILITIES // SPECS
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white">Technical Mastery</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div className="space-y-6">
          <h3 className="text-xl font-mono text-emerald-400 flex items-center gap-2"><span className="text-cyan-500">{">"}</span> Core Parameters</h3>
          <div className="flex flex-wrap gap-3">
            {data.skills.technical.map((skill) => (
              <span key={skill} className="px-4 py-2 font-mono rounded-none border border-cyan-500/30 bg-zinc-950 text-sm text-cyan-50 hover:text-cyan-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-0.5 cursor-crosshair">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <h3 className="text-xl font-mono text-emerald-400 flex items-center gap-2"><span className="text-cyan-500">{">"}</span> Certifications</h3>
          <div className="space-y-3">
            {data.certifications.map((cert) => (
              <div key={cert} className="group p-4 rounded-none border border-cyan-500/20 bg-zinc-950 text-sm text-zinc-400 font-mono flex items-center gap-4 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300 hover:translate-x-1 cursor-crosshair">
                <div className="w-2 h-2 rounded-none bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] group-hover:scale-150 transition-transform" />
                <span className="group-hover:text-cyan-300 transition-colors">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}