import React from 'react'
import '../Styles/Quote.css'
import quote_message from '../APH-IMAGES/quote-message.png'

const Quote = () => {

  return (
    <div className='quote-container'>
      <img src={quote_message} />
    </div>
  )
}

export default Quote