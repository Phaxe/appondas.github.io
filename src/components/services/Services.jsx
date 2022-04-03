import React from 'react'
import "./Services.css"

import {Link} from "react-router-dom"

const Home = () => {

  return (
    <>
    <section id="services">
    <div className="colm">
    <h3>We build and transform businesses by launching market-leading digital products, platforms, and experiences that fuel their growth.</h3>
        <h4>WHAT IS YOUR OPPORTUNITY?</h4>
    </div>
    <div>
        <ol className="sub-services"> 
            <div  className="card-wrap">
                <a href="javascript:void(0)">
                <li></li>
                <h2>Web Site development</h2>
                <h6>text ever since the 1500s, it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h6>
                </a>
            </div>
            <div className="card-wrap">
                <a href="javascript:void(0)">
                <li></li>
                <h2>Web App development</h2>
                <h6>text ever since the 1500s, it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h6>
                </a>
            </div>
            <div className="card-wrap">
                <a href="javascript:void(0)">
                <li></li>
                <h2>Data Analytics</h2>
                <h6>text ever since the 1500s, it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h6>
                </a>
            </div>
            <div className="card-wrap">
                <a href="javascript:void(0)">
                <li></li>
                <h2>Search Engine Optimization</h2>
                <h6>text ever since the 1500s, it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h6>
                </a>
            </div>
        </ol>
    </div>
</section>
    </>
  )
}

export default Home
