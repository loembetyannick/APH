import React from 'react'
import '../Styles/ContactUs.css'
import email_icon from '../APH-IMAGES/email.svg'
import phone_icon from '../APH-IMAGES/phone.svg'
import clock_icon from '../APH-IMAGES/247service.svg'

const ContactUs = () => {
  return (
      <div className='cu-container'>
        <div className='cu-container-item'>
          <div className='cu-item'>
                <img src={email_icon} />
                <p className='cu-item-font'>EMAIL</p>
                <p className='cu-item-content'>info@adalplumbingandheating.com</p>
                <br/>
                <p className='cu-item-content extra-info'>press to email us</p>
          </div>
          <div className='cu-item'>
                <img src={phone_icon}/>
                <p className='cu-item-font'>CALL</p>
                <p className='cu-item-content'>Phone: 07506 522550</p>
                <br/>
                <p className='cu-item-content extra-info'>press to call us</p>
          </div>
          <div className='cu-item'>
                <img src={clock_icon}/>
                <p className='cu-item-font'>WORKING HOURS</p>
                <p className='cu-item-content'>OPEN: 24/7</p>
                <br/>
                <p className='cu-item-content extra-info'>see more</p>
          </div>
        </div>
      </div>
  )
}

export default ContactUs