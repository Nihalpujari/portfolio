"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Download, Github, Linkedin } from "lucide-react";
import data from "@/data/resume.json";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:items-center md:justify-between">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-xl space-y-6 text-center md:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-none border-l-2 border-r-2 border-cyan-500/40 bg-zinc-950/80 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-[0.25em] text-cyan-400 backdrop-blur-md">
            [ {data.basics.location}]
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-emerald-400 to-cyan-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            {data.basics.name}
          </h1>
          <p className="text-md max-w-xl text-zinc-300 md:text-lg leading-relaxed font-mono">
            {">_ "} {data.basics.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6 md:justify-start justify-center font-mono">
            <button
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-none border border-cyan-400 bg-cyan-950/30 px-8 py-3 text-sm font-bold text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] uppercase tracking-wider"
            >
              Overview
            </button>

            <a
              href="/resume.pdf"
              download="Nihal_Pujari_Resume.pdf"
              className="flex items-center gap-2 rounded-none border border-emerald-500/50 bg-zinc-950/80 px-8 py-3 text-sm font-semibold text-emerald-400 backdrop-blur-md transition-all hover:bg-emerald-950 hover:border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] uppercase tracking-wider"
            >
              <Download size={18} /> Resume
            </a>

            <a
              href={data.basics.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-none border border-zinc-700/50 bg-zinc-900/50 text-zinc-400 backdrop-blur-md transition-all hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              aria-label="GitHub Profile"
            >
              <Github size={20} className="transition-transform group-hover:scale-110" />
            </a>

            <a
              href={data.basics.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-none border border-zinc-700/50 bg-zinc-900/50 text-zinc-400 backdrop-blur-md transition-all hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} className="transition-transform group-hover:scale-110" />
            </a>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
          >
            <div className="absolute inset-0 rounded-none bg-gradient-to-br from-cyan-500/30 via-emerald-500/20 to-transparent blur-3xl animate-pulse" />
            <div className="relative flex h-full w-full items-center justify-center bg-zinc-950/80 border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
               {/* Decorative corner brackets */}
               <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
               <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
               <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
               <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

              <Image
                src="/profile-portrait.svg"
                alt={`${data.basics.name} portrait illustration`}
                fill
                priority
                sizes="(min-width: 1024px) 320px, 260px"
                className="object-contain filter sepia hue-rotate-[180deg] saturate-200 contrast-125"
              />
            </div>
          </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
      >
        <ChevronDown className="text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" size={32} />
      </motion.div>
    </section>
  );
}