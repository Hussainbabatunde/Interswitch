import React from 'react'
import './landingsection2.css'
import {GrFormCheckmark} from 'react-icons/gr'
import seamlessIntergration from '../../assets/seamless-integration@2x.png'

const LandingSection2 = () => {
  return (
    <div className='Section2_landingpage'>
        <div className='Section2_landingpage_quickdiv'>
            <p className='Section2_landingpage_quicktellertext'>WHY USE QUICKTELLER BUSINESS</p>
            <p className='Section2_landingpage_technologyText'>We Use a Technology-First Approach to Payments and Finance</p>
        </div>
        <div className='Section2_landingpage_imgtextHolder'>
          <div className='Section2_landingpage_textHolder'>
            <div style={{display:'flex', alignItems:'center'}}>
              <span style={{width:'10px', height:'10px', backgroundColor:'#009fe4', marginRight:'10px'}}></span>
              <p className='Section2_landingpage_quicktellertext'>MULTIPLE PAYMENT CHANNELS</p>
            </div>
            <p className='Section2_landingpage_quicktellerlargetext'>Get Paid Securely, <br/> How and When You Want</p>
            <p className='Section2_landingpage_quicktellerdesc'>As with all of our tools, payments are central to the experience.
Even with online payments, you benefit from our lower rates
and fast deposits. Quickteller business seamlessly integrates
with your existing website or store and we provide various
payment options.</p>

            <div className='Section2_landingpage_checksign'>
              <div style={{ display: 'flex', alignItems:'center'}}>
                <GrFormCheckmark style={{marginRight:'10px', color:'#01354b', fontSize:"20px" }} /><span>Cards</span>
              </div>
              <div style={{ display: 'flex', alignItems:'center'}}>
                <GrFormCheckmark style={{marginRight:'10px', color:'#01354b', fontSize:"20px" }} /><span>USSD</span>
              </div>
              <div style={{ display: 'flex', alignItems:'center'}}>
                <GrFormCheckmark style={{marginRight:'10px', color:'#01354b', fontSize:"20px" }} /><span>Bank Transfer</span>
              </div>
            </div>
            <div className='Section2_landingpage_checksign'>
              <div style={{ display: 'flex', alignItems:'center'}}>
                <GrFormCheckmark style={{marginRight:'10px', color:'#01354b', fontSize:"20px" }} /><span>QR</span>
              </div>
              <div style={{ display: 'flex', alignItems:'center'}}>
                <GrFormCheckmark style={{marginRight:'10px', color:'#01354b', fontSize:"20px" }} /><span>Paycode</span>
              </div>
              <div style={{ display: 'flex', alignItems:'center'}}>
                <GrFormCheckmark style={{marginRight:'10px', color:'#01354b', fontSize:"20px" }} /><span>Mobile Money</span>
              </div>
            </div>
          </div>
          <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
        <img src={seamlessIntergration} className='seamlessIntergration' />
        </div>
        </div>
    </div>
  )
}

export default LandingSection2