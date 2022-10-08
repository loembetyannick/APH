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
    <div className='slider-container'>
        <div className='slider-item-container'>
            <div className='si s-item1'>
                <img src={left_arrow} className="left-arrow" onClick={prevSlide} />
            </div>
            <div className='si s-item2'>
                {SliderData.map((slide,index)=>{
                    return (
                        <div className={index === current ? 'slide active' : ''}>
                        {index === current && (
                                <img src={slide.image} className='image'/>
                        )}
                        </div>
                    )
                })}
            </div>
            <div className='si s-item3'>
                <img src={right_arrow} className="right-arrow" onClick={nextSlide}/>
            </div>
        </div>
    </div>
    
  )
}

export default ImageSlider