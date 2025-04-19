import React from 'react'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection/FeaturesSection'
import DiscoverSection from './DiscoverSection/DiscoverSection'
import CallToAction from './CallToAction'

const Landing = () => {
  return (
    <div className='flex flex-col gap-16 md:gap-20'>
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
      <DiscoverSection />
    </div>
  )
}

export default Landing
