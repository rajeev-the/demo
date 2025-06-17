import React from 'react'
import Fottter from '../Components/Fottter'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import navbarimg from '/img/logo-light.png'
import VA from "../assets/profilepic/1516875468370.jpeg"
import VIA from '../assets/profilepic/1746091391533.jpg'
import NI from "../assets/profilepic/1709974074945.jpeg"
import PP from "../assets/profilepic/head.jpg"
import { Link } from 'react-router-dom'
import PK from "../assets/profilepic/PK.jpg"


const About = () => {
  return (
<>
  <div className="">
    <div className="spinner" />
  </div>{" "}
  {/* /.preloader */}
  <header className="header header-home-one inner-page-header">
  <Header/>
  <Navbar/>
  </header>
  {/* /.header */}
  <section  style={{
        backgroundImage: "url('/img/banner-1-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    
        
     
      }}  className="inner-banner">
    <div className="inner">
      <div className="thm-container clearfix">
      <h2 className="pull-left">Machino International Pvt. Ltd.</h2>
        <ul className="breadcrumb pull-right">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <span>About Page</span>
          </li>
        </ul>
        {/* /.breadcrumb */}
      </div>
    </div>
  </section>
  {/* /.inner-banner */}
  <section className="sec-pad about-us-one video-box-wrapper">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-7">
          <div className="about-content">
          <h3>
            Corporate Profile - MIPL
            </h3>
            <p className="highlight text-thm">
            Engineering India’s Infrastructure with Innovation and Integrity

            </p>
            <p>
            Founded in 2008, with a foundation built on over 30 years of industry experience,
             Machino International Pvt. Ltd. (MIPL) is a leading name in India’s <br /> infrastructure development landscape.
              We specialize in tunneling, slope protection, and geotechnical engineering, delivering technically demanding projects
               with unwavering commitment to safety, sustainability, and quality.

            </p>
            <div className="icon-box mb0">
              <i className="hialeah-icon-cutter" />
              <i className="hialeah-icon-helmet2" />
              <i className="hialeah-icon-brick-wall" />
              <i className="hialeah-icon-worker" />
            </div>
          </div>
          {/* /.about-content */}
        </div>
        <div className="col-md-5 clearfix">
          <div className="video-box pull-right hvr-float-shadow">
            <div className="img-box">
              <img src="img/video-box-img.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                <div className="content">
  
</div>

                </div>
              </div>
            </div>
          </div>
          {/* /.video-box */}
        </div>
      </div>
    </div>
  </section>
  {/* /.sec-pad about-us */}
  <section className="call-to-action-style-one">
    <div className="inner">
      <div className="thm-container text-center">
      <h3>
          Your Trusted Partner in    <span>Tunneling Innovation,</span> <br /> <span>Tunnel & Underground Solution,</span> <br /> <span>Hydropower Project,</span><br /> <span>Excavation & Slope Protection Work,</span> <br /> <span>Pumped Storage Project</span>
 
        </h3>
        <p>
        Machino International Pvt. Ltd. (MIPL) Engineering India’s Infrastructure with Innovation and Integrity

        </p>
        <Link to={'/contact'} className="btn-thm">
          Contact Our Experts
        </Link>
      </div>
    </div>
  </section>
  {/* /.call-to-action-style-one */}
  <section className="sec-pad what-we-do-style-two gray-bg">
    <div className="thm-container">
      <div className="row">
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-4">
          <div className="single-what-we-do-style-two hvr-float-shadow">
            <div className="img-box">
           
              <div className="content-box  hvr-sweep-to-bottom">
                <div className="inner-box">
                  <div className="top-content">
                    <div className="icon-box">
                      <div className="inner">
                        <i className="hialeah-icon-chainsaw" />
                      </div>
                    </div>
                    <div className="text-box">
                    <h3>Knowledge & Experience</h3>
                    </div>
                  </div>
                  <div className="main-content">
                  <p>30+ years expertise in complex underground projects with skilled teams and quality control systems</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-4">
          <div className="single-what-we-do-style-two hvr-float-shadow">
            <div className="img-box">
            
              <div className="content-box  hvr-sweep-to-bottom">
                <div className="inner-box">
                  <div className="top-content">
                    <div className="icon-box">
                      <div className="inner">
                        <i className="hialeah-icon-paint-roller" />
                      </div>
                    </div>
                    <div className="text-box">
                    <h3>Quality Assurance</h3>
                    </div>
                  </div>
                  <div className="main-content">
                  <p>Rigorous standards for environmental suitability, safety, reliability, and performance</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-4">
          <div className="single-what-we-do-style-two hvr-float-shadow">
            <div className="img-box">
            
              <div className="content-box  hvr-sweep-to-bottom">
                <div className="inner-box">
                  <div className="top-content">
                    <div className="icon-box">
                      <div className="inner">
                        <i className="hialeah-icon-planer" />
                      </div>
                    </div>
                    <div className="text-box">
                  
                    <h3>Professional Service</h3>
                    </div>
                  </div>
                  <div className="main-content">
                  <p>Flexible solutions with rapid response times and client-focused operational support</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-4">
          <div className="single-what-we-do-style-two hvr-float-shadow">
            <div className="img-box">
            
              <div className="content-box  hvr-sweep-to-bottom">
                <div className="inner-box">
                  <div className="top-content">
                    <div className="icon-box">
                      <div className="inner">
                        <i className="hialeah-icon-chainsaw" />
                      </div>
                    </div>
                    <div className="text-box">
                    <h3>Strategic Partnership</h3>
                    </div>
                  </div>
                  <div className="main-content">
                  <p>Long-term collaborations that drive mutual success and innovation in tunneling technology</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
       
      </div>
    </div>
  </section>
  {/* Divider */}
  <section className="sec-pad bgc-fc">
    <div className="thm-container">
      <div className="row">
        <div className="col-sm-6 col-md-6">
          <div className="sec-title-two">
            <div className="row">
              <div className="col-md-12">
                <div className="title-box">
                  <h2>Get A Qoute</h2>
                  <div className="line" />
                  <p>
                    Get a quote today for customized, reliable solutions tailored to meet your project needs and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form action="#" className="get-a-qoute row">
            <div className="col-md-6">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div style={{
            marginBottom:"20px",
          
           }} className="col-md-6">
  <select  style={
    {
      border: "none"

    }
  } className="form-control">
    <option value="">Select Option</option>
    <option value="execution">Execution</option>
    <option value="manufacturing">Manufacturing</option>
    <option value="rental">Rental</option>
  </select>
</div>
            <div className="col-md-12">
              <input type="text" placeholder="Message Subjet" />
            </div>
            <div className="col-md-12">
              <textarea placeholder="Your Message" defaultValue={""} />
              <button type="submit" className="btn-thm">
                Request Qoute
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="abilites-box">
            <div className="sec-title-two">
              <div className="row">
                <div className="col-md-12">
                  <div className="title-box">
                    <h2>A Partner to Rely on</h2>
                    <div className="line" />
                    <p>
                    We understand the value of long term business relationships, our aim
                     is to develop trusting relationships, which foster success and bring
                      benefits to both our partners and ourselves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-why-choose-us">
              <div className="icon-box">
                <div className="inner">
                  <i className="hialeah-icon-worker" />
                </div>
              </div>
              <div className="text-box">
                <h3>Vastly Experienced</h3>
                <p>
                30+ years expertise in complex underground projects with skilled teams and quality control systems
                </p>
              </div>
            </div>
            <div className="single-why-choose-us">
              <div className="icon-box">
                <div className="inner">
                  <i className="hialeah-icon-blower" />
                </div>
              </div>
              <div className="text-box">
                <h3>Standard Quality</h3>
                <p>
                Machino International Pvt. Ltd. ensures standard quality through reliable, durable, certified, precise, and sustainable engineering backed by tested, verified performance.
                </p>
              </div>
            </div>
            <div className="single-why-choose-us mb0">
              <div className="icon-box">
                <div className="inner">
                  <i className="hialeah-icon-truck" />
                </div>
              </div>
              <div className="text-box">
                <h3>On Time Delivery</h3>
                <p>
                Machino International Pvt. Ltd. guarantees standard quality with durable materials, precise engineering, certified processes, and on-time delivery for every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Team */}
  <section className="sec-pad team-style-one">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="sec-title text-center">
     
            <h2>Our Management</h2>
            <div className="line" />
          
          </div>
        </div>
        <div className='team-content-col'>
          <Link  to={"/profile/1"} style={{
           marginBottom:"100px"

        }}  className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="team-box">
            <img src={PK} />
            <div className="team-box-content">
              <h3 className="title">Mr. Pradip Kumar Agarwal</h3>
              <span className="post">Chairman I Director</span>
              <span
                className="icon"
                href="mailto:someone@example.com"
                title="Mail Me"
              >
                <i className="fa fa-paper-plane" />
              </span>
            </div>
          </div>
        </Link>
        </div>
      </div>
      
      <div className="row">
      
        <Link  to={"/profile/2"} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="team-box">
            <img src={VA}/>
            <div className="team-box-content">
              <h3 className="title">Mr. Vibhore Agarwal</h3>
              <span className="post">Director</span>
              <a
                className="icon"
                href="mailto:someone@example.com"
                title="Mail Me"
              >
                <i className="fa fa-paper-plane" />
              </a>
            </div>
          </div>
        </Link>
        <Link  to={"/profile/3"} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="team-box">
            <img src={VIA} />
            <div className="team-box-content">
              <h3 className="title">Mr. Vishal Agarwal</h3>
              <span className="post">Director</span>
              <a
                className="icon"
                href="mailto:someone@example.com"
                title="Mail Me"
              >
                <i className="fa fa-paper-plane" />
              </a>
            </div>
          </div>
        </Link>
        <Link   to={"/profile/4"} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="team-box">
            <img src={NI} />
            <div className="team-box-content">
              <h3 className="title">Mr. Nitin Malhan</h3>
              <span className="post">Executive Director</span>
              <span
                className="icon"
                href="mailto:someone@example.com"
                title="Mail Me"
              >
                <i className="fa fa-paper-plane" />
              </span>
            </div>
          </div>
        </Link>
        <Link  to={"/profile/5"} style={{
          marginTop:"40px"
        }} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="team-box">
            <img style={{
              height:"400px"
            }} src={PP} />
            <div className="team-box-content">
              <h3 className="title">Mr. Vinod Rajora</h3>
              <span className="post">Technical Director</span>
              <span
                className="icon"
                href="mailto:someone@example.com"
                title="Mail Me"
              >
                <i className="fa fa-paper-plane" />
              </span>
            </div>
          </div>
        </Link>
      
        
      </div>
    </div>
  </section>

  <section className="sec-pad team-style-one">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="sec-title text-center">
     
            <h2>Our Team</h2>
            <div className="line" />
          
          </div>
        </div>
        
      </div>
      
      <div className="row">
      
        <Link  to={"/profile/2"} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="team-box">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
            <div className="team-box-content">
              <h3 className="title"> </h3>
              <span className="post">not found</span>
              <a
                className="icon"
                href="mailto:someone@example.com"
                title="Mail Me"
              >
                <i className="fa fa-paper-plane" />
              </a>
            </div>
          </div>
        </Link>
        <Link  to={"/profile/3"} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="team-box">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
            <div className="team-box-content">
              <h3 className="title"> </h3>
              <span className="post">not found</span>
              <a
                className="icon"
                href="mailto:someone@example.com"
                title="Mail Me"
              >
                <i className="fa fa-paper-plane" />
              </a>
            </div>
          </div>
        </Link>
        <Link   to={"/profile/4"} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="team-box">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
            <div className="team-box-content">
              <h3 className="title"> </h3>
              <span className="post">not found</span>
              <span
                className="icon"
                href="mailto:someone@example.com"
                title="Mail Me"
              >
                <i className="fa fa-paper-plane" />
              </span>
            </div>
          </div>
        </Link>
       
      
        
      </div>
    </div>
  </section>

 <Fottter img={navbarimg}/>
</>

  )
}

export default About