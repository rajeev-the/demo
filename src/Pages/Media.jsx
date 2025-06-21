import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Fottter from '../Components/Fottter'
import navbarimg from '/img/logo-light.png'
import VIA from '../assets/profilepic/1746091391533.jpg'
import NI from "../assets/profilepic/1709974074945.jpeg"
import { Link } from 'react-router-dom'

const Media = () => {
  return (
   <div className="">
   
   <div className="" /> {/* /.preloader */}
  <header className="header header-home-one">

  <Navbar/>
  
  </header>
 
    {/* /.header */}
    <section className="inner-banner">
      <div className="inner">
        <div className="thm-container clearfix">
          <h2 className="pull-left">Media Page</h2>
          <ul className="breadcrumb pull-right">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Media Page</span>
            </li>
          </ul>
          {/* /.breadcrumb */}
        </div>
      </div>
    </section>
    {/* /.inner-banner */}

     <div className="event-section-container">
      <div className="event-flex-wrapper">
        
          <div  className="event-card">
            <Link to={`/blog/2`} className="event-card-link">
              <div className="img-box">
                <img src={VIA} alt="Event" className="event-img" />
                <div className="overlay">
                  <div className="box">
                   
                  </div>
                </div>
              </div>
              <div className="text-box">
                <h2 className="event-title">The New Austrian Tunneling Method is increasingly...</h2>
              </div>
            </Link>
          </div>
           <div  className="event-card">
            <Link to={`/blog/1`} className="event-card-link">
              <div className="img-box">
                <img src={NI} alt="Event" className="event-img" />
                <div className="overlay">
                  <div className="box">
                   
                  </div>
                </div>
              </div>
              <div className="text-box">
                <h2 className="event-title">MIPL: Driving India’s Infrastructure with Tunneling Excellence...</h2>
              </div>
            </Link>
          </div>
        
      </div>
    </div>
   
  
   <Fottter  img={navbarimg} />
  </div>
  
  )
}

export default Media