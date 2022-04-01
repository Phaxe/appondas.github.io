import React from 'react';
import "./Social.css"
import {BsInstagram} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {AiFillFacebook} from "react-icons/ai"


const HeaderSocial = () => {
  return (
    <div className="header_socials">
        <a href="#"  traget="_blank"><BsInstagram /></a>
        <a href="#"    traget="_blank"><FaGithub/></a>
        <a href="#"  traget="_blank"><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocial