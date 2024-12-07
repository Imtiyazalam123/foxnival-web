import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Tab, Tabs, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function ChatSideBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box sx={{ width: '25vw', display: "flex", flexDirection: "column", height: "100%"}}>
      <ChatHeader />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant='fullWidth'>

        <Tab
          // icon={<ChatBubbleOutlineIcon/>} 
          // iconPosition='start'
          label="Chat List" />
        <Tab
          // icon={<PersonIcon/>} 
          // iconPosition='start' 
          label="User List" />
      </Tabs>

      {value === 0 &&

        <List sx={{p: 0, overflowY: "auto", flex: "1 0"}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Rohit Abcccc"
              secondary={
                
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.primary' }}
                  >
                    Ali Connors
                  </Typography>
              }
            />
          </ListItem>
          <Divider  component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Rohit Abcccc"
              secondary={
                
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.primary' }}
                  >
                    Ali Connors
                  </Typography>
              }
            />
          </ListItem>
          <Divider  component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Rohit Abcccc"
              secondary={
                
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.primary' }}
                  >
                    Ali Connors
                  </Typography>
              }
            />
          </ListItem>
          <Divider  component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Rohit Abcccc"
              secondary={
                
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.primary' }}
                  >
                    Ali Connors
                  </Typography>
              }
            />
          </ListItem>
          <Divider  component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Rohit Abcccc"
              secondary={
                
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.primary' }}
                  >
                    Ali Connors
                  </Typography>
              }
            />
          </ListItem>
          <Divider  component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Rohit Abcccc"
              secondary={
                
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.primary' }}
                  >
                    Ali Connors
                  </Typography>
              }
            />
          </ListItem>
          <Divider  component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Rohit Abcccc"
              secondary={
                
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.primary' }}
                  >
                    Ali Connors
                  </Typography>
              }
            />
          </ListItem>
          <Divider  component="li" />
        </List>

      }
      {value === 1 && <div>1</div>}

    </Box>
  )
}
