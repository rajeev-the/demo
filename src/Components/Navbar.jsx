import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;
  const isServiceActive = currentPath.startsWith('/service');
  const isProductsActive = currentPath.startsWith('/products');
  const isNewsActive = currentPath.startsWith('/news');

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <nav className="navbar navbar-default header-navigation stricky">
      <div className="thm-container clearfix">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            onClick={toggleMobileMenu}
          >
            <i className="fa fa-bars" />
          </button>
          <Link className="navbar-brand" to="/">
            <img src="/img/logo-light.png" alt="Logo" style={{ width: '150px' }} />
          </Link>
        </div>

        <div className={`collapse navbar-collapse main-navigation mainmenu ${isMobileOpen ? 'in' : ''}`}>
          <ul className="nav navbar-nav navigation-box">
          <li>  
            <span
                className="dropdown-toggle"
                style={{ cursor: 'pointer', color: isNewsActive ? '#ffa801' : 'white' }}
              >
               
              <Link style={{
                color: isActive('/') ? '#ffa801' : 'white',

              }} to={'/'} className='mobile-services'>Home</Link> 
              </span> 
              
              </li>
         
              <li>  
            <span
                className="dropdown-toggle"
                style={{ cursor: 'pointer', color: isNewsActive ? '#ffa801' : 'white' }}
              >
               
              <Link style={{
                color: isActive('/about') ? '#ffa801' : 'white',

              }} to={'/about'} className='mobile-services'>About Us</Link> 
              </span> 
              
              </li>

            <li className={`dropdown ${isServiceActive ? 'current' : ''}`}>
              <span
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                style={{  color: isServiceActive ? '#ffa801' : 'white' }}
              >
                <span className='mobile-services'>Services</span> <i className="fa fa-chevron-down" style={{ fontSize: '10px', marginLeft: '5px' }}></i>


              </span>
              <ul className="dropdown-menu">
                <li><NavLink to="/service/execution" className={({ isActive }) => (isActive ? 'current' : '')}>Execution</NavLink></li>
                <li><NavLink to="/service/rentals" className={({ isActive }) => (isActive ? 'current' : '')}>Rentals</NavLink></li>
              </ul>
            </li>

            <li className={`dropdown ${isProductsActive ? 'current' : ''}`}>
              <span
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                style={{ cursor: 'pointer', color: isProductsActive ? '#ffa801' : 'white' }}
              >
                  <span className='mobile-services'>Products</span> <i className="fa fa-chevron-down" style={{ fontSize: '10px', marginLeft: '5px' }}></i>
              </span>
              <ul className="dropdown-menu" style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' }}>
                <li><NavLink to="/products/1">Pipe Roofing System</NavLink></li>
                <li><NavLink to="/products/2">Self Drilling Anchors & Accessories</NavLink></li>
                <li><NavLink to="/products/3">Water Expandable Bolt</NavLink></li>
                <li><NavLink to="/products/4">Grout Swivel</NavLink></li>
                <li><NavLink to="/products/5">Inflatable / Mechanical Packers</NavLink></li>
                <li><NavLink to="/products/6">Cable Anchors</NavLink></li>
                <li><NavLink to="/products/7">SN Bolt Installation Adapter</NavLink></li>
                <li><NavLink to="/products/8">Spares for Drill Jumbos & Shotcrete Machine</NavLink></li>
                <li><NavLink to="/products/9">Spares for Engines & Axles</NavLink></li>
                <li><NavLink to="/products/10">Water Expandable Bolts & Pumps</NavLink></li>
              </ul>
            </li>

            <li className={`dropdown ${isNewsActive ? 'current' : ''}`}>
              <span
                className="dropdown-toggle"
                style={{ cursor: 'pointer', color: isNewsActive ? '#ffa801' : 'white' }}
              >
               
              <span className='mobile-services'>News & Insights  </span> <i className="fa fa-chevron-down" style={{ fontSize: '10px', marginLeft: '5px' }}></i>
              </span>
              <ul className="dropdown-menu" style={{ maxHeight: '300px', overflowY: 'auto', overflowX: 'hidden' }}>
                <li><a>Blog Grid</a></li>
                <li><a>Blog Single Sidebar Less</a></li>
                <li><a>Blog Single Left Sidebar</a></li>
                <li><a>Blog Single Right Sidebar</a></li>
                <li><a>Blog Classic Sidebar Less</a></li>
                <li><a>Blog Classic Left Sidebar</a></li>
                <li><a>Blog Classic Right Sidebar</a></li>
              </ul>
            </li>

            <li>       <span
                className="dropdown-toggle"
                style={{ cursor: 'pointer', color: isNewsActive ? '#ffa801' : 'white' }}
              >
               
              <Link style={{
                color: isActive('/contact') ? '#ffa801' : 'white',

              }} to={'/contact'} className='mobile-services'>Contact</Link> 
              </span> 
              
              </li>
            
          </ul>
        </div>

        <div className="right-side-box">
          <Link to={'/download'} className="rqa-btn">Download</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;