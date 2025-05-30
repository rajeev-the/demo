import React from 'react'
import Navbar from '../Components/Navbar'
import BoxofProdcuts from '../Components/BoxofProdcuts'
import {products_data} from '../Data/Product'
import Header from '../Components/Header'
import ProdcutsBox from '../Components/ProdcutsBox'
import Fotter from '../Components/Fottter'
import navbarimg from '/img/logo-light.png'

const Product = () => {
  return (
    <>
    <div className="">
      <div className="spinner" />
    </div>{" "}
    {/* /.preloader */}
    <header className="header header-home-one inner-page-header">
     <Header/>
     <Navbar/>
    </header>
    {/* /.header */}
    <section  style={{
        backgroundImage: "url('/img/banner-1-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    
        
     
      }} className="inner-banner">
      <div className="inner">
        <div className="thm-container clearfix">
          <h2 className="pull-left">Prodcuts Page</h2>
          <ul className="breadcrumb pull-right">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Prodcuts</span>
            </li>
          </ul>
          {/* /.breadcrumb */}
        </div>
      </div>
    </section>
    {/* /.inner-banner */}
    
    <section className="sec-pad what-we-do gray-bg">
    
      <div className="ttt">
      <h1 className='text-start'>Underground Support System</h1>
        <div className="cardx-container">
            
        {
  products_data.map((item, index) =>
    item.prodcut_type === "Pipe Roofing Support System" ? (
      <ProdcutsBox 
      
        key={index}
        title={item.title}
        img={item.img[0]}
        content={item.content}
        link={item.link}
        id={item.id}
        
        short_title={item.prodcut_type}
        
      />
    ) : null
  )
}

         
            
      
            
        </div>

        
      </div>
      <div className="ttt">
      <h1 className='text-start'>Rock Drilling Tools</h1>
        <div className="cardx-container">
            
        {
  products_data.map((item, index) =>
    item.prodcut_type === "Rocktools" ? (
      <ProdcutsBox 
      
        key={index}
        title={item.title}
        img={item.img[0]}
        content={item.content}
        id={item.id}
        link={item.link}
        
        
        short_title={item.prodcut_type}
        
      />
    ) : null
  )
}

         
            
      
            
        </div>

        
      </div>

      
      <div className="ttt">
      <h1 className='text-start'>Grouting</h1>
        <div className="cardx-container">
            
        {
  products_data.map((item, index) =>
    item.prodcut_type === "Grouting" ? (
      <ProdcutsBox 
      
        key={index}
        title={item.title}
        img={item.img[0]}
        content={item.content}
        id={item.id}
        link={item.link}
        
        
        short_title={item.prodcut_type}
        
      />
    ) : null
  )
}

         
            
      
            
        </div>

        
      </div>


      <div className="ttt">
      <h1 className='text-start'>Spare Parts</h1>
        <div className="cardx-container">
            
        {
  products_data.map((item, index) =>
    item.prodcut_type === "Spare Parts" ? (
      <ProdcutsBox 
      
        key={index}
        title={item.title}
        img={item.img[0]}
        content={item.content}
        id={item.id}
        link={item.link}
        
        
        short_title={item.prodcut_type}
        
      />
    ) : null
  )
}

         
            
      
            
        </div>

        
      </div>


    </section>



    
    {/* /.testimonials-style-one */}

{/*     
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
    </section> */}

<Fotter img={navbarimg}/>
    
 
  </>
  
  )
}

export default Product