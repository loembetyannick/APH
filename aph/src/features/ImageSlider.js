import React,{useState} from 'react'
import { SliderData } from './SliderData'
import left_arrow from '../APH-IMAGES/left_arrow.svg'
import right_arrow from '../APH-IMAGES/right_arrow.svg'

import '../Styles/ImageSlider.css'

const ImageSlider = ({slides}) => {
    
  const [current,setCurrent] = useState(0);
  const length = slides.length

  const nextSlide = () => {
      setCurrent(current === length -1 ? 0 : current + 1)
  }

  const prevSlide = () => {
      setCurrent(current === 0 ? length -1 : current - 1)
  }

  if(!Array.isArray(slides) || slides.length <= 0){
      return null;
  }
  return (
    <>
        <section className='slider'>
            <img src={left_arrow} className="left-arrow" onClick={prevSlide} />
            <img src={right_arrow} className="right-arrow" onClick={nextSlide}/>
        
            {SliderData.map((slide,index)=>{
                return (
                    <div className={index === current ? 'slide active' : 'slide'}>
                    {index === current && (
                            <img src={slide.image} className='image'/>
                    )}
                    </div>
                )
            })}
        </section>
        <div className='full-screen'>
            <p>Click Image for full screen</p>
        </div>
    </>
    
  )
}

export default ImageSlider