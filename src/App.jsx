import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import EmailComaign from './Component/EmailComaign/EmailComaign'
import Home from './Component/Home/Home'
import CompaignPage from './Component/CompaignPage'
import Navbar from './Component/Navbar/Navbar'
import Signup from './Component/Signup/Signup'
import Login from './Component/Login/Login'
import PrivateRoute from './Component/Privateroute/PrivateRoute'

function App() {
 const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
    <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<PrivateRoute isAuthenticated={isAuthenticated}><EmailComaign/></PrivateRoute>}/>
      <Route path="/create/:compaignId" element={<PrivateRoute isAuthenticated={isAuthenticated}><EmailComaign/></PrivateRoute>}/>
      <Route path="/compaign" element={<CompaignPage isAuthenticated={isAuthenticated}/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated}/>}/>
      
     </Routes>
    </>
  )
}

export default App
