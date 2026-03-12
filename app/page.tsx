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
import SocialSection from "@/components/SocialSection"; // Ensure this file exists in /components

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-bold tracking-tighter text-white mb-4"
            >
              NP
            </motion.div>
            <motion.div className="w-48 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-blue-500"
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedBackground />
            <HeroSection />
            
            <div className="max-w-6xl mx-auto px-6 space-y-32 pb-32">
              <section id="experience">
                <ExperienceTimeline />
              </section>

              <section id="education">
                <EducationSection />
              </section>

              <section id="skills">
                <SkillsSection />
              </section>

              {/* Added the Social Engagement section here */}
              <section id="social">
                <SocialSection />
              </section>

              <section id="achievements">
                <AchievementShowcase />
              </section>

              <section id="projects">
                <ProjectGrid />
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}