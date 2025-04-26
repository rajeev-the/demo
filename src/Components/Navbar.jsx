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
                 <Link to={'/'}>Home</Link>
               </li>
               <li>
                 <Link to={'/about'}>About Us</ Link>
               </li>
               <li>
                 <Link  to={'/service/rentals'} >Services</Link>
                 <ul className="sub-menu">
                   <li>
                   
                     <Link to={'/service/execution'} >Execution</Link>
                   </li>
                   <li>
                   <Link  to={'/service/rentals'} >Rentals</Link>
                   </li>
                 </ul>
                 {/* /.sub-menu */}
               </li>
               <li>
                 <Link to={'/products'}>Products</Link>
                 <ul    style={{
       maxHeight: "300px",         // adjust height as needed
       overflowY: "auto",
       overflowX: "hidden"
     }}  className="sub-menu ">
                   <li>
                     <Link >Aperoofing / Forepoling Casing System</Link>
                   </li>
                   <li>
                     <Link>Self Drilling Anchors & Accessories</Link>
                   </li>
                   <li>
                     <Link >Rock Drilling Tools </Link>
                   </li>
                   <li>
                     <Link>Grout Swivel </Link>
                   </li>
                   <li>
                     <Link >Inflatable / Mechanical Packers </Link>
                   </li>
                   <li>
                     <Link>Cable Anchors</Link>
                   </li>
                   <li>
                     <Link>SN Bolt Installation Adapter</Link>
                   </li>
                   <li>
                     <Link>Spares for Drill Jumbos & Shotcrete Machine</Link>
                   </li>
                   <li>
                     <Link>Spares for Engines & Axles </Link>
                   </li>
                   <li>
                     <Link>Water Expandable Bolts & Pumps </Link>
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