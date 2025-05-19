import React from 'react'

import Navbar from '../Components/Navbar'

import { data } from '../Data/Service'


import Header from '../Components/Header'
import Fottter from '../Components/Fottter'
import navbarimg from "/img/logo-light.png"

const ServiceExecution = () => {
   
 
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
    
        
     
      }} className="inner-banner">
      <div className="inner">
        <div className="thm-container clearfix">
          <h2 className="pull-left">Execution of Tunnel </h2>
          <ul className="breadcrumb pull-right">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Execution</span>
            </li>
          </ul>
          {/* /.breadcrumb */}
        </div>
      </div>
    </section>
    {/* /.inner-banner */}
    
    <section className="sec-pad what-we-do gray-bg">
    
      <div className="thm-container">
      <h1 className='text-start'>Execution Projects</h1>
        <div className="row">
            
           {
            data.map((item) => (
                <div key={item.id} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
  <div className="single-what-we-do">
    <div className="img-box">
      <img src={item.img} alt="Awesome Image" />
    </div>
    <div className="content-box p-3">
      <h5 className="project-name font-bold">Construction of Tunnel from RD 15466 to 15561 at Ghodazari Branch Canal</h5>
      <p className="text-sm"><strong>Prime Client:</strong> Vidarbha Irrigation Development Corporation Nagpur (VIDC)</p>
      <p className="text-sm"><strong>Scope of Work:</strong> Construction of Tunnel from Vertical Shaft: Length - 95 m, Cross Sectional Area - 78 Sqm & Dia - 8.05m</p>
      <p className="text-sm"><strong>Work Value:</strong> ₹34.04 Crs (70% Completed)</p>
    </div>
  </div>
</div>

            ))
           }
            
        </div>
        
      </div>
    </section>
  
    {/* /.testimonials-style-one */}
  
 <Fottter img={navbarimg}/>
    
  </>
  
  )
}

export default ServiceExecution