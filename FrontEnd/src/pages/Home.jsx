import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/Home Components/HeroSection'
import AboutSection from '../components/Home Components/AboutSection'
import ImpactSection from '../components/Home Components/ImpactSection'
import SuccessStoriesSection from '../components/SuccessStoriesSection'
import InitiativesSection from '../components/InitiativesSection'
import ReachSection from '../components/ReachSection'
import TestimonialsSection from '../components/TestimonialsSection'
import PartnersSection from '../components/Home Components/PartnersSection'
import Footer from '../components/Footer'
import Foundermessage from '../components/Home Components/Foundermessage'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Foundermessage />
      <PartnersSection />
      <ImpactSection />
    </div>
  )
}

export default Home