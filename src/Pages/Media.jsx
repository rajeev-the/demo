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
    <section className="blog-details-page sec-pad">
      <div className="thm-container">
        <div className="row">

          <div style={{
            marginRight:"20px",
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
}}
  className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
  <div className="single-blog-style-one">
    <div className="img-box">
      <img  style={
        {
          height:"200px"
        }
      } src={VIA} alt="Awesome Image" />
      <div className="overlay">
        <div className="box">
          <div className="content">
            <a href="#" className="fa fa-link" />
          </div>
        </div>
      </div>
    </div>
    <div className="text-box">
      <div className="meta-info">
      
      </div>
      {/* /.meta-info */}
      <Link  to="/blog/2">
        <h3 style={{
          padding:"10px"
        }} >The New Austrian Tunneling Method is increasingly used in road and railway projects.</h3>
      </Link>
     
    </div>
  </div>
</div>
      <div style={{
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
}}
  className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
  <div className="single-blog-style-one">
    <div className="img-box">
      <img  style={
        {
          height:"200px"
        }
      } src={NI} alt="Awesome Image" />
      <div className="overlay">
        <div className="box">
          <div className="content">
            <a href="#" className="fa fa-link" />
          </div>
        </div>
      </div>
    </div>
    <div className="text-box">
      <div className="meta-info">
      
      </div>
      {/* /.meta-info */}
      <Link  to="/blog/1">
        <h3 style={{
          padding:"10px"
        }} >MIPL: Driving India’s Infrastructure with Tunneling Excellence</h3>
      </Link>
     
    </div>
  </div>
</div>

          {/* /.single-blog-style-one */}
     
     
      </div>
      </div>
    </section>
  
   <Fottter  img={navbarimg} />
  </div>
  
  )
}

export default Media