"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { type RefObject, useEffect, useRef } from "react"

export function CursorFollow() {
  const ref = useRef<HTMLDivElement>(null)
  const { x, y } = useFollowPointer(ref)

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 w-4 h-4 rounded-full bg-purple-500 mix-blend-difference"
      style={{ x, y }}
    />
  )
}

const spring = { damping: 25, stiffness: 700, mass: 0.5 }

function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      x.set(clientX - 8) // Subtract half the width of the div
      y.set(clientY - 8) // Subtract half the height of the div
    }

    window.addEventListener("pointermove", handlePointerMove)

    return () => window.removeEventListener("pointermove", handlePointerMove)
  }, [x, y])

  return { x, y }
}

