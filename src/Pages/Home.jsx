import React,{useState ,useEffect} from 'react'
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Fottter';


const Home = () => {
  
     
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This runs after 10 seconds!");
      // your logic here
    }, 10000); // 10,000 milliseconds = 10 seconds
  
    return () => clearTimeout(timer); // cleanup if the component unmounts
  }, []);

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
                  Rental &amp; Sale
                </h2>
                <p data-animation="animated fadeInDown">
                  Access a wide range of high-quality tunneling equipment for
                  rent or purchase. Get the right tools for your project, on
                  your terms.
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
                Tunneling & Parts Solutions
                </h2>
                <p data-animation="animated fadeInDown">
                From robust MIDAS machinery to efficient Robit drilling tools and
                 a comprehensive inventory of spare parts, we offer both rental and 
                 sales options to meet your specific tunneling needs.
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
            <img src="img/2f3bd3_10366ce10f8749928c926d796204e243~mv2.avif" />
            <div className="service-content">
              <span className="service-icon">
                <i className="hialeah-icon-chainsaw" />
              </span>
              <h3 className="title">Parts</h3>
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
            <img src="img/2f3bd3_8c3eb31eea294671802c4286cffca1a0~mv2.avif" />
            <div className="service-content">
              <span className="service-icon">
                <i className="hialeah-icon-paint-roller" />
              </span>
              <h3 className="title">Rental</h3>
              <p className="description">
              Robit® button bits are made from 100% recyclable steel, reducing CO₂ emissions by 80% and recycling 95% of waste.
              </p>
              <a href="#" className="btn-thm">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="service_box">
            <img src="img/2f3bd3_1f98549c99014cafb3893a6b6c8837a2~mv2.avif" />
            <div className="service-content">
              <span className="service-icon">
                <i className="hialeah-icon-planer" />
              </span>
              <h3 className="title">Execution</h3>
              <p className="description">
              
Water Expandable Bolt Expandable Friction bolt is used for temporary rock reinforcement in underground works. This rock bolt is ...
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
              Welcome To <span className="text-thm">Machino india</span>
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
              <img src="img/sddefault.jpg" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <a
                      href="https://youtu.be/CascoLElD-w?si=g6q0jiOoW52znYYJ"
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
            <span>Execution</span>
          </li>
          <li className="filter " data-filter=".metal">
            <span>Rental</span>
          </li>
          <li className="filter " data-filter=".painting">
            <span>Parts</span>
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
              <img src="img/project-1-1.png" alt="Awesome Image" />
              <div className="overlay">
                <div className="box">
                  <div className="content">
                    <a
                      href="img/project-1-1.png"
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

<Footer/>



</>




  )
}

export default Home