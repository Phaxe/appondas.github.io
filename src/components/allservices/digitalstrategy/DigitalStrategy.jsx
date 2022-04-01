import React from 'react'
import "./DigitalStrategy.css"
import {MdOutlineDesignServices} from "react-icons/md"
import {MdBiotech} from "react-icons/md"
import {CgProductHunt} from "react-icons/cg"
import {GiPlatform} from "react-icons/gi"
import {AiOutlineCloudServer} from "react-icons/ai"
import {GoSearch} from "react-icons/go"


const Digital = () => {
  return (
    <>
    <div className="digital">
    <h2>Digital Strategy</h2>
    <p className='my-p'>DISCOVER YOUR OPPORTUNITY</p>
    <div className="container">
        <div className="digital-box">
            <MdOutlineDesignServices className="icon-st"/>
            <h4>Design Sprints</h4>
            <p>We are professional developers , we will do anything you imagine in no time</p>
        </div>
        <div className="digital-box">
        <MdBiotech className="icon-st"/>
        <h4>Technology Audits</h4>
            <p>We are professional developers , we will do anything you imagine in no time</p>
        </div>
        <div className="digital-box">
            <CgProductHunt className="icon-st"/>
            <h4>Product Strategy</h4>
            <p>We are professional developers , we will do anything you imagine in no time</p>
        </div>
        <div className="digital-box">
            <GiPlatform className="icon-st"/>
            <h4>Platform Design</h4>
            <p>We are professional developers , we will do anything you imagine in no time</p>
        </div>
        <div className="digital-box">
            <AiOutlineCloudServer className="icon-st"/>
            <h4>Cloud and Servers</h4>
            <p>We are professional developers , we will do anything you imagine in no time</p>
        </div>
        <div className="digital-box">
            <GoSearch className="icon-st"/>
            <h4>Seo</h4>
            <p>We are professional developers , we will do anything you imagine in no time</p>
        </div>
        <button href='#' className='btn btn-primary' >Learn More</button>
        <div className="clearfix"></div>
        
    </div>
    
    </div>

    </>
  )
}

export default Digital
