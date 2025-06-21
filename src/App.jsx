import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'

import ServiceExecution from './Pages/ServiceExecution'
import About from './Pages/About'
import Product from './Pages/Product'
import ServiceRentals from './Pages/ServiceRentals'
import Service_Details_Sale from './Pages/Service_Details_Sale'
import ContactUs from './Pages/ContactUs'
import Products_details from './Pages/Products_details'
import Download from './Pages/Download'
import BlogPage from './Pages/BlogPage'
import ScrollToTop from './Components/ScrollToTop'
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import Servicedetails from './Pages/Servicedetails'
import ProfileDetails from './Pages/ProfileDetails'
import BlogPage2 from './Pages/BlogPage2'
import Media from './Pages/Media'
import Events from './Pages/Events'
import MediaPage from './Pages/MediaPage'

const App = () => {
  return (
    <>
    <ScrollToTop/>
   <Routes> 
     <Route  path='/'  element={<Home/>} />
    <Route path='/service/rentals' element={<ServiceRentals/>}/>
    <Route path='/service/execution' element={<ServiceExecution/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path='/products/:id' element={<Products_details/>}/>
    <Route path="/rental/:id" element={<Service_Details_Sale/>}/>
    <Route path="/download" element={<Download/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/blog/1' element={<BlogPage/>}/>
   <Route path='/blog/2' element={<BlogPage2/>}/>
      <Route path='/service/:id' element={<Servicedetails/>}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
            <Route path='/profile/:id' element={<ProfileDetails/>}/>
             <Route path='/media' element={<Media/>}/>
               <Route path='/events' element={<Events/>}/>
               
               <Route path='/events/:id' element={<MediaPage/> }/>


     </Routes>
     </>
  )
}

export default App