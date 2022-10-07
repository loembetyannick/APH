import React from 'react'
import '../Styles/Quote.css'
import quote_message from '../APH-IMAGES/quote-message.png'
import { useInView } from 'react-intersection-observer'

const Quote = () => {

  const {ref:one,inView:oneVisible} = useInView();

  return (
    <div ref={one} className={oneVisible?'quote-container zoom_in':'quote-container'}>
      <img src={quote_message} />
    </div>
  )
}

export default Quote