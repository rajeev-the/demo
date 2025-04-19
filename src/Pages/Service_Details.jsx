import React from 'react'
import logo from "/img/logo-light.png"
import banner from '/img/banner-1-1.jpg'

const Service_Details = () => {
  return (
    <>
    <div className='active-preloader-ovh'>
  <div className="">
    <div className="" />
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
    <nav  className="navbar navbar-default header-navigation stricky"  
    
   >
      <div    className="thm-container clearfix">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed "
            data-toggle="collapse"
            data-target=".main-navigation"
            aria-expanded="false"
          >
            <i className="fa fa-bars" />
          </button>
          <a className="navbar-brand" >
            <img style={{
                width:"120px"
            }}  src={logo} alt="Awesome Image" />
          </a>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div
          className="collapse navbar-collapse main-navigation mainmenu "
          id="main-nav-bar"
        >
          <ul className="nav navbar-nav navigation-box">
            <li className="current">
              <a href="index.html">Home</a>
              <ul className="sub-menu">
                <li>
                  <a href="index.html">Home Page One</a>
                </li>
                <li>
                  <a href="index2.html">Home Page Two</a>
                </li>
                <li>
                  <a href="index3.html">Home Page Three</a>
                </li>
                <li>
                  <a href="index4.html">Home Page Four</a>
                </li>
                <li>
                  <a href="index-boxed.html">Home Boxed</a>
                </li>
                <li>
                  <a href="index-dark.html">Home Dark</a>
                </li>
              </ul>
              {/* /.sub-menu */}
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="services.html">Services</a>
              <ul className="sub-menu">
                <li>
                  <a href="services.html">Services One</a>
                </li>
                <li>
                  <a href="services-2.html">Services Two</a>
                </li>
                <li>
                  <a href="service-details.html">Services Details</a>
                </li>
              </ul>
              {/* /.sub-menu */}
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="sub-menu">
                <li>
                  <a href="error.html">Error 404</a>
                </li>
                <li>
                  <a href="faq.html">Faq</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li>
                  <a href="projects-details.html">Projects Details</a>
                </li>
                <li>
                  <a href="uconstruction.html">Under Construction</a>
                </li>
              </ul>
              {/* /.sub-menu */}
            </li>
            <li>
              <a href="blog-grid.html">Blog</a>{" "}
              <ul className="sub-menu">
                <li>
                  <a href="blog-grid.html">Blog Grid</a>
                </li>
                <li>
                  <a href="blog-single-sidebar-less.html">
                    Blog Single Sidebar Less
                  </a>
                </li>
                <li>
                  <a href="blog-single-left-sidebar.html">
                    Blog Single Left Sidebar
                  </a>
                </li>
                <li>
                  <a href="blog-single-right-sidebar.html">
                    Blog Single Right Sidebar
                  </a>
                </li>
                <li>
                  <a href="blog-classic-sidebar-less.html">
                    Blog Classic Sidebar Less
                  </a>
                </li>
                <li>
                  <a href="blog-classic-left-sidebar.html">
                    Blog Classic Left Sidebar
                  </a>
                </li>
                <li>
                  <a href="blog-classic-right-sidebar.html">
                    Blog Classic Right Sidebar
                  </a>
                </li>
              </ul>
              {/* /.sub-menu */}
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
        {/* /.navbar-collapse */}
        <div className="right-side-box">
          <a href="#" className="rqa-btn">
            Get Quote
          </a>
        </div>
        {/* /.right-side-box */}
      </div>
    </nav>
  </header>
  {/* /.header */}
  <section    style={{
        backgroundImage: "url('/img/banner-1-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        zIndex: 0, // 👈 Lower value
        
     
      }} className="inner-banner">
    <div className="inner">
      <div className="thm-container clearfix">
        <h2 className="pull-left">Service Details</h2>
        <ul className="breadcrumb pull-right">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <span>Service Details</span>
          </li>
        </ul>
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
              <div className="img-box mb30">
                <img src="img/blog-details-1-1.jpg" alt="Awesome Image" />
              </div>
              <div className="text-box">
                <h3>
                  we can later put the monitors on. Globalize granularity
                  closing these latest prospects
                </h3>
                <p>
                  Viral engagement we need to make the new version clean and
                  sexy core competencies, nor feature creep. Out of scope
                  on-brand but completeley fresh this is meaningless for
                  thinking outside the box, so high performance keywords. Are
                  there any leftovers in the kitchen? digital literacy
                  market-facing, drop-dead date. Obviously drink the Kool-aid
                  level the playing field. Run it up the flag pole. Timeframe
                  parallel path yet we need to touch base off-line before we{" "}
                  <br /> <br /> fire the new ux experience. Viral engagement
                  nail jelly to the hothouse wall, so strategic high-level
                  30,000 ft view yet we need to leverage our synergies. Not a
                  hill to die on quick win I just wanted to give you a heads-up
                  pixel pushing, so we don't want to boil the ocean or open door
                  policy. I just wanted to give you a heads-up take five, punch
                  the tree, and come back in here with a clear head. Productize
                  we don't want to boil the ocean we've got to manage that low
                  hanging fruit. Loop back net net and not a hill to die on. We
                  need a paradigm shift win-win-win yet lean into that problem i
                  am dead inside.
                </p>
              </div>
            </div>
            {/* /.single-blog-style-one */}
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-why-choose-us">
                  <div className="icon-box">
                    <div className="inner">
                      <i className="glyphicon glyphicon-asterisk" />
                    </div>
                  </div>
                  <div className="text-box">
                    <h3>Creative Ideas</h3>
                    <p>
                      Are we in agreeance cross functi <br /> onal teams enable
                      out{" "}
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
                      Are we in agreeance cross functi <br /> onal teams enable
                      out{" "}
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
                      Are we in agreeance cross functi <br /> onal teams enable
                      out{" "}
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
                      Are we in agreeance cross functi <br /> onal teams enable
                      out{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <blockquote className="mb30">
              <p>
                Viral engagement we need to make the new version clean and sexy
                core competencies, nor feature creep. Out of scope on-brand but
                completeley fresh this is meaningless for thinking outside the
                box, so high performance keywords.
              </p>
              <footer>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
            <div className="row mb30">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-why-choose-us">
                  <h2>Why chose us?</h2>
                  <p>
                    The Industrial Revolution, which occurred from the
                    eighteenth to nineteenth hundreds of years, was a period
                    amid which prevalently agrarian, provincial social orders in
                    Europe and America wound up modern.
                  </p>
                  <ul>
                    <li>Expert &amp; Active Worker</li>
                    <li>Modern Technology</li>
                    <li>Suggesting Ingredients</li>
                    <li>Beautiful Management</li>
                    <li>Our Company Is Worldwide</li>
                    <li>Measuring Performance</li>
                    <li>Support and Analysis</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-why-choose-us">
                  <img
                    className="img-responsive"
                    src="img/project-1-1.jpg"
                    alt="project-1-1.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="hia_according">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How Can I Contact For Support?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="panel-body">
                      <p>
                        Go to Our Profile Page Here.., Mail Us. As Soon As
                        Possible In Our Supported Schdule We will reply you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Where should I incorporate my business?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="panel-body">
                      <p>
                        A considerable lot of our XLX enlisted workers are
                        mentioned as principle favored Guilds were away for
                        relationship of craftsmans and Merchant that supervised
                        the primary generation and circulation of a specific
                        great has been over stream..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What is certification?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div className="panel-body">
                      <p>
                        Many of our XLX registered staff are requested as main
                        most well-liked Guilds were gone for associations of
                        artisans and businessperson that oversaw the most
                        production and distribution of a particular smart has
                        been over flow.
                      </p>
                    </div>
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
              <form action="#" className="search-form">
                <input
                  type="text"
                  name="search"
                  placeholder="Enter Your Text..."
                />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
              {/* /.search-form */}
            </div>
            {/* /.single-sidebar */}
            <div className="siderbar-service-widget single-sidebar">
              <div className="title-box">
                <h3>All Service</h3>
                <div className="line" />
              </div>
              <div className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action active"
                >
                  Interior
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Home Expansion
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Industrial
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Interior Design
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Metal Roofing
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Painting Services
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Tower Construction
                </a>
              </div>
            </div>
            {/* /.single-sidebar */}
            <div className="single-sidebar">
              <div className="title-box">
                <h3>Documents</h3>
                <div className="line" />
              </div>
              <ul className="tags-list">
                <li>
                  <a href="#">Document1.csv</a>
                </li>
                <li>
                  <a href="#">Document2.DOC</a>
                </li>
                <li>
                  <a href="#">Document3.PDF</a>
                </li>
              </ul>
            </div>
            {/* /.single-sidebar */}
            <div className="single-sidebar">
              <div className="title-box">
                <h3>Categories</h3>
                <div className="line" />
              </div>
              <ul className="links-list">
                <li>
                  <a href="#">Construction</a>
                </li>
                <li>
                  <a href="#">Interior</a>
                </li>
                <li>
                  <a href="#">Metal Roofing</a>
                </li>
                <li>
                  <a href="#">Home Expansion</a>
                </li>
                <li>
                  <a href="#">Tower Construction</a>
                </li>
                <li>
                  <a href="#">Industrial</a>
                </li>
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

export default Service_Details