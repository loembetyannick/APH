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
          <img src={phone_icon}/>
        </div>
        <div className='contact-banner-number'>
          <p>07506 522550</p>
        </div>
      </div>
      <div className='contact-banner-email'>
        <div className='contact-banner-img'>
          <img src={email_icon}/>
        </div>
        <div className='contact-banner-emailtext'>
          <p>info@adalplumbingandheating.com</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact_Banner