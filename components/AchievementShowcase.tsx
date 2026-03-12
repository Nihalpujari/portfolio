"use client";
import { motion } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";
import data from "@/data/resume.json";

export default function AchievementShowcase() {
  const icons = [<Trophy key="1" />, <Star key="2" />, <Award key="3" />];

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight">Impact & Recognition</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl border-t-2 border-t-blue-500/50"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
              {icons[idx % icons.length]}
            </div>
            <h4 className="text-xl font-bold mb-2">{ach.title} </h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{ach.context} </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}