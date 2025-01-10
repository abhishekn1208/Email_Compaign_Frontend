import { FormControl, FormLabel, Heading, Input, Select } from '@chakra-ui/react'
import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'



const Signup = () => {
  const userRef = useRef(null)
  const passRef = useRef(null)
  const roleRef = useRef(null)
  const navigate = useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()

    const data = {
      username : userRef.current.value,
      password : passRef.current.value,
      role : roleRef.current.value
    }

    const response = await axios.post("https://email-compaign.onrender.com/api/register",data)
    if(response.status===200){
      alert("Logged in Successfully")
      navigate("/")
    }
  }

  return (
    <div style={{display:"flex", justifyContent:"center", height:"100vh", width : "100%", alignItems:"center"}} >
    <form style={{width : "40%", display:"flex", flexDirection:"column", gap:"20px"}} onSubmit={handleSubmit}>
        <Heading textAlign="center" mb="10px">Signup</Heading>
    <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder='Enter your username'
                required
                ref={userRef}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="text"
                name="desc"
                placeholder='Enter your Password'
                required
                ref={passRef}
              />
                </FormControl>
                <Select placeholder="Select option" width="200px" ref={roleRef}> 
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Select>
                <Input type ="submit" width="20%" backgroundColor="blue" color="white" fontWeight="bold"/>
               
    </form>
    </div>
  )
}

export default Signup
