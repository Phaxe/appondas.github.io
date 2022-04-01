import React from 'react'
import "./Popup.css"
import {ImCross} from "react-icons/im"
import { Link } from 'react-router-dom'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <ImCross className='icon clsbtn' onClick={() => props.setTrigger(false)} />
            <Link to="/contact">
            <button className='btn btn-primary contact-popup'>Contact Us</button>
            </Link>
            {props.children}
        </div>
    </div>
  ): "";
}

export default Popup
