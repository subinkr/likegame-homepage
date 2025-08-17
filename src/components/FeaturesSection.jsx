import React from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  TrendingUp, 
  ShoppingBag, 
  Share2, 
  Award, 
  RefreshCw 
} from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "퀘스트 시스템",
      description: "A, B, C, D, E, F 등급의 난이도로 퀘스트를 생성하세요. 프로그래밍, 건강, 학습 등 다양한 카테고리의 작업을 게임화합니다.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: TrendingUp,
      title: "스탯 시스템",
      description: "근력, 민첩, 지구력 등 다양한 스탯을 레벨업하세요. 각 스탯은 20단계로 구성되어 체계적인 성장을 추적합니다.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      icon: ShoppingBag,
      title: "템플릿 시스템",
      description: "기본 일일 루틴, 프로그래밍 마스터 로드맵 등 다양한 템플릿을 선택하세요. 자기계발, 학습, 건강 카테고리로 분류되어 있습니다.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      icon: Share2,
      title: "소셜 공유",
      description: "친구들과 성취와 진행 상황을 공유하세요. 커뮤니티 참여를 통해 책임감을 구축합니다.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      icon: Award,
      title: "마일스톤 시스템",
      description: "퀘스트를 완료하면서 마일스톤을 달성하세요. 완료 시 축하 팝업과 함께 성취감을 느껴보세요.",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      icon: RefreshCw,
      title: "서브태스크 시스템",
      description: "퀘스트를 작은 서브태스크로 나누어 관리하세요. 진행률을 실시간으로 확인하고 체계적으로 완료해보세요.",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.03) 100%)',
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
            에픽 생산성을 위한{' '}
            <span style={{
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              강력한 기능들
            </span>
          </motion.h2>
          <motion.p
            style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            일상의 작업과 장기 목표에 접근하는 방식을 바꿀 도구들을 발견하세요
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px',
            marginBottom: '60px'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass glass-hover"
              style={{
                padding: '32px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                position: 'relative',
                overflow: 'hidden'
              }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Background Gradient */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: feature.gradient
                }}
              />

              {/* Icon */}
              <motion.div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: feature.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon size={32} color="white" />
              </motion.div>

              {/* Content */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '16px'
              }}>
                {feature.title}
              </h3>

              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                {feature.description}
              </p>

              {/* Hover Overlay */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${feature.gradient.split('(')[1].split(')')[0]})`,
                  opacity: 0,
                  borderRadius: '20px'
                }}
                whileHover={{ opacity: 0.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="glass"
            style={{
              display: 'inline-block',
              padding: '24px 32px',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '16px',
              fontSize: '1.1rem'
            }}>
              생산성을 변화시킬 준비가 되셨나요?
            </p>
            <motion.a
              href="https://app.likegame.life"
              className="btn btn-primary"
              style={{ fontSize: '16px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              지금 시작하기
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            right: '5%',
            width: '100px',
            height: '100px',
            background: 'var(--secondary-gradient)',
            borderRadius: '50%',
            opacity: 0.1,
            filter: 'blur(40px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '10%',
            width: '80px',
            height: '80px',
            background: 'var(--accent-gradient)',
            borderRadius: '50%',
            opacity: 0.1,
            filter: 'blur(30px)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          .feature-card {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default FeaturesSection

