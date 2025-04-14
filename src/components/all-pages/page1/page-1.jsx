import React from 'react'
import Icon from './Icon';
import HeroArea from './Hero';
import CardSection from './Card';
import FeedBack from './FeedBack';
import Avtivities from './Avtivities';
import Footer from './Footer';
import Navbar from '../../Navbar';

function Page1() {
  return (
    <>
    <Navbar/>
    <Icon/>
    <HeroArea/>
    <CardSection/>
    <FeedBack/>
    <Avtivities/>
    <Footer/>
    </>
  )
}

export default Page1;