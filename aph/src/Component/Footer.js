import React from 'react'
import '../Styles/Footer.css'
import fb_icon from '../ICONS/facebook.png'
import insta_icon from '../ICONS/instagram.png'
import tt_icon from '../ICONS/tiktok.png'
import gmb_icon from '../APH-IMAGES/gmb-review.png'
import twitter_icon from '../ICONS/twitter.svg'

const Footer = () => {
  return (
      <div className='footer-main-container'>
        <div className='footer-container'>
            <div className='pages-container'>
                <p className='pages-container-title'>Pages</p>
                <p className='pages-container-content'><a href='#why-us'>Why Us</a></p>
                <p className='pages-container-content'><a href='#review'>Review</a></p>
                <p className='pages-container-content'><a href='#what-we-offer'>Our Services</a></p>
                <p className='pages-container-content'><a href='#contact-us'>Contact</a></p>
                <p className='pages-container-content'><a href='#home'>Home</a></p>
            </div>
            <div className='pages-contact'>
                <p className='pages-container-title'>Contact</p>
                <p className='pages-container-content'><a href='tel:075065225550'>07506 5225550</a></p>
                <p className='pages-container-content'><a href='mailto:info@adalplumbingandheating.co.uk'>info@adalplumbingandheating.co.uk</a></p>
                <br/>
            </div>
            <div className='pages-socials'>
                <p className='pages-container-title'>Follow Us</p>
                <div className='pages-socials-icons'>
                    <a href='https://m.facebook.com/adalplumbingandheating/'><img src={fb_icon}/></a>
                    <a href='https://www.instagram.com/adalplumbingandheatingltd/?hl=en'><img src={insta_icon}/></a>
                    <a href='https://www.instagram.com/adalplumbingandheatingltd/?hl=en'><img src={twitter_icon}/></a>
                </div>
            </div>
            <div className='pages-reviews'>
                <a href='https://g.page/r/CQwJ9jS-OXFhEB0/review'><img src={gmb_icon}/></a>
            </div>
            <div className='footer-tm'>
                <p className='pages-container-content'><a>© 2022 ADAL PLUMBING AND HEATING LTD - All rights reserved</a></p>
                <br/>
            </div>
        </div>
    </div>
    
  )
}

export default Footer