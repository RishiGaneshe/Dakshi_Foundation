import React from 'react'
import VolunteerHero from '../components/Getinvolved/Involved/VolunteerHero'
import Volunteerform from '../components/Getinvolved/Involved/Volunteerform'
import Partnerhero from '../components/Getinvolved/Involved/Partnerhero'
import PartnerForm from '../components/Getinvolved/Involved/Partnerform'
import Donatehero from '../components/Getinvolved/Donate/Donatehero'
const Involved = () => {
  return (
    <div>
      <VolunteerHero />
      <Volunteerform />
      <Partnerhero />
      <PartnerForm/>
      <Donatehero/>
    </div>
  )
}

export default Involved