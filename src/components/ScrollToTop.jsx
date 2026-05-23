import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait for page enter animation (400ms) before scrolling
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) {
          const navbarHeight = window.innerWidth >= 768 ? 80 : 64
          const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 16
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 500)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}
