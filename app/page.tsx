"use client"

import { motion } from "framer-motion"
import { BackgroundWaves } from "@/components/background-waves"
import { NavHeader } from "@/components/nav-header"
import { ProjectSection } from "@/components/project-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { fadeIn, staggerContainer } from "@/lib/motion"
import { CursorFollow } from "@/components/cursor-follow"
import { TypewriterEffect } from "@/components/typewriter-effect"

export default function Home() {
  return (
    <>
      <BackgroundWaves />
      <NavHeader />

      <main className="relative">
        <section className="min-h-screen flex items-center px-6">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="container mx-auto">
            <motion.div variants={fadeIn("up")} className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
                Hey! I&apos;m <span className="gradient-text">Hinan</span>
              </h1>
              <div className="text-xl md:text-2xl text-gray-200 leading-relaxed flex items-center">
                <span>I am a&nbsp;</span>
                <TypewriterEffect />
              </div>
            </motion.div>
          </motion.div>
        </section>

        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <CursorFollow />
    </>
  )
}

