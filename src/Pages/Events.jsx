import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Fottter from '../Components/Fottter';
import navbarimg from '/img/logo-light.png';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="active-preloader-ovh">
      <div className="">
        <div className="spinner" />
      </div>

      <Header />
      <Navbar />

      {/* Inner Banner */}
      <section className="inner-banner">
        <div className="inner">
          <div className="thm-container clearfix">
            <h2 className="pull-left">Events Page</h2>
            <ul className="breadcrumb pull-right">
              <li><Link to="/">Home</Link></li>
              <li><span>Events Page</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="blog-details-page sec-pad">
        <div className="thm-container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                style={{
                  padding: '50px 20px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
                  backgroundColor: '#fff',
                }}
              >
                <h3 style={{ color: '#777' }}>No events available right now.</h3>
                <p style={{ marginTop: '10px', color: '#999' }}>
                  Please check back later for upcoming events and announcements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Fottter img={navbarimg} />
    </div>
  );
};

export default Events;
