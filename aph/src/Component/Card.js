import React, { useEffect } from 'react'
import '../Styles/Card.css'
import _247service from '../APH-IMAGES/247service.svg'
import qualified_engineers from '../APH-IMAGES/qualifiedengineers.svg'
import gas_registered from '../APH-IMAGES/gs.svg'
import always_avaliable from '../APH-IMAGES/aa.svg'
import boiler from '../APH-IMAGES/bo.svg'
import services from '../APH-IMAGES/se.svg'
import { useInView } from 'react-intersection-observer'

const Card = () => {

    const {ref:card_one,inView:cardOneVisible} = useInView();
    const {ref:card_two,inView:cardTwoVisible} = useInView();
    const {ref:card_three,inView:cardThreeVisible} = useInView();
    const {ref:card_four,inView:cardFourVisible} = useInView();
    const {ref:card_five,inView:cardFiveVisible} = useInView();
    const {ref:card_six,inView:cardSixVisible} = useInView();

  return (
    <div className='card-container'>
        <div className='card-item-container'>
            <div ref={card_one} className='card-item'>
                <div className={cardOneVisible?'card-item-img slide_in_left':'card-item-img'}>
                    <img src={_247service} />
                    <p className='card-item-font'>24/7 SERVICES</p>
                    <p className='card-item-content'>For any plumbing and heating emergency you experience, our team is available 24 hours a day, 7 days a week. We assure that our engineers will be there as quickly as possible, wherever you are in Doncaster or South Yorkshire. </p>
                </div>
            </div>
            <div ref={card_two} className='card-item'>
                <div className={cardTwoVisible?'card-item-img slide_in_right':'card-item-img'}>
                    <img src={qualified_engineers}/>
                    <p className='card-item-font'>QUALIFIED ENGINEERS</p>
                    <p className='card-item-content'>We are fully qualified and experienced for minor plumbing repairs to larger projects such as full bathroom designs and installations. We are also fully gas safe to complete all gas related works.</p>
                </div>
            </div>
            <div ref={card_three} className='card-item'>
                <div className={cardThreeVisible?'card-item-img slide_in_left':'card-item-img'}>
                    <img src={boiler}/>
                    <p className='card-item-font'>BOILER INSTALLATION</p>
                    <p className='card-item-content'>When you need a new boiler we are here to help! We are qualified to install any boiler and we are able to understand the questions and concerns you may have in making this change.</p>
                </div>
            </div>
            <div ref={card_four} className='card-item'>
                <div className={cardFourVisible?'card-item-img slide_in_right':'card-item-img'}>
                    <img src={always_avaliable}/>
                    <p className='card-item-font'>ALWAYS AVALIABLE</p>
                    <p className='card-item-content'>As a team we pride ourselves on giving the best quality of service to our customers. We understand the importance of reliability and  professionalism to the highest standard and ensure our customers are always left satisfied.</p>
                </div>     
            </div>
            <div ref={card_five} className='card-item'>
                <div className={cardFiveVisible?'card-item-img slide_in_left':'card-item-img'}>
                    <img src={gas_registered}/>
                    <p className='card-item-font'>GAS SAFE REGISTERED</p>
                    <p className='card-item-content'>Our Gas safe registered engineers will make sure that all work completed is done to a high standard. We are qualified to work on boilers, fires and all other gas appliances.</p>
                </div>
            </div>
            <div ref={card_six} className='card-item services-content'>
                <div className={cardSixVisible?'card-item-img slide_in_right':'card-item-img'}>
                    <img src={services}/>
                    <p className='card-item-font'>SERVICES</p>
                    <p className='card-item-content'>We offer a range of professional plumbing services with a few of them shown above. If you need any reassurance or advice about any service request, get in contact and we will take the time to listen to any and all enquires.</p>

                </div>
                
            </div>
        </div>  
    </div>
  )
}

export default Card