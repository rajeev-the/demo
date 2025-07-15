import React from 'react'
import Navbar from '../Components/Navbar'
import Fottter from '../Components/Fottter'
import Header from '../Components/Header'
import navbarimg from '/img/logo-light.png'

const Download = () => {

  const handleDownload = (path) => {
  const link = document.createElement("a");
  link.href = path;
  link.download = path.split('/').pop(); // get filename from path
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


    const cards = [
        {
          image: '/img/ISOCertificate2019_page-0001.avif',
          title: 'Product Catalogs',

        },
        {
          image: '/img/ctalog front page.avif',
          title: 'Credentials',
          File:"../assets/Download/MIPL - Corporate Profile NATM (1).pdf"
        },
      ];
  return (
    
    <>
    <Header/>
    <div style={{backgroundColor:"black"}} className="header header-home-one inner-page-header">
      <Navbar/>
    </div>
  
    <div className="downloads-container">
      <h2 className="section-title">Company Documents</h2>
      <div className="premiumi-cards-grid">
        {cards.map((card, index) => (
          <div key={index} className="premium-cardi">
            <div className="cardi-media">
              <img src={card.image} alt={`Card ${index + 1}`} className="cardi-image" />
              <div className="image-overlay"/>
            </div>
            <div className="cardi-content">
              <h3 className="cardi-title">{card.title}</h3>
            <button className="premiumi-button" onClick={() => handleDownload(card.File)}>
  View Document
  <svg className="buttoni-icon" viewBox="0 0 24 24">
    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
  </svg>
</button>

            </div>
          </div>
        ))}
      </div>
    </div>
    <Fottter img={navbarimg} />
  </>
  )
}

export default Download