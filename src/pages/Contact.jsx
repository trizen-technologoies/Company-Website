import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  TbMail, TbPhone, TbMapPin, TbSend, TbCheck,
  TbBrandLinkedin, TbBrandTwitter, TbBrandGithub, TbSparkles
} from 'react-icons/tb'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const subjects = [
  'General Enquiry',
  'Web Application Development',
  'Android App Development',
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
    icon: <TbMail size={24} />,
    title: 'Email Us',
    value: 'hello@trizen.tech',
    sub: "We'll reply within 24 hours",
    color: '#3B82F6',
  },
  {
    icon: <TbPhone size={24} />,
    title: 'Call Us',
    value: '+91 00000 00000',
    sub: 'Mon–Fri, 9am–6pm IST',
    color: '#06B6D4',
  },
  {
    icon: <TbMapPin size={24} />,
    title: 'Location',
    value: 'India',
    sub: 'Serving clients globally',
    color: '#8B5CF6',
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
    // Simulate form submission (replace with EmailJS or backend call)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-10 animate-blob"
            style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />
        </div>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5">
              Let's <span className="gradient-text">Work Together</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Have a project in mind? Want to integrate AI into your business? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10" style={{ background: 'rgba(15,26,62,0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-xl p-5 flex items-start gap-4"
                whileHover={{ y: -3 }}
              >
                <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${info.color}15`, color: info.color }}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">{info.title}</p>
                  <p className="text-white font-semibold text-sm">{info.value}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{info.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left — text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Send a Message</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
                Start a <span className="gradient-text">Conversation</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Whether you have a quick question or a detailed project brief — we're here to listen and respond. Tell us about your goals and we'll map out how Trizen Technologies can help.
              </p>

              <div className="space-y-4">
                {[
                  { text: 'Free initial consultation' },
                  { text: 'Response within 24 hours' },
                  { text: 'No-obligation project quote' },
                  { text: 'AI integration assessment' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(59,130,246,0.2)', color: '#3B82F6' }}>
                      <TbCheck size={12} />
                    </span>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-10">
                <p className="text-slate-400 text-sm mb-3">Follow us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all">
                    <TbBrandLinkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all">
                    <TbBrandTwitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all">
                    <TbBrandGithub size={18} />
                  </a>
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
              <div className="glass-card rounded-2xl p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center"
                      style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981' }}>
                      <TbCheck size={40} />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2">Message Sent!</h3>
                    <p className="text-slate-400">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      className="mt-6 btn-outline text-sm"
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-300 text-sm font-medium block mb-1.5">
                          Full Name <span className="text-blue-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(59,130,246,0.2)' }}
                        />
                      </div>
                      <div>
                        <label className="text-slate-300 text-sm font-medium block mb-1.5">
                          Email Address <span className="text-blue-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(59,130,246,0.2)' }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-300 text-sm font-medium block mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 00000 00000"
                          className="w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(59,130,246,0.2)' }}
                        />
                      </div>
                      <div>
                        <label className="text-slate-300 text-sm font-medium block mb-1.5">
                          Subject <span className="text-blue-400">*</span>
                        </label>
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500/40 transition-all cursor-pointer"
                          style={{
                            background: '#0F1A3E',
                            border: '1px solid rgba(59,130,246,0.2)',
                            color: formData.subject ? '#F8FAFC' : '#64748B'
                          }}
                        >
                          <option value="" disabled>Select a subject</option>
                          {subjects.map((s) => (
                            <option key={s} value={s} style={{ background: '#0F1A3E', color: '#F8FAFC' }}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-300 text-sm font-medium block mb-1.5">
                        Message <span className="text-blue-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or question..."
                        className="w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500/40 transition-all resize-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(59,130,246,0.2)' }}
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
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
                        <>Send Message <TbSend size={18} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14" style={{ background: 'rgba(15,26,62,0.4)' }}>
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <TbSparkles size={30} className="text-blue-400 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">
              Prefer email? Reach us directly at{' '}
              <a href="mailto:hello@trizen.tech" className="text-blue-400 hover:underline">hello@trizen.tech</a>
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
