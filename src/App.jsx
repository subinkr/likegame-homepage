import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import PlatformSection from './components/PlatformSection'
import CTASection from './components/CTASection'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import './App.css'
import './styles/responsive.css'

function HomePage() {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </Router>
  )
}

export default App