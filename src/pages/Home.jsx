import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import {
  TbBrain, TbRobot, TbWorld, TbDeviceMobile, TbTestPipe,
  TbSparkles, TbArrowRight, TbPhone, TbMail, TbBrandWhatsapp,
  TbBrandLinkedin, TbShieldCheck, TbRocket, TbChartBar,
  TbCpu, TbAugmentedReality, TbSpeakerphone
} from 'react-icons/tb'
import ParticleField from '../components/ParticleField'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function StatCard({ value, label, suffix = '+' }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold gradient-text">
        {inView ? <CountUp end={value} duration={2.5} suffix={suffix} /> : `0${suffix}`}
      </div>
      <div className="text-slate-500 dark:text-slate-400 text-sm mt-1">{label}</div>
    </div>
  )
}

const services = [
  { icon: <TbWorld size={26} />, title: 'Web App Development', desc: 'Full-stack web apps with AI-powered features built in.' },
  { icon: <TbDeviceMobile size={26} />, title: 'iOS / Android App Development', desc: 'Native & cross-platform mobile apps with smart AI integration.' },
  { icon: <TbBrain size={26} />, title: 'AI & Chatbot Integration', desc: 'Custom chatbots and LLM-powered features for any application.' },
  { icon: <TbCpu size={26} />, title: 'Automation & AI Technologies', desc: 'RPA, intelligent workflows, NLP pipelines, and computer vision.' },
  { icon: <TbAugmentedReality size={26} />, title: 'AR/VR Products', desc: 'Augmented & Virtual Reality experiences for training and engagement.' },
  { icon: <TbTestPipe size={26} />, title: 'Manual & Automated Testing', desc: 'Comprehensive QA with Selenium, Appium, and CI/CD integration.' },
  { icon: <TbSpeakerphone size={26} />, title: 'Digital Marketing & SEO', desc: 'Data-driven SEO, PPC, and content strategies that grow your visibility.' },
]

const whyUs = [
  {
    icon: <TbBrain size={30} />,
    title: 'AI-First Approach',
    desc: 'We integrate intelligence into every solution, turning ordinary applications into smart, adaptive systems.',
    color: '#3B82F6',
  },
  {
    icon: <TbShieldCheck size={30} />,
    title: 'End-to-End Delivery',
    desc: 'From concept to deployment, we own the entire lifecycle — design, build, test, and maintain.',
    color: '#06B6D4',
  },
  {
    icon: <TbChartBar size={30} />,
    title: 'Proven Results',
    desc: 'Our AI-driven solutions have helped businesses increase efficiency, close more deals, and scale faster.',
    color: '#8B5CF6',
  },
]

