import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const SPRING = { stiffness: 80, damping: 25, mass: 0.8 }

export default function CursorGlow() {
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)
  const springX = useSpring(mouseX, SPRING)
  const springY = useSpring(mouseY, SPRING)

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: -250,
        top: -250,
        width: 500,
        height: 500,
        borderRadius: '50%',
        x: springX,
        y: springY,
        background: 'radial-gradient(circle at center, rgba(59,130,246,0.20) 0%, rgba(6,182,212,0.08) 40%, transparent 70%)',
        filter: 'blur(40px)',
        mixBlendMode: 'screen',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}
