import React from 'react'
import Header from '../layout/Header'
import FeaturesSection from '../components/FeaturesSection'
import FeaturesSection2 from '../components/FeaturesSection2'
import FeaturesSection3 from '../components/FeaturesSection3'
import InfluencersCarousel from '../components/Influencers'

export default function Home() {
  return (
    <div className="page-wrapper">
        <div className="main-wrapper">
          <Header />
          <FeaturesSection2/>
          <FeaturesSection/>
          <FeaturesSection3/>
          <InfluencersCarousel/>
        </div>
      </div>
  )
}
