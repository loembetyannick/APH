import React from 'react'
import email_icon from '../ICONS/email.png'
import phone_icon from '../ICONS/phone-solid.png'
import '../Styles/Content_Banner.css'

const Contact_Banner = () => {
  return (
  <div>
    <div className='contact-banner'>
      <div className='contact-banner-phone'>
        <div className='contact-banner-img'>
         <a href='tel:07506522550'>
            <img src={phone_icon}/>
         </a>
        </div>
        <div className='contact-banner-number'>
          <p><a style={{color:"rgba(25, 2, 2, 0.5)"}} href='tel:07506522550'>07506 522550</a></p>
        </div>
      </div>
      <div className='contact-banner-email'>
        <div className='contact-banner-img'>
          <a style={{color:"rgba(25, 2, 2, 0.5)"}} href='mailto:info@adalplumbingandheating.com'>
              <img src={email_icon}/>
          </a>
        </div>
        <div className='contact-banner-emailtext'>
          <p> <a style={{color:"rgba(25, 2, 2, 0.5)"}} href='mailto:info@adalplumbingandheating.com'>info@adalplumbingandheating.com</a></p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact_Banner