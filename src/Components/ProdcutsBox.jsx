import React from 'react'
import { Link } from 'react-router-dom'

const ProdcutsBox = ({short_title , title , content , img  , id} ) => {
    const slicedDescription = content?.slice(0, 50);
  return (
    <div className="cardx">
    
    <img
      src={img}
      alt="Pipe Roofing System"
      className="cardx-image"
    />
    <div className="cardx-content">
      <p className="cardx-text">
       {slicedDescription} ...
        <Link to={`/products/${id}`} className="readx-more">Read More</Link>
      </p>
    </div>
    <Link to={`/products/${id}`}> <button className="cardx-button">{title}</button> </Link>
  </div>
  )
}

export default ProdcutsBox