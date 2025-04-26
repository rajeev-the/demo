import React from 'react'
import { Link } from 'react-router-dom'

const BoxofProdcuts = ({title,img,content,link , icons}) => {
  return (
      <>
      
      <Link to={`/details${link}`} className="col-xxs-12 col-xs-6 col-sm-6 col-md-4">
            <div className="single-what-we-do">
              <div className="img-box">
                <img src={img} alt="Awesome Image" />
                <div className="overlay">
                  <div className="box">
                    <div className="content-box">
                      <a href="#" className="read-more fas fa-link" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-box">
              
                        <div className="icon-box">
                            <div className="inner">
                                <i className={`${icons}`}></i>
                            </div>
                        </div>
            
                <div className="text-box">
                  <h3>{title}</h3>
                  <p style={{ color: 'black' }}>{content}</p>

                </div>
              </div>
              {/* /.content-box */}
            </div>
          </Link>
       
      
      </>
  )
}

export default BoxofProdcuts