import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav className="navbar navbar-default header-navigation stricky">
         <div className="thm-container clearfix">
           {/* Brand and toggle get grouped for better mobile display */}
           <div className="navbar-header">
             <button
               type="button"
               className="navbar-toggle collapsed "
               data-toggle="collapse"
               data-target=".main-navigation"
               aria-expanded="false"
             >
               <i className="fa fa-bars" />
             </button>
             <a className="navbar-brand" >
               <img  style={{
                 width:"150px"
               }} src="/img/logo-light.png" alt="Awesome Image" />
             </a>
           </div>
           {/* Collect the nav links, forms, and other content for toggling */}
           <div
             className="collapse navbar-collapse main-navigation mainmenu "
             id="main-nav-bar"
           >
             <ul className="nav navbar-nav navigation-box">
               <li className="current">
                 <a href="index.html">Home</a>
               </li>
               <li>
                 <a href="about.html">About Us</a>
               </li>
               <li>
                 <a >Services</a>
                 <ul className="sub-menu">
                   <li>
                   
                     <Link  to={'/service/execution'} >Execution</Link>
                   </li>
                   <li>
                   <Link  to={'/service/rentals'} >Rentals</Link>
                   </li>
                 </ul>
                 {/* /.sub-menu */}
               </li>
               <li>
                 <a href="#">Products</a>
                 <ul    style={{
       maxHeight: "300px",         // adjust height as needed
       overflowY: "auto",
       overflowX: "hidden"
     }}  className="sub-menu ">
                   <li>
                     <a >Aperoofing / Forepoling Casing System</a>
                   </li>
                   <li>
                     <a>Self Drilling Anchors & Accessories</a>
                   </li>
                   <li>
                     <a >Rock Drilling Tools </a>
                   </li>
                   <li>
                     <a>Grout Swivel </a>
                   </li>
                   <li>
                     <a >Inflatable / Mechanical Packers </a>
                   </li>
                   <li>
                     <a>Cable Anchors</a>
                   </li>
                   <li>
                     <a>SN Bolt Installation Adapter</a>
                   </li>
                   <li>
                     <a>Spares for Drill Jumbos & Shotcrete Machine</a>
                   </li>
                   <li>
                     <a>Spares for Engines & Axles </a>
                   </li>
                   <li>
                     <a>Water Expandable Bolts & Pumps </a>
                   </li>
                 </ul>
                 {/* /.sub-menu */}
               </li>
               <li>
                 <a >News & Insights</a>
                 <ul className="sub-menu">
                   <li>
                     <a >Blog Grid</a>
                   </li>
                   <li>
                     <a >
                       Blog Single Sidebar Less
                     </a>
                   </li>
                   <li>
                     <a >
                       Blog Single Left Sidebar
                     </a>
                   </li>
                   <li>
                     <a >
                       Blog Single Right Sidebar
                     </a>
                   </li>
                   <li>
                     <a >
                       Blog Classic Sidebar Less
                     </a>
                   </li>
                   <li>
                     <a >
                       Blog Classic Left Sidebar
                     </a>
                   </li>
                   <li>
                     <a >
                       Blog Classic Right Sidebar
                     </a>
                   </li>
                 </ul>
                 {/* /.sub-menu */}
               </li>
               <li>
                 <a >Contact</a>
               </li>
             </ul>
           </div>
           {/* /.navbar-collapse */}
           <div className="right-side-box">
             <a href="#" className="rqa-btn">
               Get Quote
             </a>
           </div>
           {/* /.right-side-box */}
         </div>
       </nav>
  )
}

export default Navbar