import { Box } from '@mui/material'
import React from 'react'
import ChatBoxHeader from './ChatBoxHeader'
import ChatArea from './ChatArea'
import ChatFooter from './ChatFooter'


export default function ChatBox({selectedUser}) {
  return (

    <Box sx = {{width: "50vw", display: "flex", flexDirection: "column", height: "100%"}}>
        <ChatBoxHeader selectedUser = {selectedUser}/>
        <ChatArea/>
        <ChatFooter/>
    </Box>
  )
}
