import React from 'react'
import '../Styles/Title.css'


const Title = ({title}) => {
  return (
    <div className='title-content-container'>
      <div className='title-container'>
        <p className='title-text'>{title}</p>
      </div>
      <div className='title-underline-container'>
        <div className='title-underline'>
          <div className='title-underline-inner'></div>
        </div>
      </div>
    </div>
  )
}

export default Title