import { Box, Typography } from '@mui/material'
import React from 'react'


export default function ChatArea({ receiverUser, privateMessages, loggedinUser }) {

  // let loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'))
  // console.log(loggedinUser);
  console.log("privateMessages in area ", privateMessages);

  return (
    receiverUser && <Box flex={1} p={2} overflow="auto">
      {privateMessages?.get(receiverUser?.id)?.map((msg, index) => (
        <Box
          key={index}
          mb={2}
          display="flex"
          flexDirection="column"
          alignItems={
            msg.senderId === loggedinUser?.id ? "flex-end" : "flex-start"
          }
        >
          <Box
            bgcolor={
              msg.senderId === loggedinUser?.id ? "#e3f2fd" : "#f5f5f5"
            }
            p={1.5}
            borderRadius={2}
          >
            <Typography>{msg.text}</Typography>
            <Typography variant="caption" color="textSecondary">
              {new Date(msg.timestamp).toLocaleString()}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )
}
