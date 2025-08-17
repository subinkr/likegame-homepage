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
      title: "퀘스트 생성 또는 템플릿 선택",
      description: "새로운 퀘스트를 직접 생성하거나 기본 일일 루틴, 프로그래밍 마스터 로드맵 등 다양한 템플릿을 선택하세요.",
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      number: "02",
      icon: Play,
      title: "서브태스크 완료 및 진행률 업데이트",
      description: "퀘스트를 서브태스크로 나누어 단계별로 완료하세요. 각 단계를 완료할 때마다 진행률이 업데이트되고 실시간으로 확인할 수 있습니다.",
      color: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "스탯 레벨업 및 마일스톤 달성",
      description: "퀘스트를 완료하면서 근력, 민첩, 지구력 등의 스탯을 레벨업하세요. 마일스톤을 달성하면 축하 팝업과 함께 성취감을 느낄 수 있습니다.",
      color: "#43e97b",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      number: "04",
      icon: Share2,
      title: "프로필에서 성과 확인",
      description: "완료한 퀘스트 수와 보유한 스킬 수를 프로필에서 확인하세요. 개인적인 성장 기록을 한눈에 볼 수 있습니다.",
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
            <span style={{
              background: 'var(--secondary-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              LikeGame
            </span>{' '}
            사용법
          </motion.h2>
          <motion.p
            style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            네 가지 간단한 단계로 생산성을 변화시키세요. 오늘부터 작업을 에픽 퀘스트로 바꾸는 여정을 시작하세요.
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
              Start Your Journey
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

