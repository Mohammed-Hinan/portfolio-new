"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

export function TypewriterEffect() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const controls = useAnimation()

  const words = ["UI/UX designer", "cinephile", "music enthusiast"]
  const typingSpeed = 150
  const deleteSpeed = 100
  const pauseDuration = 2000

  useEffect(() => {
    const handleTyping = async () => {
      const currentWord = words[currentIndex % words.length]

      if (!isDeleting) {
        // Typing forward
        setCurrentText(currentWord.substring(0, currentText.length + 1))
        await controls.start({
          width: `${currentText.length + 1}ch`,
          transition: { duration: typingSpeed / 1000 },
        })

        if (currentText === currentWord) {
          await new Promise((resolve) => setTimeout(resolve, pauseDuration))
          setIsDeleting(true)
        }
      } else {
        // Deleting backward
        setCurrentText(currentText.substring(0, currentText.length - 1))
        await controls.start({
          width: `${currentText.length - 1}ch`,
          transition: { duration: deleteSpeed / 1000 },
        })

        if (currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((prev) => prev + 1)
        }
      }
    }

    handleTyping()
  }, [currentText, isDeleting, currentIndex, controls])

  return (
    <span className="inline-flex items-center">
      <motion.span
        className="inline-block overflow-hidden whitespace-nowrap"
        animate={controls}
        initial={{ width: "0ch" }}
      >
        {currentText}
      </motion.span>
      <span className="inline-block w-[1ch] h-[1.2em] bg-teal-300 animate-blink" />
    </span>
  )
}

