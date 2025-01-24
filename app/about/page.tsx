"use client"

import { motion } from "framer-motion"
import { NavHeader } from "@/components/nav-header"
import { BackgroundWaves } from "@/components/background-waves"
import { fadeIn, staggerContainer } from "@/lib/motion"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <>
      <BackgroundWaves />
      <NavHeader />

      <main className="min-h-screen pt-32 px-6">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div>
              <motion.h1 variants={fadeIn("up")} className="text-5xl md:text-6xl font-bold mb-12 cursor-pointer">
                About Me
              </motion.h1>

              <motion.div variants={fadeIn("up")} className="prose prose-invert">
                <p className="text-xl text-gray-300 cursor-pointer">
                  Hi, I'm Hinan, a passionate UX designer dedicated to crafting intuitive and visually captivating
                  digital experiences. With expertise in UX research, wireframing, and prototyping, I aim to bridge the
                  gap between user needs and innovative design solutions.
                </p>

                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 cursor-pointer">Skills</h2>
                    <ul className="space-y-2 text-gray-300">
                      <li className="cursor-pointer">UX Research</li>
                      <li className="cursor-pointer">Wireframing</li>
                      <li className="cursor-pointer">Prototyping</li>
                      <li className="cursor-pointer">Interaction Design</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4 cursor-pointer">Tools</h2>
                    <ul className="space-y-2 text-gray-300">
                      <li className="cursor-pointer">Figma</li>
                      <li className="cursor-pointer">Photoshop</li>
                      <li className="cursor-pointer">Illustrator</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn("left")} className="relative">
              <div className="sticky top-32">
                <div className="relative aspect-square w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-2xl transform rotate-3"></div>
                  <Image
                    src="/assets/dp.png"
                    alt="Mohammed Hinan"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
  variants={fadeIn("up")}
  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
>
  <Link href="/" className="inline-block text-4xl font-bold text-purple-500 mb-2">
    mh
  </Link>
  <p className="text-gray-300">Mohammed Hinan</p>
</motion.div>

        </motion.div>
      </main>
    </>
  )
}

