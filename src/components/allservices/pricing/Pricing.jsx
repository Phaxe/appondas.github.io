import React from 'react'
import "./Pricing.css"
import {AiOutlineCheck} from "react-icons/ai"
import {GoDeviceMobile} from "react-icons/go"
import {CgWebsite} from "react-icons/cg"
import {MdOutlineImportantDevices} from "react-icons/md"

const Pricing = () => {
  return (
    <>
    <div className="pricing area">
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    <div className="dots dots-up"></div>
    <div className="dots dots-down"></div>
    
    <h1>Pricing Plans</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <div className="container">
      <div className="box">
        <h3 className="title">Mobile</h3>
        <GoDeviceMobile  className='icon-price'/>
        <div className="price">
          <span className="amount">$15</span>
          <span className="time">Per Month</span>
        </div>
        <ul>
          <li> <AiOutlineCheck  className='icon' /> IOS</li>
          <li> <AiOutlineCheck  className='icon' /> Android</li>
          <li> <AiOutlineCheck  className='icon' /> Flutter</li>
        </ul>
        <button href="#" className="btn btn-primary">Order Now</button>
      </div>
      <div className="box popular">
        <div className="label">Most Popular</div>
        <h3 className="title">Web</h3>
        <CgWebsite className='icon-price'/>
        <div className="price">
          <span className="amount">$25</span>
          <span className="time">Per Month</span>
        </div>
        <ul>
          <li> <AiOutlineCheck  className='icon' /> Node</li>
          <li> <AiOutlineCheck  className='icon' /> React</li>
          <li> <AiOutlineCheck  className='icon' /> Angular</li>
        </ul>
        <button href="#" className="btn btn-primary">Order Now</button>
      </div>
      <div className="box ">
        <h3 className="title">DevOps</h3>
        <MdOutlineImportantDevices className='icon-price' />
        <div className="price">
          <span className="amount">$45</span>
          <span className="time">Per Month</span>
        </div>
        <ul>
          <li> <AiOutlineCheck  className='icon' /> Cloud</li>
          <li> <AiOutlineCheck  className='icon' /> Containers</li>
          <li> <AiOutlineCheck  className='icon' /> Automation</li>
        </ul>
        <button href="#" className="btn btn-primary">Order Now</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default Pricing