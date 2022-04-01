import React from 'react'
import "./AllServices.css"
import VideoBG from "../../images/Rapidops-ServicePage.mp4"
const Digital = React.lazy(() => import('./digitalstrategy/DigitalStrategy.jsx'));
const WorkSteps = React.lazy(() => import("./WorkSteps/WorkSteps.jsx"))
const DigitalEng = React.lazy(() => import("./digitalengineering/DigitalEngineering.jsx"))





const AllServices = () => {
  return (
    <>
    <div className='video-section'>
    <video poster="" muted loop autoPlay>
    <source
        src={VideoBG}
        type="video/mp4"
    />
    Your browser does not support the video tag.
    </video>
        <div className="video-content">
        <h2>We’re your digital team</h2>
        <p> We turn your ideas into market-leading software products, platforms and solutions.</p>
        </div>
    </div>
        
    {/* Services */}
        <Digital />
        <WorkSteps />
        <DigitalEng />
    </>
    
  )
}

export default AllServices