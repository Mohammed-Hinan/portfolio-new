"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { navVariants } from "@/lib/motion"

export function NavHeader() {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    if (pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A1B]/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-purple-500">
          mh
        </Link>

        <ul className="flex gap-8">
          <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
          </motion.li>
          <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
            <a
              href="#featured-projects"
              onClick={(e) => scrollToSection(e, "featured-projects")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Work
            </a>
          </motion.li>
          <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
            <a
              href="#contact-section"
              onClick={(e) => scrollToSection(e, "contact-section")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </motion.li>
          <motion.li whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
            <a
              href="https://drive.google.com/file/d/14aii4GIyyTVmF07Eunf7PLCL-jwOw6lN/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Resume
            </a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  )
}

