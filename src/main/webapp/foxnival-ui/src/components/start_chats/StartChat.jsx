// import React from 'react'
// import ChatSideBar from './ChatSideBar'
// import { Paper } from '@mui/material'

// export default function startchat() {
//   return (
//     <Paper square elevation = {0} sx={{width: "100vh"}}>
//     <ChatSideBar/>
//     </Paper>
//   )
// }
import React, { useState } from 'react';
import { 
  Box, 
  List, 
  ListItem, 
  ListItemAvatar, 
  Avatar, 
  ListItemText, 
  Typography, 
  TextField, 
  IconButton, 
  Paper, 
  Container,
  Grid
} from '@mui/material';
import { 
  Send as SendIcon, 
  AttachFile as AttachFileIcon, 
  EmojiEmotions as EmojiIcon 
} from '@mui/icons-material';

// Mock contact data
const contacts = [
  { 
    id: 1, 
    name: 'Deja Brady', 
    avatar: '/api/placeholder/50/50', 
    lastMessage: 'Hey, how are you?' 
  },
  { 
    id: 2, 
    name: 'Harrison Stein', 
    avatar: '/api/placeholder/50/50', 
    lastMessage: 'Meeting at 2 PM' 
  },
  { 
    id: 3, 
    name: 'Reece Chung', 
    avatar: '/api/placeholder/50/50', 
    lastMessage: 'Project looks good' 
  },
  { 
    id: 4, 
    name: 'Lainey Davidson', 
    avatar: '/api/placeholder/50/50', 
    lastMessage: 'Dinner tonight?' 
  },
  { 
    id: 5, 
    name: 'Cristopher Cardenas', 
    avatar: '/api/placeholder/50/50', 
    lastMessage: 'Thanks for the update' 
  },
  { 
    id: 6, 
    name: 'Melanie Noble', 
    avatar: '/api/placeholder/50/50', 
    lastMessage: 'Can we discuss tomorrow?' 
  }
];

const ChatInterface = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Good morning!', sender: 'system' }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', py: 4 }}>
      <Paper elevation={3} sx={{ 
        display: 'flex', 
        width: '100%', 
        height: '100%', 
        overflow: 'hidden' 
      }}>
        <Grid container>
          {/* Contacts List */}
          <Grid 
            item 
            xs={4} 
            sx={{ 
              borderRight: '1px solid #e0e0e0', 
              height: '100%', 
              overflowY: 'auto' 
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}
            >
              Chats
            </Typography>
            <List>
              {contacts.map((contact) => (
                <ListItem 
                  key={contact.id} 
                  onClick={() => setSelectedContact(contact)}
                  sx={{ 
                    cursor: 'pointer', 
                    bgcolor: selectedContact.id === contact.id ? '#f0f0f0' : 'transparent' 
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src={contact.avatar} alt={contact.name} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={contact.name}
                    secondary={contact.lastMessage}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Chat Window */}
          <Grid item xs={8} sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* Chat Header */}
            <Box 
              sx={{ 
                p: 2, 
                borderBottom: '1px solid #e0e0e0', 
                display: 'flex', 
                alignItems: 'center' 
              }}
            >
              <Avatar 
                src={selectedContact.avatar} 
                alt={selectedContact.name} 
                sx={{ mr: 2 }} 
              />
              <Typography variant="h6">{selectedContact.name}</Typography>
            </Box>

            {/* Messages Area */}
            <Box 
              sx={{ 
                flexGrow: 1, 
                overflowY: 'auto', 
                p: 2,
                bgcolor: '#f9f9f9' 
              }}
            >
              {messages.map((msg, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    textAlign: msg.sender === 'user' ? 'right' : 'left',
                    mb: 2 
                  }}
                >
                  <Paper 
                    sx={{ 
                      display: 'inline-block', 
                      p: 1.5, 
                      bgcolor: msg.sender === 'user' ? '#e6f2ff' : '#f0f0f0' 
                    }}
                  >
                    <Typography variant="body1">{msg.text}</Typography>
                  </Paper>
                </Box>
              ))}
            </Box>

            {/* Message Input Area */}
            <Box 
              sx={{ 
                p: 2, 
                borderTop: '1px solid #e0e0e0', 
                display: 'flex', 
                alignItems: 'center' 
              }}
            >
              <IconButton>
                <AttachFileIcon />
              </IconButton>
              <IconButton>
                <EmojiIcon />
              </IconButton>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Write something awesome..."
                sx={{ mx: 2 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <IconButton 
                color="primary" 
                onClick={handleSendMessage}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ChatInterface;