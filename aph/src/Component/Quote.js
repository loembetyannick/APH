import React from 'react'
import '../Styles/Quote.css'
import quote_message from '../APH-IMAGES/quote-message.png'
import { useInView } from 'react-intersection-observer'

const Quote = () => {

  const {ref:quote,inView:isQuoteVisible} = useInView()

  return (
    <div className={isQuoteVisible?'quote-container':'quote-container zoom_in'}>
      <img src={quote_message} />
    </div>
  )
}

export default Quote