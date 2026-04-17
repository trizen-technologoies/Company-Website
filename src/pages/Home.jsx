import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import {
  TbBrain, TbRobot, TbWorld, TbDeviceMobile, TbTestPipe,
  TbSparkles, TbArrowRight, TbPhone, TbMail, TbBrandWhatsapp,
  TbBrandLinkedin, TbShieldCheck, TbRocket, TbChartBar,
  TbCpu, TbAugmentedReality
} from 'react-icons/tb'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

function StatCard({ value, label, suffix = '+' }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold gradient-text">
        {inView ? <CountUp end={value} duration={2.5} suffix={suffix} /> : `0${suffix}`}
      </div>
      <div className="text-slate-400 text-sm mt-1">{label}</div>
    </div>
  )
}

const services = [
  { icon: <TbWorld size={28} />, title: 'Web App Development', desc: 'Full-stack web apps with AI-powered features built in.' },
  { icon: <TbDeviceMobile size={28} />, title: 'iOS / Android App Development', desc: 'Native & cross-platform mobile apps with smart AI integration.' },
  { icon: <TbBrain size={28} />, title: 'AI & Chatbot Integration', desc: 'Custom chatbots and LLM-powered features for any application.' },
  { icon: <TbCpu size={28} />, title: 'Automation & AI Technologies', desc: 'RPA, intelligent workflows, NLP pipelines, and computer vision.' },
  { icon: <TbAugmentedReality size={28} />, title: 'AR/VR Products', desc: 'Augmented & Virtual Reality experiences for training and engagement.' },
  { icon: <TbTestPipe size={28} />, title: 'Manual & Automated Testing', desc: 'Comprehensive QA with Selenium, Appium, and CI/CD integration.' },
]

const whyUs = [
  {
    icon: <TbBrain size={32} />,
    title: 'AI-First Approach',
    desc: 'We integrate intelligence into every solution, turning ordinary applications into smart, adaptive systems.',
  },
  {
    icon: <TbShieldCheck size={32} />,
    title: 'End-to-End Delivery',
    desc: 'From concept to deployment, we own the entire lifecycle — design, build, test, and maintain.',
  },
  {
    icon: <TbChartBar size={32} />,
    title: 'Proven Results',
    desc: 'Our AI-driven solutions have helped businesses increase efficiency, close more deals, and scale faster.',
  },
]

