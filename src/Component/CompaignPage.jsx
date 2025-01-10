import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CompaignPage = () => {
  const navigate = useNavigate()
    const [data, setData] = useState([])
    const fetchCompaign=async()=>{
        const response = await axios.get("https://email-compaign.onrender.com/api/")
        setData(response.data)
      

    }

    const handleBulkEmail=async(id)=>{

       try {
        const response = await axios.post(`https://email-compaign.onrender.com/api/sendemail/${id}/schedule`)
        if(response.status===200){
            alert("All Email sent successfully")
        }
       } catch (error) {
        alert(error.response.data.message)
       }
    }

    const handleUpdate=async(compaignId)=>{
      navigate(`/create/${compaignId}`)
    }

    const handleDeleteCompaign=async(id)=>{
      try {
        const token = localStorage.getItem("token")
      const response = await axios.delete(`https://email-compaign.onrender.com/api/${id}`,{
        headers : {
          Authorization : `Bearer ${token}`
        }
      })

      if(response.status===200){
        alert(response.data.message)
      }
      } catch (error) {
        console.log(error.response.data.message)
      }
    }

    useEffect(()=>{
        fetchCompaign()
    },[handleDeleteCompaign])

  return (
    <div>
       <Box p={6}>
      <Heading as="h1" mb={6} textAlign="center">
        All Campaigns
      </Heading>
      
      {data.length === 0 && (
        <Text>No campaigns available.</Text>
      )}

      <Stack spacing={4}>
        {data.map((campaign) => (
            <>
          <Box
            key={campaign._id}
            p={4}
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
          >
            <Heading size="md" mb={2}>
             <b>Subject</b>  : {campaign.subject}
            </Heading>
            <Text mb={2}><b>Name</b>  : {campaign.name}</Text>
            <Text mb={2}><b>Description</b>  :{campaign.description}</Text>
            <Text mb={2}><b>Email Content</b>  :{campaign.emailContent}</Text>
            <Text>
              <b>Recipients</b> : {campaign.recipients.join(", ")}
            </Text>
            <Text mt={2}>
              <b>Created At</b> : {new Date(campaign.createdAt).toLocaleString()}
            </Text>
            <Text mt={2}>
              <b>Scheduled At</b> : {new Date(campaign.scheduledAt).toLocaleString()}
            </Text>
         <div style={{marginTop : "10px"}}>
         <Button bg="green.400" color="white" _hover={{ bg: "green.500" }} transition="background 0.2s ease-in-out" onClick={()=>handleBulkEmail(campaign._id)}>Send Compaign</Button>
            <Button ml="5px" color="white"  bg="blue.400" _hover={{ bg: "blue.500" }} transition="background 0.2s ease-in-out" onClick={()=>handleUpdate(campaign._id)}>Update</Button>
            <Button ml="5px" color="white"  bg="red.400" _hover={{ bg: "red.500" }} transition="background 0.2s ease-in-out" onClick={()=>handleDeleteCompaign(campaign._id)}>Delete</Button>
         </div>
          </Box>
          </>
        ))}
      </Stack>
    </Box> 
    </div>
  )
}

export default CompaignPage
