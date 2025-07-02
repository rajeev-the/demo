import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import {event_page} from "../Data/ourdata"
import Navbar from '../Components/Navbar';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Header from '../Components/Header';
import Footer from '../Components/Fottter';
import navbarimg from '/img/logo-light.png'

const MediaPage = () => {
     const { id } = useParams()
    const [product, setProduct] = useState(null);
       useEffect(() => {
               const product = event_page.find((item) => item.id === parseInt(id));
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
               setCurrentIndex((prev) => (prev === 0 ? product.src.length - 1 : prev - 1));
             };
           
             const nextImage = () => {
               setCurrentIndex((prev) => (prev === product.src.length - 1 ? 0 : prev + 1));
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
        <h2 className="pull-left">Events Page</h2>
      
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
        src={product?.src[currentIndex]}
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
  
             
              
            </div>


            
                        <div className="blog-details-page ">
                          
                            <h1>{product?.title}</h1>
                            <br />
                          
                        <div className="thm-container">
                          
                        <section className="row">
                        
                         
              <div className="card shadow-lg border-0">
                <div className="card-body p-4">
                <div className="project-details">
                  <p><strong>Topic:</strong>{product?.topic || "[Topic]"}</p>
                  <p><strong>Venue:</strong>{product?.venue || "[Venue]"}</p>
                  <p><strong>Date:</strong>  {product?.date || "[Date]"}</p>
                 
                </div>
            
            
            
               
                </div>
              </div>
            </section>
            
                        </div>
                          
                          </div>

          
            

            
       
            {/* /.single-blog-style-one */}
            
          
          
            
          </div>
          {/* /.single-blog-content */}
        </div>
        {/* /.col-md-9 */}
        
        <div className="col-md-3">
          <div className="sidebar">
            
            {/* /.single-sidebar */}
            <div className="siderbar-service-widget single-sidebar">
             
            </div>
            {/* /.single-sidebar */}
            <div className="single-sidebar">
            
            
            </div>
            {/* /.single-sidebar */}
            <div className="single-sidebar">
              <div className="title-box">
                <h3>Events  Page</h3>
                <div className="line" />
              </div>
              <ul className="links-list">

                {

                  event_page.map((item) => (
                    <li key={item.id}>
                      <Link style={{
                        color: item.id === parseInt(id) ? '#ffa801' : ''
                      }} to={`/events/${item.id}`}>{item.title}</Link>
                    </li>


                  ))
                }
             
               
               
                
              </ul>
              
            </div>
        <div>

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

  <Footer img={navbarimg}/>
</>
  )
}

export default MediaPage