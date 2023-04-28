import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AppLogo from '../assets/app-logo.svg'
import '../Pages/Landing.css'
import {HiMenuAlt1} from 'react-icons/hi'
import {ImCross} from 'react-icons/im'

const Header = () => {
  const [show, setShow] = useState(false)
  const handleShow = ()=>{
    setShow(true)
  }
  const handleHide = () =>{
    setShow(false)
  }
  return (<div className='Header_homepage'>
    <div className='Navbar_LargeVisible'>
        <img src={AppLogo} className='AppLogo' />
        <ul className='NavLink_pages'>
          <li className='Navbar_LinkedPages'>Overview</li>
          <li className='Navbar_LinkedPages'>Storefront</li>
          <li className='Navbar_LinkedPages'>Pricing</li>
          <li className='Navbar_LinkedPages'>Checkout Demo</li>
          <li className='Navbar_LinkedPages'>Request POS</li>
          <li className='Navbar_LinkedPages'>Developer</li>
        </ul>
        <div className='Navbar_SignUpSignIn'>
          <Link to='/login' className='Navbar_SigninLinkButton'>Sign in</Link>
          <Link to='/signup' className='Navabr_GetStartedButton'>Get Started</Link>
        </div>
      </div>
      <div className='Navbar_smallVisible'>
      <img src={AppLogo} className='AppLogo' />
        <HiMenuAlt1 onClick={handleShow} style={{fontSize:'30px', color:'#01354b'}} />
        {show && <div className='Hamburger_options'>
          <div className='Cancel_hamburger'>
          <ImCross onClick={handleHide} style={{fontSize:'20px', color:'#01354b'}} />
          </div>
          <p className='Overview_hamburger'>Overview</p>
          <p className='Overview_hamburger'>Storefront</p>
          <p className='Overview_hamburger'>Pricing</p>
          <p className='Overview_hamburger'>Checkout Demo</p>
          <p className='Overview_hamburger'>Request POS</p>
          <p className='Overview_hamburger'>Developer</p>
          <Link to='/login' className='Signin_hamburger'>Sign in</Link>
        </div>}
      </div>
      </div>
  )
}

export default Header