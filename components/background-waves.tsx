'use client'

import { useEffect, useRef } from 'react'

export function BackgroundWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let time = 0
    const color = '#6B46C1'

    const drawWave = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.strokeStyle = `${color}${Math.floor((1 - i / 3) * 255).toString(16).padStart(2, '0')}`
        
        for (let x = 0; x < canvas.width; x++) {
          const y = Math.sin(x * 0.003 + time + i) * 100 + 
                   Math.sin(x * 0.001 + time + i) * 150
          
          if (x === 0) {
            ctx.moveTo(x, y + canvas.height / 2)
          } else {
            ctx.lineTo(x, y + canvas.height / 2)
          }
        }
        
        ctx.stroke()
      }
    }

    const animate = () => {
      time += 0.002
      drawWave(time)
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-20"
    />
  )
}

