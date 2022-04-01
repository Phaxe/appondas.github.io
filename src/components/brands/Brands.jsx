import React from 'react'
import "./Brands.css"
import IMG from "../../images/icon-partner-harristeeter.svg"
import IMG2 from "../../images/download.svg"
import IMG3 from "../../images/dassault.svg"
import IMG4 from "../../images/icon-partner-tresata.svg"
import IMG5 from "../../images/commerce.svg"
import IMG6 from "../../images/flex.svg"
import IMG7 from "../../images/salesmate.svg"
import Counter from './counter/Counter'

const Brands = () => {
    
  return (
    <div className='brand' id='about'>
        <div className="container">
            <div className="content">
                <span className='slide-right'>You're in Good Company</span>
                <h3>Top global brands trust us to deliver their software products</h3>
                <p>We’ve helped companies of all sizes and shapes build advanced products, platforms and solutions that are simple, intuitive, and scalable.</p>
            </div>
            
            <div className="gallery">
            <div className="images up">
            <marquee behavior="scroll" direction="left">
            <img src={IMG}  alt="slide" />
            <img src={IMG2} alt="slide" />
            <img src={IMG3} alt="slide" />
            <img src={IMG4} alt="slide" />
            <img src={IMG5} alt="slide" />
            <img src={IMG6} alt="slide" />
            <img src={IMG7} alt="slide" />

            </marquee>
            </div>

            </div>
        </div>
        <Counter/>
    </div>
  )
}

export default Brands