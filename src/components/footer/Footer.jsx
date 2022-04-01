import React from 'react'
import "./Footer.css"
import {FiArrowRight} from "react-icons/fi"
import {BsInstagram} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {AiFillFacebook} from "react-icons/ai"
import {MdLocationPin} from "react-icons/md"
import {AiOutlineClockCircle} from "react-icons/ai"
import {BsTelephoneFill} from "react-icons/bs"
import Typical from "react-typical"
import {Link} from "react-router-dom"



const Footer = () => {
  return (

<div className="footer">
<div className="container">
  <div className="box">
  <Link to="/">
  <h3  className="logo">
  <Typical 
    loop={Infinity}
    wrapper="b"
    steps={[
      "Appondas",
      1000,
      "A",
      900,
      "Ap",
      800,
      "App",
      700,
      "Appo",
      600,
      "Appon",
      500,
      "Appond",
      400,
      "Apponda",
      300,
      "Appondas",
      200,            
    ]}  />
  
  </h3>
  </Link>


    <ul className="social">
      <li>
        <a href="#"  className="facebook icon" traget="_blank"><AiFillFacebook/></a>

      </li>
      <li>
      <a href="#" className='github icon'  traget="_blank"><FaGithub/></a>
      </li>
      <li>
      <a href="#"  className="instagram icon" traget="_blank"><BsInstagram/></a>
      </li>
    </ul>
    <p className="text">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
    </p>
  </div>
  <div className="box">
    <ul className="links">
      <li><FiArrowRight className="icon" /><a href="#">Home</a></li>
      <li><FiArrowRight className="icon" /><a href="#services">Services</a></li>
      <li><FiArrowRight className="icon" /><a href="#industries">Industries</a></li>
      <li><FiArrowRight className="icon" /><a href="#about">About</a></li>
      <li><FiArrowRight className="icon" /><a href="#work">Work</a></li>
    </ul>
  </div>
  <div className="box">
    <div className="line">
      <MdLocationPin className="icon" />
      <div className="info">
      <h4>Take The Next Step</h4>
      <p>We can’t wait to hear from you. Just drop us a line and we’ll get back to you.</p>
      </div>
    </div>
    <div className="line">
      <AiOutlineClockCircle className="icon" />
      <div className="info">
      <h4>Get in touch with us</h4>
      <p>Send us a quick request and lets discuss your unique digital opportunities.</p>
      </div>
    </div>
    <div className="line">
      <BsTelephoneFill className="icon" />
      <div className="info">
      <h4>Open a Ticket</h4>
      <p>Schedule a meeting with us to discuss your project at your suitable time.</p>
      </div>
    </div>
  </div>
 
</div>
<p className="copyright"> &copy; Appondas 2022</p>

</div>
  )
}

export default Footer