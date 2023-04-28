import React from 'react'
import './footer.css'
import cbn from '../../assets/img-cbn.webp'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='FooterRow'>
        <div className='FooterCol'>
            <h6 className='FooterTopic_Text'>Interswitch</h6>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>Company</p>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>Jobs</p>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>Privacy &terms</p>
        </div>
        <div className='FooterCol'>
            <h6 className='FooterTopic_Text'>Developers</h6>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>Overview</p>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>Documentation</p>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>Checkout Demo</p>
        </div>
        <div className='FooterCol'>
            <h6 className='FooterTopic_Text'>Pricing</h6>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>Nigeria</p>
        </div>
        <div className='FooterCol'>
            <h6 className='FooterTopic_Text'>Learn</h6>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>Tech Blogs</p>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>Video Tutorials</p>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>FAQs</p>
        </div>
        </div>
        <div className='FooterRow2'>
        <div className='FooterCol'>
            <h6 className='FooterTopic_Text'>Contact Us</h6>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>1648C Oko Awo Street,</p>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>Victoria Island, Lagos</p>
            <p style={{fontSize: '15px', marginBottom:'10px'}}>support@interswitchgroup.com</p>
        </div>
        <button className='SignUpforfree'>Sign up for free</button>
        </div>
        <div className='InterSwitch_bottom'>
            <img src={cbn} width='32px' height='42px' />
        <p className='Interswitch_bottomfooter'>Interswitch is regulated by the Central Bank of Nigeria</p>
        </div>
    </div>
  )
}

export default Footer