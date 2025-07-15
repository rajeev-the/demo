import React,{useState ,useEffect} from 'react'
import { useParams  ,Link} from 'react-router-dom';
import {data} from  "../Data/Service"
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Fottter from '../Components/Fottter';
import navbarimg from '/img/logo-light.png'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Servicedetails = () => {
 const { id } = useParams()
const [product, setProduct] = useState(null);
   



 useEffect(() => {
        const product = data.find((item) => item.id === parseInt(id));
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
        <h2 className="pull-left">{product?.subtitle}</h2>
      
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
      style={{
        height:"600px"
      }}
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
  

              
            </div>


            <div className="blog-details-page ">
              <h3>{product?.title}</h3>
              <br />
              
            <div className="thm-container">
            <section className="row">
             
  <div className="card shadow-lg border-0">
    <div className="card-body p-4">
    <div className="project-details">
      <p><strong>Project Name:</strong> {product?.project_name || "[Enter Project Name]"}</p>
      <p><strong>Prime Client:</strong> {product?.prime_client || "[Enter Prime Client]"}</p>
      <p><strong>Project Awarded Under:</strong> {product?.pja || "[Enter Contractor]"}</p>
      <p><strong>Execution Contractor:</strong> {product?.execution_contractor || "Machino International"}</p>
      <p><strong>Scope of Work:</strong> {product?.scope_of_work || "[Enter Scope of Work]"}</p>
      <p><strong>Work Specification:</strong> {product?.work_specification || "[Enter Completion Status]"}</p>
        <p><strong>Year:</strong> {product?.year || "[Enter Year]"}</p>
          <p><strong>Work Completion Status:</strong> {product?.work_completion_status || "[Enter Completion Status]"}</p>
    </div>

 <div className="cer-btn-container">
      

      <Link to="/contact" className="cer-btn">
        Competition Certification 
         <div className="inner">
                      <i className="glyphicon glyphicon-ok-sign" />
                    </div>    
      </Link>
       <Link to="/contact" className="cer-btn">
  View Project 
  <div className="inner">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23.498 6.186a2.999 2.999 0 0 0-2.112-2.122C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.564A2.999 2.999 0 0 0 .502 6.186C0 8.082 0 12 0 12s0 3.918.502 5.814a2.999 2.999 0 0 0 2.112 2.122C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.564a2.999 2.999 0 0 0 2.112-2.122C24 15.918 24 12 24 12s0-3.918-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  </div>    
</Link>

    </div>

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
                <h3>Execution Projects</h3>
                <div className="line" />
              </div>
             <ul className="links-list">

{
        data.map((item)=>(  

            <li key={item.id}>
    <Link style={{ color: id === `${item?.id}` ? '#ffa801' : '' }} to={`/service/${item.id}`}>
      {item?.title}
    </Link>
  </li>

        ))
}


</ul>

              
            </div>
        <div>
  <Link to="/contact" className="enquiry-link">
    Enquiry
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

export default Servicedetails