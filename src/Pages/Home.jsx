import React,{useState ,useEffect} from 'react'
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Fottter';
import homevideo from "../assets/MIPL Video MS_v3 (1) (1).mp4"
import { Link } from 'react-router-dom';


const Home = () => {
  
  const [value,setValue] = useState("Execution")


  const firstImages = [




  "/img/prodcuts/button-bits-1.avif",
  "/img/prodcuts/Couplings-1.avif",
   "/img/prodcuts/Rods-1.avif",
  "/img/prodcuts/Shanks-1.avif",
     "/img/prodcuts/hower image.avif",
        "/img/prodcuts/swellex.avif",
 
  "/img/prodcuts/2.avif",
  "/img/prodcuts/3.avif",

];


const rentalimg = [
"/img/2f3bd3_1d6649dc33414554a493b6d8e857f9fc~mv2.avif",
"/img/2f3bd3_30747b16744847f2999a25757bd6f7c4~mv2.avif",
"/img/rental (2).jpg"

]

 

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
                Execution
                </h2>
                <p data-animation="animated fadeInDown">
                Our Execution Division is the backbone of MIPL’s project delivery capability. Backed by a seasoned
                 team of engineers, geotechnical specialists, and skilled workforce, we execute infrastructure projects 
                 with technical precision and operational excellence.

                </p>
                <Link
                  to={'/service/execution'}
                  className="banner-btn"
                  data-animation="animated fadeInDown"
                >
                  Our Works
                </Link>
                <Link
                  to={'/contact'}
                  className="banner-btn borderd"
                  data-animation="animated fadeInDown"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="item slide-2"
        style={{
          backgroundImage: "url(img/male-worker-factory.jpg)",
          backgroundPosition: "center center"
        }}
      >
        <div className="carousel-caption">
          <div className="thm-container">
            <div className="box valign-middle">
              <div className="content text-left">
                <h2 data-animation="animated fadeInUp">
                Manufacturing 
                </h2>
                <p data-animation="animated fadeInDown">
                MIPL’s Manufacturing Division is dedicated to designing and producing high-performance tunneling 
                and mining support systems. Our in-house engineering and fabrication units enable us to deliver components 
                tailored to diverse geological and structural needs.

                </p>
                <Link
                  to={'/products'}
                  className="banner-btn"
                  data-animation="animated fadeInDown"
                >
                  Our Works
                </Link>
                <Link
                  to={'/contact'}
                  className="banner-btn borderd"
                  data-animation="animated fadeInDown"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="item slide-3"
        style={{
          backgroundImage: "url(img/pppop.jpg)",
          backgroundPosition: "center center"
        }}
      >
        <div className="carousel-caption">
          <div className="thm-container">
            <div className="box valign-middle">
              <div className="content text-left">
                <h2 data-animation="animated fadeInUp">
                Rentals
                </h2>
                <p data-animation="animated fadeInDown">
                Our Equipment Rental Division provides a fleet of well-maintained, high-efficiency machinery tailored for underground,
                tunneling, and geotechnical projects. We offer both short-term and long-term rental options, supported by expert technical assistance and operator training
                </p>
                <Link
                  to={'/service/rentals'}
                  className="banner-btn"
                  data-animation="animated fadeInDown"
                >
                  Our Works
                </Link>
                <Link
                  to={'/contact'}
                  className="banner-btn borderd"
                  data-animation="animated fadeInDown"
                >
                  Contact Us
                </Link>
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
          <div   className="service_box">
            <img  src="img/Exu.jpg" />
            <div className="service-content">
              <span className="service-icon">
                <i className="hialeah-icon-chainsaw" />
              </span>
              <h3 className="title">Execution</h3>
              <p className="description">
              Each project is executed under stringent safety protocols and
               sustainable engineering practices, ensuring timely 

              </p>
              <Link to={'/service/execution'} className="btn-thm">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="service_box">
            <img src="img/mau.jpg" />
            <div className="service-content">
              <span className="service-icon">
                <i className="hialeah-icon-paint-roller" />
              </span>
              <h3 className="title">Manufacturing</h3>
              <p className="description">
              Every product undergoes rigorous quality control and adheres to international industry
               standards, ensuring reliability on the field.

              </p>
              <Link to={'/products'} className="btn-thm">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
          <div className="service_box">
            <img src="img/rental (1).jpg" />
            <div className="service-content">
              <span className="service-icon">
                <i className="hialeah-icon-planer" />
              </span>
              <h3 className="title">Rental</h3>
              <p className="description">
              Our machinery is regularly serviced and managed by trained technicians to ensure high uptime and site productivity.
            </p>
              <Link to={'/service/rentals'} className="btn-thm">
                Read More
              </Link>
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
          
            <h3>
              Welcome To <span className="text-thm">MIPL</span>
            </h3>
            <p className="highlight text-thm">
            Machino International Pvt. Ltd.
            </p>
            <p>
            Founded in 2008, with a foundation built on over 30 years of industry experience, Machino International Pvt. Ltd. (MIPL) is a leading name in India’s infrastructure development landscape. We specialize in tunneling, slope protection, and geotechnical engineering, delivering technically demanding projects with unwavering commitment to safety, sustainability, and quality.
            <br />

With expertise spanning underground infrastructure, hydropower development, mining support, and metro rail solutions, MIPL has positioned itself as a dependable partner for large-scale infrastructure development across the nation.
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
          <video
    className="video-popup"
    src={homevideo}
   
  controls
   loop
 

    playsInline
    style={{
      width: "100%",
      height: "auto",
      maxHeight: "100vh", // sets a maximum height
      
    
      display: "block",
      backgroundColor: "transparent", // <-- Ensure video itself is transparent
    }}
  ></video>      
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
            Why Choose Machino International Pvt. Ltd.?
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
              30+ years of proven expertise and project leadership
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
              Advanced engineering backed by certified quality systems
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
              Adaptable workforce with deep project experience
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
              End-to-end execution, <br /> manufacturing, and rental solutions{""}
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
              PAN-India presence with global export capabilities
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
            We deliver innovative, precise manufacturing and rental solutions with a strong focus on client success.
            </p>
          </div>
        </div>
      </div>
      <div className="gallery-filter">
        <ul className="post-filter masonary text-center">
          <li onClick={()=>setValue("Execution")} className={`filter ${value === "Execution" ? "active" : ""}`}  data-filter=".masonary-item">
            <span>Execution</span>
          </li>
          <li onClick={()=> setValue("manufacturing")} className={`filter ${value === "manufacturing" ? "active" : ""}`} data-filter=".metal">
            <span> manufacturing </span>
          </li>
          <li onClick={()=>setValue("Rental")}   className={`filter ${value === "Rental" ? "active" : ""}`} data-filter=".painting">
          <span >Rental</span>
          </li>
        
        </ul>
        {/* /.post-filter */}
      </div>
    </div>
    <div className="thm-container">


 {/* You can conditionally render JSX like this: */}
 {value === "Execution" && (
   // Place the JSX you want to render when value is "Execution" here
 <>
   <div
        className="row masonary-layout filter-layout"
        data-filter-class="filter"
      >
      
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
 
 
 </>
 )          

 }


 
 {/* You can conditionally render JSX like this: */}
 {value === "manufacturing" && (
   // Place the JSX you want to render when value is "Execution" here
 <>
  
 <>
  <div
  className="row masonary-layout filter-layout"
  data-filter-class="filter"
>
  {firstImages.map((e, index) => (
    <div key={index} className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item painting">
      <div
        className="single-project-style-two"
        style={{
          width: "100%",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        
          borderRadius: "8px",
        }}
      >
        <div className="img-box" style={{ width: "100%", height: "100%" }}>
          <img
            src={e}
            alt="Awesome Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // or "cover" if you want to fill and crop
            }}
          />
       
          
       
        </div>
      </div>
    </div>
  ))}
</div>

 
 
 </>
 
 
 </>
 )          











 
 }
  {/* You can conditionally render JSX like this: */}
 {value === "Rental" && (

 <>
  <div
  className="row masonary-layout filter-layout"
  data-filter-class="filter"
>
  {rentalimg.map((e, index) => (
    <div key={index} className="col-md-3 col-sm-6 col-xs-12 masonary-item single-filter-item painting">
      <div
        className="single-project-style-two"
        style={{
          width: "100%",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        
          borderRadius: "8px",
        }}
      >
        <div className="img-box" style={{ width: "100%", height: "100%" }}>
          <img
            src={e}
            alt="Awesome Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // or "cover" if you want to fill and crop
            }}
          />
       
          
       
        </div>
      </div>
    </div>
  ))}
