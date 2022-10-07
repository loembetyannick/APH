import React,{useEffect, useRef,useState} from 'react'
import '../Styles/Banner.css'
import image_left from '../APH-IMAGES/image-left.png'
import image_middle from '../APH-IMAGES/image-middle.png'
import image_right from '../APH-IMAGES/image-right.png'
import aos from 'aos';
import 'aos/dist/aos.css'
import '../Styles/Animation.css'

const Banner = () => {

  useEffect(()=>{
    aos.init({duration:2000});
  })

  return (
    <>
      <div className='banner-container'>
          <div className='img-items-1'>
              <img src={image_left}/>
          </div>
          <div className='img-items-2'>
              <img src={image_middle}/>
              <a data-aos='zoom-in' style={{color:"white"}} href='#contact-us'>GET A QUOTE</a>
          </div>
          <div className='img-items-3'>
              <img src={image_right}/>
          </div>
      </div>
    </>
  )
}

export default Banner