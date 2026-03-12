"use client";
import { motion } from "framer-motion";
import data from "@/data/resume.json";

export default function SkillsSection() {
  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight">Technical Mastery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-400">Core Stack</h3>
          <div className="flex flex-wrap gap-3">
            {data.skills.technical.map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full glass-card text-sm border border-white/5 hover:border-blue-500/50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-blue-400">Certifications</h3>
          <div className="space-y-3">
            {data.certifications.map((cert) => (
              <div key={cert} className="p-3 rounded-xl glass-card text-sm flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}