const sdrChannels = [
  { icon: <TbPhone size={22} />, title: 'AI Calling', desc: 'Conversational AI that handles outbound sales calls naturally and intelligently.' },
  { icon: <TbMail size={22} />, title: 'Email Outreach', desc: 'Personalized AI-written email sequences that drive opens and replies at scale.' },
  { icon: <TbBrandWhatsapp size={22} />, title: 'WhatsApp Outreach', desc: 'Automated WhatsApp flows with AI-driven two-way conversation capabilities.' },
  { icon: <TbBrandLinkedin size={22} />, title: 'LinkedIn Outreach', desc: 'AI-powered connection requests, follow-ups, and InMail campaigns on autopilot.' },
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-40 -left-40 w-[750px] h-[750px] rounded-full opacity-[0.18] animate-blob"
            style={{
              background: 'radial-gradient(circle at center, #3B82F6 0%, #1D4ED8 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full opacity-[0.13] animate-blob animation-delay-2000"
            style={{
              background: 'radial-gradient(circle at center, #06B6D4 0%, #0891B2 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.1] animate-blob animation-delay-4000"
            style={{
              background: 'radial-gradient(circle at center, #8B5CF6 0%, #6D28D9 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />

          <ParticleField />

          <div
            className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, #05080F)' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="tag-badge mb-5 mx-auto w-fit"
            >
              <TbSparkles size={13} />
              AI-Powered Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 leading-[1.05]"
              style={{ letterSpacing: '-0.03em' }}
            >
              Empowering Business{' '}
              <span className="gradient-text">with AI-Driven</span>{' '}
              Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              We integrate AI into your web apps, mobile apps, and business workflows — delivering chatbots, automation, AR/VR, and intelligent outreach systems that transform how you operate and grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/services" className="btn-primary text-base px-8 py-4">
                Explore Services <TbArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn-outline text-base px-8 py-4">
                Our AI Products
              </Link>
            </motion.div>
          </div>

          {/* Floating icons */}
          <div className="hidden lg:block">
            {[
              { icon: <TbBrain size={20} />, top: '22%', left: '4%', delay: 0 },
              { icon: <TbRobot size={20} />, top: '62%', left: '2%', delay: 1.5 },
              { icon: <TbWorld size={20} />, top: '22%', right: '4%', delay: 0.8 },
              { icon: <TbDeviceMobile size={20} />, top: '66%', right: '3%', delay: 2 },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute w-11 h-11 rounded-xl glass-card flex items-center justify-center text-blue-400"
                style={{ top: item.top, left: item.left, right: item.right }}
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">What We Do</span>
            <h2 className="section-title">
              AI That <span className="gradient-text">Works for You</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              We don't just build software — we infuse intelligence into it, making every application smarter, faster, and more capable.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {[
              { icon: <TbBrain size={34} />, title: 'AI Integration', desc: 'We embed chatbots, LLMs, recommendation engines, and AI features into your existing applications seamlessly.', color: '#3B82F6' },
              { icon: <TbCpu size={34} />, title: 'Intelligent Automation', desc: 'Automate repetitive workflows with RPA, NLP pipelines, and AI-driven decision engines to save time and cost.', color: '#06B6D4' },
              { icon: <TbAugmentedReality size={34} />, title: 'AR/VR Solutions', desc: 'Create immersive augmented and virtual reality experiences for training, simulation, and customer engagement.', color: '#8B5CF6' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-2xl p-8 group cursor-default"
                whileHover={{
                  y: -8,
                  boxShadow: `0 0 0 1px ${item.color}30, 0 25px 60px ${item.color}18`,
                  borderColor: `${item.color}28`,
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${item.color}14`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-24 md:py-32" style={{ background: 'rgba(255,255,255,0.016)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Our Services</span>
            <h2 className="section-title">
              Full-Spectrum <span className="gradient-text">Tech Services</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              From web and mobile development to AI integration, automation, and quality assurance — we cover every layer of your technology stack.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 group cursor-pointer"
                whileHover={{
                  y: -5,
                  boxShadow: '0 0 0 1px rgba(59,130,246,0.2), 0 20px 50px rgba(59,130,246,0.1)',
                  borderColor: 'rgba(59,130,246,0.22)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(59,130,246,0.1)', color: '#3B82F6' }}>
                  {service.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 text-[0.95rem]">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-outline">
              View All Services <TbArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── AI SDR Spotlight ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden p-px"
            style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.5), rgba(6,182,212,0.5), rgba(139,92,246,0.5))' }}
          >
            <div className="rounded-3xl p-8 md:p-12 relative overflow-hidden" style={{ background: 'rgba(8,12,26,0.85)', backdropFilter: 'blur(20px)' }}>
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.12]"
                  style={{
                    background: 'radial-gradient(circle at center, #3B82F6, transparent 70%)',
                    filter: 'blur(60px)',
                  }}
                />
              </div>

              <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-10">
                <div className="flex-1">
                  <span className="tag-badge mb-5 w-fit">
                    <TbSparkles size={12} /> AI Product
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-3" style={{ letterSpacing: '-0.025em' }}>
                    AI-Powered SDR{' '}
                    <span className="gradient-text">Outreach System</span>
                  </h2>
                  <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                    Automate your entire sales outreach pipeline with AI. Engage prospects across every channel — calls, emails, WhatsApp, and LinkedIn — all on autopilot.
                  </p>
                </div>
                <Link to="/products" className="btn-primary whitespace-nowrap flex-shrink-0">
                  See Full Product <TbArrowRight size={16} />
                </Link>
              </div>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {sdrChannels.map((channel, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="rounded-2xl p-5 transition-all duration-300 group cursor-default"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                    whileHover={{
                      background: 'rgba(59,130,246,0.08)',
                      borderColor: 'rgba(59,130,246,0.25)',
                      y: -3,
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center text-white"
                      style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
                      {channel.icon}
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1.5">{channel.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{channel.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 md:py-32" style={{ background: 'rgba(255,255,255,0.016)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Why Trizen</span>
            <h2 className="section-title">
              Built for the <span className="gradient-text">AI Era</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-2xl p-8 text-center"
                whileHover={{
                  y: -6,
                  boxShadow: `0 0 0 1px ${item.color}28, 0 25px 60px ${item.color}14`,
                  borderColor: `${item.color}22`,
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ background: `${item.color}12`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3" style={{ letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl p-10 md:p-16 overflow-hidden text-center glass-card">
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.12]"
                  style={{
                    background: 'radial-gradient(ellipse at center, #3B82F6, transparent 70%)',
                    filter: 'blur(60px)',
                  }}
                />
              </div>

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                  style={{ background: 'rgba(59,130,246,0.12)', color: '#3B82F6' }}>
                  <TbRocket size={28} />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-5" style={{ letterSpacing: '-0.03em' }}>
                  Ready to Transform Your Business{' '}
                  <span className="gradient-text">with AI?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  Let's build something intelligent together. Talk to our team about your project today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact" className="btn-primary text-base px-8 py-4">
                    Contact Us <TbArrowRight size={18} />
                  </Link>
                  <Link to="/services" className="btn-outline text-base px-8 py-4">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
