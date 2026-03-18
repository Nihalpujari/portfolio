"use client";
import { motion } from "framer-motion";
import data from "@/data/resume.json";

const projectImages = [
  "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1920&auto=format&fit=crop", // Sound/AI wrapper
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop", // Cyber Security / Network
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop", // Data Analytics
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop", // Digital globe/Network
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1920&auto=format&fit=crop"  // Cyber abstract / payment
];

export default function ProjectGrid() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400">
          DATA // MODELS // APPS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent" />
          <span className="text-white">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-none border border-cyan-500/20 bg-zinc-950 shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]"
          >
            <div className="absolute inset-0 z-0">
              <img
                src={projectImages[idx % projectImages.length]}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-cyan-900/20" />
            </div>

            <div className="relative z-10 flex h-full flex-col gap-4 p-8">
              <span className="inline-flex w-fit items-center rounded-none bg-cyan-950/80 border-l-2 border-cyan-400 px-3 py-1 text-xs font-mono uppercase tracking-widest text-cyan-400 backdrop-blur-md">
                [{project.stack}]
              </span>
              <h3 className="text-2xl font-bold mt-1 text-zinc-100 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <ul className="text-zinc-400 space-y-2 text-sm leading-relaxed font-mono">
                {project.bullets?.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-emerald-400 mt-1 shadow-emerald-500/50 drop-shadow-md">{">"}</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-cyan-500/80 via-cyan-500/20 to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}