import React,{useEffect, useState} from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import {products_data} from '../Data/Product'


const Products_details = () => {
    const { id } = useParams()
const [product, setProduct] = useState(null);
   
console.log(product?.img[0])


 useEffect(() => {
        const product = products_data.find((item) => item.id === parseInt(id));
        if (product) {
            setProduct(product);
        } else {
            // Handle the case where the product is not found
            console.error('Product not found');
        }

 }
, [id])
    // const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/img/DSC02237_JPG.avif',
        '/img/DSC02238_JPG.avif',
        '/img/DSC02239_JPG.avif',
        // add more images as needed
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? product.img.length - 1 : prev - 1));
      };
    
      const nextImage = () => {
        setCurrentIndex((prev) => (prev === product.img.length - 1 ? 0 : prev + 1));
      };
    
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
            <div className="slider-container">
      <img
        src={product?.img[currentIndex]}
        alt="Gallery"
        className="slider-image"
      />
      <button className="nav-button left" onClick={prevImage}>
        <FiChevronLeft size={28} />
      </button>
      <button className="nav-button right" onClick={nextImage}>
        <FiChevronRight size={28} />
      </button>
    </div>
  
              <div className="text-box">
                
                <p>
                <strong></strong>{product?.content} 
                </p>
              </div>
              
            </div>

            <div className="blog-details-page ">
            <div className="thm-container">
            <section className="row">
  <div className="card shadow-lg border-0">
    <div className="card-body p-4">
    <div dangerouslySetInnerHTML={{ __html: product?.content1 }} />
    <div dangerouslySetInnerHTML={{ __html: product?.content2 }} />
    <div dangerouslySetInnerHTML={{ __html: product?.content3 }} />
    <div dangerouslySetInnerHTML={{ __html: product?.content4 }} />
    <img
        src={product?.img1}
        alt="Gallery"
        className="slider-image"
      />
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
          
          
            <div className=" mt30 hia_according">
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
             
            </div>
            {/* /.single-sidebar */}
            <div className="single-sidebar">
            
            
            </div>
            {/* /.single-sidebar */}
            <div className="single-sidebar">
              <div className="title-box">
                <h3>Products Categories</h3>
                <div className="line" />
              </div>
              <ul className="links-list">
                <li>
                  <Link  style={{
                    color: id === '1' ? '#ffa801' : ''
                  }}  to={'/products/1'}  >Pipe Roofing System</Link>
                </li>
                <li>
                <Link  style={{
                    color: id === '2' ? '#ffa801' : ''
                  }}  to={'/products/2'}  >Self Drilling Anchors & Accessories</Link>
              
                </li>
                <li>
                <Link  style={{
                    color: id === '3' ? '#ffa801' : ''
                  }}  to={'/products/3'}  >Water Expandable Bolt</Link>
            
                </li>
                <li>
                  <a href="#">Grout Swivel</a>
                </li>
                <li>
                  <a href="#">Inflatable / Mechanical Packers</a>
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

export default Products_details