import React,{useEffect} from 'react'
import '../Styles/Info.css'
import { useInView } from 'react-intersection-observer'

const Info = () => {

  const {ref:info_one,inView:infoOneVisible} = useInView();
  const {ref:info_two,inView:infoTwoVisible} = useInView();
  const {ref:info_three,inView:infoThreeVisible} = useInView();
  
  return (
    <div className='info-container'>

        <div ref={info_one} className='info-item item-1'>
          <div className={infoOneVisible? 'zoom_in':''}>
            <div className='info-title'>Central Heating Repairs</div>
            <div className='info-content'>When your heating or hot water stops working this can be frustrating, that is where we come in with speedy service and little disruption to get this issue repaired fast. If you ever find yourself with no heating or hot water, call us and we will get you up and running again.</div>
          </div>
        </div>
        <div ref={info_two} className='info-item item-2'>
          <div className={infoTwoVisible? 'zoom_in':''}>
            <div className='info-title'>Boiler Installations</div>
            <div className='info-content'>There are many reasons to change your boiler, it could be time for an upgrade for a new home, a replacement or maybe you are after one which is more efficient on energy. No matter the reason you can count on us to help you decide what might be the best boiler for you. </div>
          </div> 
        </div>
        <div ref={info_three} className='info-item item-3'>
          <div className={infoThreeVisible? 'zoom_in':''}>
          <div className='info-title'>Plumbing Services</div>
            <div className='info-content'>We take on all plumbing enquires, from the big jobs to the small ones there is no plumbing job we are not able to do. So when you next need something doing call us and we’ll be straight to it.  </div>
          </div>
        </div>
    </div>
  )
}

export default Info