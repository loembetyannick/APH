import React,{useEffect, useRef,useState} from 'react'
import '../Styles/Banner.css'
import image_left from '../APH-IMAGES/image-left.png'
import image_middle from '../APH-IMAGES/image-middle.png'
import image_right from '../APH-IMAGES/image-right.png'
import { useInView } from 'react-intersection-observer'

const Banner = () => {

  const {ref:myRef,inView:myRefIsVisible} = useInView();

  useEffect(()=>{
    if(myRefIsVisible){
    }
  })

  return (
    <>
      <div className='banner-container'>
          <div className='img-items-1'>
              <img src={image_left}/>
          </div>
          <div ref={myRef} className='img-items-2'>
              <img src={image_middle}/>
                <a style={{color:"white"}} href='#contact-us'>GET A QUOTE</a>
          </div>
          <div className='img-items-3'>
              <img src={image_right}/>
          </div>
      </div>
    </>
  )
}

export default Banner