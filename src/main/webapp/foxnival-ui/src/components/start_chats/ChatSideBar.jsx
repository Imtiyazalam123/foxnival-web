import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import { Avatar, Box, Divider, List, ListItemAvatar, ListItemButton, ListItemText, Tab, Tabs, Typography } from '@mui/material'
import ChatBox from './ChatBox';
// import PersonIcon from '@mui/icons-material/Person';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function ChatSideBar() {
  const [value, setValue] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);

  let users = [
    {
      id: 1,
      name: 'Rohid Abcd',
      designation: 'Front end devloper'
    },
    {
      id: 2,
      name: 'Aman Abcd',
      designation: 'Owner'
    },
    {
      id: 3,
      name: 'Amjad Abcd',
      designation: 'Civil engineer'
    },
    {
      id: 4,
      name: 'Chand Abcd',
      designation: 'Civil enigineer'
    },
    {
      id: 5,
      name: 'Akash',
      designation: 'Front end devloper'
    },
    {
      id: 6,
      name: 'Rohid Abcd',
      designation: 'Front end devloper'
    },
    {
      id: 7,
      name: 'Rohid Abcd',
      designation: 'Front end devloper'
    },
    {
      id: 8,
      name: 'Rohid Abcd',
      designation: 'Front end devloper'
    },
  ]
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <>
    <Box sx={{ width: '25vw', display: "flex", flexDirection: "column", height: "100%" }}>
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

        <List sx={{ p: 0, overflowY: "auto", flex: "" }}>
          {users?.map((user) => (
            <ListItemButton
              alignItems="flex-start"
              key={user?.id}
              onClick={() => {setSelectedUser(user); console.log(selectedUser);
                console.log('user', selectedUser);
              }}
              selected={selectedUser?.id === user?.id}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={user?.name}
                secondary={

                  <Typography
                    variant="caption"
                    sx={{ color: 'text.primary' }}
                  >
                    {user?.designation}
                  </Typography>
                }
              />
            </ListItemButton>
          ))
          }
          <Divider component="li" />

        </List>

      }
      {value === 1 && <div>1</div>}

    </Box>
     <ChatBox selectedUser = {selectedUser}/>
    </>
  )
}
