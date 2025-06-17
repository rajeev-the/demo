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
              <h3>{product?.subtitle}</h3>
              <br />
              
            <div className="thm-container">
            <section className="row">
             
  <div className="card shadow-lg border-0">
    <div className="card-body p-4">
   <div class="project-details">
  <p><strong>Project Name:</strong> [Enter Project Name]</p>
  <p><strong>Prime Client:</strong> [Enter Prime Client]</p>
  <p><strong>Contractor:</strong> [Enter Contractor]</p>
  <p><strong>Sub Contractor:</strong> Machino International</p>
  <p><strong>Scope of Work:</strong> [Enter Scope of Work]</p>
  <p><strong>Work Completion Status:</strong> [Enter Completion Status]</p>
</div>

 <div className="cer-btn-container">
      <Link to="/contact" className="cer-btn">
        Project Certificates
         <div className="inner">
                      <i className="glyphicon glyphicon-ok-sign" />
                    </div>    
      </Link>

      <Link to="/contact" className="cer-btn">
        Certification Competition
         <div className="inner">
                      <i className="glyphicon glyphicon-ok-sign" />
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
                <h3>Execution Projects</h3>
                <div className="line" />
              </div>
             <ul className="links-list">
  <li>
    <Link style={{ color: id === '1' ? '#ffa801' : '' }} to={'/service/1'}>
      Ghodazari Branch Canal of Gosikhurd
    </Link>
  </li>
  <li>
    <Link style={{ color: id === '2' ? '#ffa801' : '' }} to={'/service/2'}>
      Underground excavation and slope protection works of CCVT and ADIT
    </Link>
  </li>
  <li>
    <Link style={{ color: id === '3' ? '#ffa801' : '' }} to={'/service/3'}>
      Slope Protection Works - Dibang DT Inlet works
    </Link>
  </li>
  <li>
    <Link style={{ color: id === '4' ? '#ffa801' : '' }} to={'/service/4'}>
      New Railway Line Project in East Coast Railway
    </Link>
  </li>
  <li>
    <Link style={{ color: id === '5' ? '#ffa801' : '' }} to={'/service/5'}>
      Sri Siddharth Infratech & Service (I) Private Limited
    </Link>
  </li>
  <li>
    <Link style={{ color: id === '6' ? '#ffa801' : '' }} to={'/service/6'}>
      Piperoofing & SDA Installation (NATM Work) in Jammu Ring Road
    </Link>
  </li>
  

   <li>
    <Link style={{ color: id === '7' ? '#ffa801' : '' }} to={'/service/7'}>
      Slope Protection Work at Chenab Bridge, Jammu & Kashmir
    </Link>
  </li>


 
  <li>
    <Link style={{ color: id === '11' ? '#ffa801' : '' }} to={'/service/11'}>
      Piperoofing Work at TBM Adit of Pipalkoti H.E.P
    </Link>
  </li>
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