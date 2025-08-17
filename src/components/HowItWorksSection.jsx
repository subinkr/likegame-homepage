import React from 'react'
import { motion } from 'framer-motion'
import { 
  PlusCircle, 
  Play, 
  TrendingUp, 
  Share2,
  ArrowRight 
} from 'lucide-react'

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: PlusCircle,
      title: "Create or Choose a Quest Template",
      description: "Start by creating your own quest or browse our marketplace of pre-made templates. Choose from productivity, fitness, learning, or custom categories.",
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      number: "02",
      icon: Play,
      title: "Complete Tasks and Earn Experience",
      description: "Break down your quest into manageable tasks. Complete them to earn XP, unlock achievements, and see your progress in real-time.",
      color: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Level Up Your Skills and Unlock Achievements",
      description: "Watch your skills grow as you consistently complete quests. Unlock badges, level up different skill trees, and track your personal growth.",
      color: "#43e97b",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      number: "04",
      icon: Share2,
      title: "Share Your Progress with Friends",
      description: "Celebrate your wins by sharing achievements with your community. Build accountability through social features and inspire others.",
      color: "#fa709a",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.06) 100%)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '80px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '24px'
            }}
          >
            How{' '}
            <span style={{
              background: 'var(--secondary-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              LikeGame
            </span>{' '}
            Works
          </motion.h2>
          <motion.p
            style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Transform your productivity in four simple steps. Start your journey from tasks to epic quests today.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1fr 2fr' : '2fr 1fr',
                gap: '60px',
                alignItems: 'center',
                marginBottom: index < steps.length - 1 ? '120px' : '0',
                position: 'relative'
              }}
            >
              {/* Content */}
              <div style={{ 
                order: index % 2 === 0 ? 1 : 2,
                textAlign: index % 2 === 0 ? 'left' : 'right'
              }}>
                <motion.div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '24px'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: step.color,
                    background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: `1px solid ${step.color}30`
                  }}>
                    STEP {step.number}
                  </div>
                </motion.div>

                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '20px',
                  lineHeight: '1.2'
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  marginBottom: '32px',
                  maxWidth: '500px',
                  margin: index % 2 === 0 ? '0' : '0 0 32px auto'
                }}>
                  {step.description}
                </p>

                <motion.div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: step.color,
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                  whileHover={{ x: 5 }}
                >
                  Learn More <ArrowRight size={16} />
                </motion.div>
              </div>

              {/* Visual */}
              <motion.div
                style={{ 
                  order: index % 2 === 0 ? 2 : 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative'
                }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="glass"
                  style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: `${step.gradient}15`,
                    backdropFilter: 'blur(20px)',
                    border: `2px solid ${step.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {/* Background Pattern */}
                  <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: `conic-gradient(from 0deg, transparent, ${step.color}20, transparent)`,
                    borderRadius: '50%'
                  }} />

                  {/* Icon Container */}
                  <motion.div
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: step.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 2
                    }}
                    animate={{
                      rotate: [0, -360]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <step.icon size={48} color="white" />
                  </motion.div>

                  {/* Floating Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      style={{
                        position: 'absolute',
                        width: '8px',
                        height: '8px',
                        background: step.color,
                        borderRadius: '50%',
                        top: '50%',
                        left: '50%'
                      }}
                      animate={{
                        x: [0, Math.cos(i * 45 * Math.PI / 180) * 100],
                        y: [0, Math.sin(i * 45 * Math.PI / 180) * 100],
                        opacity: [0.8, 0, 0.8],
                        scale: [1, 0.5, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>

                {/* Step Number */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '60px',
                    height: '60px',
                    background: step.gradient,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    color: 'white',
                    boxShadow: `0 8px 24px ${step.color}40`
                  }}
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {step.number}
                </motion.div>
              </motion.div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '-60px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '2px',
                    height: '60px',
                    background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})`,
                    opacity: 0.5
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          style={{ textAlign: 'center', marginTop: '80px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://app.likegame.life"
            className="btn btn-primary"
            style={{ 
              fontSize: '1.2rem', 
              padding: '16px 32px',
              background: 'var(--primary-gradient)',
              boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 12px 40px rgba(102, 126, 234, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Epic Journey
          </motion.a>
        </motion.div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .step-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          
          .step-content {
            order: 2 !important;
            text-align: center !important;
          }
          
          .step-visual {
            order: 1 !important;
          }
          
          .step-visual .glass {
            width: 250px !important;
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default HowItWorksSection
