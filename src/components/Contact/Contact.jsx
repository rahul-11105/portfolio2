import React from 'react';
import { useRef } from 'react';
import "./contact.css";
// import instagram from "../source/Instagram_logo.png";
// import linkedin from "../source/linkedin_logo.png";
// import github from "../source/github-512.webp";
import emailjs from '@emailjs/browser';


export default function Contact() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zfimjqk', 'template_o9ou607', form.current, {
        publicKey: 'FCkzeOH5lW8eUPlnr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("email send successfully..!");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
      
  };

  return (
    <div  className='contact-section'>
      <section id="contactPage">
        <div id='contact'>
            <h1 className="contactPageTitle">Contact me</h1>
            <p className="contact-p">Please fill out the form bellow to discuss any work opportunities.</p>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input className="name" placeholder='Your name' name='from_name'/>
                <input className="email" placeholder='Your email' name='your email'/>
                <textarea className='msg' name='message' rows={5} placeholder="Your message"/>
                <button className='submitBtn' type='submit' value="send">submit</button>
            </form> 
        </div>
    </section>
    </div>
  )
}

