import React from 'react'
import './landingSection5.css'
import {GrFormCheckmark} from 'react-icons/gr'
import pos from '../../assets/pos.png'
import qrcode from '../../assets/icon-qr-code.svg'
import cash from '../../assets/icon-cash.svg'
import USSD from '../../assets/icon-ussd.svg'
import cards from '../../assets/icon-cards.svg'
import transfers from '../../assets/icon-transfer.svg'

const LandingSection6 = () => {
  return (
    <div className='Section5_landingpage_imgtextHolder'>
          <div className='Section2_landingpage_textHolder'>
            <div style={{display:'flex', alignItems:'center'}}>
              <span style={{width:'10px', height:'10px', backgroundColor:'#009fe4', marginRight:'10px'}}></span>
              <p className='Section2_landingpage_quicktellertext'>POINT OF SALE TERMINAL</p>
            </div>
            <p className='Section2_landingpage_quicktellerlargetext'>One Card Reader for <br/> All Your Payment Needs</p>
            <p className='Section2_landingpage_quicktellerdesc'>Introducing the one device for all your payment needs.
Whether you're accepting payments at your countertop
checkout or looking to accept payments on-the-go, the
lightweight and easy to transport Card Reader connects to an
array of devices and offers your business the flexibility to accept
any type of payment, wherever you are.</p>

            
            <p className='Section6_paymentmoduletext'>Payment modules available</p>
            <div className='LandingSection6_servicesrendered'>
                <div className='Section6_IconDesc'>
                    <img src={qrcode} width='28px' height='28px' />
                    <p className='section6_servicesIcon'>QR CODE</p>
                </div>
                <div className='Section6_IconDesc'>
                    <img src={cash} width='43px' height='28px' />
                    <p className='section6_servicesIcon'>CASH</p>
                </div>
                <div className='Section6_IconDesc'>
                    <img src={USSD} width='56px' height='28px' />
                    <p className='section6_servicesIcon'>USSD</p>
                </div>
                <div className='Section6_IconDesc'>
                    <img src={cards} width='53px' height='28px' />
                    <p className='section6_servicesIcon'>CARDS</p>
                </div>
                <div className='Section6_IconDesc'>
                    <img src={transfers} width='43px' height='28px' />
                    <p className='section6_servicesIcon'>TRANSFER</p>
                </div>
            </div>
          </div>
          <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
        <img src={pos} className='pos' />
        </div>
        </div>
  )
}

export default LandingSection6