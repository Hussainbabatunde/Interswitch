import React from 'react'
import './landingsection2.css'
import {GrFormCheckmark} from 'react-icons/gr'
import InstantPaymentInvoice from '../../assets/instant-payments-invoice@3x.png'
import InstantPaymentConfirm from '../../assets/instant-payments-confirmation@2x.png'


const LandingSection3 = () => {
  return (
    <div className='Section3_landingpage'>
        
        <div className='Section2_landingpage_imgtextHolder'>
        <div className='Section3_heroImgHolder'>
        <img src={InstantPaymentConfirm} className='InstantPaymentConfirm' />
        <img src={InstantPaymentInvoice} className='InstantPaymentInvoice' />
        </div>
          <div className='Section2_landingpage_textHolder'>
            <div style={{display:'flex', alignItems:'center'}}>
              <span style={{width:'10px', height:'10px', backgroundColor:'#009fe4', marginRight:'10px'}}></span>
              <p className='Section2_landingpage_quicktellertext'>INSTANT PAYMENTS</p>
            </div>
            <p className='Section2_landingpage_quicktellerlargetext'>Built to Save Time <br/> and Get You Paid Faster</p>
            <p className='Section2_landingpage_quicktellerdesc'>Send professional invoices, track them in real time, and accept
payments online—all from one place. Save time with auto-billing,
stored information, and powerful reporting tools. Customers can
pay in one click. They can pay an online invoice through their
computer, in person, or right through their phone.</p>

            <div className='Section2_landingpage_checksign'>
              <div style={{ display: 'flex', alignItems:'center'}}>
                <GrFormCheckmark style={{marginRight:'10px', color:'#01354b', fontSize:"20px" }} /><span>Payment Links</span>
              </div>
              <div style={{ display: 'flex', alignItems:'center'}}>
                <GrFormCheckmark style={{marginRight:'10px', color:'#01354b', fontSize:"20px" }} /><span>Invoices</span>
              </div>
              <div style={{ display: 'flex', alignItems:'center'}}>
                <GrFormCheckmark style={{marginRight:'10px', color:'#01354b', fontSize:"20px" }} /><span>Subscriptions</span>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default LandingSection3