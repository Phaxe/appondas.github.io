import React  from 'react'
import "./Shopping.css"
import { useState, useEffect } from 'react'
import Image from "../../images/page-banner-product-mobile.png"


const Shopping = () => {
// Start Scroll to top

const [showButton, setShowButton] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });
}, []);


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};



  return (
        <section className='shop-bg' >
            
        <div className="container" >
        <div className="shopping">
            <div className="info-box">
                <h2>A fresh take on online grocery shopping</h2>
                <p>How did we help our client transform their business with digital retail and omnichannel experiences.</p>
                <button className='btn btn-primary'>View Case Study</button>
            </div>
            <div className="image-box">
            <img src={Image} alt="about" />
            </div>    
        </div>
        
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            &#8679;
          </button>
        )}
        </div>
        </section>
        
      
  )
}

export default Shopping