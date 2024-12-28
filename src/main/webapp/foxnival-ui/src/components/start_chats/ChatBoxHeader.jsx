
import { Avatar, Button, Card, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallIcon from '@mui/icons-material/Call';

export default function ChatBoxHeader({selectedUser}) {
    return (

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
                            {selectedUser?.name?.split(' ').map(function(item){return item[0]}).join('')}
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
                title={selectedUser?.name}
                subheader={
                    <Typography variant='caption'>
                        {selectedUser?.designation}
                    </Typography>
                }
            />
        </Card>
    )
}
