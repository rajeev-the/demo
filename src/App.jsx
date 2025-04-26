import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'

import ServiceExecution from './Pages/ServiceExecution'
import About from './Pages/about'
import Product from './Pages/Product'
import ServiceRentals from './Pages/ServiceRentals'
import Service_Details_Sale from './Pages/Service_Details_Sale'

const App = () => {
  return (
   <Routes> 
    <Route  path='/'  element={<Home/>} />
    <Route path='/service/rentals' element={<ServiceRentals/>}/>
    <Route path='/service/execution' element={<ServiceExecution/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/products' element={<Product/>}/>
    <Route path="/details/service/:id" element={<Service_Details_Sale/>}/>
    
     </Routes>
  )
}

export default App