import React from 'react'
import '../Styles/Mission.css'
import mission_bg from '../APH-IMAGES/missionbg.png'
import MissionStep from '../features/MissionStep'
import no1 from '../APH-IMAGES/no1.svg'
import no2 from '../APH-IMAGES/no2.svg'
import no3 from '../APH-IMAGES/no3.svg'
import {mission_text_data} from '../features/MissionTextData.js'

const Mission = () => {
  return (
    <div className='mission-container'>
      <img src={mission_bg} />
      <div className='mission-container-item'>
        <div className='m-item-container'>
          <p className='m-item-text'>ADAL Plumbing & Heating’s mission is to be one of the best Doncaster-based Plumbing & Heating contractors. We will earn customers’ respect and trust by doing what we do best by providing excellent value for money service. </p>
        </div>
        <MissionStep image={no1} text={mission_text_data[0].text}/>
        <MissionStep image={no2} text={mission_text_data[1].text}/>
        <MissionStep image={no3} text={mission_text_data[2].text}/>
      </div>
    </div>
  )
}

export default Mission