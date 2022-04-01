import React from 'react'
import "./Counter.css"
import {FaRegFlag} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {AiOutlineFire} from "react-icons/ai"
import IMG from "../../../images/inc.svg"
import IMG2 from "../../../images/fast5.svg"
import IMG3 from "../../../images/iso.svg"
import IMG4 from "../../../images/clutch.svg"
import IMG5 from "../../../images/aws-partner.svg"
import IMG6 from "../../../images/google-partner.svg"
import IMG7 from "../../../images/hackthon.svg"

function numCounter(tagId,maxCount,speed){
    let initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    let counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    let totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
}

numCounter("Projects",44,100);
numCounter("Clients",12,400);
numCounter("Partners",436,10);


const Counter = () => {

  return (
    <>
    <div className="row" id='work'>
    <div className="column">
      <div className="card">
        <FaRegFlag className='icon' />
        <h3><span id="Partners">0</span>+</h3>
        <h3>Years in Business</h3>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <FiUsers className='icon' />
        <h3><span id="Projects">0</span>+</h3>
        <h3>Talented Experts</h3>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <AiOutlineFire className='icon' />
        <h3><span id="Clients">0</span>+</h3>
        <h3>Products Launched</h3>
      </div>
    </div> 
  </div>
    <div className="alliance">
      <span className='sp'>ACCOLADES & ALLIANCES</span>
        <div className="images">
          <img className="firstfour" src={IMG}  alt="partner" />
          <img className="firstfour" src={IMG2} alt="partner" />
          <img className="firstfour" src={IMG3} alt="partner" />
          <img className="firstfour" src={IMG4} alt="partner" />
          <img src={IMG5} alt="partner" />
          <img src={IMG6} alt="partner" />
          <img src={IMG7} alt="partner" />
        </div>
  </div>
    </>
  )
}

export default Counter