import React,{useState} from 'react'
import '../Styles/Testimonal.css'
import testimonal_bg from '../APH-IMAGES/testimonals.png'
import left_arrow from '../APH-IMAGES/left_arrow_white.svg'
import right_arrow from '../APH-IMAGES/right_arrow_white.svg'
import { text_data } from '../features/TextData'
import aphcircle from '../APH-IMAGES/aphcircle.svg'
import quotes from '../APH-IMAGES/Quotes.svg'

const Testimonal = () => {

    let slides = text_data;
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
    <div className='t-container'>
        <img className='t-bg' src={testimonal_bg}/>
        <div className='t-container-item'>
            <section className='t-slider'>
                <div className='t-left-container' onClick={prevSlide}>
                    <img src={left_arrow} className="t-left"  />
                </div>
                <div className='t-middle-container'>
 
                    {text_data.map((text,index)=>{
                        return (
                            <div className={ index == current ? 't-text-container active' : 't-text-container'}>
                                {index == current && (
                                    <>
                                        <img src={aphcircle} className='t-middle-img'/>
                                        <p className='t-middle-short'>
                                           {text.name}
                                        </p>
                                        <p className='t-text-long'>
                                            {text.text}
                                        </p>
                                    </>
                                )}
                                
                            </div>
                        )
                    })}
                
                    <div className='t-quote-container'>
                        <div className='t-quote-img'>
                            <img src={quotes} />
                        </div>
                    </div>
                </div>
                <div className='t-right-container' onClick={nextSlide}>
                    <img src={right_arrow} className="t-right" />
                </div>
            </section>
        </div>
    </div>
  )
}

export default Testimonal