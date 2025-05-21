import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';

import { useParams } from 'react-router-dom';
import { datapro } from "../Data/profile";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Fottter from '../Components/Fottter';

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
              <a href={profile?.linkedin} className="contact-button linkedin">
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
                <p>{profile?.description}</p>
              </section>

              <div className="details-grid">
                {profile?.skills && (
                  <section className="skills-section">
                    <h3>Core Competencies</h3>
                    <div className="skills-list">
                      {profile.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </section>
                )}

                {profile?.education && (
                  <section className="education-section">
                    <h3>Education</h3>
                    <div className="education-list">
                      {profile.education.map((edu, index) => (
                        <div key={index} className="education-item">
                          <h4>{edu.degree}</h4>
                          <p>{edu.institution}</p>
                          <p>{edu.duration}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Fottter img={navbarimg} />
    </>
  );
};

export default ProfileDetails;