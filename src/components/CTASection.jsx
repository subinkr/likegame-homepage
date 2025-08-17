import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Zap, 
  Globe, 
  Download, 
  ArrowRight,
  Star,
  Users,
  Trophy
} from 'lucide-react'

const CTASection = () => {
  const features = [
    {
      icon: Users,
      title: "스탯 시스템",
      description: "근력, 민첩, 지구력 등 다양한 스탯 관리",
      color: "#667eea"
    },
    {
      icon: Trophy,
      title: "마일스톤 시스템",
      description: "퀘스트 완료 시 축하 팝업과 성취감",
      color: "#f093fb"
    },
    {
      icon: Star,
      title: "템플릿 시스템",
      description: "다양한 카테고리의 퀘스트 템플릿 제공",
      color: "#43e97b"
    }
  ]

  const benefits = [
    "✅ 무료로 사용 가능",
    "✅ 모바일 앱 출시 예정",
    "✅ 정기적인 업데이트 및 개선"
  ]

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, #1a1a2e 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(240, 147, 251, 0.1) 0%, transparent 50%)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main CTA Content */}
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Subtitle */}
          <motion.div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '8px 16px',
              borderRadius: '20px',
              marginBottom: '24px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Zap size={16} color="#fbbf24" />
            <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.9rem', fontWeight: '500' }}>
              Ready to Level Up?
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '24px',
              lineHeight: '1.1'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Start Your{' '}
            <span style={{
              background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              게임화된 여정
            </span>{' '}
            을 시작하세요
          </motion.h2>

          {/* Description */}
                      <motion.p
              style={{
                fontSize: '1.3rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '700px',
                margin: '0 auto 48px',
                lineHeight: '1.6'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              일상의 작업을 흥미진진한 퀘스트로 변환하세요. 게임화된 접근 방식으로 오늘부터 생산성 여정을 시작하세요.
            </motion.p>

          {/* Main Action Buttons */}
          <motion.div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://app.likegame.life"
              className="btn btn-primary"
              style={{
                fontSize: '1.2rem',
                padding: '18px 36px',
                background: 'var(--primary-gradient)',
                boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Shine Effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  zIndex: 1
                }}
                animate={{
                  left: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
              <Globe size={20} style={{ zIndex: 2 }} />
              <span style={{ zIndex: 2 }}>웹에서 시작하기</span>
            </motion.a>

            <motion.a
              href="#platform"
              className="btn btn-outline"
              style={{
                fontSize: '1.2rem',
                padding: '18px 36px'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              앱 다운로드
            </motion.a>
          </motion.div>

          {/* Benefits */}
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px',
              maxWidth: '800px',
              margin: '0 auto'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                {benefit}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="glass"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            padding: '48px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            marginBottom: '80px'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 * index, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <motion.div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${feature.color}, ${feature.color}80)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon size={28} color="white" />
                </motion.div>
                
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '8px'
                }}>
                  {feature.title}
                </h4>
                
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          style={{
            textAlign: 'center',
            background: 'var(--primary-gradient)',
            borderRadius: '24px',
            padding: '60px 40px',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              color: 'white',
              marginBottom: '16px'
            }}>
              당신의 모험이 기다리고 있습니다
            </h3>
            
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px',
              maxWidth: '500px',
              margin: '0 auto 32px'
            }}>
              또 다른 하루를 진전 없이 보내지 마세요. 지금 생산성 여정을 시작하고 당신이 진정으로 할 수 있는 것을 발견하세요.
            </p>

            <motion.a
              href="https://app.likegame.life"
              className="btn btn-secondary"
              style={{
                fontSize: '1.2rem',
                padding: '16px 32px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white'
              }}
              whileHover={{ 
                scale: 1.05,
                background: 'rgba(255, 255, 255, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              지금 시작하기
              <ArrowRight size={20} />
            </motion.a>
          </div>

          {/* Floating Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '60px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem',
            marginBottom: '12px'
          }}>
            © 2025 LikeGame. 일상의 작업을 에픽 퀘스트로 변환하세요.
          </p>
          <Link 
            to="/privacy"
            style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
          >
            개인정보 처리방침
          </Link>
        </motion.div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .cta-buttons {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .cta-buttons .btn {
            width: 100% !important;
            max-width: 300px !important;
          }
          
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default CTASection

