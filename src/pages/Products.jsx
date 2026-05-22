import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  TbPhone, TbMail, TbBrandWhatsapp, TbBrandLinkedin,
  TbCheck, TbSparkles, TbArrowRight, TbArrowDown,
  TbRocket, TbChartBar, TbClock, TbUsers, TbSend,
  TbPlayerPlay
} from 'react-icons/tb'
import { submitToSheets } from '../utils/submitToSheets.jsx'
import TiltCard from '../components/TiltCard'

const DATA_FRAGMENTS = ['01', 'ML', 'AI', '∑', 'GPU', 'API', '∞', '10x', '02', 'LLM', '03', 'RAG']

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const channels = [
  {
    icon: <TbPhone size={30} />,
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
    bg: 'rgba(59,130,246,0.07)',
  },
  {
    icon: <TbMail size={30} />,
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
    bg: 'rgba(6,182,212,0.07)',
  },
  {
    icon: <TbBrandWhatsapp size={30} />,
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
    bg: 'rgba(16,185,129,0.07)',
  },
  {
    icon: <TbBrandLinkedin size={30} />,
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
    bg: 'rgba(99,102,241,0.07)',
  },
]

const steps = [
  {
    step: '01',
    title: 'Import Your Leads',
    desc: 'Upload your prospect list from any CRM or CSV. Our AI enriches and segments them automatically.',
    icon: <TbUsers size={22} />,
  },
  {
    step: '02',
    title: 'Set Up AI Sequences',
    desc: 'Configure multi-channel outreach sequences. AI personalizes every message for each prospect.',
    icon: <TbSparkles size={22} />,
  },
  {
    step: '03',
    title: 'AI Engages Prospects',
    desc: 'Your AI SDR reaches out across calls, email, WhatsApp, and LinkedIn simultaneously — 24/7.',
    icon: <TbRocket size={22} />,
  },
  {
    step: '04',
    title: 'Book Meetings on Autopilot',
    desc: 'Qualified prospects get booked directly into your calendar. You only talk to interested leads.',
    icon: <TbChartBar size={22} />,
  },
]

const benefits = [
  { value: '10x', label: 'Faster Outreach', icon: <TbRocket size={26} /> },
  { value: '3x', label: 'Higher Response Rates', icon: <TbChartBar size={26} /> },
  { value: '80%', label: 'Time Saved', icon: <TbClock size={26} /> },
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
      {/* ── Product Hero ── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Rising data fragments */}
          {DATA_FRAGMENTS.map((frag, i) => {
            const leftPct = 5 + ((i * 73) % 90)
            const delay = (i * 0.7) % 4
            const duration = 5 + (i % 4)
            const size = i % 3 === 0 ? 'text-base' : i % 3 === 1 ? 'text-sm' : 'text-xs'
            return (
              <motion.span
                key={i}
                className={`absolute font-mono font-bold ${size} select-none`}
                style={{
                  left: `${leftPct}%`,
                  bottom: '-2rem',
                  color: i % 3 === 0 ? 'rgba(59,130,246,0.45)' : i % 3 === 1 ? 'rgba(6,182,212,0.35)' : 'rgba(99,102,241,0.3)',
                }}
                animate={{ y: [0, -700], opacity: [0, 0.8, 0] }}
                transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
              >
                {frag}
              </motion.span>
            )
          })}
          {/* Background glows */}
          <div
            className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.15]"
            style={{
              background: 'radial-gradient(circle at center, #3B82F6 0%, #1D4ED8 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full opacity-[0.10]"
            style={{
              background: 'radial-gradient(circle at center, #06B6D4 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div className="absolute inset-0 dot-grid" />
          <div
            className="absolute bottom-0 left-0 right-0 h-48"
            style={{ background: 'linear-gradient(to bottom, transparent, #05080F)' }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <span className="tag-badge mb-7 mx-auto w-fit">
                <TbSparkles size={13} /> AI Product
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-5"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}
            >
              AI SDR{' '}
              <span className="gradient-text">Outreach System</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-300 text-xl md:text-2xl font-medium mb-3">
              Close More Deals with AI-Powered Multi-Channel Outreach
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-400 text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
              Automate your entire sales development pipeline across voice calls, emails, WhatsApp, and LinkedIn. Our AI SDR system engages prospects 24/7, personalizes every interaction, and books qualified meetings on autopilot.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#demo" className="btn-primary text-base px-8 py-4">
                Request a Demo <TbArrowRight size={18} />
              </a>
              <button className="btn-outline text-base px-8 py-4">
                <TbPlayerPlay size={18} /> Watch Overview
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits Bar ── */}
      <section className="py-12" style={{ background: 'rgba(255,255,255,0.016)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-2.5 mb-1.5">
                  <span className="text-blue-400 opacity-70">{b.icon}</span>
                  <span className="text-3xl md:text-4xl font-extrabold gradient-text">{b.value}</span>
                </div>
                <p className="text-slate-500 text-sm">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 Channels ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Outreach Channels</span>
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
          >
            {channels.map((ch, i) => (
              <TiltCard
                key={i}
                variants={fadeUp}
                className="glass-card rounded-3xl overflow-hidden"
                whileHover={{
                  y: -6,
                  boxShadow: `0 0 0 1px ${ch.color}28, 0 25px 60px ${ch.color}14`,
                  borderColor: `${ch.color}22`,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8 md:p-9">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: ch.bg, color: ch.color, border: `1px solid ${ch.color}20` }}
                    >
                      {ch.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-1"
                        style={{ color: ch.color }}>{ch.tagline}</p>
                      <h3 className="text-white font-bold text-xl" style={{ letterSpacing: '-0.015em' }}>{ch.title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{ch.desc}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ch.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-slate-300 text-xs">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${ch.color}18`, color: ch.color }}
                        >
                          <TbCheck size={10} />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 md:py-32" style={{ background: 'rgba(255,255,255,0.016)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">How It Works</span>
            <h2 className="section-title">
              From Leads to Meetings — <span className="gradient-text">Automatically</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div
              className="hidden lg:block absolute top-8 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(6,182,212,0.3), transparent)' }}
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {steps.map((step, i) => (
                <TiltCard
                  key={i}
                  variants={fadeUp}
                  className="glass-card rounded-2xl p-7 text-center"
                  whileHover={{ y: -5, boxShadow: '0 0 0 1px rgba(59,130,246,0.18), 0 20px 50px rgba(59,130,246,0.08)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center font-black text-sm text-white"
                    style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}
                  >
                    {step.step}
                  </div>
                  <div className="text-blue-400 flex justify-center mb-3 opacity-70">{step.icon}</div>
                  <h3 className="text-white font-bold mb-2 text-[0.95rem]" style={{ letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </TiltCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Demo Form ── */}
      <section id="demo" className="py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Get Started</span>
            <h2 className="section-title">
              Request a <span className="gradient-text">Demo</span>
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              See the AI SDR Outreach System in action. Fill in your details and our team will reach out within 24 hours.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981' }}
                >
                  <TbCheck size={30} />
                </div>
                <h3 className="text-white font-bold text-xl mb-2" style={{ letterSpacing: '-0.01em' }}>Demo Requested!</h3>
                <p className="text-slate-400">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs font-medium block mb-2 uppercase tracking-wide">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs font-medium block mb-2 uppercase tracking-wide">Company *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs font-medium block mb-2 uppercase tracking-wide">Email *</label>
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
                  <div>
                    <label className="text-slate-400 text-xs font-medium block mb-2 uppercase tracking-wide">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="input-field"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed mt-2"
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
                    <>Request Demo <TbSend size={17} /></>
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
