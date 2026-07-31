import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    if (scrolled) setMobileOpen(false)
  }, [scrolled])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Top Navbar — only visible at the very top of the page */}
      <AnimatePresence>
        {!scrolled && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 bg-transparent"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16 md:h-20">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5 group">
                  <img src="/favicon.png" alt="Trizen Logo" className="w-11 h-11 rounded-xl object-contain" />
                  <div className="flex flex-col leading-tight">
                    <span className="font-bold text-white text-sm md:text-base tracking-wide">
                      Trizen
                    </span>
                    <span className="text-xs font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-widest uppercase">
                      Technologies
                    </span>
                  </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative text-sm font-medium transition-colors duration-200 group ${
                        location.pathname === link.path
                          ? 'text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-px rounded-full transition-all duration-300 ${
                          location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                        style={{ background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' }}
                      />
                    </Link>
                  ))}
                </div>

                {/* Mobile Toggle */}
                <button
                  className="md:hidden text-slate-400 hover:text-white transition-colors"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden fixed inset-0 bg-black/60 z-40"
                  style={{ top: '4rem' }}
                  onClick={() => setMobileOpen(false)}
                />
              )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden relative z-50"
                  style={{
                    background: 'rgba(8, 12, 24, 0.98)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div className="px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          location.pathname === link.path
                            ? 'text-white bg-blue-500/10 border border-blue-500/20'
                            : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Floating Bottom Island — appears once scrolled away from the top */}
      <AnimatePresence>
        {scrolled && (
          <div className="fixed bottom-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex items-center gap-0.5 xs:gap-1 sm:gap-2 rounded-full px-1.5 sm:px-2 py-2 max-w-full overflow-x-auto pointer-events-auto"
              style={{
                background: 'rgba(8, 12, 24, 0.75)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                scrollbarWidth: 'none',
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[11px] sm:text-sm font-medium px-2 sm:px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  style={location.pathname === link.path ? {
                    background: 'linear-gradient(90deg, rgba(59,130,246,0.25), rgba(6,182,212,0.25))',
                  } : {}}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
