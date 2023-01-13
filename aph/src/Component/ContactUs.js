import React,{useEffect} from 'react'
import '../Styles/ContactUs.css'
import email_icon from '../APH-IMAGES/email.svg'
import phone_icon from '../APH-IMAGES/phone.svg'
import clock_icon from '../APH-IMAGES/247service.svg'
import { useInView } from 'react-intersection-observer'

const ContactUs = () => {

  const {ref:cu_one,inView:cuOneVisible} = useInView();
  const {ref:cu_two,inView:cuTwoVisible} = useInView();
  const {ref:cu_three,inView:cuThreeVisible} = useInView();

  return (
      <div className='cu-container'>
        <div className='cu-container-item'>
          <div ref={cu_one} className={cuOneVisible?'slide_down':''}>
            <div className='cu-item'>
                  <img src={email_icon} />
                  <p className='cu-item-font'>EMAIL</p>
                  <p className='cu-item-content'>info@adalplumbingandheating.co.uk</p>
                  <br/>
                  <p className='cu-item-content extra-info'><a style={{color:"black",fontWeight:'600'}} href='mailto:info@adalplumbingandheating.com'>press to email us</a></p>
            </div>
          </div>
          <div ref={cu_two}>
            <div className={cuTwoVisible?'slide_down cu-item':'cu-item'}>
                  <img src={phone_icon}/>
                  <p className='cu-item-font'>CALL</p>
                  <p className='cu-item-content'>Phone: 07506 522550</p>
                  <br/>
                  <p className='cu-item-content extra-info'><a style={{color:"black",fontWeight:'600'}} href='tel:07506522550'>press to call us</a></p>
            </div>
          </div>
          <div ref={cu_three} className={cuThreeVisible?'slide_down':''}>
            <div className='cu-item'>
                  <img src={clock_icon}/>
                  <p className='cu-item-font'>WORKING HOURS</p>
                  <p className='cu-item-content'>OPEN: 24/7</p>
                  <br/>
                  <p className='cu-item-content extra-info'><a style={{color:"black",fontWeight:'600'}} href='https://www.google.com/search?q=Adal+Plumbing+%26+Heating+Ltd&oq=adal+plumbing&aqs=chrome.1.69i57j69i59l2j69i60l2j69i61.8407j0j9&sourceid=chrome&ie=UTF-8'>see more</a></p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactUs