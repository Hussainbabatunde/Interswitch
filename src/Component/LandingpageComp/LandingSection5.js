import React from 'react'
import './landingSection5.css'
import cart from '../../assets/selling-icon.svg'
import fee from '../../assets/fee-icon.svg'
import solutions from '../../assets/solutions-icon.svg'

const LandingSection5 = () => {
  return (
    <div className='LandingSection5'>
        <div>
            <img src={cart} width='30px' height='30px' />
            <p className='landingSection5_StartSelling'>Start Selling Online</p>
            <p className='landingSection5_textdesc'>Easily sell online and ship orders to
customers, offer in-shop pickup, or local
delivery—no matter what type of business
you have.</p>
        </div>
        <div>
            <img src={fee} width='30px' height='30px' />
            <p className='landingSection5_StartSelling'>Ease Of Delivery</p>
            <p className='landingSection5_textdesc'>We give you the flexibility of handling your
own package delivery as well as provide
the option to intergate with our dedicated
logistics partners.</p>
        </div>
        <div>
            <img src={solutions} width='30px' height='30px' />
            <p className='landingSection5_StartSelling'>Built-In Payment Solutions</p>
            <p className='landingSection5_textdesc'>As with all of our tools, payments are central
to the experience. Even with online payments,
you benefit from our lower rates and fast
deposits.</p>
        </div>
    </div>
  )
}

export default LandingSection5