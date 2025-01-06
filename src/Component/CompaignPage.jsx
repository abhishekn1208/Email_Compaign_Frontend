import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CompaignPage = () => {
    const [data, setData] = useState([])

    const fetchCompaign=async()=>{
        const response = await axios.get("https://email-compaign.onrender.com/api/")
        setData(response.data)
    }

    const handleBulkEmail=async(id)=>{
        console.log(id)
        const response = await axios.post(`https://email-compaign.onrender.com//api/sendemail/${id}/schedule/`,{})
        if(response.status===200){
            alert("All Email sent successfully")
        }
    }

    useEffect(()=>{
        fetchCompaign()
    },[])

  return (
    <div>


       <Box p={6}>
      <Heading as="h1" mb={6}>
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
              {campaign.subject}
            </Heading>
            <Text mb={2}>{campaign.emailContent}</Text>
            <Text>
              Recipients: {campaign.recipients.join(", ")}
            </Text>
            <Text mt={2}>
              Created At: {new Date(campaign.createdAt).toLocaleString()}
            </Text>
            <Button onClick={()=>handleBulkEmail(campaign._id)}>Send Compaign</Button>
            <Button ml="5px">Update</Button>
            <Button ml="5px">Delete</Button>
          </Box>
          </>
        ))}
      </Stack>
    </Box> 
    </div>
  )
}

export default CompaignPage
