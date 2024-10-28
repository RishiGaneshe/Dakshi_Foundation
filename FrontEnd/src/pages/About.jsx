import React from 'react'
import Abouthero from '../components/About Components/Abouthero'
import AboutPrograms from '../components/About Components/AboutPrograms'
import AboutMission from '../components/About Components/AboutMission'
import OurTeam from '../components/About Components/OurTeam'
import OurVision from '../components/About Components/OurVision'
import OurPartners from '../components/About Components/OurPartners'
const About = () => {
  return (
    <div>
      <Abouthero />
      <OurTeam />
      <AboutMission/>
      <OurPartners />
      <OurVision/>
      <AboutPrograms/>
    </div>
  )
}

export default About