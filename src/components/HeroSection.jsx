import React from 'react'
import { motion } from 'framer-motion'
import { Play, Download, Globe, Smartphone } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="section" style={{ 
      background: 'var(--primary-gradient)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background particles */}
      <div className="background-particles">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          minHeight: '70vh'
        }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ textAlign: 'left' }}
          >
            <motion.h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                color: 'white',
                marginBottom: '24px',
                lineHeight: '1.1'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              일상의 작업을{' '}
              <span className="gradient-text" style={{
                background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                에픽 퀘스트
              </span>
              로 변환하세요
            </motion.h1>

            <motion.p
              style={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '40px',
                maxWidth: '500px'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              게임화된 태스크 관리로 생산성을 레벨업하세요. 일상의 작업을 모험으로 바꾸고 잠재력을 깨워보세요.
            </motion.p>

            {/* Download Buttons */}
            <motion.div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '40px'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <motion.a
                  href="https://app.likegame.life"
                  className="btn btn-primary"
                  style={{ fontSize: '18px', padding: '16px 32px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe size={20} />
                  웹에서 시작하기
                </motion.a>

                <motion.a
                  href="#platform"
                  className="btn btn-outline"
                  style={{ fontSize: '18px', padding: '16px 32px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  앱 다운로드
                </motion.a>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <motion.a
                  href="#"
                  className="btn btn-secondary"
                  style={{ padding: '12px 24px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img 
                    src="/ios-icon.png" 
                    alt="iOS" 
                    style={{ width: '20px', height: '20px' }}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  앱스토어
                </motion.a>

                <motion.a
                  href="#"
                  className="btn btn-secondary"
                  style={{ padding: '12px 24px' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Smartphone size={20} />
                  구글 플레이
                </motion.a>
              </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              style={{
                display: 'flex',
                gap: '32px',
                color: 'rgba(255, 255, 255, 0.8)'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }}>🎯</div>
                <div style={{ fontSize: '0.9rem' }}>게임화된 작업</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }}>⚡</div>
                <div style={{ fontSize: '0.9rem' }}>즉시 시작</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: 'white' }}>🔄</div>
                <div style={{ fontSize: '0.9rem' }}>크로스 플랫폼</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - App Mockup */}
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="glass float"
              style={{
                padding: '40px',
                borderRadius: '24px',
                maxWidth: '400px',
                width: '100%',
                position: 'relative'
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Mock App Interface */}
              <div style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                borderRadius: '16px',
                padding: '24px',
                color: 'white'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--accent-gradient)',
                    borderRadius: '8px',
                    marginRight: '12px'
                  }}></div>
                  <div>
                                      <div style={{ fontWeight: '600', fontSize: '18px' }}>일일 퀘스트</div>
                  <div style={{ fontSize: '14px', opacity: '0.7' }}>레벨 15 • 2,840 XP</div>
                  </div>
                </div>

                {/* Quest Items */}
                {[
                  { title: '🏃‍♂️ 인클라인 푸시업을 12회 했다', xp: 'Lv.41', completed: true },
                  { title: '💪 불가리안 스플릿 스쿼트를 양쪽 각 8회 했다', xp: 'Lv.42', completed: false },
                  { title: '🦵 싱글 레그 카프 레이즈를 양쪽 각 15회 했다', xp: 'Lv.43', completed: false },
                  { title: '🏋️ 힙 힌지를 20회 했다', xp: 'Lv.44', completed: true }
                ].map((quest, index) => (
                  <motion.div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      background: quest.completed ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '8px',
                      marginBottom: '8px',
                      border: quest.completed ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                      opacity: quest.completed ? 0.8 : 1
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div style={{
                      textDecoration: quest.completed ? 'line-through' : 'none',
                      fontSize: '14px'
                    }}>
                      {quest.title}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: quest.completed ? '#22c55e' : '#fbbf24',
                      fontWeight: '600'
                    }}>
                      {quest.xp}
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  style={{
                    marginTop: '20px',
                    padding: '16px',
                    background: 'var(--primary-gradient)',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div style={{ fontSize: '14px', marginBottom: '4px' }}>C 등급 진행률</div>
                  <div style={{ fontSize: '20px', fontWeight: '700' }}>2/20</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              style={{
                position: 'absolute',
                top: '10%',
                right: '-10%',
                width: '60px',
                height: '60px',
                background: 'var(--accent-gradient)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px'
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ⚡
            </motion.div>

            <motion.div
              style={{
                position: 'absolute',
                bottom: '20%',
                left: '-15%',
                width: '80px',
                height: '80px',
                background: 'var(--secondary-gradient)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px'
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              🎯
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255, 255, 255, 0.7)'
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div style={{ fontSize: '14px', marginBottom: '8px' }}>스크롤하여 탐험하기</div>
          <div style={{ fontSize: '24px' }}>↓</div>
        </motion.div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          
          .hero-content {
            text-align: center !important;
          }
          
          .hero-buttons {
            justify-content: center !important;
          }
          
          .hero-stats {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection

