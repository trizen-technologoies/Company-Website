import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const SPRING = { stiffness: 150, damping: 20, mass: 0.5 }
const MAX_TILT = 6

export default function TiltCard({ children, className = '', style = {}, ...rest }) {
  const ref = useRef(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), SPRING)
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), SPRING)

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 1200, ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
