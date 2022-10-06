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
                <p className='pages-container-content'><a href='#why-us'>About Me</a></p>
                <p className='pages-container-content'><a href='#review'>Review</a></p>
                <p className='pages-container-content'><a href='#what-we-offer'>Our Services</a></p>
                <p className='pages-container-content'><a href='#contact-us'>Contact</a></p>
                <p className='pages-container-content'><a href='/'>Home</a></p>
            </div>
            <div className='pages-contact'>
                <p className='pages-container-title'>Contact</p>
                <p className='pages-container-content'><a href='tel:075065225550'>07506 5225550</a></p>
                <p className='pages-container-content'><a href='mailto:info@adalplumbinganadheating.com'>info@adalplumbinganadheating.com</a></p>
            </div>
            <div className='pages-socials'>
                <p className='pages-container-title'>Follow Us</p>
                <div className='pages-socials-icons'>
                    <a href='https://www.facebook.com/ADLPlumbingAndHeatingServices/'><img src={fb_icon}/></a>
                    <a href='https://www.facebook.com/ADLPlumbingAndHeatingServices/'><img src={insta_icon}/></a>
                    <a href='https://www.facebook.com/ADLPlumbingAndHeatingServices/'><img src={tt_icon}/></a>
                </div>
            </div>
            <div className='pages-reviews'>
                <a href='https://g.page/r/CQwJ9jS-OXFhEB0/review'><img src={gmb_icon}/></a>
            </div>
        </div>
    </div>
    
  )
}

export default Footer