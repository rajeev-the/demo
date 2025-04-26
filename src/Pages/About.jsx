import React from 'react'
import Fottter from '../Components/Fottter'
import Navbar from '../Components/Navbar'

const About = () => {
  return (
<>
  <div className="">
    <div className="spinner" />
  </div>{" "}
  {/* /.preloader */}
  <header className="header header-home-one inner-page-header">
    <div className="header-top">
      <div className="thm-container clearfix">
        <div className="row">
          <div className="col-lg-7">
            <div className="left-contact-info text-left tac-smd">
              <p>
                <i className="hialeah-icon-phone-call" />
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
            </div>
          </div>
          <div className="col-lg-5">
            <div className="right-contact-info text-right tac-smd">
              <p className="social">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-linkedin-in" />
                <a href="#" className="fab fa-google-plus-g" />
                <a href="#" className="fab fa-youtube" />
              </p>
              <p className="language-picker">
                <i className="fas fa-globe" />
                <span className="select-box">
                  <select className="selectpicker" name="languages">
                    <option value="">EN</option>
                    <option value={1}>BN</option>
                    <option value={2}>DU</option>
                  </select>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Navbar/>
  </header>
  {/* /.header */}
  <section className="inner-banner">
    <div className="inner">
      <div className="thm-container clearfix">
        <h2 className="pull-left">About Us</h2>
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
              ocean time vampire for best practices. Strategic fit knowledge is
              power game plan,
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
  <section className="call-to-action-style-one">
    <div className="inner">
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
  <section className="sec-pad what-we-do-style-two gray-bg">
    <div className="thm-container">
      <div className="row">
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-4">
          <div className="single-what-we-do-style-two hvr-float-shadow">
            <div className="img-box">
              <img src="img/what-we-do-1-1.jpg" alt="Awesome Image" />
              <div className="content-box  hvr-sweep-to-bottom">
                <div className="inner-box">
                  <div className="top-content">
                    <div className="icon-box">
                      <div className="inner">
                        <i className="hialeah-icon-chainsaw" />
                      </div>
                    </div>
                    <div className="text-box">
                      <h3>Metal Roofing</h3>
                    </div>
                  </div>
                  <div className="main-content">
                    <p>
                      Where the metal hits the meat i am dead inside clear blue
                      water yet i don't want to drain the whole swamp, i just
                      want to
                    </p>
                    <a href="#" className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-4">
          <div className="single-what-we-do-style-two hvr-float-shadow">
            <div className="img-box">
              <img src="img/what-we-do-1-2.jpg" alt="Awesome Image" />
              <div className="content-box  hvr-sweep-to-bottom">
                <div className="inner-box">
                  <div className="top-content">
                    <div className="icon-box">
                      <div className="inner">
                        <i className="hialeah-icon-paint-roller" />
                      </div>
                    </div>
                    <div className="text-box">
                      <h3>Painting Services</h3>
                    </div>
                  </div>
                  <div className="main-content">
                    <p>
                      Where the metal hits the meat i am dead inside clear blue
                      water yet i don't want to drain the whole swamp, i just
                      want to
                    </p>
                    <a href="#" className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-4">
          <div className="single-what-we-do-style-two hvr-float-shadow">
            <div className="img-box">
              <img src="img/what-we-do-1-3.jpg" alt="Awesome Image" />
              <div className="content-box  hvr-sweep-to-bottom">
                <div className="inner-box">
                  <div className="top-content">
                    <div className="icon-box">
                      <div className="inner">
                        <i className="hialeah-icon-planer" />
                      </div>
                    </div>
                    <div className="text-box">
                      <h3>Home Expansion</h3>
                    </div>
                  </div>
                  <div className="main-content">
                    <p>
                      Where the metal hits the meat i am dead inside clear blue
                      water yet i don't want to drain the whole swamp, i just
                      want to
                    </p>
                    <a href="#" className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-4">
          <div className="single-what-we-do-style-two hvr-float-shadow">
            <div className="img-box">
              <img src="img/what-we-do-1-4.jpg" alt="Awesome Image" />
              <div className="content-box  hvr-sweep-to-bottom">
                <div className="inner-box">
                  <div className="top-content">
                    <div className="icon-box">
                      <div className="inner">
                        <i className="hialeah-icon-chainsaw" />
                      </div>
                    </div>
                    <div className="text-box">
                      <h3>Interior Design</h3>
                    </div>
                  </div>
                  <div className="main-content">
                    <p>
                      Where the metal hits the meat i am dead inside clear blue
                      water yet i don't want to drain the whole swamp, i just
                      want to
                    </p>
                    <a href="#" className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-4">
          <div className="single-what-we-do-style-two hvr-float-shadow">
            <div className="img-box">
              <img src="img/what-we-do-1-5.jpg" alt="Awesome Image" />
              <div className="content-box  hvr-sweep-to-bottom">
                <div className="inner-box">
                  <div className="top-content">
                    <div className="icon-box">
                      <div className="inner">
                        <i className="hialeah-icon-paint-roller" />
                      </div>
                    </div>
                    <div className="text-box">
                      <h3>Plumbing Services</h3>
                    </div>
                  </div>
                  <div className="main-content">
                    <p>
                      Where the metal hits the meat i am dead inside clear blue
                      water yet i don't want to drain the whole swamp, i just
                      want to
                    </p>
                    <a href="#" className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-6 col-lg-4">
          <div className="single-what-we-do-style-two hvr-float-shadow">
            <div className="img-box">
              <img src="img/what-we-do-1-6.jpg" alt="Awesome Image" />
              <div className="content-box  hvr-sweep-to-bottom">
                <div className="inner-box">
                  <div className="top-content">
                    <div className="icon-box">
                      <div className="inner">
                        <i className="hialeah-icon-planer" />
                      </div>
                    </div>
                    <div className="text-box">
                      <h3>Tower Construction</h3>
                    </div>
                  </div>
                  <div className="main-content">
                    <p>
                      Where the metal hits the meat i am dead inside clear blue
                      water yet i don't want to drain the whole swamp, i just
                      want to
                    </p>
                    <a href="#" className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
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
  {/* Our Team */}
  <section className="sec-pad team-style-one">
    <div className="thm-container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="sec-title text-center">
            <h1>Experts</h1>
            <h2>Our Team</h2>
            <div className="line" />
            <p>
              Submit an Office Ipsum Cross functi onal teams enable out of{" "}
              <br /> the box brainstorming good optics globalize.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="team-box">
            <img src="img/team-1.jpg" />
            <div className="team-box-content">
              <h3 className="title">Williamson</h3>
              <span className="post">Construction Manager</span>
              <a
                className="icon"
                href="mailto:someone@example.com"
                title="Mail Me"
              >
                <i className="fa fa-paper-plane" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="team-box">
            <img src="img/team-2.jpg" />
            <div className="team-box-content">
              <h3 className="title">Kristiana</h3>
              <span className="post">Operational Manager</span>
              <a
                className="icon"
                href="mailto:someone@example.com"
                title="Mail Me"
              >
                <i className="fa fa-paper-plane" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="team-box">
            <img src="img/team-3.jpg" />
            <div className="team-box-content">
              <h3 className="title">Steve Thomas</h3>
              <span className="post">Lead Engineer</span>
              <a
                className="icon"
                href="mailto:someone@example.com"
                title="Mail Me"
              >
                <i className="fa fa-paper-plane" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="brand-section">
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

export default About