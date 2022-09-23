import React from 'react'
import '../Styles/Navbar.css' 
import logo from '../APH-IMAGES/logo.png'
import fb_icon from '../ICONS/facebook.png'
import insta_icon from '../ICONS/instagram.png'
import tt_icon from '../ICONS/tiktok.png'

const Navbar = () => {
  return (
    <nav className='nav-container'>
        <div className='nav-logo'><img src={logo}/></div>
        <div className='nav-options'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Reviews</li>
            <li>Contact</li>
        </div>
        <div className='nav-social'>
            <li><img src={fb_icon}/></li>
            <li><img src={insta_icon}/></li>
            <li><img src={tt_icon}/></li>
        </div>
    </nav>
  )
}

export default Navbar