import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Service_Details from './Pages/Service_Details'

const App = () => {
  return (
   <Routes> 
    <Route  path='/'  element={<Home/>} />
    <Route path='/service/:value' element={<Service_Details/>}/>
    
     </Routes>
  )
}

export default App