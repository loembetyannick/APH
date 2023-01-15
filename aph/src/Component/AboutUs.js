import React from 'react'
import '../Styles/AboutUs.css'
import gs from '../APH-IMAGES/gassafe.svg'
import googlemap from '../APH-IMAGES/g_map.svg'

const AboutUs = () => {
  return (
      <>
    <div className='au-container'> 
        <div className='au-container-item'>
            <div className='au-content-title'>
                <p>Business Name</p>
                <p>Mobile Number</p>
                <p>Email</p>
                <p>Location</p>
            </div>
            <div className='au-content-details'>
                <p>Adal Plumbing and Heating Ltd</p>
                <p>07506 522550</p>
                <p>info@adalplumbingandheating.co.uk</p>
                <p>Doncaster, South Yorkshire</p>
            </div>
            <div className='au-content-icon'>
                <img src={gs} />
            </div>
        </div>
    </div>
    <div className='au-content-map'>
        <a href='https://www.google.com/maps/place/Adal+Plumbing+%26+Heating+Ltd/@53.428969,-1.0998105,9.63z/data=!4m5!3m4!1s0x0:0x617139be34f6090c!8m2!3d53.4371838!4d-1.2060413'>
            <img src={googlemap}/>
        </a>
    </div>
    </>
  )
}

export default AboutUs