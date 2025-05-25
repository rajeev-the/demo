import React, { useEffect ,useState } from 'react'

import Navbar from '../Components/Navbar'
import { Link, useParams } from 'react-router-dom'
import Header from '../Components/Header'
import navbarimg from "/img/logo-light.png"
import {data1} from '../Data/Service'

const Service_Details_Sale = () => {
  
   const { id } = useParams()
const [product, setProduct] = useState(null);



useEffect(() => { 
 
  const data = data1.find((item)=> item.id === parseInt(id));
  if (data) {
    setProduct(data);
  } else {
    console.error('Product not found');
  }


}, [id])
  return (
    <>
    <div className='active-preloader-ovh'>
  <div className="">
    <div className="" />
  </div>{" "}
  {/* /.preloader */}
  <header className="header header-home-one inner-page-header">
   <Header/>
    <Navbar/>
  </header>
  {/* /.header */}
  <section    style={{
        backgroundImage: "url('/img/banner-1-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    
        
     
      }} className="inner-banner">
    <div className="inner">
      <div className="thm-container clearfix">
        <h2 className="pull-left">{product?.title}</h2>
      
        {/* /.breadcrumb */}
      </div>
    </div>
  </section>
  {/* /.inner-banner */}
  <section className="blog-details-page sec-pad">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-9">
          <div className="single-blog-content">
            <div className="single-blog-style-one mb30">
              <div className="img-box mb20">
                <img src={product?.img} alt="Awesome Image" />
              </div>
              <div className="text-box">
                
                <p>
               {
                product?.content
               }
                </p>
              </div>
              
            </div>

            <div className="blog-details-page ">
            <div className="thm-container">
            <section class="row">
  <div class="card shadow-lg border-0">
    <div class="card-body p-4">
      <h2 style={
        {
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#ffa801",
            
        }
      } class="card-title text-primary mb-3">Need To Sell Off Equipment?</h2>
      <p class="card-text fs-5 text-secondary">
        If you're looking to sell used equipment, <strong>MIPL</strong> has the ability to respond promptly to enquiries anywhere in the world and achieve the best possible outcomes with affordable solutions.
      </p>
      <p class="card-text fs-5 text-secondary">
        Contact our Sales division today by telephone or, if you prefer, by completing the contact form. If you can't find what you're looking for or have equipment and machinery to sell, call us today.
      </p>
    </div>
  </div>
</section>

            </div>
              
              </div>

            

            
       
            {/* /.single-blog-style-one */}
            <div className="row mt60">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-why-choose-us">
                  <div className="icon-box">
                    <div className="inner">
                      <i className="glyphicon glyphicon-asterisk" />
                    </div>
                  </div>
                  <div className="text-box">
                    <h3>Quality</h3>
                    <p>

                    tier equipment and service you can rely on—every project, every time.
              
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-why-choose-us">
                  <div className="icon-box">
                    <div className="inner">
                      <i className="glyphicon glyphicon-ok-sign" />
                    </div>
                  </div>
                  <div className="text-box">
                    <h3>Super Safety</h3>
                    <p>
                    Built-in safety features and strict protocols for total peace of mind.
                
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-why-choose-us">
                  <div className="icon-box">
                    <div className="inner">
                      <i className="glyphicon glyphicon-briefcase" />
                    </div>
                  </div>
                  <div className="text-box">
                    <h3>In Time Delivery</h3>
                    <p>
                    Punctual delivery, every time—because your schedule matters.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-why-choose-us">
                  <div className="icon-box">
                    <div className="inner">
                      <i className="glyphicon glyphicon-headphones" />
                    </div>
                  </div>
                  <div className="text-box">
                    <h3>24/7 Support</h3>
                    <p>
                    Round-the-clock expert assistance, whenever and wherever you need it.
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
          
           
          </div>
          {/* /.single-blog-content */}
        </div>
        {/* /.col-md-9 */}
        <div className="col-md-3">
          <div className="sidebar">
            
         
            <div className="single-sidebar">
              <div className="title-box">
                <h3>Rental Project</h3>
                <div className="line" />
              </div>
             <ul className="links-list">
  {data1.map(item => (
    <li key={item.id}>
      <Link to={`/rental/${item.id}`}>{item.title.trim()}</Link>
    </li>
  ))}
</ul>

            </div>
            {/* /.single-sidebar */}
          </div>
          {/* /.sidebar */}
        </div>
      </div>
    </div>
  </section>
  {/* /.blog-details-page */}
  <footer className="site-footer">
    <div className="inner">
      <div className="thm-container">
        <div className="row">
          <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
            <div className="footer-widget about-widget">
              <a href="index.html">
                <img  style={
                    {
                        width:"150px"
                     }
                } src="img/logo-light.png" alt="Awesome Image" />
              </a>
              <p>
                Put a record on and see who dances old boys club. Forcing
                function quick win, but value-added, blue sky thinking thought
                shower, nor time vampire. Product management breakout fastworks.
              </p>
              <div className="social">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-linkedin-in" />
                <a href="#" className="fab fa-google-plus-g" />
                <a href="#" className="fab fa-youtube" />
              </div>
            </div>
          </div>
          <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-2">
            <div className="footer-widget services-widget">
              <div className="title">
                <h3>Our Services</h3>
              </div>
              <ul className="services-list">
                <li>
                  <a href="interior-design.html">
                    <i className="fa fa-angle-right" />
                    Interior Design
                  </a>
                </li>
                <li>
                  <a href="metal-roofing.html">
                    <i className="fa fa-angle-right" />
                    Metal Roofing
                  </a>
                </li>
                <li>
                  <a href="home-expansion.html">
                    <i className="fa fa-angle-right" />
                    Home Expansion
                  </a>
                </li>
                <li>
                  <a href="tower-construction.html">
                    <i className="fa fa-angle-right" />
                    Tower Construction
                  </a>
                </li>
                <li>
                  <a href="tower-construction.html">
                    <i className="fa fa-angle-right" />
                    Painting Services
                  </a>
                </li>
                <li>
                  <a href="tower-construction.html">
                    <i className="fa fa-angle-right" />
                    Plumbing Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
            <div className="footer-widget contact-widget">
              <div className="title">
                <h3>Contact Us</h3>
              </div>
              <p>
                <i className="fas fa-phone" />
                +99-55-66-88-526
              </p>
              <p>
                <i className="far fa-envelope" />
                exampl@support.com
              </p>
              <p>
                <i className="far fa-clock" />
                Mon - Fri: 9:00 - 21:00
              </p>
              <p>
                <i className="fa fa-map-marker" /> Ramkrishnapur, Khemirdiar,
                Bheramara, Kushtia 7040
              </p>
            </div>
          </div>
          <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
            <div className="footer-widget email-widget">
              <div className="title">
                <h3>Drop Message</h3>
              </div>
              <form action="#" className="footer-mail">
                <input type="text" placeholder="Email Address" />
                <textarea placeholder="Write Message" defaultValue={""} />
                <button type="submit" className="btn-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="footer-copyright">
    <div className="thm-container clearfix">
      <div className="left-copy pull-left">
        <p>
          © 2019 All Rights Reserved by{" "}
          <a className="text-thm" href="#">
            Aarian
          </a>
        </p>
      </div>
      <div className="right-social pull-right">
        <a href="#" className="fab fa-facebook-f" />
        <a href="#" className="fab fa-twitter" />
        <a href="#" className="fab fa-linkedin-in" />
        <a href="#" className="fab fa-google-plus-g" />
        <a href="#" className="fab fa-youtube" />
      </div>
    </div>
  </div>
  <div className="scroll-to-top scroll-to-target" data-target="html">
    <i className="fa fa-angle-up" />
  </div>
  </div>
</>

  )
}

export default Service_Details_Sale