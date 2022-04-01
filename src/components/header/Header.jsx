import React  from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import Social from "./Social"
import {RiMentalHealthLine} from "react-icons/ri"
import {SiDatabricks} from "react-icons/si"
import {MdOutlinePrecisionManufacturing} from "react-icons/md"
import {MdOutlineSell} from "react-icons/md"
import Typical from "react-typical"
import {GiHamburgerMenu} from "react-icons/gi"




const handleClick = () => {
  const hamburger = document.getElementById("hamburger"); 
  const navUl = document.getElementById("main-nav");
  hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show")
  })
}

  
const Header = () => {

  
  return (
    
    <div className="header" id="header">
    <button onClick={() => handleClick()} className="hamburger" id="hamburger">
        <GiHamburgerMenu  />
      </button>
        <div className="container">
        <Link to="/">
        <a href='#'  className="logo">
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
          ]}
        />
        </a>
        </Link>
            <ul className="main-nav" id='main-nav'>
                <li>
                <a href="#">Services</a>
                <div className="mega-menu">
                <div className="logo">
                <a href="#" className="logo">Appondas</a>
                </div>
                <ul className="links">
                <li>
                  <a href="#"><MdOutlineSell className='icon'/> Web Site development</a>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis tempora repellendus nam. Rem, laboriosam.</p>
                </li>
                <li>
                  <a href="#"><MdOutlinePrecisionManufacturing className='icon'/> Web App development</a>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis tempora repellendus nam. Rem, laboriosam.</p>
                </li>
                <li>
                  <a href="#"><SiDatabricks className='icon'/> Data Analytics</a>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis tempora repellendus nam. Rem, laboriosam.</p>
                </li>
                <li>
                  <a href="#"><RiMentalHealthLine className='icon'/> Search Engine Optimization</a>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis tempora repellendus nam. Rem, laboriosam.</p>
                </li>
              </ul>
              </div>
                </li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                
                <li>
                <Link to="/contact" >
                  <a href='#' style={{color:"white"}} >Contact</a>
                </Link>
                </li>
            </ul>      
        </div>
          
          <Social />
    </div>
    
    
  )
}

export default Header