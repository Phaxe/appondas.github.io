import React  from 'react'
import "./Contact.css"



const Contact = () => {


  return (
      
    <>
    <section id="getintouch">
  <div>
        <h2>Let’s discuss your opportunity</h2>
        <h4>Drop us a line and we’ll get back to you asap!</h4>
    </div>
<div className="info-container">
    <h5>1. Tell us about yourself</h5>
    <div className="information sectionp">
        
        <div className="input-box">
            <input type="text" placeholder="First Name*" />
            
        </div>
        <div className="input-box">
            <input type="text" placeholder="Last Name*" />
        </div>
        <div className="input-box">
            <input type="text" placeholder="Email*" />
        </div>
        <div className="input-box">
            <input type="tel" placeholder="Phone*" />
        </div>
        <div className="input-box">
            <input type="text" placeholder="Company" />
        </div>
        <div className="input-box">
            <input type="text" placeholder="Role" />
        </div>
    </div>
    <div className="help">
        <h5>2. What can we help you with?</h5>
        <select  id="our-serv">
            <option disabled selected>Select Service</option>
            <option value="Build a Web-site or Web-App">Build a Web-site or Web-App</option>
            <option value="Optimize existing Web-site or Web-App">Optimize existing Web-site or Web-App</option>
            <option value="Others">Others</option>
      </select>
    </div>
    <div className="tellus">
        <h5>3. Tell us about your project</h5>
        <div className="tellus">
        <textarea name="" id="text-area" cols="30" rows="5"> Project Description*</textarea>
    </div>   
    </div>
        <div className="budget">
        <select>
            <option disabled selected>Choose Your Budget</option>
            <option value="Digital Strategy">Less than $25k</option>
            <option value="Digital Experiences">$25k to $50k</option>
            <option value="Data Analytic">$50k to $100k</option>
            <option value="DevOps Automation">$100k to $250k</option>
            <option value="DevOps Transformation">$250k or more</option>
            <option value="DevOps Transformation">I don't know</option>
          </select>
        </div>
        
        <div className="submit">
            <button>Submit</button>
          <h6>By clicking submit button, you agree to our <span>privacy policy.</span></h6>
        </div>
</div>
<section id="contact">
    <div className="chat-with-us">
        <i className="fa-solid fa-comment-dots"></i>
        <h3>Chat with us</h3>
        <p>Chat live with one of our support <br /> specialists</p>
    </div> 
    <div className="ask-comu">
        <i className="fa-solid fa-users"></i>
        <h3>Ask the Community</h3>
        <p>Explore our community forums and communicate with other users</p>
    </div> 
    <div className="support">
        <i className="fa-solid fa-circle-info"></i>
        <h3>Support center</h3>
        <p>Reach us on <br /> support@appondas.com</p>
    </div> 
    <div className="call-us">
        <i className="fa-solid fa-phone"></i>
        <h3>Call us </h3>
        <p>Call us Mon - Fri during business hours 08:00-18:00 CET</p>
    </div>

 </section>
 </section>
 
    </>
    
    )
}

export default Contact