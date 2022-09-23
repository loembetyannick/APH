import React from 'react'
import '../Styles/Banner.css'
import image_left from '../APH-IMAGES/image-left.png'
import image_middle from '../APH-IMAGES/image-middle.png'
import image_right from '../APH-IMAGES/image-right.png'

const Banner = () => {
  return (
    <>
      <div className='banner-container'>
          <div className='img-items-1'>
              <img src={image_left}/>
          </div>
          <div className='img-items-2'>
              <img src={image_middle}/>
              <button>CONTACT US</button>
          </div>
          <div className='img-items-3'>
              <img src={image_right}/>
          </div>
      </div>
    </>
  )
}

export default Banner