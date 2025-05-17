import React from 'react'

import Navbar from '../Components/Navbar'

import { data } from '../Data/Service'


import Header from '../Components/Header'
import Fottter from '../Components/Fottter'

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
                 <div  key={item.id} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
                          <div className="single-what-we-do">
                            <div className="img-box">
                              <img src={item.img} alt="Awesome Image" />
                             
                            </div>
                          
                            {/* /.content-box */}
                          </div>
                        </div>
            ))
           }
            
        </div>
        
      </div>
    </section>
  
    {/* /.testimonials-style-one */}
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
   <Fottter/>
    
  </>
  
  )
}

export default ServiceExecution