import { Button, FormControl, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const EmailComaign = () => {
  const navigate = useNavigate()
  const { compaignId } = useParams() 
  const [isEdit, setIsEdit] = useState(false)
    const subRef = useRef(null)
    const contRef = useRef(null)
    const recRef = useRef(null)
    const scheduleRef = useRef(null)
    const nameRef = useRef(null)
    const descRef = useRef(null)



    // console.log(compaignId)

    const fetchupdatedContent=async(compaignId)=>{
      console.log(compaignId)
      try {
        const response = await axios.get(`https://email-compaign.onrender.com/api/${compaignId}`)
        console.log(response)
        if(response.status===200){
          const compaign = response.data
          console.log(compaign)
          subRef.current.value = compaign.subject
          contRef.current.value = compaign.emailContent
          recRef.current.value = compaign.recipients.join(", ")
          scheduleRef.current.value = compaign.scheduledAt
          nameRef.current.value = compaign.name
          descRef.current.value = compaign.description
        }
       } catch (error) {
        console.log(error.response.data.message)
       }
     }

useEffect(()=>{
  if(compaignId){
    setIsEdit(true)
    
  
   fetchupdatedContent(compaignId)
  }
  
},[compaignId])

    const handleSubmit=async(e)=>{
        e.preventDefault()

        const token = localStorage.getItem("token")
    
        const data = {
            subject : subRef.current.value,
            emailContent : contRef.current.value,
            recipients : recRef.current.value,
            scheduledAt : scheduleRef.current.value
        }   

        let response;
        if(isEdit){
          response = await axios.patch(`https://email-compaign.onrender.com/api/${compaignId}`,data,{
            headers : {
              Authorization : `Bearer ${token}`
            }
          })
       
        }else{
           response = await axios.post("https://email-compaign.onrender.com/api/create",data,{
            headers : {
              Authorization : `Bearer ${token}`
            }
           })
        }

       
       if(response.status===200){
        alert(isEdit ? "Compaign updated successfully" :"Compaign Created Successfully")
        navigate("/compaign")
       }
    }

  

  return (
    <div style={{padding:'10px 15px'}}>
        <Heading textAlign="center">Create Compaign</Heading>
      <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
        ref={nameRef}
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input
          type="text"
          name="desc"
        ref={descRef}
          required
        />
      </FormControl>
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
      {isEdit ? "Update Campaign" : "Create Campaign"}
      </Button>
    </form>

    </div>
  )
}

export default EmailComaign
