import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  TbMail, TbMapPin, TbSend, TbCheck,
  TbBrandLinkedin, TbBrandTwitter, TbBrandGithub, TbSparkles
} from 'react-icons/tb'
import { submitToSheets } from '../utils/submitToSheets.jsx'
import TiltCard from '../components/TiltCard'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const subjects = [
  'General Enquiry',
  'Web Application Development',
  'IOS / Android App Development',
  'AI & Chatbot Integration',
  'Automation & AI Technologies',
  'AR/VR Products',
  'Manual & Automated Testing',
  'AI SDR Outreach System',
  'Partnership / Collaboration',
  'Other',
]

const contactInfo = [
  {
    icon: <TbMail size={22} />,
    title: 'Email Us',
    value: 'trizen@trizentechnologies.com',
    sub: "We'll reply within 24 hours",
    color: '#3B82F6',
    href: 'mailto:trizen@trizentechnologies.com',
  },
  {
    icon: <TbMapPin size={22} />,
    title: 'Location',
    value: 'India',
    sub: 'Serving clients globally',
    color: '#8B5CF6',
    href: null,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields.')
      return
    }
    setLoading(true)
    try {
      await submitToSheets({ ...formData, source: 'contact-page' })
      setSubmitted(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Page Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Radar / sonar expanding pulse rings */}
          {[0, 0.9, 1.8, 2.7].map((delay, i) => (
            <motion.div
              key={i}
              animate={{ scale: [0.5, 8], opacity: [0.55, 0] }}
              transition={{ duration: 3.5, delay, repeat: Infinity, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                width: 120,
                height: 120,
                borderRadius: '50%',
                border: '1px solid rgba(6,182,212,0.6)',
                boxShadow: '0 0 8px rgba(6,182,212,0.2)',
                top: '50%',
                left: '50%',
                marginLeft: -60,
                marginTop: -60,
              }}
            />
          ))}
          {/* Central glow dot */}
          <div style={{
            position: 'absolute',
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: 'rgba(6,182,212,0.9)',
            boxShadow: '0 0 20px 6px rgba(6,182,212,0.4)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }} />
          {/* Background soft glow */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-[0.12]"
            style={{
              background: 'radial-gradient(circle at center, #06B6D4 0%, #0891B2 40%, transparent 70%)',
              filter: 'blur(80px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
          <div className="absolute inset-0 dot-grid" />
          <div
            className="absolute bottom-0 left-0 right-0 h-40"
            style={{ background: 'linear-gradient(to bottom, transparent, #05080F)' }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">
              Contact Us
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-5"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}
            >
              Let's <span className="gradient-text">Work Together</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Have a project in mind? Want to integrate AI into your business? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Info Cards ── */}
      <section className="py-10" style={{ background: 'rgba(255,255,255,0.016)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {contactInfo.map((info, i) => (
              <TiltCard
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: `0 0 0 1px ${info.color}22, 0 20px 50px ${info.color}10` }}
                transition={{ duration: 0.3 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="glass-card rounded-2xl p-5 flex items-start gap-4 block no-underline"
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.color}12`, color: info.color }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5 uppercase tracking-wide">{info.title}</p>
                      <p className="text-white font-semibold text-sm">{info.value}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{info.sub}</p>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card rounded-2xl p-5 flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.color}12`, color: info.color }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5 uppercase tracking-wide">{info.title}</p>
                      <p className="text-white font-semibold text-sm">{info.value}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{info.sub}</p>
                    </div>
                  </div>
                )}
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left — text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
                Send a Message
              </span>
              <h2
                className="text-3xl md:text-4xl font-black text-white mb-6"
                style={{ letterSpacing: '-0.025em', lineHeight: '1.1' }}
              >
                Start a <span className="gradient-text">Conversation</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-9 text-[0.95rem]">
                Whether you have a quick question or a detailed project brief — we're here to listen
                and respond. Tell us about your goals and we'll map out how Trizen Technologies can help.
              </p>

              <div className="space-y-3.5">
                {[
                  { text: 'Free initial consultation' },
                  { text: 'Response within 24 hours' },
                  { text: 'No-obligation project quote' },
                  { text: 'AI integration assessment' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(59,130,246,0.15)', color: '#60A5FA' }}
                    >
                      <TbCheck size={11} />
                    </span>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-10">
                <p className="text-slate-600 text-xs uppercase tracking-widest mb-4">Follow us</p>
                <div className="flex gap-2.5">
                  {[
                    { icon: <TbBrandLinkedin size={16} />, href: '#' },
                    { icon: <TbBrandTwitter size={16} />, href: '#' },
                    { icon: <TbBrandGithub size={16} />, href: '#' },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-blue-400 transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-3xl p-8 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div
                      className="w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center"
                      style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981' }}
                    >
                      <TbCheck size={36} />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2" style={{ letterSpacing: '-0.02em' }}>Message Sent!</h3>
                    <p className="text-slate-400">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      className="mt-8 btn-outline text-sm"
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
                      }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-400 text-xs font-medium block mb-2 uppercase tracking-wide">
                          Full Name <span className="text-blue-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-xs font-medium block mb-2 uppercase tracking-wide">
                          Email Address <span className="text-blue-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-400 text-xs font-medium block mb-2 uppercase tracking-wide">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="text-slate-400 text-xs font-medium block mb-2 uppercase tracking-wide">
                          Subject <span className="text-blue-400">*</span>
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="input-field cursor-pointer"
                          style={{ color: formData.subject ? '#F8FAFC' : 'rgba(148,163,184,0.45)' }}
                        >
                          <option value="" disabled style={{ background: '#0C1020', color: '#64748B' }}>Select a subject</option>
                          {subjects.map((s) => (
                            <option key={s} value={s} style={{ background: '#0C1020', color: '#F8FAFC' }}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-400 text-xs font-medium block mb-2 uppercase tracking-wide">
                        Message <span className="text-blue-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or question..."
                        className="input-field resize-none"
                      />
                    </div>

                    {error && <p className="text-red-400 text-sm">{error}</p>}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>Send Message <TbSend size={17} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-14" style={{ background: 'rgba(255,255,255,0.016)' }}>
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-slate-500 text-sm">
              Prefer email? Reach us directly at{' '}
              <a href="mailto:trizen@trizentechnologies.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                trizen@trizentechnologies.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
