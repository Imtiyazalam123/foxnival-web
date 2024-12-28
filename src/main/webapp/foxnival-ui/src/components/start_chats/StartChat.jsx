import React from 'react'
import ChatSideBar from './ChatSideBar'
import { Paper } from '@mui/material'
import ChatBox from './ChatBox';

export default function StartChat() {

    return (
      <Paper square elevation = {0} sx={{height: "100vh", display: 'flex'}}>
      <ChatSideBar/>
      {/* <ChatBox/> */}
      </Paper>
    );
}
