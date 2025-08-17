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
      title: "Quest System",
      description: "Create quests with RPG-style difficulty levels. Transform mundane tasks into exciting adventures with customizable challenges.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: TrendingUp,
      title: "Skill Progression",
      description: "Level up your skills as you complete tasks. Track your growth across different areas of your life with detailed analytics.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      icon: ShoppingBag,
      title: "Template Marketplace",
      description: "Choose from hundreds of pre-made quest templates. Get started instantly with proven productivity systems.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      icon: Share2,
      title: "Social Sharing",
      description: "Share your achievements and progress with friends. Build accountability through community engagement.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Unlock badges and rewards as you reach milestones. Celebrate your wins with beautiful visual achievements.",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      icon: RefreshCw,
      title: "Cross-Platform Sync",
      description: "Seamlessly sync across web, iOS, and Android. Your progress follows you everywhere you go.",
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
            Powerful Features for{' '}
            <span style={{
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Epic Productivity
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
            Discover the tools that will transform how you approach your daily tasks and long-term goals
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
              Ready to transform your productivity?
            </p>
            <motion.a
              href="https://app.likegame.life"
              className="btn btn-primary"
              style={{ fontSize: '16px' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your First Quest
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
