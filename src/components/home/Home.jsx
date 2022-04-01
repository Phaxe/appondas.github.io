import React ,{useState , useEffect} from 'react'
import {Link} from "react-router-dom"
import "./Home.css"
import IMG from "../../images/discount.png"
import Video1 from "../../images/home-page-video.mp4"
import Poster from "../../images/poster-home-page.jpeg"
import {ImArrowDown} from "react-icons/im"
const Services = React.lazy(() => import("../services/Services.jsx"));
const Shopping = React.lazy(() => import("../shopping/Shopping.jsx"));
const Features = React.lazy(() => import("../features/Features.jsx"));
const Brands = React.lazy(() => import("../brands/Brands"));
const Popup = React.lazy(() => import("../popup/Popup.jsx"));
const RecentWork = React.lazy(() => import("../recent-work/RecentWork.jsx"));


const Home = () => {

    const [timedPopup ,setTimedPopup] = useState(false);

 useEffect(() => {
    setTimeout(() => {
        setTimedPopup(true)
    },1000000)
 } , [])

    return (
    <>
        <div className='video-section'>

        <video poster={Poster} muted loop autoPlay>
        <source
            src={Video1}
            type="video/mp4"
        />
        Your browser does not support the video tag.
        </video>
        <div className="video-content">
        <h2 className='text-light'>Mission
        Launch outstanding <br />
        digital products &
        experiences</h2>
        <Link to="/services">
        <button className="btn btn-primary">Explore Our Services</button>
        </Link>
        
    </div>
        <div className="go-down">
            <ImArrowDown className="icon-arrow"/>
        </div>
    </div>
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
            <h1>would you like <br/><strong>10%</strong> off</h1>
            <p>your first purchase</p>
            <div className="image">
                <img src={IMG} alt="" />
            </div>
        </Popup>
        <Services />
        <Shopping/>
        <Features />
        <RecentWork/>
        <Brands />
    </>
    )
}

export default Home