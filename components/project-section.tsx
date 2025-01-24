"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { fadeIn } from "@/lib/motion"

export function ProjectSection() {
  const projects = [
    {
      title: "LooMY",
      description:
        "An anonymous chat application designed with privacy and user experience in mind. Features real-time messaging, customizable avatars, and end-to-end encryption.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thumbnail-Sk3Rcw5aRVJ02mzvsIacTGU1LGI5z4.png",
      link: "https://www.behance.net/gallery/207662079/LooMY-Anonymous-Chat-App",
    },
    {
      title: "Doctor's United",
      description:
        "A comprehensive appointment booking platform for healthcare professionals. Streamlines scheduling, patient management, and consultation tracking.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202608702-9rznBy4D567yIju9sV6zFYeKCy5Hm8.png",
      link: "https://www.behance.net/gallery/206330593/Doctor-Appointment-Booking-App-for-Doctors-United",
    },
    {
      title: "Coming Soon",
      description: "Exciting new project in development. Stay tuned for something special.",
      image: "/placeholder.svg?height=400&width=600&text=Coming+Soon&fontsize=32&fontcolor=ffffff&background=6b46c1",
      link: "#",
    },
  ]

  return (
    <section id="featured-projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} target="_blank" rel="noopener noreferrer">
              <motion.div
                variants={fadeIn("up")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/2] mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

