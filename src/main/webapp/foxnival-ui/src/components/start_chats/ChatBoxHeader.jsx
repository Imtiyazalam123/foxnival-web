
import { Avatar, Button, Card, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallIcon from '@mui/icons-material/Call';

export default function ChatBoxHeader() {
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
                            IA
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
                title="Rohit Abcccc"
                subheader={
                    <Typography variant='caption'>
                        Frontend developer
                    </Typography>
                }
            />
        </Card>
    )
}
