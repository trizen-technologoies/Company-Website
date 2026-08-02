import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  TbWorld, TbDeviceMobile, TbBrain, TbCpu, TbAugmentedReality,
  TbTestPipe, TbArrowRight, TbCheck, TbSparkles, TbSpeakerphone
} from 'react-icons/tb'
import { FaRobot } from 'react-icons/fa'
import { MdOutlineAutoAwesome } from 'react-icons/md'
import TiltCard from '../components/TiltCard'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const services = [
  {
    icon: <TbWorld size={34} />,
    title: 'Web Application Development',
    subtitle: 'Smart, Scalable Web Experiences',
    desc: 'We build full-stack web applications that are fast, secure, and AI-enhanced. From dashboards to SaaS platforms, we bring your ideas to life with modern technologies.',
    features: [
      'Full-stack development (React, Node.js, etc.)',
      'AI-powered features integration',
      'Progressive Web Apps (PWA)',
      'REST & GraphQL APIs',
      'Cloud deployment & scaling',
      'Performance optimization',
    ],
    color: '#3B82F6',
    gradient: 'from-blue-500 to-blue-600',
    id: 'web-app',
  },
  {
    icon: <TbDeviceMobile size={34} />,
    title: 'IOS / Android App Development',
    subtitle: 'Intelligent Mobile Applications',
    desc: 'Native and cross-platform Android apps with built-in AI capabilities. We develop mobile solutions that are intuitive, performant, and ready for the AI era.',
    features: [
      'Native iOS development (Swift)',
      'Native Android development (Kotlin/Java)',
      'Cross-platform (React Native, Flutter)',
      'AI/ML model integration',
      'Offline-first architecture',
      'Push notifications & real-time features',
      'Play Store deployment',
    ],
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-cyan-600',
    id: 'mobile-app',
  },
  {
    icon: <TbBrain size={34} />,
    title: 'AI & Chatbot Integration',
    subtitle: 'Make Your App Intelligent',
    desc: 'We embed conversational AI, LLMs, recommendation engines, and other intelligent features into your existing or new applications — turning ordinary tools into smart systems.',
    features: [
      'Custom chatbot development',
      'LLM integration (OpenAI, Gemini, Claude)',
      'AI assistants for web & mobile apps',
      'Retrieval-Augmented Generation (RAG)',
      'Sentiment analysis & NLP',
      'AI-powered search & recommendations',
    ],
    color: '#8B5CF6',
    gradient: 'from-violet-500 to-violet-600',
    id: 'ai-chatbot',
  },
  {
    icon: <TbCpu size={34} />,
    title: 'Automation & AI Technologies',
    subtitle: 'Intelligent Process Automation',
    desc: 'Automate repetitive workflows and unlock new efficiencies with AI-driven automation. We combine RPA, NLP pipelines, and computer vision to transform your operations.',
    features: [
      'Robotic Process Automation (RPA)',
      'Intelligent workflow automation',
      'AI-driven analytics & reporting',
      'Natural Language Processing (NLP) pipelines',
      'Computer Vision integration',
      'AI decision engines',
    ],
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-500',
    id: 'automation',
  },
  {
    icon: <TbAugmentedReality size={34} />,
    title: 'AR/VR Products',
    subtitle: 'Immersive Reality Experiences',
    desc: 'We design and build augmented and virtual reality products that create immersive experiences for training, simulation, product visualization, and customer engagement.',
    features: [
      'Augmented Reality (AR) applications',
      'Virtual Reality (VR) environments',
      'Mixed Reality (MR) solutions',
      'AR/VR for training & simulation',
      'Product visualization in AR',
      '3D interactive experiences',
    ],
    color: '#EC4899',
    gradient: 'from-pink-500 to-rose-500',
    id: 'arvr',
  },
  {
    icon: <TbTestPipe size={34} />,
    title: 'Manual & Automated Testing',
    subtitle: 'Quality Assurance You Can Trust',
    desc: 'Comprehensive QA services that ensure your applications are bug-free, reliable, and ready for production. From manual test planning to full CI/CD automation pipelines.',
    features: [
      'Manual testing (functional, regression, UAT)',
      'Test planning, cases & bug reporting',
      'Selenium & Appium automation',
      'Cypress E2E testing',
      'API testing (Postman, REST Assured)',
      'CI/CD pipeline integration',
    ],
    color: '#10B981',
    gradient: 'from-emerald-500 to-green-500',
    id: 'testing',
  },
  {
    icon: <TbSpeakerphone size={34} />,
    title: 'Digital Marketing & SEO',
    subtitle: 'Grow Your Online Visibility',
    desc: 'We help businesses grow their online presence with data-driven digital marketing and SEO strategies — from search rankings to paid campaigns and content that converts.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-per-click (PPC) advertising',
      'Social media marketing & management',
      'Content marketing & strategy',
      'Keyword research & competitor analysis',
      'Analytics & performance tracking',
    ],
    color: '#14B8A6',
    gradient: 'from-teal-500 to-cyan-600',
    id: 'digital-marketing',
  },
]

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Page Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Horizontal scanner line sweeping downward */}
          <motion.div
            animate={{ y: ['-10vh', '110vh'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: 2,
              background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.0) 10%, rgba(59,130,246,0.6) 30%, rgba(6,182,212,0.8) 50%, rgba(59,130,246,0.6) 70%, rgba(59,130,246,0.0) 90%, transparent 100%)',
              boxShadow: '0 0 20px 4px rgba(59,130,246,0.25), 0 0 60px 8px rgba(6,182,212,0.12)',
            }}
          />
          {/* Static soft glows */}
          <div
            className="absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.10]"
            style={{
              background: 'radial-gradient(circle at center, #3B82F6 0%, #1D4ED8 40%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full opacity-[0.08]"
            style={{
              background: 'radial-gradient(circle at center, #06B6D4 0%, transparent 70%)',
              filter: 'blur(70px)',
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
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">Our Services</span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.05' }}
            >
              Full-Spectrum <span className="gradient-text">Tech Services</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              From web and mobile development to AI integration, automation, and quality assurance — we deliver end-to-end technology solutions that drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, i) => (
              <TiltCard
                key={i}
                id={service.id}
                variants={fadeUp}
                initial="hidden"
                {...(i === 0
                  ? { animate: 'visible' }
                  : { whileInView: 'visible', viewport: { once: true, margin: '-50px' } })}
                className="glass-card rounded-3xl overflow-hidden"
                whileHover={{
                  boxShadow: `0 0 0 1px ${service.color}22, 0 25px 60px ${service.color}0e`,
                  borderColor: `${service.color}20`,
                }}
                transition={{ duration: 0.35 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Info */}
                  <div className="p-9 md:p-11">
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${service.color}12`, color: service.color }}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-[0.15em] mb-1.5"
                          style={{ color: service.color }}
                        >
                          {service.subtitle}
                        </p>
                        <h2 className="text-white font-bold text-xl md:text-2xl" style={{ letterSpacing: '-0.02em' }}>
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-7 text-[0.95rem]">{service.desc}</p>
                    <Link to="/contact" className="btn-outline text-sm">
                      Get Started <TbArrowRight size={15} />
                    </Link>
                  </div>

                  {/* Features */}
                  <div
                    className="p-9 md:p-11 border-t lg:border-t-0 lg:border-l"
                    style={{
                      background: `${service.color}06`,
                      borderColor: 'rgba(255,255,255,0.05)',
                    }}
                  >
                    <h3
                      className="text-xs font-semibold uppercase tracking-[0.15em] mb-6"
                      style={{ color: service.color }}
                    >
                      What's Included
                    </h3>
                    <ul className="space-y-3.5">
                      {service.features.map((feature, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.06, duration: 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-slate-300 text-sm"
                        >
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: `${service.color}18`, color: service.color }}
                          >
                            <TbCheck size={11} />
                          </span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28" style={{ background: 'rgba(255,255,255,0.016)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{ background: 'rgba(59,130,246,0.1)', color: '#60A5FA' }}>
              <TbSparkles size={26} />
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-5" style={{ letterSpacing: '-0.025em' }}>
              Not Sure Which Service You Need?
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              Talk to our team and we'll help you identify the right solution for your business goals.
            </p>
            <Link to="/contact" className="btn-primary px-8 py-4 text-base">
              Talk to Our Team <TbArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
