'use client'

import { motion } from 'framer-motion'

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-12 border-2 border-gray-500 rounded-full flex items-start p-1">
        <motion.div
          animate={{
            y: [0, 16, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-2 h-2 bg-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  )
}

