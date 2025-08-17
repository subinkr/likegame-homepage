import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import PlatformSection from './components/PlatformSection'
import CTASection from './components/CTASection'
import './App.css'
import './styles/responsive.css'

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PlatformSection />
      <CTASection />
    </div>
  )
}

export default App