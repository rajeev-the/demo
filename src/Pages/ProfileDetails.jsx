import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';

import { useParams,Link } from 'react-router-dom';
import { datapro } from "../Data/profile";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Fottter from '../Components/Fottter';
import VA from "../assets/profilepic/1516875468370.jpeg"
import VIA from '../assets/profilepic/1746091391533.jpeg'
import NI from "../assets/profilepic/1709974074945.jpeg"
import PP from "../assets/profilepic/head.jpg"



import navbarimg from '/img/logo-light.png'
const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const foundProfile = datapro.find(item => item.id === parseInt(id));
    setProfile(foundProfile || null);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="profile-details-page">
        <header className="profile-header">
          <div className="header-content container">
            <div className="header-text">
              <h1 className="profile-name">{profile?.name}</h1>
              <p className="profile-title">{profile?.title}</p>
             
            </div>
            <div className="header-actions">
              <a target="_blank"
  rel="noopener noreferrer" href={profile?.linkedin} className="contact-button linkedin">
                <FaLinkedin /> Connect
              </a>
              <a href={`mailto:${profile?.email}`} className="contact-button email">
                <FaEnvelope /> Email
              </a>
            </div>
          </div>
        </header>

        <main className="profile-main container">
          <div className="profile-grid">
            <div className="profile-aside">
              <div className="profile-card">
                <img 
                  src={profile?.img} 
                  alt={profile?.name} 
                  className="profile-image" 
                />
                <div className="contact-info">
                  {profile?.phone && (
                    <a href={`tel:${profile?.phone}`} className="contact-item">
                      <FaPhone /> {profile?.phone}
                    </a>
                  )}
                  {profile?.email && (
                    <a href={`mailto:${profile?.email}`} className="contact-item">
                      <FaEnvelope /> {profile?.email}
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="profile-content">
              <section className="about-section">
                <h2>Professional Profile</h2>
               {profile?.description?.split('\n').map((para, index) => (
  <p key={index}>{para}</p>
))}

              </section>
              

            </div>
            
          </div>
             <div style={{
              marginTop:"50px"
             }}  className="row" >

        
         <Link  to={"/profile/1"} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div  className="our-team">
              <img
                className="img-responsive"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="team-1.jpg"
              />
                   
              <div className="team-content">
                <h3 className="title">Mr. Pradip Kumar Agarwal</h3>
                <span className="post">Chairman | Director</span>
                <ul className="social">
                  <li>
                 
                     <span 
                    style={{
            width: "40px",
            height: "40px",
            padding: "10px",
            borderRadius: "50%",
            background: "#ffa801"
          }}
        
                     
                     >
                            <i style={
                  {
                    color:"white"
                  }
                } className="fab fa-linkedin" />
                          </span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
       
        <Link to={"/profile/2"} className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
              className="img-responsive"
              src={VA}
              alt="team-1.jpg"
            />
            <div className="team-content">
              <h3 className="title">Mr. Vibhore Agarwal</h3>
              <span className="post">Director 
              </span>
              <ul className="social">
               
                <li>
                  <span 
            style={{
    width: "40px",
    height: "40px",
    padding: "10px",
    borderRadius: "50%",
    background: "#ffa801"
  }}

             
             >
                    <i style={
          {
            color:"white"
          }
        } className="fab fa-linkedin" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Link>

        <Link to={"/profile/3"}  className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
              className="img-responsive"
              src={VIA}
              alt="team-2.jpg"
            />
            <div className="team-content">
              <h3 className="title">Mr. Vishal Agarwal</h3>
              <span className="post">Director</span>
              <ul className="social">
              
                <li>
                  <span 
            style={{
    width: "40px",
    height: "40px",
    padding: "10px",
    borderRadius: "50%",
    background: "#ffa801"
  }}

             
             >
                    <i style={
          {
            color:"white"
          }
        } className="fab fa-linkedin" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Link>


        <Link  to={"/profile/4"} className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
              className="img-responsive"
              src={NI}
              alt="team-2.jpg"
            />
            <div className="team-content">
              <h3 className="title">Mr. Nitin Malhan</h3>
              <span className="post">Executive Director</span>
              <ul className="social">
              
                <li>
                   <span 
            style={{
    width: "40px",
    height: "40px",
    padding: "10px",
    borderRadius: "50%",
    background: "#ffa801"
  }}

             
             >
                    <i  style={
          {
            color:"white"
          }
        } className="fab fa-linkedin" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Link>
      <Link  style={{
        marginTop:"20px"
      }}   to={"/profile/5"} className="col-xxs-12 col-xs-6 col-sm-6 col-md-3">
          <div className="our-team">
            <img
            style={{
              height:"270px"
            }}
              className="img-responsive"
              src={PP}
              alt="team-3.jpg"
            />
            <div  className="team-content">
              <h3 className="title">Mr. Vinod Rajora</h3>
              <span className="post">Technical Director</span>
              <ul className="social">
                <li>
                   <span 
            style={{
    width: "40px",
    height: "40px",
    padding: "10px",
    borderRadius: "50%",
    background: "#ffa801"
  }}

             
             >
                    <i  style={
          {
            color:"white"
          }
        } className="fab fa-linkedin" />
                  </span>
                 
                </li>
              </ul>
            </div>
          </div>
        </Link>
      
       
      </div>
      
        </main>
      </div>
      <Fottter img={navbarimg} />
    </>
  );
};

export default ProfileDetails;