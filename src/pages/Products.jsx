import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  TbPhone, TbMail, TbBrandWhatsapp, TbBrandLinkedin,
  TbCheck, TbSparkles, TbArrowRight, TbArrowDown,
  TbRocket, TbChartBar, TbClock, TbUsers, TbSend,
  TbPlayerPlay
} from 'react-icons/tb'
import { submitToSheets } from '../utils/submitToSheets.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const channels = [
  {
    icon: <TbPhone size={32} />,
    title: 'AI Calling',
    tagline: 'Voice Outreach on Autopilot',
    desc: 'Deploy conversational AI agents that make outbound sales calls, handle objections naturally, qualify leads, and book meetings — all without human intervention.',
    features: [
      'Natural voice AI conversation',
      'Real-time objection handling',
      'Call recording & AI-generated summary',
      'CRM integration & lead sync',
      'Multi-language support',
      'Smart call scheduling',
    ],
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.08)',
  },
  {
    icon: <TbMail size={32} />,
    title: 'Email Outreach',
    tagline: 'Personalized at Scale',
    desc: 'AI crafts hyper-personalized email sequences for each prospect based on their profile, company, and behavior — dramatically increasing open and reply rates.',
    features: [
      'AI-written personalized emails',
      'Multi-step automated sequences',
      'Open & click tracking',
      'A/B testing & optimization',
      'Smart follow-up timing',
      'Deliverability management',
    ],
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.08)',
  },
  {
    icon: <TbBrandWhatsapp size={32} />,
    title: 'WhatsApp Outreach',
    tagline: 'Engage Where Prospects Are',
    desc: 'Reach prospects on WhatsApp — the most personal and highest-read messaging channel. Our AI manages two-way conversations, answers questions, and nurtures leads.',
    features: [
      'Automated WhatsApp campaigns',
      'AI-driven two-way conversations',
      'Template-based message flows',
      'Rich media support (images, docs)',
      'WhatsApp Business API integration',
      'Opt-in & opt-out management',
    ],
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
  },
  {
    icon: <TbBrandLinkedin size={32} />,
    title: 'LinkedIn Outreach',
    tagline: 'B2B Prospecting Automated',
    desc: 'Scale your LinkedIn presence with AI-powered connection requests, personalized message sequences, profile visits, and InMail campaigns — targeting the right decision makers.',
    features: [
      'Automated connection requests',
      'Personalized message sequences',
      'Profile visit automation',
      'InMail campaign management',
      'Prospect targeting filters',
      'LinkedIn Sales Navigator integration',
    ],
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
  },
]

const steps = [
  {
    step: '01',
    title: 'Import Your Leads',
    desc: 'Upload your prospect list from any CRM or CSV. Our AI enriches and segments them automatically.',
    icon: <TbUsers size={24} />,
  },
  {
    step: '02',
    title: 'Set Up AI Sequences',
    desc: 'Configure multi-channel outreach sequences. AI personalizes every message for each prospect.',
    icon: <TbSparkles size={24} />,
  },
  {
    step: '03',
    title: 'AI Engages Prospects',
    desc: 'Your AI SDR reaches out across calls, email, WhatsApp, and LinkedIn simultaneously — 24/7.',
    icon: <TbRocket size={24} />,
  },
  {
    step: '04',
    title: 'Book Meetings on Autopilot',
    desc: 'Qualified prospects get booked directly into your calendar. You only talk to interested leads.',
    icon: <TbChartBar size={24} />,
  },
]

const benefits = [
  { value: '10x', label: 'Faster Outreach', icon: <TbRocket size={28} /> },
  { value: '3x', label: 'Higher Response Rates', icon: <TbChartBar size={28} /> },
  { value: '80%', label: 'Time Saved', icon: <TbClock size={28} /> },
]

export default function Products() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await submitToSheets({ ...formData, source: 'demo-request' })
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
      {/* Product Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-15 animate-blob"
            style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-10 animate-blob animation-delay-2000"
            style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{
                  background: 'rgba(59,130,246,0.12)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  color: '#93C5FD'
                }}>
                <TbSparkles size={13} /> AI Product
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
              AI SDR{' '}
              <span className="gradient-text">Outreach System</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-400 text-xl md:text-2xl font-medium mb-3">
              Close More Deals with AI-Powered Multi-Channel Outreach
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Automate your entire sales development pipeline across voice calls, emails, WhatsApp, and LinkedIn. Our AI SDR system engages prospects 24/7, personalizes every interaction, and books qualified meetings on autopilot.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#demo" className="btn-primary text-base px-8 py-3.5">
                Request a Demo <TbArrowRight size={18} />
              </a>
              <button className="btn-outline text-base px-8 py-3.5 flex items-center gap-2">
                <TbPlayerPlay size={18} /> Watch Overview
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-10 border-y border-blue-900/30"
        style={{ background: 'rgba(15,26,62,0.5)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-blue-400">{b.icon}</span>
                  <span className="text-3xl md:text-4xl font-extrabold gradient-text">{b.value}</span>
                </div>
                <p className="text-slate-400 text-sm">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Channels */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Outreach Channels</span>
            <h2 className="section-title">
              4 Channels. <span className="gradient-text">One System.</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Reach your prospects wherever they are — with AI that personalizes every touchpoint across every channel.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {channels.map((ch, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-2xl overflow-hidden group transition-all duration-300"
                whileHover={{ y: -5, boxShadow: `0 25px 50px ${ch.color}20` }}
              >
                <div className="p-7 md:p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: ch.bg, color: ch.color, border: `1px solid ${ch.color}25` }}>
                      {ch.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                        style={{ color: ch.color }}>{ch.tagline}</p>
                      <h3 className="text-white font-bold text-xl">{ch.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{ch.desc}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ch.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300 text-xs">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${ch.color}20`, color: ch.color }}>
                          <TbCheck size={10} />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28" style={{ background: 'rgba(15,26,62,0.4)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">How It Works</span>
            <h2 className="section-title">
              From Leads to Meetings — <span className="gradient-text">Automatically</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2"
              style={{ background: 'linear-gradient(90deg, transparent, #3B82F6, #06B6D4, transparent)' }} />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative glass-card rounded-2xl p-6 text-center"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center font-black text-sm"
                    style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)', color: 'white' }}>
                    {step.step}
                  </div>
                  <div className="text-blue-400 flex justify-center mb-3">{step.icon}</div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section id="demo" className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Get Started</span>
            <h2 className="section-title">
              Request a <span className="gradient-text">Demo</span>
            </h2>
            <p className="text-slate-400 mt-4">
              See the AI SDR Outreach System in action. Fill in your details and our team will reach out within 24 hours.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981' }}>
                  <TbCheck size={32} />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Demo Requested!</h3>
                <p className="text-slate-400">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-300 text-sm font-medium block mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(59,130,246,0.2)' }}
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 text-sm font-medium block mb-1.5">Company *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(59,130,246,0.2)' }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-300 text-sm font-medium block mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(59,130,246,0.2)' }}
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 text-sm font-medium block mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(59,130,246,0.2)' }}
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed mt-2"
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
                    <>Request Demo <TbSend size={18} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}