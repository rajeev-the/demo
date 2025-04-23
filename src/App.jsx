import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Service_Details from './Pages/Service_Details'
import Service_Details_Sale from './Pages/Service_Details_Sale'

const App = () => {
  return (
   <Routes> 
    <Route  path='/'  element={<Home/>} />
    <Route path='/service/rentals' element={<Service_Details/>}/>
    <Route path='/service/execution' element={<Service_Details_Sale/>}/>
    
     </Routes>
  )
}

export default App