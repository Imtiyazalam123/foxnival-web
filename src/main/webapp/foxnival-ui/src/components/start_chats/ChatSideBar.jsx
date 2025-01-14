import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import { Avatar, Box, Divider, List, ListItemAvatar, ListItemButton, ListItemText, Tab, Tabs, Typography } from '@mui/material'
import ChatBox from './ChatBox';
import userServiceApi from '../../service/UserService';
import { toast } from 'react-toastify';
// import PersonIcon from '@mui/icons-material/Person';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function ChatSideBar({ setReceiver, sendMessage, messages, setMessages }) {
  const [value, setValue] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userServiceApi.getAllUsers()
      .then((response) => {
        console.log("res ", response);
        setUsers(response?.data)
        toast.success("Users fatched.")
      }).catch((error) => {
        console.error(error);
        toast.error(error?.data);
      })
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const loadMessageOnSlectUser = () => {

    const date1 = new Date('2024-12-27T03:25:00');
    const date2 = new Date('1995-12-27T03:26:00');
    const date3 = new Date('1995-12-27T03:27:00');

    let msg = [{
      sender: {
        id: 1,
        userName: 'Imtiyaj Ansari',
      },
      content: "Hello, How are you bro !!!!",
      receiver: {
        id: 2,
        userName: 'Rohit Abc',
      },
      createdDate: date1
    },
    {
      sender: {
        id: 2,
        userName: 'Imtiyaj Ansari',
      },
      content: "Good and how are you !!!!!",
      receiver: {
        id: 1,
        userName: 'Rohit Abc',
      },
      createdDate: date2
    },
    {
      sender: {
        id: 1,
        userName: 'Imtiyaj Ansari',
      },
      content: "Greate !!!!!!!!!",
      receiver: {
        id: 2,
        userName: 'Rohit Abc',
      },
      createdDate: date3
    }]

    setMessages((prev) => [...prev, msg]);

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
            {users?.map((item) => (
              <ListItemButton
                alignItems="flex-start"
                key={item?.id}
                onClick={() => {
                  setSelectedUser(item);
                  console.log('user', selectedUser);
                  loadMessageOnSlectUser();
                  setReceiver(item?.username)
                }}
                selected={selectedUser?.id === item?.id}
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={item?.name}
                  secondary={

                    <Typography
                      variant="caption"
                      sx={{ color: 'text.primary' }}
                    >
                      {item?.username}
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
      {selectedUser && messages && <ChatBox selectedUser={selectedUser} messages={messages} sendMessage={sendMessage} />}
    </>
  )
}
