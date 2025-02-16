import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import { Avatar, Box, Divider, List, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import ChatBox from './ChatBox';
import userServiceApi from '../../service/UserService';
import { toast } from 'react-toastify';
// import PersonIcon from '@mui/icons-material/Person';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function ChatSideBar({ receiverUser, sendMessage, privateMessages, loggedinUser, handleOnSelectUser }) {
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

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box sx={{ width: '25vw', display: "flex", flexDirection: "column", height: "100%" }}>
        <ChatHeader />
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search users"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box", border: "none", outline: "none" }}
          />
        </Box>
        <List sx={{ p: 0, overflowY: "auto", flex: "" }}>
          {filteredUsers.map((item) => (
            <ListItemButton
              alignItems="center"
              key={item.id}
              onClick={() => {
                console.log('selectedUser', item);
                handleOnSelectUser(item);
              }}
              selected={receiverUser?.id === item.id}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
              />
            </ListItemButton>
          ))}
          <Divider component="li" />
        </List>
      </Box>
      {receiverUser && privateMessages && <ChatBox receiverUser={receiverUser} privateMessages={privateMessages} sendMessage={sendMessage} loggedinUser={loggedinUser} />}
    </>
  );
}
