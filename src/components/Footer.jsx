import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

function scrollToHash(hash) {
  const el = document.getElementById(hash)
  if (el) {
    const navbarHeight = window.innerWidth >= 768 ? 80 : 64
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 16
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
]

const services = [
  { name: 'Web App Development', hash: 'web-app' },
  { name: 'iOS / Android App Development', hash: 'mobile-app' },
  { name: 'AI & Chatbot Integration', hash: 'ai-chatbot' },
  { name: 'Automation & AI Technologies', hash: 'automation' },
  { name: 'AR/VR Products', hash: 'arvr' },
  { name: 'Manual & Automated Testing', hash: 'testing' },
]

export default function Footer() {
  const { pathname } = useLocation()

  return (
    <footer style={{ background: '#080C18', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Gradient divider line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(6,182,212,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <img src="/favicon.png" alt="Trizen Logo" className="w-11 h-11 rounded-xl object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-sm">Trizen</span>
                <span className="text-xs font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-widest uppercase">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering businesses with AI-driven innovation. We integrate intelligent solutions into your applications to unlock new possibilities.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { href: 'https://linkedin.com', icon: <FaLinkedin size={15} /> },
                { href: 'https://twitter.com', icon: <FaTwitter size={15} /> },
                { href: 'https://github.com', icon: <FaGithub size={15} /> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 transition-all duration-200 hover:text-blue-400"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200 flex items-center gap-2.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.hash}>
                  <Link
                    to={`/services#${service.hash}`}
                    onClick={() => {
                      if (pathname === '/services') scrollToHash(service.hash)
                    }}
                    className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200 flex items-center gap-2.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide">Contact Us</h3>
            <ul className="space-y-3.5">
              <li>
                <a href="mailto:trizen@trizentechnologies.com"
                  className="flex items-start gap-3 text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200 group">
                  <HiMail className="text-blue-500/60 group-hover:text-blue-400 mt-0.5 flex-shrink-0 transition-colors" size={16} />
                  <span>trizen@trizentechnologies.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919015377060"
                  className="flex items-start gap-3 text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200 group">
                  <HiPhone className="text-blue-500/60 group-hover:text-blue-400 mt-0.5 flex-shrink-0 transition-colors" size={16} />
                  <span>+91 9015377060</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-500 text-sm">
                <HiLocationMarker className="text-blue-500/60 mt-0.5 flex-shrink-0" size={16} />
                <span>India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Trizen Technologies. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built with AI-Driven Innovation
          </p>
        </div>
      </div>
    </footer>
  )
}
