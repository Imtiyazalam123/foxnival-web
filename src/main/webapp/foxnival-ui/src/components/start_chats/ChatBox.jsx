import { Box } from '@mui/material'
import React from 'react'
import ChatBoxHeader from './ChatBoxHeader'
import ChatFooter from './ChatFooter'


export default function ChatBox({receiverUser, privateMessages, sendMessage, loggedinUser}) {
  return (

    <Box sx = {{width: "50vw", display: "flex", flexDirection: "column", height: "100%"}}>
        <ChatBoxHeader receiverUser = {receiverUser} privateMessages = {privateMessages} loggedinUser = {loggedinUser}/>
      <ChatFooter sendMessage = {sendMessage} receiverUser = {receiverUser} />
    </Box>
  )
}
