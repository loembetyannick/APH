import React from 'react'
import '../Styles/Mission.css'

const MissionStep = ({image,text}) => {
  return (
    <div className='m-step-container'>
        <div className='m-step-item'>
            <div className='m-step-item-img'>
                <img src={image} />
            </div>
            <div className='m-step-item-text'>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default MissionStep