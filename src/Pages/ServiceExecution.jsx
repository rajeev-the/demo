import React from 'react'

import Navbar from '../Components/Navbar'

import { data } from '../Data/Service'


import Header from '../Components/Header'
import Fottter from '../Components/Fottter'
import navbarimg from "/img/logo-light.png"
import { Link } from 'react-router-dom'

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
          <h2 className="pull-left">Execution of tunnel and undergraoud solution</h2>
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
      <h1 className='text-start'>Ongoing Projects</h1>
        <div className="row">
            
           {
            data.map((item) => (

              
          item.project_status =="OnGoing"   ?     <Link to={`/service/${item.id}`} key={item.id} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
  <div className="single-what-we-do">
    <div className="img-box">
      <img style={{
        height: "200px",
        objectFit: "cover",
        width: "100%",
        borderRadius: "10px"
      }} src={item?.img[0]} alt="Awesome Image" />
      
       <h4  style={{
    minHeight: '3.5em', // Ensures consistent height
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
   
  }} className='demo'> 
                
   {item.title ? (
    <>
      {item.title.split(' ').slice(0, 11).join(' ')}
  ....
    </>
  ) : (
    'No title available'
  )}
  
  </h4>
   
    </div>
   
  </div>
</Link>:""

            ))
           }
            
        </div>

          <h1 className='text-start'>Completed Projects</h1>
        <div className="row">
            
           {
            data.map((item) => (

              
          item.project_status =="Completed"   ?     <Link to={`/service/${item.id}`} key={item.id} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
  <div className="single-what-we-do">
    <div className="img-box">
      <img style={{
        height: "200px",
        objectFit: "cover",
        width: "100%",
        borderRadius: "10px"
      }} src={item.img[0]} alt="Awesome Image" />
      
       <h4  style={{
    minHeight: '3.5em', // Ensures consistent height
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
   
  }} className='demo'> 
                
   {item.title ? (
    <>
      {item.title.split(' ').slice(0, 11).join(' ')}
  ....
    </>
  ) : (
    'No title available'
  )}
  
  </h4>
   
    </div>
   
  </div>
</Link>:""

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