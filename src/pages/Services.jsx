import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  TbWorld, TbDeviceMobile, TbBrain, TbCpu, TbAugmentedReality,
  TbTestPipe, TbArrowRight, TbCheck, TbSparkles
} from 'react-icons/tb'
import { FaRobot } from 'react-icons/fa'
import { MdOutlineAutoAwesome } from 'react-icons/md'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const services = [
  {
    icon: <TbWorld size={36} />,
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
  },
  {
    icon: <TbDeviceMobile size={36} />,
    title: 'Android App Development',
    subtitle: 'Intelligent Mobile Applications',
    desc: 'Native and cross-platform Android apps with built-in AI capabilities. We develop mobile solutions that are intuitive, performant, and ready for the AI era.',
    features: [
      'Native Android development (Kotlin/Java)',
      'Cross-platform (React Native, Flutter)',
      'AI/ML model integration',
      'Offline-first architecture',
      'Push notifications & real-time features',
      'Play Store deployment',
    ],
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: <TbBrain size={36} />,
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
  },
  {
    icon: <TbCpu size={36} />,
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
  },
  {
    icon: <TbAugmentedReality size={36} />,
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
  },
  {
    icon: <TbTestPipe size={36} />,
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
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full opacity-10 animate-blob"
            style={{ background: 'radial-gradient(circle, #3B82F6, transparent)' }} />
          <div className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full opacity-8 animate-blob animation-delay-2000"
            style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Full-Spectrum <span className="gradient-text">Tech Services</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              From web and mobile development to AI integration, automation, and quality assurance — we deliver end-to-end technology solutions that drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="glass-card rounded-2xl overflow-hidden"
                whileHover={{ borderColor: `${service.color}30` }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Info */}
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${service.color}15`, color: service.color }}>
                        {service.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-1"
                          style={{ color: service.color }}>
                          {service.subtitle}
                        </p>
                        <h2 className="text-white font-bold text-xl md:text-2xl">{service.title}</h2>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-6">{service.desc}</p>
                    <Link to="/contact" className="btn-outline text-sm">
                      Get Started <TbArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Features */}
                  <div className="p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-blue-900/20"
                    style={{ background: `${service.color}05` }}>
                    <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">What's Included</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.07, duration: 0.4 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-slate-300 text-sm"
                        >
                          <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: `${service.color}20`, color: service.color }}>
                            <TbCheck size={12} />
                          </span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ background: 'rgba(15,26,62,0.4)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <TbSparkles size={36} className="text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-slate-400 mb-7">
              Talk to our team and we'll help you identify the right solution for your business goals.
            </p>
            <Link to="/contact" className="btn-primary">
              Talk to Our Team <TbArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
