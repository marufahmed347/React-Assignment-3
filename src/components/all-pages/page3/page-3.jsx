import React from 'react'
import HeroSection from './Hero'
import MiniCard from './MiniCard'
import FooterSection from './Footer'
import PhotoGallery from './Photos'
import ContactCard from './Information'
import OverallRating from './Rating'
import Reviews from './CardRow'

function Page3() {
  return (
    <>
    <HeroSection/>
    <PhotoGallery/>
    <ContactCard/>
    <OverallRating/>
    <Reviews/>


    <MiniCard/>
    <FooterSection/>
    </>
  )
}

export default Page3