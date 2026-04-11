import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  TbBrain, TbTarget, TbEye, TbHeart, TbUsers,
  TbSparkles, TbArrowRight, TbStar, TbTrophy,
  TbBulb, TbShieldCheck
} from 'react-icons/tb'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const values = [
  {
    icon: <TbBulb size={28} />,
    title: 'Innovation',
    desc: 'We stay ahead of the curve by continuously exploring and adopting the latest AI and technology advancements.',
    color: '#3B82F6',
  },
  {
    icon: <TbStar size={28} />,
    title: 'Quality',
    desc: 'Every line of code and every solution we deliver meets the highest standards of quality and performance.',
    color: '#06B6D4',
  },
  {
    icon: <TbBrain size={28} />,
    title: 'AI-First',
    desc: 'Intelligence is not an add-on for us — it\'s built into the foundation of everything we design and build.',
    color: '#8B5CF6',
  },
  {
    icon: <TbHeart size={28} />,
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
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-10 animate-blob"
            style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              We Are <span className="gradient-text">Trizen Technologies</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              An AI-first technology company building intelligent solutions that transform the way businesses operate, communicate, and grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-24" style={{ background: 'rgba(15,26,62,0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Building the <span className="gradient-text">Intelligent Future</span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Trizen Technologies was founded with a single vision — to make AI accessible and impactful for businesses of every size. We saw a world where companies were struggling to keep up with rapidly evolving technology, and we decided to bridge that gap.
                </p>
                <p>
                  What started as a web and mobile development company quickly evolved into an AI-first technology partner. We realized that the most meaningful value we could add wasn't just building applications — it was making them <em className="text-blue-300">intelligent</em>.
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
                { icon: <TbBrain size={28} />, label: 'AI-Powered Solutions' },
                { icon: <TbTrophy size={28} />, label: '50+ Projects Delivered' },
                { icon: <TbUsers size={28} />, label: '20+ Happy Clients' },
                { icon: <TbShieldCheck size={28} />, label: 'Quality Guaranteed' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="glass-card rounded-xl p-5 text-center"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-3">
                    {item.icon}
                  </div>
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-24">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              variants={fadeUp}
              className="glass-card rounded-2xl p-8 border-l-4"
              style={{ borderLeftColor: '#3B82F6' }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                  <TbTarget size={26} />
                </div>
                <h3 className="text-white font-bold text-2xl">Our Mission</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                To democratize AI technology by integrating intelligent capabilities into everyday business applications — empowering companies to automate, scale, and compete in the AI era, regardless of their size or industry.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="glass-card rounded-2xl p-8 border-l-4"
              style={{ borderLeftColor: '#06B6D4' }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                  <TbEye size={26} />
                </div>
                <h3 className="text-white font-bold text-2xl">Our Vision</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                To be the leading AI integration partner for businesses worldwide — a company synonymous with innovation, where every product we build pushes the frontier of what's possible with artificial intelligence and emerging technologies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-24" style={{ background: 'rgba(15,26,62,0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Core Values</span>
            <h2 className="section-title">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass-card rounded-xl p-6 text-center group"
                whileHover={{ y: -6, boxShadow: `0 20px 40px ${value.color}20` }}
              >
                <div className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: `${value.color}15`, color: value.color }}>
                  {value.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
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
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ background: 'rgba(15,26,62,0.3)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <TbSparkles size={36} className="text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Let's Build Something <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-slate-400 mb-7">
              Whether you're looking to integrate AI, automate workflows, or launch a new product — we're ready to partner with you.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch <TbArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
