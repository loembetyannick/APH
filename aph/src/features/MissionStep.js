import React from 'react'
import '../Styles/Mission.css'
import { useInView } from 'react-intersection-observer'

const MissionStep = ({image,text}) => {
  const {ref:m_two,inView:mTwoVisible} = useInView();

  return (
    <div className='m-step-container'>
        <div ref={m_two} className={mTwoVisible?'m-step-item zoom_in':'m-step-item'}>
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