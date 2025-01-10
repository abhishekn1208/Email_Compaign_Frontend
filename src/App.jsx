import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import EmailComaign from './Component/EmailComaign/EmailComaign'
import Home from './Component/Home/Home'
import CompaignPage from './Component/CompaignPage'
import Navbar from './Component/Navbar/Navbar'
import Signup from './Component/Signup/Signup'
import Login from './Component/Login/Login'

function App() {


  return (
    <>
    <Navbar/>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<EmailComaign/>}/>
      <Route path="/create/:compaignId" element={<EmailComaign/>}/>
      <Route path="/compaign" element={<CompaignPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      
     </Routes>
    </>
  )
}

export default App
