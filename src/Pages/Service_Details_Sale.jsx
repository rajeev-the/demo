import React, { useEffect ,useState } from 'react'

import Navbar from '../Components/Navbar'
import { Link, useParams } from 'react-router-dom'
import Header from '../Components/Header'
import navbarimg from "/img/logo-light.png"
import {data1} from '../Data/Service'
import Fottter from '../Components/Fottter'

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
  
          document.title = "Service"; // Meta title in tab
  

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
                     <div className="project-details">

      <p><strong>Specifications:</strong> {product?.Prime_Client || "[Enter Prime Client]"}</p>
      <p><strong>model:</strong> {product?.Model || "[Enter Contractor]"}</p>
      <p><strong>Brand:</strong> {product?.Make || "Machino International"}</p>
      <p><strong>Year Of Manufacturing:</strong> {product?.YOM || "[Enter Scope of Work]"}</p>
     
    </div>
              </div>
              
              
            </div>

            

            <div className="blog-details-page ">
            <div className="thm-container">
            <section class="row">
              
  <div class="card shadow-lg border-0">
    <div class="card-body ">
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
             <div className="cer-btn-container">
                  
            
                 <div>
                  <Link to="/contact" className="enquiry-link">
                    Enquiry
                  </Link>
                </div>
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

                   Where attention to detail meets commitment to top-tier results.
              
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
                    <h3>Safety</h3>
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
                    <h3>Support</h3>
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
  <Fottter img={navbarimg} />
  </div>
</>

  )
}

export default Service_Details_Sale