</div>

 
 
 </>
 )          
}



    
      {/* /.masonary-layout */}
    </div>
    <div class="text-center btn-box">
        <Link to={`${value === "Execution" ?"/service/execution": value === "manufacturing" ?  "/products" : value  === "Rental" ? "/service/rentals" : ""  }`}            class="btn-thm">More Projects</Link>
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
        At MIPL, we don't just build infrastructure — we engineer
        <br /> solutions that support the growth of a resilient, sustainable, and future-ready India.


        </p>
        <Link to={'/contact'} className="btn-thm">
          Contact Us
        </Link>
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
            Our team consists of skilled professionals dedicated to innovation, collaboration, and delivering
            exceptional results across every project.
            </p>
          </div>
        </div>
      </div>
          
      <div className="row  teampp" style={{ marginBottom: "50px" }}>
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <div className="our-team">
      <img
        className="img-responsive"
        src="img/team-1.jpg"
        alt="team-1.jpg"
      />
      <div className="team-content">
        <h3 className="title">Mr. Pradip Kumar Agarwal</h3>
        <span className="post">Chairman | Director</span>
        <ul className="social">
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

   
      
      <div className="row" >

        
        
       
        <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
              className="img-responsive"
              src="img/team-1.jpg"
              alt="team-1.jpg"
            />
            <div className="team-content">
              <h3 className="title">Mr. Vibhore Kumar Agarwal</h3>
              <span className="post">Director 
              </span>
              <ul className="social">
               
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
              <h3 className="title">Mr. Vishal Agarwal</h3>
              <span className="post">Director</span>
              <ul className="social">
              
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
              <h3 className="title">Mr. Nitin Malhan</h3>
              <span className="post">Executive Director</span>
              <ul className="social">
              
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div   className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
              className="img-responsive"
              src="img/team-3.jpg"
              alt="team-3.jpg"
            />
            <div  className="team-content">
              <h3 className="title">Mr. Vinod Kumar Rajora</h3>
              <span className="post">Technical Director</span>
              <ul className="social">
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
                  Get a quote today for customized, reliable solutions tailored to meet your project needs and budget.
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
                    Our abilities include vast experience, consistent quality standards, and a strong commitment to delivering every project on time.
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
                30+ years expertise in complex underground projects with skilled teams and quality control systems
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
                Machino International Pvt. Ltd. ensures standard quality through reliable, durable, certified, precise, and sustainable engineering backed by tested, verified performance.
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
                Machino International Pvt. Ltd. guarantees standard quality with durable materials, precise engineering, certified processes, and on-time delivery for every project.
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
            
            <h2>Media</h2>
            <div className="line" />
            <p>
            Explore our media section for project highlights, company updates, and visual insights into our work and achievements.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
  <div className="single-blog-style-one">
    <div className="img-box">
      <img  style={
        {
          height:"200px"
        }
      } src="img/blog-1-1.jpg" alt="Awesome Image" />
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
          <i className="far fa-calendar" /> Jan 2025
        </a>
        <a href="#">
          <i className="far fa-comments" /> 0 Comments
        </a>
      </div>
      {/* /.meta-info */}
      <Link to="/blog/mipl-infrastructure-solutions">
        <h3>MIPL: Driving India’s Infrastructure with Tunneling Excellence</h3>
      </Link>
     
    </div>
  </div>
</div>

          {/* /.single-blog-style-one */}
     
     
      </div>
    </div>
  </section>

<Footer/>



</>




  )
}

export default Home