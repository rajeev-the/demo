import React,{useState} from 'react'
import Navbar from '../Components/Navbar'
import Headers from '../Components/Header'
import Fottter from '../Components/Fottter'
import navbarimg from '/img/logo-light.png'


const Career = () => {
     // Mock job data


     

 const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    alert('Application submitted successfully!');
  };
  return (

    <> 



      <>
    <div className="">
      <div className="spinner" />
    </div>{" "}
    {/* /.preloader */}
    <header className="header header-home-one inner-page-header">
      <Headers/>
    <Navbar/>
    </header>
    {/* /.header */}
    <section   style={{
        backgroundImage: "url('/img/banner-1-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    
        
     
      }}  className="inner-banner">
      <div className="inner">
        
        <div className="thm-container clearfix">
          {/* Open Positions Section */}



            <div className="career-form-container">
      <h2>Career Application</h2>
      <form onSubmit={handleSubmit} className="career-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="position">Position Applying For</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="">Select a position</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="UX Designer">UX Designer</option>
            <option value="Product Manager">Product Manager</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="experience">Years of Experience</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="resume">Upload Resume (PDF only)</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            accept=".pdf"
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
          {/* /.breadcrumb */}
        </div>
      </div>
    </section>
    {/* /.inner-banner */}
   

   <Fottter img={navbarimg}/>
   
    {/* google map helper */}
  </>
    </>
  )
}

export default Career