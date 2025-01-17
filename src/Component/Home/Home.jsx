import { Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'

const Home = () => {
  const navigate = useNavigate()
  const handleNavigate=()=>{
    navigate("/compaign")
  }
  return (
    <div style={{display:"flex",justifyContent:"center", flexDirection:"column", gap:"50px",alignItems:"center"}}>
      <Heading textAlign="center" marginTop="50px">Welcome to Email Compaign Application</Heading>
      <Button className='btn' onClick={handleNavigate}>View All Compaign</Button>
    </div>
  )
}

export default Home
