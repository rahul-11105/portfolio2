import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link as RouterLink} from 'react-router-dom'
import {Link} from "react-scroll";
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  const [display,setDisplay] = useState(false);
  const location = useLocation();
  //console.log(location.pathname);
  //console.log(display);
  const handleOnclick = ()=>{
    setDisplay(!display);
  }
  return (
    <div className='navbar'>
        <div className='logo'>
          <img src="My_photo.png" alt="logo" className='logo-img'/>
        </div>
        <div className='nav-links'>
          <ul className='nav-links-ul'> 
            <li id='l1'>{location.pathname!='/'?<RouterLink className='li-link' to={"/"}>Home</RouterLink>:<Link className='li-link' to='hero_section' spy='true' smooth={true} offset={10} duration={1000}>Home</Link>}</li>

            <li onClick={()=>{location.pathname="/portfolio"}} id='l2'>{location.pathname!='/'?<RouterLink className='li-link' to="/">portfolio</RouterLink>:<Link className='li-link' to='portfolio' spy='true' smooth={true} offset={10} duration={1000}>portfolio</Link>}</li>
            <li id='l1'><RouterLink className='li-link' to="/work">Work</RouterLink></li>
            <li id='l3'><RouterLink className='li-link' to={"/resume"}>Resume</RouterLink></li>
            <li id='l4'><RouterLink className='li-link' to={"/contact"}>Contact</RouterLink></li>           
          </ul>
        </div>
        <div className='mobile-menue' onClick={handleOnclick}>
          <img src="mobile_menu.png" alt="menue"/>
        </div>
        
          {display?<><div className='mibile-menue-li'>
            <ul id='m-ul'>
            <li id='l1'>{location.pathname!='/'?<RouterLink className='li-link' to={"/"}>Home</RouterLink>:<Link className='li-link' to='hero_section' spy='true' smooth={true} offset={10} duration={1000}>Home</Link>}</li>

            {/* <li id='m-l-1'><RouterLink className='li-link' to={"/"}>Home</RouterLink></li> */}
            <li onClick={()=>{location.pathname="/portfolio";}} id='l2'>{location.pathname!='/'?<RouterLink className='li-link' to="/">portfolio</RouterLink>:<Link className='li-link' to='portfolio' spy='true' smooth={true} offset={10} duration={1000}>portfolio</Link>}</li>

            {/* <li id='m-l-2'>Portfolio</li> */}
            <li id='m-l-3'><RouterLink className='li-link' to="/work">Work</RouterLink></li>
            <li id='m-l-4'><RouterLink className='li-link' to={"/resume"}>Resume</RouterLink></li>
            <li id='m-l-5'><RouterLink className='li-link' to={"/contact"}>Contact</RouterLink></li>
          </ul>
          </div></>:<></>}
    </div>
  )
}
