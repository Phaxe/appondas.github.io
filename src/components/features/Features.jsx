import React from 'react'
import "./Features.css"
import {MdColorLens} from "react-icons/md"
import {CgWebsite} from "react-icons/cg"
import {IoDiamondOutline} from "react-icons/io5"
import {FaCode} from "react-icons/fa"
import IMG from "../../images/Logistics.jpg";
import {Link} from "react-router-dom"

const features = () => {
    return (

    <div className="features" id="industries">
    <div className="container">
        <div className="content">
        <h2 className='tablet'>TECH + BUSINESS + TALENT</h2>
        <p className='tablet'>Experts at every stage of the product development lifecycle</p>
        </div>
        <div className="features-content">
            <div className="col">
                <div className="feat">
                    <MdColorLens  className='icon'/>
                    <div className="text">
                        <h3>Graphic Design</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis eligendi perferendis, expedita vitae ipsum. Incidunt laboriosam hic quaerat repudiandae. Laboriosam assumenda veniam voluptatum pariatur enim inventore sint soluta harum?</p>
                    </div>
                </div>
                <div className="feat">
                <IoDiamondOutline  className='icon'/>
                    <div className="text">
                        <h3>UI & UX</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis eligendi perferendis, expedita vitae ipsum. Incidunt laboriosam hic quaerat repudiandae. Laboriosam assumenda veniam voluptatum pariatur enim inventore sint soluta harum?</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="feat">
                <CgWebsite  className='icon'/>
                    <div className="text">
                        <h3>Web Design</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis eligendi perferendis, expedita vitae ipsum. Incidunt laboriosam hic quaerat repudiandae. Laboriosam assumenda veniam voluptatum pariatur enim inventore sint soluta harum?</p>
                    </div>
                </div>
                <div className="feat">
                <FaCode  className='icon'/>
                    <div className="text">
                        <h3>Web Development</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis eligendi perferendis, expedita vitae ipsum. Incidunt laboriosam hic quaerat repudiandae. Laboriosam assumenda veniam voluptatum pariatur enim inventore sint soluta harum?</p>
                    </div>
                </div>

            </div>
            <div className="col">
                <div className="image image-column">
                    <img src={IMG} alt="Logisitcs" />
                </div>
            </div>
            
        </div>
        
    </div>
    <Link to="/services">
        <button href="#" className='btn btn-primary'> Learn More</button>
    </Link>
    
</div>

)
}

export default features