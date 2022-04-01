import React from 'react'
import "./RecentWork.css"
import IMG from "../../images/1000.jpg"
import IMG2 from "../../images/1000.jpg"
import IMG3 from "../../images/1000.jpg"
import IMG4 from "../../images/1000.jpg"
import IMG5 from "../../images/1000.jpg"
import IMG6 from "../../images/1000.jpg"
import IMG7 from "../../images/1000.jpg"
import IMG8 from "../../images/1000.jpg"
import {HiArrowNarrowRight} from "react-icons/hi"


{/* Image Width it should be 600px  , Height 384px */}


const data = [
{
    id:1,
    image:IMG,
    title:"Games I am playing",
    textp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    demo:"https://mahmoudhhussein.github.io/AlerO/"
},
{
    id:2,
    image:IMG2,
    title:"eShop Ecommerce",
    textp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    demo:"https://alero-eshop.netlify.app/"
},
{
    id:3,
    image:IMG3,
    title:"Tesla For Rent ",
    textp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    demo:"https://alero-tesla.netlify.app/"
},
{
    id:4,
    image:IMG4,
    title:"Movie App",
    textp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    demo:"https://alero-movie-app.netlify.app/"
},
]

const RecentWork = () => {
  return (
    <>
    <div className="articales" id="articales">
    <h2>Recent Work</h2>
    <p>We are constantly shipping software that transform and push our clients forward.</p>
    <div className="container">
    {
        data.map(({id,image,title,textp,demo}) => {
            return(
        <div key={id} className="box">
        <img src={image} alt="cat" />
            <div className="content">
            <h3>{title}</h3>
            <p>{textp}</p>
            </div>
            <div className="info">
                <a href={demo} target="_blank">Demo</a>
                <HiArrowNarrowRight className="icon" />
            </div>
        </div>
        )
        })
    }
    </div>
    </div>

    
    </>
  )
}

export default RecentWork