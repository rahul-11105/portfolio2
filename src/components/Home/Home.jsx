import React from 'react'
import './home.css'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='hero_section'>
      <div className='hero-img'>
        <img className='my-photo' src="My_photo.png" alt="pic" />
      </div>

      <div className='hero-txt'>
          <div className="h-txt">
            <span className="hello">Hello,</span>
            <br/>
            <p className="introTxt">I'm <span className="introName">Rahul</span><br/><Typewriter
              words={["Full Stack developer","Problem Solver","MERN stack developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              delaySpeed={500}
            /></p>
            <p className="introPara">I am skilled web designer with experience in creating<br/> visually appealing an user friendly websites</p>
            
          </div>
          <div className='social-media'>
            <div className='social-m-logo' id='linkedin'>
              <a href="https://www.linkedin.com/in/rahul-lokhande-a45129306/">
                <img src="linkedin.png" alt="linkedIn" className='m-logo-img' />
              </a>
              
              <div className='pop' id='linkedin-pop'>Rahul Lokhande</div>
            </div>
             <div className='social-m-logo' id='git-hub'>
              <a href="https://github.com/rahul-11105">
                <img src="github.png" alt="git-hub" className='m-logo-img' />
              </a>
              <div className='pop' id='git-hub-pop'>rahul-11105</div>
             </div>
              <div className='social-m-logo' id='insta'>
              <a href="https://www.instagram.com/rahul_l_11105/">
                <img src="social.png" alt="insta" className='m-logo-img' />
              </a>
              <div className='pop' id='insta-pop'>rahul_l_11105</div>
              </div>
              <div className='social-m-logo' id='wp'>
              <img src="whatsapp.png" alt="WP" className='m-logo-img' />
              <div className='pop' id='wp-pop'>7499916161</div>
              </div>
          </div>

          <div className='home-btns'>
            <button id='h-btn-1'><Link className='homeBtns' to={"/contact"}>Hire-me</Link></button>
            <button id='h-btn-2'><Link className='homeBtns' to={"/contact"}>contact-me</Link></button>
          </div>
      </div>
    </div>
  )
}
 