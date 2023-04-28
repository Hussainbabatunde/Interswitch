import React from 'react'
import './landingSection4.css'
import { Link } from 'react-router-dom'

const LandingSection4 = () => {
  return (
    <div className='Landingpage_Section4'>
        <p className='Section2_landingpage_quicktellerlargetext'>With Storefront You Now <br/>
Have Everything You Need to<br/>
Sell Online with ease</p>
<div className='Landingpage_Section4_text'>
    <p className='Landingpage_Section4_desc'>Set up a fully-hosted online store in just minutes. The online
store was designed with you in mind, meaning you don't need
to hire any web designers or programmers to get started.</p>
<Link className='Landingpage_Section4_link'>Let's get you started</Link>
</div>
    </div>
  )
}

export default LandingSection4