import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  TbBrain, TbTarget, TbEye, TbHeart, TbUsers,
  TbSparkles, TbArrowRight, TbStar, TbTrophy,
  TbBulb, TbShieldCheck
} from 'react-icons/tb'
import TiltCard from '../components/TiltCard'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const values = [
  {
    icon: <TbBulb size={26} />,
    title: 'Innovation',
    desc: 'We stay ahead of the curve by continuously exploring and adopting the latest AI and technology advancements.',
    color: '#3B82F6',
  },
  {
    icon: <TbStar size={26} />,
    title: 'Quality',
    desc: 'Every line of code and every solution we deliver meets the highest standards of quality and performance.',
    color: '#06B6D4',
  },
  {
    icon: <TbBrain size={26} />,
    title: 'AI-First',
    desc: 'Intelligence is not an add-on for us — it\'s built into the foundation of everything we design and build.',
    color: '#8B5CF6',
  },
  {
    icon: <TbHeart size={26} />,
    title: 'Client Success',
    desc: 'Your growth is our mission. We measure our success by the results and value we create for your business.',
    color: '#F59E0B',
  },
]

const team = [
  { name: 'Team Member', role: 'Founder & CEO', initials: 'TM' },
  { name: 'Team Member', role: 'CTO & AI Lead', initials: 'TM' },
  { name: 'Team Member', role: 'Head of Engineering', initials: 'TM' },
  { name: 'Team Member', role: 'Product Manager', initials: 'TM' },
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Page Hero ── */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Orbital rings */}
          {[
            { size: 600, duration: 18, color: 'rgba(59,130,246,0.13)', reverse: false },
            { size: 1000, duration: 28, color: 'rgba(6,182,212,0.08)', reverse: true },
            { size: 1400, duration: 40, color: 'rgba(99,102,241,0.06)', reverse: false },
          ].map((ring, i) => (
            <motion.div
              key={i}
              animate={{ rotate: ring.reverse ? [0, -360] : [0, 360] }}
              transition={{ duration: ring.duration, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: ring.size,
                height: ring.size,
                borderRadius: '50%',
                border: `1px solid ${ring.color}`,
                boxShadow: `0 0 30px ${ring.color}`,
                top: '50%',
                left: '50%',
                marginLeft: -(ring.size / 2),
                marginTop: -(ring.size / 2),
              }}
            >
              {/* Glowing dot orbiting on the ring */}
              <div style={{
                position: 'absolute',
                top: -4,
                left: '50%',
                marginLeft: -4,
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: ring.color.replace('0.', '0.9').replace(',0.', ',0.'),
                boxShadow: `0 0 12px 4px ${ring.color}`,
              }} />
            </motion.div>
          ))}
          {/* Central soft glow */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-[0.12]"
            style={{
              background: 'radial-gradient(circle at center, #3B82F6 0%, #1D4ED8 40%, transparent 70%)',
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">About Us</span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}
            >
              We Are <span className="gradient-text">Trizen Technologies</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              An AI-first technology company building intelligent solutions that transform the way businesses operate, communicate, and grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 md:py-28" style={{ background: 'rgba(255,255,255,0.016)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-7" style={{ letterSpacing: '-0.025em', lineHeight: '1.1' }}>
                Building the <span className="gradient-text">Intelligent Future</span>
              </h2>
              <div className="space-y-5 text-slate-400 leading-relaxed text-[0.95rem]">
                <p>
                  Trizen Technologies was founded with a single vision — to make AI accessible and impactful for businesses of every size. We saw a world where companies were struggling to keep up with rapidly evolving technology, and we decided to bridge that gap.
                </p>
                <p>
                  What started as a web and mobile development company quickly evolved into an AI-first technology partner. We realized that the most meaningful value we could add wasn't just building applications — it was making them <em className="text-blue-300 not-italic font-medium">intelligent</em>.
                </p>
                <p>
                  Today, we integrate chatbots, automation systems, AR/VR experiences, and AI-powered outreach tools into businesses across industries — helping them work smarter, grow faster, and lead their markets.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: <TbBrain size={26} />, label: 'AI-Powered Solutions', color: '#3B82F6' },
                { icon: <TbTrophy size={26} />, label: '50+ Projects Delivered', color: '#06B6D4' },
                { icon: <TbUsers size={26} />, label: '20+ Happy Clients', color: '#8B5CF6' },
                { icon: <TbShieldCheck size={26} />, label: 'Quality Guaranteed', color: '#F59E0B' },
              ].map((item, i) => (
                <TiltCard
                  key={i}
                  variants={fadeUp}
                  className="glass-card rounded-2xl p-6 text-center"
                  whileHover={{ y: -5, boxShadow: `0 0 0 1px ${item.color}28, 0 20px 50px ${item.color}12` }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: `${item.color}12`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-white text-sm font-medium leading-snug">{item.label}</p>
                </TiltCard>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="section-title">
              Our <span className="gradient-text">Mission & Vision</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <motion.div
              variants={fadeUp}
              className="glass-card rounded-2xl p-9"
              style={{ borderLeft: '2px solid rgba(59,130,246,0.5)' }}
              whileHover={{ y: -5, boxShadow: '0 0 0 1px rgba(59,130,246,0.2), 0 25px 60px rgba(59,130,246,0.08)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(59,130,246,0.12)', color: '#60A5FA' }}>
                  <TbTarget size={24} />
                </div>
                <h3 className="text-white font-bold text-2xl" style={{ letterSpacing: '-0.02em' }}>Our Mission</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                To democratize AI technology by integrating intelligent capabilities into everyday business applications — empowering companies to automate, scale, and compete in the AI era, regardless of their size or industry.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="glass-card rounded-2xl p-9"
              style={{ borderLeft: '2px solid rgba(6,182,212,0.5)' }}
              whileHover={{ y: -5, boxShadow: '0 0 0 1px rgba(6,182,212,0.2), 0 25px 60px rgba(6,182,212,0.08)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(6,182,212,0.12)', color: '#22D3EE' }}>
                  <TbEye size={24} />
                </div>
                <h3 className="text-white font-bold text-2xl" style={{ letterSpacing: '-0.02em' }}>Our Vision</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                To be the leading AI integration partner for businesses worldwide — a company synonymous with innovation, where every product we build pushes the frontier of what's possible with artificial intelligence and emerging technologies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-20 md:py-28" style={{ background: 'rgba(255,255,255,0.016)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Core Values</span>
            <h2 className="section-title">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {values.map((value, i) => (
              <TiltCard
                key={i}
                variants={fadeUp}
                className="glass-card rounded-2xl p-7 text-center"
                whileHover={{
                  y: -7,
                  boxShadow: `0 0 0 1px ${value.color}28, 0 25px 60px ${value.color}14`,
                  borderColor: `${value.color}22`,
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                  style={{ background: `${value.color}12`, color: value.color }}
                >
                  {value.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ letterSpacing: '-0.01em' }}>{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team (commented out)
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Our Team</span>
            <h2 className="section-title">
              The Minds Behind <span className="gradient-text">Trizen</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              A passionate team of engineers, AI specialists, and product builders united by a love for technology and innovation.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-xl p-6 text-center group"
                whileHover={{ y: -4 }}
              >
                <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center font-bold text-lg text-white"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #06B6D4)' }}>
                  {member.initials}
                </div>
                <h3 className="text-white font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* ── CTA ── */}
      <section className="py-20 md:py-28" style={{ background: 'rgba(255,255,255,0.016)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ background: 'rgba(59,130,246,0.1)', color: '#60A5FA' }}>
              <TbSparkles size={26} />
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-5" style={{ letterSpacing: '-0.025em' }}>
              Let's Build Something <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Whether you're looking to integrate AI, automate workflows, or launch a new product — we're ready to partner with you.
            </p>
            <Link to="/contact" className="btn-primary px-8 py-4 text-base">
              Get in Touch <TbArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
