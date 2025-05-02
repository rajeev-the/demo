import React from 'react'
import Navbar from '../Components/Navbar'
import BoxofProdcuts from '../Components/BoxofProdcuts'
import {data1} from '../Data/Service'
import Header from '../Components/Header'

const Product = () => {
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
    <section className="inner-banner">
      <div className="inner">
        <div className="thm-container clearfix">
          <h2 className="pull-left">Service Page</h2>
          <ul className="breadcrumb pull-right">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Service Page</span>
            </li>
          </ul>
          {/* /.breadcrumb */}
        </div>
      </div>
    </section>
    {/* /.inner-banner */}
    
    <section className="sec-pad what-we-do gray-bg">
    
      <div className="thm-container">
      <h1 className='text-start'> MIDAS - Products</h1>
        <div className="row">
            
          {
            data1.map((item, index) => {
              return (
                <BoxofProdcuts key={index} title={item.title} img={item.img} content={item.content} link={item.link} />
              )
            })
          } 
         
            
        </div>
        <h1 className='text-start'> MIDAS - Products</h1>
        <div className="row">
            
            <BoxofProdcuts link={'/prodcuts/1'} />
            <BoxofProdcuts   link={'/prodcuts/2'}/>
            <BoxofProdcuts  link={'/prodcuts/3'} />
            
        </div>
      </div>
    </section>
    <section className="testimonials-style-one">
      <div className="inner sec-pad">
        <div className="thm-container">
          <div className="sec-title-two">
            <div className="row">
              <div className="col-md-12">
                <div className="title-box text-center">
                  <h2>Clients Feedbacks</h2>
                  <div className="line" />
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials-carousel-style-one owl-theme owl-carousel">
            <div className="item">
              <div className="single-testimonials-style-one text-center">
                <div className="star-box">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                {/* /.star-box */}
                <p>
                  colourful i was wondering if my cat could be placed over the
                  logo in the flyer theres all this spanish text on my site yet im
                  not sure, try something else mmm, exactly like that, but
                  different. Make it sexy. Is there a way we can make the page
                  feel more introductory without being cheesy could you move it a
                  tad to the left. You might wanna give
                </p>
                <div className="info-box">
                  <div className="img-box">
                    <img src="img/testi-1-1.jpg" alt="Awesome Image" />
                  </div>
                  <div className="text-box">
                    <h3>Shirly Stalford</h3>
                    <p>CEO, Ben Tech co.</p>
                  </div>
                </div>
                {/* /.info-box */}
              </div>
              {/* /.single-testimonials-style-one */}
            </div>
            <div className="item">
              <div className="single-testimonials-style-one text-center">
                <div className="star-box">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                {/* /.star-box */}
                <p>
                  colourful i was wondering if my cat could be placed over the
                  logo in the flyer theres all this spanish text on my site yet im
                  not sure, try something else mmm, exactly like that, but
                  different. Make it sexy. Is there a way we can make the page
                  feel more introductory without being cheesy could you move it a
                  tad to the left. You might wanna give
                </p>
                <div className="info-box">
                  <div className="img-box">
                    <img src="img/testi-1-2.jpg" alt="Awesome Image" />
                  </div>
                  <div className="text-box">
                    <h3>Sean Emge</h3>
                    <p>CEO, Ben Tech co.</p>
                  </div>
                </div>
                {/* /.info-box */}
              </div>
              {/* /.single-testimonials-style-one */}
            </div>
            <div className="item">
              <div className="single-testimonials-style-one text-center">
                <div className="star-box">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                {/* /.star-box */}
                <p>
                  colourful i was wondering if my cat could be placed over the
                  logo in the flyer theres all this spanish text on my site yet im
                  not sure, try something else mmm, exactly like that, but
                  different. Make it sexy. Is there a way we can make the page
                  feel more introductory without being cheesy could you move it a
                  tad to the left. You might wanna give
                </p>
                <div className="info-box">
                  <div className="img-box">
                    <img src="img/testi-1-3.jpg" alt="Awesome Image" />
                  </div>
                  <div className="text-box">
                    <h3>Dylan Ruckle</h3>
                    <p>CEO, Ben Tech co.</p>
                  </div>
                </div>
                {/* /.info-box */}
              </div>
              {/* /.single-testimonials-style-one */}
            </div>
          </div>
          {/* /.testimonials-carousel-style-one */}
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
    <footer className="site-footer">
      <div className="inner">
        <div className="thm-container">
          <div className="row">
            <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
              <div className="footer-widget about-widget">
                <a href="index.html">
                  <img src="img/logo-light.png" alt="Awesome Image" />
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
                    {" "}
                    <a href="interior-design.html">
                      <i className="fa fa-angle-right" />
                      Interior Design
                    </a>{" "}
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
                {/* /.services-list */}
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
  </>
  
  )
}

export default Product