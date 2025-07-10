import React,{useState ,useEffect} from 'react'
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Fottter';
import homevideo from "../assets/MIPL Video MS_v3 (1) (1).mp4"
import { Link,useNavigate } from 'react-router-dom';
import navbarimg from '/img/logo-light.png'
import {data1} from '../Data/Service'
import VA from "../assets/profilepic/1516875468370.jpeg"
import VIA from '../assets/profilepic/1746091391533.jpg'
import NI from "../assets/profilepic/1709974074945.jpeg"
import PP from "../assets/profilepic/head.jpg"
import {partners} from "../Data/profile"
import PK from "../assets/profilepic/PK.jpg"
import {products_data} from "../Data/Product"
import {event_page} from "../Data/ourdata"

import { data } from '../Data/Service'



const Home = () => {
  
  const [value,setValue] = useState("Execution")







 

  return (
    <>



  <div className="" /> {/* /.preloader */}
  <header className="header header-home-one">
 <Header/>
  <Navbar/>
  
  </header>
  {/* /.header */}
  {/* Home Slider */}
  <div
    id="minimal-bootstrap-carousel"
    className="carousel slide carousel-fade slider-home-one"
    data-ride="carousel"
  >
    {/* Wrapper for slides */}
    <div className="carousel-inner" role="listbox">
      <div
        className="item active slide-1"
         loading="lazy" 
        style={{
          backgroundImage: "url(img/banner-1-2.jpg)",
          backgroundPosition: "center center"
        }}
      >
        <div className="carousel-caption">
          <div className="thm-container">
            <div className="box valign-middle">
              <div className="content text-left">
                <h2 data-animation="animated fadeInUp">
                Execution
                </h2>
                <p data-animation="animated fadeInDown">
                Our Execution Division is the backbone of MIPL’s project delivery capability. Backed by a seasoned
                 team of engineers, geotechnical specialists, and skilled workforce, we execute infrastructure projects 
                 with technical precision and operational excellence.

                </p>
                <Link
                  to={'/service/execution'}
                  className="banner-btn"
                  data-animation="animated fadeInDown"
                >
                  Our Works
                </Link>
                <Link
                  to={'/contact'}
                  className="banner-btn borderd"
                  data-animation="animated fadeInDown"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="item slide-2"
         loading="lazy" 
        style={{
          backgroundImage: "url(img/male-worker-factory.jpg)",
          backgroundPosition: "center center"
        }}
      >
        <div className="carousel-caption">
          <div className="thm-container">
            <div className="box valign-middle">
              <div className="content text-left">
                <h2 data-animation="animated fadeInUp">
                Manufacturing 
                </h2>
                <p data-animation="animated fadeInDown">
                MIPL’s Manufacturing Division is dedicated to designing and producing high-performance tunneling 
                and mining support systems. Our in-house engineering and fabrication units enable us to deliver components 
                tailored to diverse geological and structural needs.

                </p>
                <Link
                  to={'/products'}
                  className="banner-btn"
                  data-animation="animated fadeInDown"
                >
                  Our Works
                </Link>
                <Link
                  to={'/contact'}
                  className="banner-btn borderd"
                  data-animation="animated fadeInDown"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="item slide-3"
         loading="lazy" 
        style={{
          backgroundImage: "url(img/pppop.jpg)",
          backgroundPosition: "center center"
        }}
      >
        <div className="carousel-caption">
          <div className="thm-container">
            <div className="box valign-middle">
              <div className="content text-left">
                <h2 data-animation="animated fadeInUp">
                Rentals
                </h2>
                <p data-animation="animated fadeInDown">
                Our Equipment Rental Division provides a fleet of well-maintained, high-efficiency machinery tailored for underground,
                tunneling, and geotechnical projects. We offer both short-term and long-term rental options, supported by expert technical assistance and operator training
                </p>
                <Link
                  to={'/service/rentals'}
                  className="banner-btn"
                  data-animation="animated fadeInDown"
                >
                  Our Works
                </Link>
                <Link
                  to={'/contact'}
                  className="banner-btn borderd"
                  data-animation="animated fadeInDown"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Controls */}
    <a
      className="left carousel-control"
      href="#minimal-bootstrap-carousel"
      role="button"
      data-slide="prev"
    >
      <i className="fas fa-angle-left" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="right carousel-control"
      href="#minimal-bootstrap-carousel"
      role="button"
      data-slide="next"
    >
      <i className="fas fa-angle-right" />
      <span className="sr-only">Next</span>
    </a>
    <ul className="carousel-indicators list-inline custom-navigation">
      <li
        data-target="#minimal-bootstrap-carousel"
        data-slide-to={0}
        className="active"
      />
      <li data-target="#minimal-bootstrap-carousel" data-slide-to={1} />
    </ul>
  </div>
  {/* Feature Service */}
  <section className="sec-pad about-us-one pb50">
    <div className="thm-container">
      <div className="row feature_service_row">
        <Link to={"/service/execution"}    className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div   className="service_box">
            <img  src="img/Exu.jpg" />
            <div className="service-content">
              <span className="service-icon">
           <svg fill="#ffa801" viewBox="-184.32 -184.32 880.64 880.64" xmlns="http://www.w3.org/2000/svg" stroke="#ffa801"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48 21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09 3.19 1 6.41 1.48 9.58 1.48 13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14 31.31-78.28 20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z"></path></g></svg>
              </span>
              <h3 className="title">Execution</h3>
              <p  style={{
                color:"#938d8a"
              }} className="description">
              Each project is executed under stringent safety protocols and
               sustainable engineering practices, ensuring timely 

              </p>
              <p className="btn-thm">
                Read More
              </p>
            </div>
          </div>
        </Link>
        <Link  to={'/products'} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="service_box">
            <img src="img/mau.jpg" />
            <div className="service-content">
              <span className="service-icon">
            <svg viewBox="-6.24 -6.24 28.48 28.48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2V15H13V10H11V15H1V5L7 2H8V5L14 2H15ZM9 8H7V12H9V8ZM5 8H3V12H5V8Z" fill="#ffa801"></path> </g></svg>
              </span>
              <h3 className="title">Manufacturing</h3>
              <p  style={{
                color:"#938d8a"
              }} className="description">
              Every product undergoes rigorous quality control and adheres to international industry
               standards, ensuring reliability on the field.

              </p>
              <p className="btn-thm">
                Read More
              </p>
            </div>
          </div>
        </Link>
        <Link   to={'/service/rentals'} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="service_box">
            <img src="img/rental (1).jpg" />
            <div className="service-content">
              <span className="service-icon">
               <svg viewBox="-9.12 -9.12 34.24 34.24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 5.5C16 8.53757 13.5376 11 10.5 11H7V13H5V15L4 16H0V12L5.16351 6.83649C5.0567 6.40863 5 5.96094 5 5.5C5 2.46243 7.46243 0 10.5 0C13.5376 0 16 2.46243 16 5.5ZM13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z" fill="#ffa801"></path> </g></svg>
              </span>
              <h3 className="title">Rental</h3>
              <p style={{
                color:"#938d8a"
              }} className="description">
              Our machinery is regularly serviced and managed by trained technicians to ensure high uptime and site productivity.
            </p>
              <p className="btn-thm">
                Read More
              </p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  </section>



  {/* About Service */}
  <section className="sec-pad about-us-one video-box-wrapper">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-7">
          <div className="about-content">
          
            <h3>
              Welcome To <span className="text-thm">MIPL</span>
            </h3>
            <p className="highlight text-thm">
            Machino International Pvt. Ltd.
            </p>
            <p>
            Founded in 2008, with a foundation built on over 30 years of industry experience, Machino International Pvt. Ltd. (MIPL) is a leading name in India’s infrastructure development landscape. We specialize in tunneling, slope protection, and geotechnical engineering, delivering technically demanding projects with unwavering commitment to safety, sustainability, and quality.
            <br />

With expertise spanning underground infrastructure, hydropower development, mining support, and metro rail solutions, MIPL has positioned itself as a dependable partner for large-scale infrastructure development across the nation.
            </p>
            <div className="icon-box">
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
          <video
    className="video-popup"
    src={homevideo}
   
  controls
   loop
 

    playsInline
    style={{
      width: "100%",
      height: "auto",
      maxHeight: "100vh", // sets a maximum height
      
    
      display: "block",
      backgroundColor: "transparent", // <-- Ensure video itself is transparent
    }}
  ></video>      
          </div>
          
          {/* /.video-box */}
        </div>
        
        
      </div>
       <div  className="text-center btn-box">
        <Link to={'/about'} className="btn-thm">About Us</Link>
    </div>
      
    </div>
  </section>
  {/* /.sec-pad about-us */}
  {/* Why Choose */}
  <section className="sec-pad why-choose-us">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="sec-title text-center">
            <h1>Why Choose</h1>
            <h2>Why Choose Us</h2>
            <div className="line" />
            <p>
            Why Choose Machino International Pvt. Ltd.?
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="single-why-choose-us">
            <div className="icon-box">
              <div  className="inner">
                <i className="hialeah-icon-worker" />
              </div>
            </div>
            <div className="text-box">
              <h3>Vastly Experienced</h3>
              <p>
              30+ years of proven expertise and project leadership
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="single-why-choose-us">
            <div className="icon-box">
              <div className="inner">
                <i className="hialeah-icon-blower" />
              </div>
            </div>
            <div className="text-box">
              <h3>Standard Quality</h3>
              <p>
              Advanced engineering backed by certified quality systems
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="single-why-choose-us">
            <div className="icon-box">
              <div className="inner">
                <i className="hialeah-icon-truck" />
              </div>
            </div>
            <div className="text-box">
              <h3>On Time Delivery</h3>
              <p>
              Adaptable workforce with deep project experience
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="single-why-choose-us">
            <div className="icon-box">
              <div className="inner">
                <i className="hialeah-icon-helmet2" />
              </div>
            </div>
            <div className="text-box">
              <h3>Professional Services</h3>
              <p>
              End-to-end execution, <br /> manufacturing, and rental solutions{""}
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="single-why-choose-us">
            <div className="icon-box">
              <div className="inner">
                <i className="hialeah-icon-bulldozer-1" />
              </div>
            </div>
            <div className="text-box">
              <h3>Organized Projects</h3>
              <p>
                Are we in agreeance cross functi <br /> onal teams enable out{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="single-why-choose-us">
            <div className="icon-box">
              <div className="inner">
                <i className="hialeah-icon-briefcase" />
              </div>
            </div>
            <div className="text-box">
              <h3>Compehensive Price</h3>
              <p>
              PAN-India presence with global export capabilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Recent Project */}
  <section className="project-style-two sec-pad">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="sec-title text-center">
            <h1>Portfolio</h1>
            <h2>Our Projects</h2>
            <div className="line" />
            <p>
            We deliver innovative, precise manufacturing and rental solutions with a strong focus on client success.
            </p>
          </div>
        </div>
      </div>
      <div className="gallery-filter">
        <ul className="post-filter masonary text-center">
          <li onClick={()=>setValue("Execution")} className={`filter ${value === "Execution" ? "active" : ""}`}  data-filter=".masonary-item">
            <span>Execution</span>
          </li>
          <li onClick={()=> setValue("manufacturing")} className={`filter ${value === "manufacturing" ? "active" : ""}`} data-filter=".metal">
            <span> manufacturing </span>
          </li>
          <li onClick={()=>setValue("Rental")}   className={`filter ${value === "Rental" ? "active" : ""}`} data-filter=".painting">
          <span >Equipment Assets / Rental</span>
          </li>
        
        </ul>
        {/* /.post-filter */}
      </div>
    </div>
    <div className="thm-container">


 {/* You can conditionally render JSX like this: */}
 {value === "Execution" && (
   // Place the JSX you want to render when value is "Execution" here
 <>
   <div
        className="row masonary-layout filter-layout"
        data-filter-class="filter"
      >
        {

          data.slice(0, 8).map((e, index) => (

              <div key={index} className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item painting">
          <div className="single-project-style-two">
            <div className="img-box">
              <img  style={{
                height:"200px"
              }} src={e.img[0]} alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <Link
                     to={`/service/${e.id}`}
                      className="img-popup read-more fas fa-link"
                    >
                   </Link>
                    
                  </div>
                  
                </div>
              </div>
             
            </div>
               <h4 className='demo1'> 
                
   {e.title ? (
    <>
      {e.title.split(' ').slice(0, 7).join(' ')}
  ....
    </>
  ) : (
    'No title available'
  )}
  
  </h4>
          </div>
        </div>
       

           ) )
        }
      
      
         
     
        
      
      
      
      
      </div>
 
 
 </>
 )          

 }


 
 {/* You can conditionally render JSX like this: */}
 {value === "manufacturing" && (
   // Place the JSX you want to render when value is "Execution" here
 <>
  
 <>
  <div
  className="row masonary-layout filter-layout"
  data-filter-class="filter"
>
  {products_data.slice(0, 8).map((e, index) => (
         <div key={index} className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item painting">
          <div className="single-project-style-two">
            <div className="img-box">
              <img style={{
                height:"200px"
              }} src={e.img[0]} alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <Link
                     to={`/products/${e.id}`}
                      className="img-popup read-more fas fa-link"
                    >
                   </Link>
                    
                  </div>
                  
                </div>
              </div>
             
            </div>
               <h4  style={{
    minHeight: '1.5em', // Ensures consistent height
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }} className='demo1'> 
                
   {e.title ? (
    <>
      {e.title.split(' ').slice(0, 8).join(' ')}
  ....
    </>
  ) : (
    'No title available'
  )}
  
  </h4>
          </div>
        </div>
  ))}
</div>

 
 
 </>
 
 
 </>
 )          











 
 }
  {/* You can conditionally render JSX like this: */}
 {value === "Rental" && (

 <>
  <div
  className="row masonary-layout filter-layout"
  data-filter-class="filter"
>
  {data1.slice(0, 8).map((e, index) => (
     <div key={index} className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item painting">
          <div className="single-project-style-two">
            <div className="img-box">
              <img style={{
                height:"200px"
              }} src={e.src} alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <Link
                     to={`/service/rentals${e.id}`}
                      className="img-popup read-more fas fa-link"
                    >
                   </Link>
                    
                  </div>
                  
                </div>
              </div>
             
            </div>
               <h4  style={{
    minHeight: '1.5em', // Ensures consistent height
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }} className='demo1'> 
                
   {e.title ? (
    <>
      {e.title.split(' ').slice(0, 8).join(' ')}
  ....
    </>
  ) : (
    'No title available'
  )}
  
  </h4>
          </div>
        </div>
  ))}
</div>

 
 
 </>
 )          
}



    
      {/* /.masonary-layout */}
    </div>
    <div class="text-center btn-box">
        <Link to={`${value === "Execution" ?"/service/execution": value === "manufacturing" ?  "/products" : value  === "Rental" ? "/service/rentals" : ""  }`}  className="btn-thm">More{value === "manufacturing" ?" Product" :value ==="Rental" ? " Assets": " Projects"   }</Link>
    </div>
    {/* /.col-md-2 */}
  </section>
  {/* /.project-style-one */}
  {/* Call to Action */}
  <section className="call-to-action-style-one">
    <div  className="inner">
      <div className="thm-container text-center">
        <h3>
          We provide great <span>construction</span> services <br />
          with sustainable progress
        </h3>
        <p>
        At MIPL, we don't just build infrastructure — we engineer
        <br /> solutions that support the growth of a resilient, sustainable, and future-ready India.


        </p>
        <Link to={'/contact'} className="btn-thm">
          Contact Us
        </Link>
      </div>
    </div>
  </section>
  {/* /.call-to-action-style-one */}
  {/* Our Memebr */}
  <section className="sec-pad team-style-one">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="sec-title text-center">
           
            <h2>Our Management</h2>
            <div className="line" />
            <p>
           Our management is a skilled professional dedicated to innovation, collaboration, and delivering exceptional results in every project.
            </p>
          </div>
        </div>
      </div>
          
      <div className="row  teampp" style={{ marginBottom: "50px" }}>
  <Link  to={"/profile/1"} className="col-12 col-sm-6 col-md-4 col-lg-3">
    <div  className="our-team">
      <img
        className="img-responsive"
        src={PK}
        alt="team-1.jpg"
      />
           
      <div className="team-content">
        <h3 className="title">Mr. Pradip Kumar Agarwal</h3>
        <span className="post">Chairman | Director</span>
        <ul className="social">
          <li>
         
             <span 
            style={{
    width: "40px",
    height: "40px",
    padding: "10px",
    borderRadius: "50%",
    background: "#ffa801"
  }}

             
             >
                    <i style={
          {
            color:"white"
          }
        } className="fab fa-linkedin" />
                  </span>
          </li>
        </ul>
      </div>
    </div>
  </Link>
</div>

 
   
      
      <div className="row" >

        
        
       
        <Link to={"/profile/2"} className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
              className="img-responsive"
              src={VA}
              alt="team-1.jpg"
            />
            <div className="team-content">
              <h3 className="title">Mr. Vibhore Agarwal</h3>
              <span className="post">Managing Director 
              </span>
              <ul className="social">
               
                <li>
                  <span 
            style={{
    width: "40px",
    height: "40px",
    padding: "10px",
    borderRadius: "50%",
    background: "#ffa801"
  }}

             
             >
                    <i style={
          {
            color:"white"
          }
        } className="fab fa-linkedin" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Link>

        <Link to={"/profile/3"}  className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
              className="img-responsive"
              src={VIA}
              alt="team-2.jpg"
            />
            <div className="team-content">
              <h3 className="title">Mr. Vishal Agarwal</h3>
              <span className="post">Director</span>
              <ul className="social">
              
                <li>
                  <span 
            style={{
    width: "40px",
    height: "40px",
    padding: "10px",
    borderRadius: "50%",
    background: "#ffa801"
  }}

             
             >
                    <i style={
          {
            color:"white"
          }
        } className="fab fa-linkedin" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Link>


        <Link  to={"/profile/4"} className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
              className="img-responsive"
              src={NI}
              alt="team-2.jpg"
            />
            <div className="team-content">
              <h3 className="title">Mr. Nitin Malhan</h3>
              <span className="post">Executive Director</span>
              <ul className="social">
              
                <li>
                   <span 
            style={{
    width: "40px",
    height: "40px",
    padding: "10px",
    borderRadius: "50%",
    background: "#ffa801"
  }}

             
             >
                    <i  style={
          {
            color:"white"
          }
        } className="fab fa-linkedin" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Link>
        <Link    to={"/profile/5"} className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
            style={{
              height:"270px"
            }}
              className="img-responsive"
              src={PP}
              alt="team-3.jpg"
            />
            <div  className="team-content">
              <h3 className="title">Mr. Vinod Rajora</h3>
              <span className="post">Technical Director</span>
              <ul className="social">
                <li>
                  <span 
            style={{
    width: "40px",
    height: "40px",
    padding: "10px",
    borderRadius: "50%",
    background: "#ffa801"
  }}

             
             >
                    <i  style={
          {
            color:"white"
          }
        } className="fab fa-linkedin" />
                  </span>
                 
                </li>
              </ul>
            </div>
          </div>
        </Link>



      
       
      </div>
    </div>


  </section>





    {/* / partner Sections */}

  <section className="partner-carousel">
        <h2 className='partner-header'>Our Clients     <div className='lineee'></div></h2>
 
         
         
      <div className="carousel-container">
        <div className="carousel-track">
          {[...partners, ...partners].map((partner, index) => (
            <div className="carousel-item" key={`${partner.id}-${index}`}>
              <img 
                src={partner.image} 
                alt={`Partner ${partner.id}`} 
                className="partner-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>


 
  {/* /.testimonials-style-one */}
  {/* Divider */}
  <section className="sec-pad">
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
            marginBottom:"20px"
           }} className="col-md-6">
  <select style={
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
                    <h2>Our Abilites</h2>
                    <div className="line" />
                    <p>
                    Our abilities include vast experience, consistent quality standards, and a strong commitment to delivering every project on time.
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
  {/* Partners */}
  <section className="brand-section bgc-thm">
    <div className="thm-container">
      <div className="brand-carousel owl-theme owl-carousel">
        <div className="item">
          <i className="brands-icon-envato" />
        </div>
        <div className="item">
          <i className="brands-icon-photodune" />
        </div>
        <div className="item">
          <i className="brands-icon-graphicriver" />
        </div>
        <div className="item">
          <i className="brands-icon-themeforest" />
        </div>
        <div className="item">
          <i className="brands-icon-videohive" />
        </div>
        <div className="item">
          <i className="brands-icon-envato" />
        </div>
        <div className="item">
          <i className="brands-icon-audiojungle" />
        </div>
        <div className="item">
          <i className="brands-icon-codecanyon" />
        </div>
      </div>
    </div>
  </section>
  {/* Recent Blog */}
  <section className="sec-pad blog-style-one">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="sec-title text-center">
            
            <h2>Media</h2>
            <div className="line" />
            <p>
            Explore our media section for project highlights, company updates, and visual insights into our work and achievements.
            </p>
          </div>
        </div>
      </div>
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
                    <div className="event-img">
                      <img  src={NI} alt="Event" className="event-img" />
                                
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
                 <div  className="event-card">
                  <Link to={`/blog/3`} className="event-card-link">
                    <div className="event-img">
                      <img  src={PP} alt="Event" className="event-img" />
                                
                      <div className="overlay">
                        <div className="box">
                         
                        </div>
                      </div>
                    </div>
                    <div className="text-box">
                      <h2 className="event-title">MIPL: Engineering India's Sustainable Future..</h2>
                    </div>
                  </Link>
                </div>

              
            </div>
      
    </div>
  </section>


   <section className="sec-pad blog-style-one">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="sec-title text-center">
            
            <h2>Events</h2>
            <div className="line" />
            <p>
           Join us for an evening of networking, innovation, and exciting announcements!.
            </p>
          </div>
        </div>
      </div>
      <div className="row">


 {              

 event_page.slice(0,4).map((e)=>
      <div
  style={{
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '320px', // Control box width
    margin: '10px auto', // Center on smaller screens
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff'
  }}
  className="responsive-box col-xxs-12 col-xs-6 col-sm-6 col-md-4"
>
  <Link  to={`/events/${e.id}`}  className="single-blog-style-one">
    <div className="img-box">
      <img
        style={{
          height: '200px',
          width: '100%',
          objectFit: 'cover'
        }}
        src={e.src[0]}
        alt="Awesome Image"
      />
      <div className="overlay">
        <div className="box">
          <div className="content">
            <a href="#" className="fa fa-link" />
          </div>
        </div>
      </div>
    </div>

   <div
  className="text-box"
  style={{
    width: '100%',           // Full width within the parent
    padding: '10px 15px',    // Internal padding
    boxSizing: 'border-box', // Ensures padding doesn't break layout
    minHeight: '85px',       // Optional: enforce consistent height
    overflow: 'hidden',      // Prevents content spill
        // Optional: center text
  }}
>
  <div className="meta-info" />
  <h2 style={{ fontSize: '1.8rem', }}>


    {e.title ? (
    <>
      {e.title.split(' ').slice(0, 8).join(' ')}
  ....
    </>
  ) : (
    'No title available'
  )}
  </h2>
  
  
</div>



  </Link>
</div>


 )



 }
        
    



          {/* /.single-blog-style-one */}
     
     
      </div>
    </div>
  </section>

<Footer img={navbarimg}/>



</>




  )
}

export default Home