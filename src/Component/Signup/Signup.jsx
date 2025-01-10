import { FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'



const Signup = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", height:"100vh", width : "100%", alignItems:"center"}} >
    <form style={{width : "40%", display:"flex", flexDirection:"column", gap:"20px"}}>
        <Heading textAlign="center" mb="10px">Signup</Heading>
    <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder='Enter your username'
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="text"
                name="desc"
                placeholder='Enter your Password'
                required
              />
                </FormControl>
                
                <Input type ="submit" width="20%" backgroundColor="blue" color="white" fontWeight="bold"/>
               
    </form>
    </div>
  )
}

export default Signup
