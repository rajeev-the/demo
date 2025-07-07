import React from 'react'
import { Link } from 'react-router-dom'

const Fottter = ({img}) => {
  return (
   <>
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
                } }  src={img} alt="Awesome Image" />
              </a>
              <p>
              Founded in 2008 with over 30 years of expertise, Machino International Pvt. Ltd. excels in tunneling, slope protection, and geotechnical engineering, delivering safe, sustainable infrastructure solutions across India.
              </p>
              <div className="social">
               <a href="https://www.facebook.com/p/Machino-International-100063894159919/"  target="_blank"
  rel="noopener noreferrer" className="fab fa-facebook-f" />
                
                  <a href="https://www.linkedin.com/company/machino-international-pvt-ltd-"  target="_blank"
  rel="noopener noreferrer" className="fab fa-linkedin-in" />
                  <a href="https://www.machinoindia.com/"   target="_blank"
  rel="noopener noreferrer" className="fab fa-google-plus-g" />
                <a
  href="https://www.youtube.com/@mipl_int"
  target="_blank"
  rel="noopener noreferrer"
  className="fab fa-youtube"
/>
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
                  <Link to={'/service/execution'}>
                    <i className="fa fa-angle-right" />
                    Execution
                  </Link>
                </li>
                <li>
                  <Link  to={'/products'}>
                    <i className="fa fa-angle-right" />
                    Manufacturing 
                  </Link>
                </li>
              
                <li>
                  <Link to={'/service/rentals'}>
                    <i className="fa fa-angle-right" />
                    Rentals
                  </Link>
                
                </li>
                <li>
                   <Link to={'/career'}>
                    <i className="fa fa-angle-right" />
                    Career
                  </Link>
                </li>
                  <li>
                   <Link to={'/PrivacyPolicy'}>
                    <i className="fa fa-angle-right" />
                    Privacy Policy
                  </Link>
                </li>
          
                <li>

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
                +91-11-45105930
              </p>
              <p>
                <i className="far fa-envelope" />
                support@machinoindia.com
              </p>
              <p>
                <i className="far fa-clock" />
                Mon - Fri: 10:00 - 6:00
              </p>
              <p>
                <i className="fa fa-map-marker" />N-261, O block, Sector 1, Bawana industrial area, New Delhi 110039
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
          MIPL
          </a>
        </p>
      </div>
      <div className="right-social pull-right">
       <a href="https://www.facebook.com/p/Machino-International-100063894159919/"  target="_blank"
  rel="noopener noreferrer" className="fab fa-facebook-f" />
                
                  <a href="https://www.linkedin.com/company/machino-international-pvt-ltd-"  target="_blank"
  rel="noopener noreferrer" className="fab fa-linkedin-in" />
                  <a href="https://www.machinoindia.com/"   target="_blank"
  rel="noopener noreferrer" className="fab fa-google-plus-g" />
        
        <a
  href="https://www.youtube.com/@mipl_int"
  target="_blank"
  rel="noopener noreferrer"
  className="fab fa-youtube"
/>

      </div>
    </div>
  </div>
  
   
   </>
  )
}

export default Fottter