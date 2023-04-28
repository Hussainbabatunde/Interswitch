import React from 'react'
import dashboardImg from '../../assets/dashboard@3x.png'
import { Link } from 'react-router-dom'
import terminalMobile from '../../assets/terminal-mobile@2x.png'
import webpayMobile from '../../assets/webpay-mobile.png'


const HeroSection = () => {
  return (
    <div className='HeroSection'>
        <div className='HeroSection_TextCol'>
            <h1 className='HeroSection_topicText'>All the Tools You Need <br /> to Grow Your Business, In One Place.</h1>
            <p className='HeroSection_detailsText'>Our suite of integrated tools saves you time, so you can
                focus on growing revenue and delivering exceptional
                service to your customers.</p>
            <Link className='HeroSection_GetStarted'>Get Started</Link>
        </div>
        <div className='HerSection_ImageHolder'>
            <img src={dashboardImg} className='HeroSection_dashboard_Img' />
            <img src={webpayMobile} className='HeroSection_webpayMobile' />
            <img src={terminalMobile} className='HeroSection_terminalMobile' />
        </div>
    </div>
  )
}

export default HeroSection