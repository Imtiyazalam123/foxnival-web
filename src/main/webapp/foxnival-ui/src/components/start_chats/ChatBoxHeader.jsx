
import { Avatar, Button, Card, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallIcon from '@mui/icons-material/Call';
import ChatArea from './ChatArea'

export default function ChatBoxHeader({receiverUser, privateMessages, loggedinUser}) {
    return (
     <>
     
        <Card 
        elevation={0}
        sx={{ borderRadius: 0}}>
            <CardHeader
                avatar={
                    <>
                        <Button sx = {{minWidth: "auto", mr: 1}}>
                            <ArrowBackIcon />
                        </Button>
                        <Avatar >
                            {receiverUser?.name?.split(' ').map(function(item){return item[0]}).join('')}
                        </Avatar>
                    </>
                }
                action={
                    <>
                        <IconButton>
                            <CallIcon />
                        </IconButton>
                    </>
                }
                title={receiverUser?.name}
                subheader={
                    <Typography variant='caption'>
                        {receiverUser?.username}
                    </Typography>
                }
            />
        </Card>

        <ChatArea  receiverUser = {receiverUser} privateMessages = {privateMessages} loggedinUser = {loggedinUser} />
     </>
    )
}
