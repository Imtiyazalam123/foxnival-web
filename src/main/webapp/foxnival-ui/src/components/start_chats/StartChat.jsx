import React from 'react'
import ChatSideBar from './ChatSideBar'
import { Paper } from '@mui/material'

export default function startchat() {
  return (
    <Paper square elevation = {0} sx={{width: "100vh"}}>
    <ChatSideBar/>
    </Paper>
  )
}
