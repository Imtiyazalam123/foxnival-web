import { Box } from '@mui/material'
import React from 'react'
import ChatBoxHeader from './ChatBoxHeader'
import ChatFooter from './ChatFooter'


export default function ChatBox({selectedUser, messages, sendMessage}) {
  return (

    <Box sx = {{width: "50vw", display: "flex", flexDirection: "column", height: "100%"}}>
        <ChatBoxHeader selectedUser = {selectedUser} messages = {messages}/>
      <ChatFooter sendMessage = {sendMessage} selectedUser = {selectedUser} />
    </Box>
  )
}
