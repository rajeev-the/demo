import React,{useState ,useEffect} from 'react'
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';



const Home = () => {


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
                  Colobrating &amp; Renovation
                </h2>
                <p data-animation="animated fadeInDown">
                  Submit an Office Ipsum Cross functional teams enable out of
                  the box brainstorming good optics globalize, for where do we
                  stand on the latest client ask pipeline circle back
                  deliverables.
                </p>
                <a
                  href="#"
                  className="banner-btn"
                  data-animation="animated fadeInDown"
                >
                  Our Works
                </a>
                <a
                  href="#"
                  className="banner-btn borderd"
                  data-animation="animated fadeInDown"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="item slide-2"
        style={{
          backgroundImage: "url(img/banner-1-1.jpg)",
          backgroundPosition: "center center"
        }}
      >
        <div className="carousel-caption">
          <div className="thm-container">
            <div className="box valign-middle">
              <div className="content text-left">
                <h2 data-animation="animated fadeInUp">
                  Construction &amp; Innovation
                </h2>
                <p data-animation="animated fadeInDown">
                  Submit an Office Ipsum Cross functional teams enable out of
                  the box brainstorming good optics globalize, for where do we
                  stand on the latest client ask pipeline circle back
                  deliverables. Quick-win.
                </p>
                <a
                  href="#"
                  className="banner-btn"
                  data-animation="animated fadeInDown"
                >
                  Our Works
                </a>
                <a
                  href="#"
                  className="banner-btn borderd"
                  data-animation="animated fadeInDown"
                >
                  Contact Us
                </a>
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
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="service_box">
            <img src="img/what-we-do-1-1.jpg" />
            <div className="service-content">
              <span className="service-icon">
                <i className="hialeah-icon-chainsaw" />
              </span>
              <h3 className="title">Metal Roofing</h3>
              <p className="description">
                But I must explain to you how all this mistaken idea of pleasure
                and praising pain was born and I will give you a complete.
              </p>
              <a href="#" className="btn-thm">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="service_box">
            <img src="img/what-we-do-1-2.jpg" />
            <div className="service-content">
              <span className="service-icon">
                <i className="hialeah-icon-paint-roller" />
              </span>
              <h3 className="title">Painting Services</h3>
              <p className="description">
                But I must explain to you how all this mistaken idea of pleasure
                and praising pain was born and I will give you a complete.
              </p>
              <a href="#" className="btn-thm">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="service_box">
            <img src="img/what-we-do-1-3.jpg" />
            <div className="service-content">
              <span className="service-icon">
                <i className="hialeah-icon-planer" />
              </span>
              <h3 className="title">Home Expansion</h3>
              <p className="description">
                But I must explain to you how all this mistaken idea of pleasure
                and praising pain was born and I will give you a complete.
              </p>
              <a href="#" className="btn-thm">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About Service */}
  <section className="sec-pad about-us-one video-box-wrapper">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-7">
          <div className="about-content">
            <h4>#No.1 in Region</h4>
            <h3>
              Welcome To <span className="text-thm">Aarian</span>
            </h3>
            <p className="highlight text-thm">
              Guerrilla marketing screw the pooch meeting assassin.
            </p>
            <p>
              Product management breakout fastworks. We need a padigm shift i'll
              book a meeting so we can solution this before the sprint is over,
              we need to socialize the comms with the wider stakeholder commu
              nity so it up the flagpole can we align. We don't want to boil the
              ocean time vampire for best practices.
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
            <div className="img-box">
              <img src="img/video-box-img.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <a
                      href="https://www.youtube.com/watch?v=RnfuvUTbebo"
                      className="video-popup"
                    >
                      <span className="inner-btn hvr-pulse">
                        <i className="fa fa-play" />
                      </span>
                    </a>
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
              Submit an Office Ipsum Cross functi onal teams enable out of{" "}
              <br /> the box brainstorming good optics globalize.
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
                Are we in agreeance cross functi <br /> onal teams enable out{" "}
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
                Are we in agreeance cross functi <br /> onal teams enable out{" "}
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
                Are we in agreeance cross functi <br /> onal teams enable out{" "}
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
                Are we in agreeance cross functi <br /> onal teams enable out{" "}
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
                Are we in agreeance cross functi <br /> onal teams enable out{" "}
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
              Submit an Office Ipsum Cross functi onal teams enable out of the
              box brainstorming good optics globalize.
            </p>
          </div>
        </div>
      </div>
      <div className="gallery-filter">
        <ul className="post-filter masonary text-center">
          <li className="filter active" data-filter=".masonary-item">
            <span>All</span>
          </li>
          <li className="filter " data-filter=".metal">
            <span>Metal Roofing</span>
          </li>
          <li className="filter " data-filter=".painting">
            <span>Painting</span>
          </li>
          <li className="filter " data-filter=".interior">
            <span>Interiro</span>
          </li>
          <li className="filter " data-filter=".plumbing">
            <span>Plumbing</span>
          </li>
        </ul>
        {/* /.post-filter */}
      </div>
    </div>
    <div className="thm-container">
      <div
        className="row masonary-layout filter-layout"
        data-filter-class="filter"
      >
        <div className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item metal">
          <div className="single-project-style-two">
            <div className="img-box">
              <img src="img/project-1-1.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <a
                      href="img/project-1-1.jpg"
                      className="img-popup read-more fas fa-link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item painting">
          <div className="single-project-style-two">
            <div className="img-box">
              <img src="img/project-1-2.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <a
                      href="img/project-1-2.jpg"
                      className="img-popup read-more fas fa-link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item interior">
          <div className="single-project-style-two">
            <div className="img-box">
              <img src="img/project-1-3.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <a
                      href="img/project-1-3.jpg"
                      className="img-popup read-more fas fa-link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item plumbing">
          <div className="single-project-style-two">
            <div className="img-box">
              <img src="img/project-1-4.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <a
                      href="img/project-1-4.jpg"
                      className="img-popup read-more fas fa-link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item interior">
          <div className="single-project-style-two">
            <div className="img-box">
              <img src="img/project-1-5.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <a
                      href="img/project-1-5.jpg"
                      className="img-popup read-more fas fa-link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item painting">
          <div className="single-project-style-two">
            <div className="img-box">
              <img src="img/project-1-6.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <a
                      href="img/project-1-6.jpg"
                      className="img-popup read-more fas fa-link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item plumbing interior">
          <div className="single-project-style-two">
            <div className="img-box">
              <img src="img/project-1-7.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <a
                      href="img/project-1-7.jpg"
                      className="img-popup read-more fas fa-link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item interior">
          <div className="single-project-style-two">
            <div className="img-box">
              <img src="img/project-1-8.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <a
                      href="img/project-1-8.jpg"
                      className="img-popup read-more fas fa-link"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.masonary-layout */}
    </div>
    <div className="text-center btn-box">
      <a href="#" className="btn-thm">
        More Projects
      </a>
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
          Who's for the ask for this request? cloud so nobody's fault it could
          have been managed <br /> better drink the Kool-aid pipeline. Please
          use instead of solution ideas!
        </p>
        <a href="#" className="btn-thm">
          Contact Us
        </a>
      </div>
    </div>
  </section>
  {/* /.call-to-action-style-one */}
  {/* Our Team */}
  <section className="sec-pad team-style-one">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="sec-title text-center">
            <h1>Experts</h1>
            <h2>Our Team</h2>
            <div className="line" />
            <p>
              Submit an Office Ipsum Cross functi onal teams enable out of the
              box brainstorming good optics globalize.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
              className="img-responsive"
              src="img/team-1.jpg"
              alt="team-1.jpg"
            />
            <div className="team-content">
              <h3 className="title">Williamson</h3>
              <span className="post">Our Manager</span>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
              className="img-responsive"
              src="img/team-2.jpg"
              alt="team-2.jpg"
            />
            <div className="team-content">
              <h3 className="title">kristina</h3>
              <span className="post">Our Engineer</span>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
              className="img-responsive"
              src="img/team-3.jpg"
              alt="team-3.jpg"
            />
            <div className="team-content">
              <h3 className="title">Steve Thomas</h3>
              <span className="post">Housing Supportive</span>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
              className="img-responsive"
              src="img/team-4.jpg"
              alt="team-4.jpg"
            />
            <div className="team-content">
              <h3 className="title">Miranda joy</h3>
              <span className="post">Our Manager</span>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section className="sec-pad bgc-f1">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="sec-title title-box text-center">
            <h2>Clients Feedbacks</h2>
            <div className="line" />
            <p>
              Submit an Office Ipsum Cross functi onal teams enable out of the
              box brainstorming good optics globalize.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="testimonials-carousel">
            <div className="item">
              <div className="testimonial_five">
                <div className="t_thumb_five">
                  <img
                    className="img-responsive img-thumbnail pull-left"
                    src="img/testi-1-1.jpg"
                    alt="testi-1-1.jpg"
                  />
                </div>
                <div className="details_five">
                  <p>
                    {" "}
                    <span className="fa fa-quote-left text-thm" /> It was
                    popularised in the 1960s with the of Letraset sheets
                    containing Lorem Ipsum passages, like Letraset sheets Lorem
                    Ipsum. <span className="fa fa-quote-right text-thm" />{" "}
                  </p>
                  <h3>
                    Benjamin <small>- CEO, Ben Tech</small>
                  </h3>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_five">
                <div className="t_thumb_five">
                  <img
                    className="img-responsive img-thumbnail pull-left"
                    src="img/testi-1-2.jpg"
                    alt="testi-1-2.jpg"
                  />
                </div>
                <div className="details_five">
                  <p>
                    {" "}
                    <span className="fa fa-quote-left text-thm" /> It was
                    popularised in the 1960s with the of Letraset sheets
                    containing Lorem Ipsum passages, like Letraset sheets Lorem
                    Ipsum. <span className="fa fa-quote-right text-thm" />{" "}
                  </p>
                  <h3>
                    Benjamin <small>- CEO, Ben Tech</small>
                  </h3>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_five">
                <div className="t_thumb_five">
                  <img
                    className="img-responsive img-thumbnail pull-left"
                    src="img/testi-1-1.jpg"
                    alt="testi-1-1.jpg"
                  />
                </div>
                <div className="details_five">
                  <p>
                    {" "}
                    <span className="fa fa-quote-left text-thm" /> It was
                    popularised in the 1960s with the of Letraset sheets
                    containing Lorem Ipsum passages, like Letraset sheets Lorem
                    Ipsum. <span className="fa fa-quote-right text-thm" />{" "}
                  </p>
                  <h3>
                    Benjamin <small>- CEO, Ben Tech</small>
                  </h3>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_five">
                <div className="t_thumb_five">
                  <img
                    className="img-responsive img-thumbnail pull-left"
                    src="img/testi-1-2.jpg"
                    alt="testi-1-2.jpg"
                  />
                </div>
                <div className="details_five">
                  <p>
                    {" "}
                    <span className="fa fa-quote-left text-thm" /> It was
                    popularised in the 1960s with the of Letraset sheets
                    containing Lorem Ipsum passages, like Letraset sheets Lorem
                    Ipsum. <span className="fa fa-quote-right text-thm" />{" "}
                  </p>
                  <h3>
                    Benjamin <small>- CEO, Ben Tech</small>
                  </h3>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_five">
                <div className="t_thumb_five">
                  <img
                    className="img-responsive img-thumbnail pull-left"
                    src="img/testi-1-1.jpg"
                    alt="testi-1-1.jpg"
                  />
                </div>
                <div className="details_five">
                  <p>
                    {" "}
                    <span className="fa fa-quote-left text-thm" /> It was
                    popularised in the 1960s with the of Letraset sheets
                    containing Lorem Ipsum passages, like Letraset sheets Lorem
                    Ipsum. <span className="fa fa-quote-right text-thm" />{" "}
                  </p>
                  <h3>
                    Benjamin <small>- CEO, Ben Tech</small>
                  </h3>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimonial_five">
                <div className="t_thumb_five">
                  <img
                    className="img-responsive img-thumbnail pull-left"
                    src="img/testi-1-2.jpg"
                    alt="testi-1-2.jpg"
                  />
                </div>
                <div className="details_five">
                  <p>
                    {" "}
                    <span className="fa fa-quote-left text-thm" /> It was
                    popularised in the 1960s with the of Letraset sheets
                    containing Lorem Ipsum passages, like Letraset sheets Lorem
                    Ipsum. <span className="fa fa-quote-right text-thm" />{" "}
                  </p>
                  <h3>
                    Benjamin <small>- CEO, Ben Tech</small>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    Bake it in deploy powerpoint Bunny, nor cloud strategy great
                    plan! let me diarize this, and we can synchronise ourselves
                    at
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
            <div className="col-md-6">
              <select className="selectpicker">
                <option value={1}>Select Topics</option>
                <option value={1}>Select Topics</option>
                <option value={1}>Select Topics</option>
                <option value={1}>Select Topics</option>
                <option value={1}>Select Topics</option>
                <option value={1}>Select Topics</option>
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
                      Bake it in deploy powerpoint Bunny, nor cloud strategy
                      great plan! let me diarize this, and we can synchronise
                      ourselves at
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
                  Anti-pattern deliverables out of scope timeframe. Usabiltiy
                  first-order optimal strategies close the loop. High
                  performance keywords root-and-branch review, so high-level for
                  UX
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
                  Anti-pattern deliverables out of scope timeframe. Usabiltiy
                  first-order optimal strategies close the loop. High
                  performance keywords root-and-branch review, so high-level for
                  UX
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
                  Anti-pattern deliverables out of scope timeframe. Usabiltiy
                  first-order optimal strategies close the loop. High
                  performance keywords root-and-branch review, so high-level for
                  UX
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
            <h1>Blog</h1>
            <h2>Recent News</h2>
            <div className="line" />
            <p>
              Submit an Office Ipsum Cross functi onal teams enable out of the
              box brainstorming good optics globalize.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="single-blog-style-one">
            <div className="img-box">
              <img src="img/blog-1-1.jpg" alt="Awesome Image" />
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
                <a href="#">
                  <i className="far fa-user" /> by Admin
                </a>
                <a href="#">
                  <i className="far fa-calendar" /> 8 Aug 2018
                </a>
                <a href="#">
                  <i className="far fa-comments" /> 3 Comments
                </a>
              </div>
              {/* /.meta-info */}
              <a href="#">
                <h3>Feature creep action item, nor blue money</h3>
              </a>
            </div>
          </div>
          {/* /.single-blog-style-one */}
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="single-blog-style-one">
            <div className="img-box">
              <img src="img/blog-1-2.jpg" alt="Awesome Image" />
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
                <a href="#">
                  <i className="far fa-user" /> by Admin
                </a>
                <a href="#">
                  <i className="far fa-calendar" /> 8 Aug 2018
                </a>
                <a href="#">
                  <i className="far fa-comments" /> 3 Comments
                </a>
              </div>
              {/* /.meta-info */}
              <a href="#">
                <h3>Who's responsible for the ask for this request?</h3>
              </a>
            </div>
          </div>
          {/* /.single-blog-style-one */}
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="single-blog-style-one">
            <div className="img-box">
              <img src="img/blog-1-3.jpg" alt="Awesome Image" />
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
                <a href="#">
                  <i className="far fa-user" /> by Admin
                </a>
                <a href="#">
                  <i className="far fa-calendar" /> 8 Aug 2018
                </a>
                <a href="#">
                  <i className="far fa-comments" /> 3 Comments
                </a>
              </div>
              {/* /.meta-info */}
              <a href="#">
                <h3>Product management breakout fastworks. We need a</h3>
              </a>
            </div>
          </div>
          {/* /.single-blog-style-one */}
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="site-footer">
    <div className="inner">
      <div className="thm-container">
        <div className="row">
          <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
            <div className="footer-widget about-widget">
              <a href="index.html">
                <img  style={ {
                  width:"200px"
                } }  src="img/logo-light.png" alt="Awesome Image" />
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
          <div  className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
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
          <div    className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
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

export default Home