"use client";
import { motion } from "framer-motion";
import { Users, Code2 } from "lucide-react";
import data from "@/data/resume.json";

export default function SocialSection() {
  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
        <Users className="text-blue-500" /> Leadership & Engagement
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.social_engagement.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all flex items-start gap-4"
          >
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Code2 className="text-blue-500" size={20} />
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}