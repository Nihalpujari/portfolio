"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectGrid from "@/components/ProjectGrid";
import AchievementShowcase from "@/components/AchievementShowcase";
import AnimatedBackground from "@/components/AnimatedBackground";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import SocialSection from "@/components/SocialSection";

const contentVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function LoadingScreen() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      aria-label="Loading portfolio"
      aria-live="polite"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-4 text-4xl font-bold tracking-tighter text-white"
      >
        NP
      </motion.div>
      <motion.div className="h-[2px] w-48 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-full w-full bg-blue-500"
        />
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen />
        ) : (
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <AnimatedBackground />

            <header>
              <motion.div variants={contentVariants}>
                <HeroSection />
              </motion.div>
            </header>

            <div className="mx-auto max-w-6xl space-y-32 px-6 pb-32">
              <motion.section id="experience" variants={contentVariants}>
                <ExperienceTimeline />
              </motion.section>

              <motion.section id="education" variants={contentVariants}>
                <EducationSection />
              </motion.section>

              <motion.section id="skills" variants={contentVariants}>
                <SkillsSection />
              </motion.section>

              <motion.section id="social" variants={contentVariants}>
                <SocialSection />
              </motion.section>

              <motion.section id="achievements" variants={contentVariants}>
                <AchievementShowcase />
              </motion.section>

              <motion.section id="projects" variants={contentVariants}>
                <ProjectGrid />
              </motion.section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}