const sdrChannels = [
  { icon: <TbPhone size={24} />, title: 'AI Calling', desc: 'Conversational AI that handles outbound sales calls naturally and intelligently.' },
  { icon: <TbMail size={24} />, title: 'Email Outreach', desc: 'Personalized AI-written email sequences that drive opens and replies at scale.' },
  { icon: <TbBrandWhatsapp size={24} />, title: 'WhatsApp Outreach', desc: 'Automated WhatsApp flows with AI-driven two-way conversation capabilities.' },
  { icon: <TbBrandLinkedin size={24} />, title: 'LinkedIn Outreach', desc: 'AI-powered connection requests, follow-ups, and InMail campaigns on autopilot.' },
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-20 animate-blob"
            style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }} />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-15 animate-blob animation-delay-2000"
            style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full opacity-10 animate-blob animation-delay-4000"
            style={{ background: 'radial-gradient(circle, #6366F1, transparent)' }} />
          {/* Grid overlay */}
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{
                background: 'rgba(59,130,246,0.1)',
                borderColor: 'rgba(59,130,246,0.3)',
                color: '#93C5FD'
              }}
            >
              <TbSparkles size={14} />
              AI-Powered Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            >
              Empowering Business{' '}
              <span className="gradient-text">with AI-Driven</span>{' '}
              Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              We integrate AI into your web apps, mobile apps, and business workflows — delivering chatbots, automation, AR/VR, and intelligent outreach systems that transform how you operate and grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/services" className="btn-primary text-base px-8 py-3.5">
                Explore Services <TbArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn-outline text-base px-8 py-3.5">
                Our AI Products
              </Link>
            </motion.div>
          </div>

          {/* Floating icons */}
          <div className="hidden lg:block">
            {[
              { icon: <TbBrain size={22} />, top: '20%', left: '5%', delay: 0 },
              { icon: <TbRobot size={22} />, top: '60%', left: '3%', delay: 1.5 },
              { icon: <TbWorld size={22} />, top: '20%', right: '5%', delay: 0.8 },
              { icon: <TbDeviceMobile size={22} />, top: '65%', right: '4%', delay: 2 },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-12 rounded-xl glass-card flex items-center justify-center text-blue-400"
                style={{ top: item.top, left: item.left, right: item.right }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar
      <section className="py-10 border-y border-blue-900/30"
        style={{ background: 'rgba(15,26,62,0.5)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value={50} label="Projects Delivered" />
            <StatCard value={20} label="Happy Clients" />
            <StatCard value={5} label="AI Products" />
            <StatCard value={3} label="Years of Excellence" />
          </div>
        </div>
      </section> */}

      {/* What We Do */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">What We Do</span>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <TbBrain size={36} />,
                title: 'AI Integration',
                desc: 'We embed chatbots, LLMs, recommendation engines, and AI features into your existing applications seamlessly.',
                color: '#3B82F6',
              },
              {
                icon: <TbCpu size={36} />,
                title: 'Intelligent Automation',
                desc: 'Automate repetitive workflows with RPA, NLP pipelines, and AI-driven decision engines to save time and cost.',
                color: '#06B6D4',
              },
              {
                icon: <TbAugmentedReality size={36} />,
                title: 'AR/VR Solutions',
                desc: 'Create immersive augmented and virtual reality experiences for training, simulation, and customer engagement.',
                color: '#8B5CF6',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group"
                whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(${i === 0 ? '59,130,246' : i === 1 ? '6,182,212' : '139,92,246'}, 0.15)` }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${item.color}20`, color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28" style={{ background: 'rgba(15,26,62,0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Our Services</span>
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-xl p-6 group cursor-pointer transition-all duration-300"
                whileHover={{ y: -4, borderColor: 'rgba(59,130,246,0.4)' }}
              >
                <div className="w-11 h-11 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/services" className="btn-outline">
              View All Services <TbArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI SDR Spotlight */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden p-0.5"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4, #8B5CF6)' }}
          >
            <div className="rounded-3xl p-8 md:p-12" style={{ background: '#0A0F2C' }}>
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-10">
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{ background: 'rgba(59,130,246,0.15)', color: '#93C5FD', border: '1px solid rgba(59,130,246,0.3)' }}>
                    <TbSparkles size={12} /> AI Product
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                    AI-Powered SDR{' '}
                    <span className="gradient-text">Outreach System</span>
                  </h2>
                  <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                    Automate your entire sales outreach pipeline with AI. Engage prospects across every channel — calls, emails, WhatsApp, and LinkedIn — all on autopilot.
                  </p>
                </div>
                <Link to="/products" className="btn-primary whitespace-nowrap">
                  See Full Product <TbArrowRight size={18} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {sdrChannels.map((channel, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="rounded-xl p-5 border transition-all duration-300 group"
                    style={{ background: 'rgba(59,130,246,0.05)', borderColor: 'rgba(59,130,246,0.15)' }}
                    whileHover={{ background: 'rgba(59,130,246,0.12)', borderColor: 'rgba(59,130,246,0.35)' }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-3">
                      {channel.icon}
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1.5">{channel.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{channel.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28" style={{ background: 'rgba(15,26,62,0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Why Trizen</span>
            <h2 className="section-title">
              Built for the <span className="gradient-text">AI Era</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="text-center glass-card rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))', color: '#60A5FA' }}>
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.1) 0%, transparent 70%)' }} />
              <TbRocket size={40} className="text-blue-400 mx-auto mb-5" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Ready to Transform Your Business{' '}
                <span className="gradient-text">with AI?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Let's build something intelligent together. Talk to our team about your project today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
                  Contact Us <TbArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-outline text-base px-8 py-3.5">
                  View Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
