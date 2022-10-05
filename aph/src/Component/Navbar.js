import React,{useState} from 'react'
import '../Styles/Navbar.css' 
import logo from '../APH-IMAGES/logo.png'
import hamburger from '../APH-IMAGES/hamburger.svg'
import exit from '../APH-IMAGES/exit.svg'
import fb_icon from '../ICONS/facebook.png'
import insta_icon from '../ICONS/instagram.png'
import tt_icon from '../ICONS/tiktok.png'

const Navbar = () => {

  const [showLinks,setShowLinks] = useState(true);

  return (
    <nav className='nav-container'>
        <div className='nav-logo'><img src={logo}/></div>
        <div className='nav-options' id={showLinks? 'hidden':''}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Reviews</li>
            <li>Contact</li>
        </div>
        <div className='nav-social' id={showLinks? 'hidden-social':''}>
            <li><img src={fb_icon}/></li>
            <li><img src={insta_icon}/></li>
            <li><img src={tt_icon}/></li>
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