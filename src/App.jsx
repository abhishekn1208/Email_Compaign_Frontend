import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import EmailComaign from './Component/EmailComaign/EmailComaign'
import Home from './Component/Home/Home'
import CompaignPage from './Component/CompaignPage'
import Navbar from './Component/Navbar/Navbar'

function App() {


  return (
    <>
    <Navbar/>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<EmailComaign/>}/>
      <Route path="/compaign" element={<CompaignPage/>}/>
      
     </Routes>
    </>
  )
}

export default App
