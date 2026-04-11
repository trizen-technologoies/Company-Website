import { Link } from 'react-router-dom'
import { TbBrain } from 'react-icons/tb'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
]

const services = [
  'Web App Development',
  'Android App Development',
  'AI & Chatbot Integration',
  'Automation & AI Technologies',
  'AR/VR Products',
  'Manual & Automated Testing',
]

export default function Footer() {
  return (
    <footer className="bg-navy-800 border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
                <TbBrain className="text-white text-xl" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-sm">Trizen</span>
                <span className="text-xs font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-widest uppercase">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering businesses with AI-driven innovation. We integrate intelligent solutions into your applications to unlock new possibilities.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-200">
                <FaLinkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-200">
                <FaTwitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-200">
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <HiMail className="text-blue-400 mt-0.5 flex-shrink-0" size={16} />
                <span>hello@trizen.tech</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <HiPhone className="text-blue-400 mt-0.5 flex-shrink-0" size={16} />
                <span>+91 00000 00000</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <HiLocationMarker className="text-blue-400 mt-0.5 flex-shrink-0" size={16} />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-blue-900/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © 2025 Trizen Technologies. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with AI-Driven Innovation
          </p>
        </div>
      </div>
    </footer>
  )
}
