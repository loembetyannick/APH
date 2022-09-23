import React from 'react'
import '../Styles/Title.css'


const Title = ({title}) => {
  return (
    <div className='title-container'>
        <p className='title-text'>{title}</p>
    </div>
  )
}

export default Title