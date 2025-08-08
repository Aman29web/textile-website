import React from 'react'
import HeroSection from './HeroSection'
import FacilityOverview from './FacilityOverview'
import CorporateAbout from './CorporateAbout'
import CompanyOverview from './CompanyOverview'
import StatsSection from './StatsSection'
import Footer from '../../components/Footer'
import BlogNewsCarousel from './BlogNewsCarousel'
import TestimonialsCarousel from '../TestimonialsCarousel'

const HomeRouter = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <FacilityOverview></FacilityOverview>
      {/* <CorporateAbout></CorporateAbout> */}
      <CompanyOverview></CompanyOverview>
      <StatsSection></StatsSection>
      <BlogNewsCarousel></BlogNewsCarousel>
      <TestimonialsCarousel></TestimonialsCarousel>
      <Footer></Footer>
    </div>
  )
}

export default HomeRouter
