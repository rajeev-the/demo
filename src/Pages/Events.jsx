import React,{useEffect} from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Fottter from '../Components/Fottter';
import navbarimg from '/img/logo-light.png';
import {event_page} from "../Data/ourdata"
import { Link } from 'react-router-dom';

const Events = () => {
   useEffect(() => {
            document.title = "Events"; // Meta title in tab
          }, []);
  return (
  <div className="">
   
   <div className="" /> {/* /.preloader */}
  <header className="header header-home-one">

  <Navbar/>
  
  </header>
 

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
   
   



     <div className="event-section-container">
  <div className="event-flex-wrapper">
    {event_page.map((e) => (
      <div key={e.id} className="event-card">
        <Link to={`/events/${e.id}`} className="event-card-link">
          <div className="img-box">
            <img src={e.src[0]} alt="Event" className="event-img" />
            <div className="overlay">
              <div className="box">
               
              </div>
            </div>
          </div>
          <div className="text-box">
            <h2 className="event-title">{e.title}</h2>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>




      <Fottter img={navbarimg} />
    </div>
  );
};

export default Events;
