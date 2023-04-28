import React from 'react'
import './landingSection7.css'
import illustration from '../../assets/connect-backdrop-pattern.svg'
import connectpic from '../../assets/connect.png'

const LandingSection7 = () => {
  return (
    <div className='LandingSection7'>
        <div className='LandingSection7_ImageSec'>
            <img src={illustration} width='200px' height='252px' className='illustration' />
            <img src={connectpic} className='connectpic' />
        </div>
        <div className='LandingSection7_textSec'>
            <p className='Section2_landingpage_quicktellerlargetext'>We’re Here to<br />
Help You Get Started.</p>
        <p className='LandingSection7_TopicText'>Connect with our Sales team for one-on-one
            assistance with getting started.</p>
<button className='Navabr_GetStartedButton'>Contact Us</button>
        <p className='LandingSection7_textBottom'>We’ll call you within one business day, between 9 a.m. and
5 p.m. in your time zone. If we can’t reach you, we’ll send an
email with a phone number to call us back.</p>
        </div>
        </div>
  )
}

export default LandingSection7