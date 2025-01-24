'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/motion'

export function SkillsSection() {
  const skills = [
    { name: "Design", description: "Creating visually appealing and functional designs" },
    { name: "Research", description: "Conducting user research and analyzing data" },
    { name: "Wireframing", description: "Creating low-fidelity layouts and user flows" },
    { name: "Prototyping", description: "Building interactive and high-fidelity prototypes" }
  ]

  return (
    <section className="py-20 px-6 bg-white/5">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up')}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

