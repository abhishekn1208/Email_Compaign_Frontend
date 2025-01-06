import { Button, FormControl, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'


const EmailComaign = () => {
    const subRef = useRef(null)
    const contRef = useRef(null)
    const recRef = useRef(null)
    const scheduleRef = useRef(null)
    const [compaignId, setCompaignId] = useState(null)


    const handleSubmit=async(e)=>{
        e.preventDefault()

        const token = localStorage.getItem("token")

        const data = {
            subject : subRef.current.value,
            emailContent : contRef.current.value,
            recipients : recRef.current.value,
            scheduledAt : scheduleRef.current.value
        }   

        const response = await axios.post("https://email-compaign.onrender.com/api/create",data)
       if(response.status===200){
        alert("Compaign Created Successfully")
        setCompaignId(response.data)
       }
    }

  

  return (
    <div style={{padding:'10px 15px'}}>
        <Heading textAlign="center">Create Compaign</Heading>
      <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          name="subject"
        ref={subRef}
          required
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email Content</FormLabel>
        <Textarea
          name="emailContent"
          ref={contRef}
          required
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Recipients (comma-separated)</FormLabel>
        <Input
          type="text"
          name="recipients"
          ref={recRef}
          required
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Scheduled Time (Optional)</FormLabel>
        <Input
          type="datetime-local"
          name="scheduledAt"
          ref={scheduleRef}
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Create Compaign
      </Button>
    </form>

    </div>
  )
}

export default EmailComaign
