import React from 'react'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Smartphone, 
  Monitor,
  Download,
  Zap,
  Bell,
  RefreshCw,
  CheckCircle2
} from 'lucide-react'

const PlatformSection = () => {
  const platforms = [
    {
      name: "Web App",
      subtitle: "app.likegame.life",
      icon: Globe,
      description: "Play instantly in your browser with full feature access",
      features: [
        "No download required",
        "Full feature access",
        "Cross-platform sync",
        "Real-time updates",
        "Desktop optimized"
      ],
      color: "#667eea",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      buttonText: "Play on Web",
      buttonLink: "https://app.likegame.life",
      isPrimary: true
    },
    {
      name: "iOS App",
      subtitle: "iPhone & iPad",
      icon: Smartphone,
      description: "Native iOS experience optimized for Apple devices",
      features: [
        "Native iOS experience",
        "Push notifications",
        "Widget support",
        "Face ID / Touch ID",
        "Apple Watch support"
      ],
      color: "#f093fb",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      buttonText: "Download on App Store",
      buttonLink: "#",
      badge: "Coming Soon"
    },
    {
      name: "Android App",
      subtitle: "All Android Devices",
      icon: Monitor,
      description: "Material Design interface for Android devices",
      features: [
        "Material Design UI",
        "Background sync",
        "Widget support",
        "Notification actions",
        "Android shortcuts"
      ],
      color: "#43e97b",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      buttonText: "Get it on Google Play",
      buttonLink: "#",
      badge: "Coming Soon"
    }
  ]

  const syncFeatures = [
    {
      icon: RefreshCw,
      title: "Real-time Sync",
      description: "Your progress syncs instantly across all devices"
    },
    {
      icon: Zap,
      title: "Offline Mode",
      description: "Continue your quests even without internet connection"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get reminded about your quests at the perfect time"
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
    <section className="section" id="platform" style={{ 
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.03) 100%)',
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
            Available on{' '}
            <span style={{
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              All Platforms
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
            Choose your platform and start your epic journey. Your progress syncs seamlessly across all devices.
          </motion.p>
        </motion.div>

        {/* Platforms Grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            marginBottom: '80px'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="glass glass-hover"
              style={{
                padding: '40px',
                borderRadius: '24px',
                background: platform.isPrimary 
                  ? 'rgba(255, 255, 255, 0.12)' 
                  : 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: platform.isPrimary 
                  ? `2px solid ${platform.color}60` 
                  : '1px solid rgba(255, 255, 255, 0.15)',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center'
              }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Badge */}
              {platform.badge && (
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'var(--secondary-gradient)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {platform.badge}
                </motion.div>
              )}

              {/* Primary Badge */}
              {platform.isPrimary && (
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'var(--accent-gradient)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Recommended
                </motion.div>
              )}

              {/* Icon */}
              <motion.div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  background: platform.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  position: 'relative'
                }}
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <platform.icon size={40} color="white" />
                
                {/* Glow Effect */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '20px',
                    background: platform.gradient,
                    opacity: 0,
                    filter: 'blur(20px)',
                    transform: 'scale(1.2)'
                  }}
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Content */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '8px'
              }}>
                {platform.name}
              </h3>

              <p style={{
                fontSize: '1rem',
                color: platform.color,
                marginBottom: '16px',
                fontWeight: '500'
              }}>
                {platform.subtitle}
              </p>

              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '24px',
                lineHeight: '1.5'
              }}>
                {platform.description}
              </p>

              {/* Features List */}
              <div style={{ marginBottom: '32px', textAlign: 'left' }}>
                {platform.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * featureIndex }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2 size={16} color={platform.color} />
                    <span style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '0.9rem'
                    }}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Download Button */}
              <motion.a
                href={platform.buttonLink}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  background: platform.gradient,
                  boxShadow: `0 8px 24px ${platform.color}40`
                }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: `0 12px 32px ${platform.color}60`
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={18} />
                {platform.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Sync Features */}
        <motion.div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            padding: '60px 40px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '16px'
          }}>
            Seamless Cross-Platform Experience
          </h3>
          
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '48px',
            maxWidth: '600px',
            margin: '0 auto 48px'
          }}>
            Your quests, progress, and achievements follow you everywhere. Start on web, continue on mobile, and never miss a beat.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px'
          }}>
            {syncFeatures.map((feature, index) => (
              <motion.div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <motion.div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--primary-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <feature.icon size={28} color="white" />
                </motion.div>
                
                <div>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '8px'
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.95rem'
                  }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .platforms-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          
          .platform-card {
            padding: 32px 24px !important;
          }
          
          .sync-features {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default PlatformSection
