import React from 'react'
import '../Styles/Footer.css'
import fb_icon from '../ICONS/facebook.png'
import insta_icon from '../ICONS/instagram.png'
import tt_icon from '../ICONS/tiktok.png'
import gmb_icon from '../APH-IMAGES/gmb-review.png'

const Footer = () => {
  return (
      <div className='footer-main-container'>
        <div className='footer-container'>
            <div className='pages-container'>
                <p className='pages-container-title'>Pages</p>
                <p className='pages-container-content'>About Me</p>
                <p className='pages-container-content'>Review</p>
                <p className='pages-container-content'>Our Services</p>
                <p className='pages-container-content'>Contact</p>
                <p className='pages-container-content'>Home</p>
            </div>
            <div className='pages-contact'>
                <p className='pages-container-title'>Contact</p>
                <p className='pages-container-content'>07506 5225550</p>
                <p className='pages-container-content'>info@adalplumbinganadheating.com</p>
            </div>
            <div className='pages-socials'>
                <p className='pages-container-title'>Follow Us</p>
                <div className='pages-socials-icons'>
                    <img src={fb_icon}/>
                    <img src={insta_icon}/>
                    <img src={tt_icon}/>
                </div>
            </div>
            <div className='pages-reviews'>
                <img src={gmb_icon}/>
            </div>
        </div>
    </div>
    
  )
}

export default Footer