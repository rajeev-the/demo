import React from 'react'
import Navbar from '../Components/Navbar'
import Headers from '../Components/Header'
import Fottter from '../Components/Fottter'
import navbarimg from '/img/logo-light.png'

const ContactUs = () => {
  return (
    <>
    <div className="">
      <div className="spinner" />
    </div>{" "}
    {/* /.preloader */}
    <header className="header header-home-one inner-page-header">
      <Headers/>
    <Navbar/>
    </header>
    {/* /.header */}
    <section   style={{
        backgroundImage: "url('/img/banner-1-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    
        
     
      }}  className="inner-banner">
      <div className="inner">
        <div className="thm-container clearfix">
          <h2 className="pull-left">Contact Page</h2>
          <ul className="breadcrumb pull-right">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Contact Page</span>
            </li>
          </ul>
          {/* /.breadcrumb */}
        </div>
      </div>
    </section>
    {/* /.inner-banner */}
    <section className="sec-pad contact-page">
      <div className="thm-container">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-title-two">
              <div className="row">
                <div className="col-md-12">
                  <div className="title-box text-center">
                    <h2>Get In Touch</h2>
                    <div className="line" />
                    <p>
                     Have questions or need assistance? We're here to help—reach out to us anytime, and our team will get back to you as soon as possible.
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
               <div style={{
            marginBottom:"20px"
           }} className="col-md-6">
  <select style={
    {
      border: "none"

    }
  } className="form-control">
    <option value="">Select Option</option>
    <option value="execution">Execution</option>
    <option value="manufacturing">Manufacturing</option>
    <option value="rental">Rental</option>
  </select>
</div>
              <div className="col-md-12">
                <input type="text" placeholder="Message Subjet" />
              </div>
              <div className="col-md-12 text-center">
                <textarea
                  placeholder="Your Message"
                  className="text-left"
                  defaultValue={""}
                />
                <button type="submit" className="btn-thm">
                  Send Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div className="google-map" id="contact-google-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d6677.8991952572605!2d77.04290684172081!3d28.78827879609981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d28.635955199999998!2d77.2046848!4m5!1s0x390da9a5dc1365d5%3A0x483a2a1781510afb!2sSector%20-%201%2C%20Bawana%20industrial%20area%2C%20j96%2C%20DSIIDC%20Industrial%20Area%2C%20Sector%201%2C%20Bawana%2C%20New%20Delhi%2C%20Delhi%2C%20110039!3m2!1d28.791378599999998!2d77.0475252!5e0!3m2!1sen!2sin!4v1745866162063!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

   <Fottter img={navbarimg}/>
   
    {/* google map helper */}
  </>
  
  )
}

export default ContactUs