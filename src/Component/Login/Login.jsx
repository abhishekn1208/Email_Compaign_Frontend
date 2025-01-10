import React, { useRef } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,

} from "@chakra-ui/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const userRef = useRef(null)
  const passRef = useRef(null)
 


  const handleSubmitLogin=async(e)=>{
    e.preventDefault()
    const data = {
      username : userRef.current.value,
      password : passRef.current.value,

    }

  try {
    const response = await axios.post("https://email-compaign.onrender.com/api/login",data)
    if(response.status===200){
     localStorage.setItem("token",response.data.token)
     alert(response.data.message)
     navigate("/compaign")
    }
  } catch (error) {
      console.log(error.response.data.message)
  }

  }



  return (
    <div   style={{
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100%",
      alignItems: "center",
    }}>
      <form
              style={{
                width: "40%",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}

              onSubmit={handleSubmitLogin}
            >
              <Heading textAlign="center" mb="10px">
                Login
              </Heading>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your username"
                  ref={userRef}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="text"
                  name="desc"
                  placeholder="Enter your Password"
                  ref={passRef}
                  required
                />
              </FormControl>
              
              <Input
                type="submit"
                width="20%"
                backgroundColor="blue"
                color="white"
                fontWeight="bold"
              />
            </form>
    </div>
  )
}

export default Login
