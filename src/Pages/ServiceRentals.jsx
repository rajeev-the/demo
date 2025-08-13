import React,{useEffect} from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import BoxofProdcuts from '../Components/BoxofProdcuts'
import {data1} from '../Data/Service'
import Header from '../Components/Header'
import Fottter from '../Components/Fottter'
import navbarimg from "/img/logo-light.png"


const ServiceRentals = () => {
   useEffect(() => {
           document.title = "Service Rental"; // Meta title in tab
         }, []);
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
          <h2 className="pull-left">Rental For Tunneling Equipment</h2>
          <ul className="breadcrumb pull-right">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Rentals</span>
            </li>
          </ul>
          {/* /.breadcrumb */}
        </div>
      </div>
    </section>
    {/* /.inner-banner */}
    

  
            
            <section className="sec-pad what-we-do gray-bg">
               
                 <div className="thm-container">
                 <h1 className='text-start'>Our Equipments</h1>
                   <div className="row">
                       
                      {
                       data1.map((item) => (
           
                         
                      <div  key={item.id} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
             <div style={{
               cursor:'default'
             }} className="single-what-we-do">
               <div className="img-box">
                 <img style={{
                  height:"200px",
                  
                 }} src={item?.src} alt="Awesome Image" />
                 
                  <h4  style={{
               minHeight: '1.5em', // Ensures consistent height
               display: 'block',
               overflow: 'hidden',
               textOverflow: 'ellipsis',
               
              
             }} className='demo'> 
                           
              {item.title ? (
               <>
                 {item?.title}
            
               </>
             ) : (
               'No title available'
             )}
             
             </h4>
              
               </div>
              
             </div>
           </div>
           
                       ))
                      }
                       
                   </div>
           
                     
                     
                       
                
                   
                 </div>
               </section>



            
       


<div class="maintt">
  <Link to={"/contact"} class="enquiry-btn" >Equipments Enquiry</Link>
</div>


    
    {/* /.testimonials-style-one */}
   
  <Fottter  img={navbarimg} />
  </>
  

  )
}

export default ServiceRentals