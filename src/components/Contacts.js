import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedin, ImLocation } from "react-icons/fa"
import location from "../location.png"
//import emailjs from 'emailjs-com'

function Contacts() {

    /*function sentEmail(e){
        e.preventDefault();

        emailjs.sentForm();
    }*/

  return (
    <>
    <div className="containerc">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Send us the message and contact now. Get your all queries resolved here!
          </p>

          <div className="info">
            <div className="information">
              <img src = { location } className="icon" alt="location" />
              <p>IGDTUW, Delhi-110006</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-media-icons">
              
              <a href="https://twitter.com/IgdtuwMsc">
                <i className="fa"> <FaTwitter /> </i>
              </a>
              <a href="https://www.instagram.com/msc.igdtuw/">
                <i className="fa"> <FaInstagram /> </i>
              </a>
              <a href="https://www.linkedin.com/company/microsoft-student-chapter-igdtuw/">
                <i className="fa"> <FaLinkedin /> </i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>
      
          <form action="https://formsubmit.co/microsoftstudentchapter.igdtuw@gmail.com" method="POST" autocomplete="off" /*onSubmit={ sentEmail */>
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" id="username" />
              <label for="">Name</label>
              <span>Name</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" id="email" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" id="phone" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" id="message"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" name="submit" value="Send" className="btn" onclick="sendMail()" />
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contacts