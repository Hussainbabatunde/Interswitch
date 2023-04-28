import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import Header from '../Component/Header'
import HeroSection from '../Component/LandingpageComp/HeroSection'
import multichoice from '../assets/multi-choice.png'
import oando from '../assets/oando.png'
import domino from '../assets/dominos.png'
import konga from '../assets/konga.png'
import betking from '../assets/betking.png'
import illustation from '../assets/storefront-backdrop-pattern.svg'
import LandingSection2 from '../Component/LandingpageComp/LandingSection2'
import LandingSection3 from '../Component/LandingpageComp/LandingSection3'
import LandingSection4 from '../Component/LandingpageComp/LandingSection4'
import storefront from '../assets/storefront.png'
import LandingSection5 from '../Component/LandingpageComp/LandingSection5'
import LandingSection6 from '../Component/LandingpageComp/LandingSection6'
import LandingSection7 from '../Component/LandingpageComp/LandingSection7'
import Footer from '../Component/LandingpageComp/Footer'

const LandingPage = () => {
  return (
    <div className='Landingpage'>
      <Header />
      <HeroSection />
      <div className='Landingpage_CustomerSection'>
        <p className='Landingpage_Trustedtext'>TRUSTED BY BRANDS YOU TRUST</p>
        <div className='Landingpage_customerslogo'>
          <img src={multichoice} width='33px' height='20px' style={{marginRight: '60px'}} />
          <img src={oando} width='55px' height='20px' style={{marginRight: '60px'}} />
          <img src={domino} width='91px' height='20px' style={{marginRight: '60px'}} />
          <img src={konga} width='72px' height='20px' style={{marginRight: '60px'}} />
          <img src={betking} width='20px' height='20px' style={{marginRight: '60px'}} />
        </div>
      </div>
      <LandingSection2 />
      <LandingSection3 />
      <LandingSection4 />
      <div className='ImageIllustration_storefront'>
        <img src={storefront} className='storefront' />
        <img src={illustation} className='illustration' />
      </div>
      <LandingSection5 />
      <LandingSection6 />
      <LandingSection7 />
      <Footer />
    </div>
  )
}

export default LandingPage