import React,{useEffect, useState} from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import {products_data} from '../Data/Product'
import Fottter from '../Components/Fottter';
import navbarimg from '/img/logo-light.png'

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
               
               <h2><strong> {product?.subtitle} </strong> </h2>
                
                <p>
                {product?.content} 
                </p>
              </div>
              
            </div>

            <div className="blog-details-page ">
            <div className="thm-container">
            <section className="row">
  <div className="card shadow-lg border-0">
    <div className="card-body p-4">
    <div  dangerouslySetInnerHTML={{ __html: product?.content1 }} />
    <div dangerouslySetInnerHTML={{ __html: product?.content2 }} />
    <div dangerouslySetInnerHTML={{ __html: product?.content3 }} />
    <div className='imgres' dangerouslySetInnerHTML={{ __html: product?.content4 }} />
     <div className='imgres' dangerouslySetInnerHTML={{ __html: product?.content5 }} />
    {  product?.img1 ? <img
        src={product?.img1}
        alt="Gallery"
        className="slider-image"
      />  : ''}
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

                {

                  products_data.map((item) => (
                    <li key={item.id}>
                      <Link style={{
                        color: item.id === parseInt(id) ? '#ffa801' : ''
                      }} to={`/products/${item.id}`}>{item.title}</Link>
                    </li>


                  ))
                }
             
               
               
                
              </ul>
              
            </div>
        <div>
  <Link to="/contact" className="enquiry-link">
    Enquiry
  </Link>
 &nbsp; &nbsp;&nbsp;
   <Link to="/download" className="enquiry-link">
    Download
  </Link>
</div>

            
            
            {/* /.single-sidebar */}
          </div>
          
          
          {/* /.sidebar */}
        </div>
       
      </div>
      
    </div>
  </section>
  {/* /.blog-details-page */}

  {/* /.footer */}
  </div>

  <Fottter img={navbarimg}/>
</>
  )
}

export default Products_details