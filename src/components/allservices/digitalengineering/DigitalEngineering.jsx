import React from 'react'
import "./DigitalEngineering.css"
import {GoDeviceMobile} from "react-icons/go"
import {CgWebsite} from "react-icons/cg"
import {MdBiotech} from "react-icons/md"
import {MdOutlineImportantDevices} from "react-icons/md"
import {AiFillApple} from "react-icons/ai"
import {AiFillAndroid} from "react-icons/ai"
import {RiFlutterFill} from "react-icons/ri"
import {GrNode} from "react-icons/gr"
import {GrReactjs} from "react-icons/gr"
import {FaAngular} from "react-icons/fa"
import {GoRadioTower} from "react-icons/go"
import {CgAppleWatch} from "react-icons/cg"
import {SiGooglechat} from "react-icons/si"
import {AiOutlineCloudServer} from "react-icons/ai"
import {SiLinuxcontainers} from "react-icons/si"
import {SiBandrautomation} from "react-icons/si"
import Typical from "react-typical"
import {Link} from "react-router-dom"
const DigitalEngineering = () => {
  return (
      <>
        <div className="digital">
        <h2>Digital Engineering</h2>
        <p className='my-p'>DEVELOP POWERFUL SOFTWARE</p>
        <div className="container">
            <div className="digital-box-eng">
                <GoDeviceMobile className="icon-en"/>
                <h4>Mobile</h4>
                <p>We are professional developers , we will do anything you imagine in no time</p>
                <a href='#' className='btn' >Learn More</a>
                <div className="tech">
                <AiFillApple className='icon-tech' />
                <h5>IOS</h5>
                <AiFillAndroid className='icon-tech' />
                <h5>Android</h5>
                <RiFlutterFill className='icon-tech' />
                <h5>Flutter</h5>
                </div>
            </div>
            <div className="digital-box-eng">
                <CgWebsite className='icon-en'/>
                <h4>Web</h4>
                <p>We are professional developers , we will do anything you imagine in no time</p>
                <a href='#' className='btn' >Learn More</a>
                <div className="tech">
                <GrNode className='icon-tech' />
                <h5>Node</h5>
                <GrReactjs className='icon-tech' />
                <h5>React</h5>
                <FaAngular className='icon-tech' />
                <h5>Angular</h5>
                </div>
            </div>
            <div className="digital-box-eng">
                <MdBiotech className="icon-en"/>
                <h4>Innovation</h4>
                <p>We are professional developers , we will do anything you imagine in no time</p>
                <a href='#' className='btn' >Learn More</a>
                <div className="tech">
                <GoRadioTower className='icon-tech' />
                <h5>IoT</h5>
                <CgAppleWatch className='icon-tech' />
                <h5>Wearable</h5>
                <SiGooglechat className='icon-tech' />
                <h5>Chatbots</h5>
                </div>
            </div>
            <div className="digital-box-eng">
                <MdOutlineImportantDevices className="icon-en"/>
                <h4>DevOps</h4>
                <p>We are professional developers , we will do anything you imagine in no time</p>
                <a href='#' className='btn' >Learn More</a>
                <div className="tech">
                <AiOutlineCloudServer className='icon-tech' />
                <h5>Cloud</h5>
                <SiLinuxcontainers className='icon-tech' />
                <h5>Containers</h5>
                <SiBandrautomation className='icon-tech' />
                <h5>Automation</h5>
                </div>
            </div>
            <div className="clearfix"></div>
            <h3 className='start-project slide-right'>
                
            <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
                "Start",
                1000,
                "Start Your",
                900,
                "Start Your New",
                800,
                "Start Your New Project",
                700,
                "Start Your New Project With",
                600,
                "Start Your New Project With Us",
                500,
                "Start Your New Project With Us !",
                400,
                
            ]}
            />
            </h3>
            <Link to="/pricing">
                <button className='btn btn-primary upper'>Prices</button>
            </Link>
        </div>
        </div>
        
      </>
    
  )
}

export default DigitalEngineering