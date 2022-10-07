import React,{useState} from 'react'
import '../Styles/Navbar.css' 
import logo from '../APH-IMAGES/logo.png'
import hamburger from '../APH-IMAGES/hamburger.svg'
import exit from '../APH-IMAGES/exit.svg'
import fb_icon from '../ICONS/facebook.png'
import insta_icon from '../ICONS/instagram.png'
import tt_icon from '../ICONS/tiktok.png'

const Navbar = () => {

  const [showLinks,setShowLinks] = useState(false);

  return (
    <nav className='nav-container'>
        <div className='nav-logo'><a href='#home'><img src={logo}/></a></div>
        <div className='nav-options' id={showLinks? 'hidden':''}>
            <li><a href='#home' onClick={() => setShowLinks(false)}>Home</a></li>
            <li><a href='#what-we-offer'  onClick={() => setShowLinks(false)}>Services</a></li>
            <li><a href='#why-us'  onClick={() => setShowLinks(false)}>About</a></li>
            <li><a href='#review'  onClick={() => setShowLinks(false)}>Reviews</a></li>
            <li><a href='#contact-us'  onClick={() => setShowLinks(false)}>Contact</a></li>
        </div>
        <div className='nav-social' id={showLinks? 'hidden-social':''}>
            <li><a href='https://m.facebook.com/adalplumbingandheating/'><img src={fb_icon}/></a></li>
            <li><a href='https://www.instagram.com/adalplumbingandheatingltd/?hl=en'><img src={insta_icon}/></a></li>
        </div>
        <div className='nav-hamburger' onClick={() => setShowLinks(!showLinks)}>
          {showLinks?
            <img src={exit}/> : <img src={hamburger} /> 
          }
        </div>
    </nav>
  )
}

export default Navbar