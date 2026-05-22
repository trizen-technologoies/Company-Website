import { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>!?/'

export default function ScrambleText({
  text,
  className = '',
  delay = 0,
  duration = 1000,
}) {
  const [display, setDisplay] = useState(
    text.split('').map(c => (c === ' ' ? ' ' : '·')).join('')
  )
  const outerTimerRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    outerTimerRef.current = setTimeout(() => {
      const start = Date.now()

      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - start
        const progress = Math.min(elapsed / duration, 1)
        // How many chars are fully revealed (left to right)
        const revealedUpto = Math.floor(progress * text.length)
        // Scramble window — 6 chars wide ahead of the reveal point
        const scrambleEnd = Math.min(revealedUpto + 6, text.length)

        const result = text.split('').map((char, i) => {
          if (char === ' ') return ' '
          if (i < revealedUpto) return char
          if (i < scrambleEnd) return CHARS[Math.floor(Math.random() * CHARS.length)]
          return '·'
        }).join('')

        setDisplay(result)

        if (progress >= 1) {
          setDisplay(text)
          clearInterval(intervalRef.current)
        }
      }, 35)
    }, delay)

    return () => {
      clearTimeout(outerTimerRef.current)
      clearInterval(intervalRef.current)
    }
  }, [text, delay, duration])

  return <span className={className}>{display}</span>
}
