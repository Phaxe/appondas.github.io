import React from 'react'
import "./WorkSteps.css"
import IMG from "../../../images/live-chat.png"
import {GiArtilleryShell} from "react-icons/gi"
import {HiOutlineEye} from "react-icons/hi"
import {MdOutlineDeveloperMode} from "react-icons/md"

const HowitWorks = () => {
  return (
    <>
  <div className="work-steps">
  <h2>Digital Experiences</h2>
  <p>Use modern design to solve real problems and create simple products that delight users and fuel business growth.</p>
  <div className="container">
    <img src={IMG} alt="" className="image" />
    <div className="info">
      <div className="box">
        <GiArtilleryShell  className="icon-work"/>
        <div className="text">
          <h3>Experience Design</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
            recusandae debitis vel
          </p>
        </div>
      </div>
      <div className="box">
        <HiOutlineEye  className="icon-work"/>
        <div className="text">
          <h3>Visual Design</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
            recusandae debitis vel
          </p>
        </div>
      </div>
      <div className="box">
        <MdOutlineDeveloperMode  className="icon-work"/>
        <div className="text">
          <h3>Developement</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nesciunt obcaecati quisquam quis laborum
            recusandae debitis vel
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default HowitWorks