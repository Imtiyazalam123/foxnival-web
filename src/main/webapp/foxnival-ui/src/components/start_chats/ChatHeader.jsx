import { Avatar, Card, CardHeader, IconButton, Typography } from '@mui/material'
import { MoreVerticalIcon } from 'lucide-react'
import React from 'react'

export default function ChatHeader() {
  return (
    <Card sx = {{bgcolor: "primary.light", borderRadius: 0, color: "primary.contrastText"}}>
    <CardHeader
      avatar={
        <Avatar >
          IA
        </Avatar>
      }
      action={
        <IconButton aria-label="settings" sx = {{color: "primary.contrastText"}}>
          <MoreVerticalIcon/>
        </IconButton>
      }
      title="Imtiyj Ansari"
      subheader={
        <Typography variant='caption'>
            Software developer
        </Typography>
      }
    />
    </Card>
  )
}
