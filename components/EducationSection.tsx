"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import data from "@/data/resume.json";

export default function EducationSection() {
  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
        <GraduationCap className="text-blue-500" /> Education
      </h2>
      <div className="grid gap-6">
        {data.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-blue-400">{edu.institution}</p>
              </div>
              <span className="text-zinc-500 font-mono text-sm bg-zinc-900 px-3 py-1 rounded-full w-fit">
                {edu.dates}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}