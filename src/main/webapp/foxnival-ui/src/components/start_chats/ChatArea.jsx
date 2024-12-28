import { Avatar, Box, Chip, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ChatArea() {
  return (
    <Box sx={{ overflowY: 'auto', flex: '1 0 0', background: '#f5f5f0' }}>

      <Stack direction="row" justifyContent="center"
        sx={{
          py: 2,
          position: 'sticky',
          top: 0,
          zIndex: 2,
          background: '#f5f5f0'
        }}
      >
        <Chip label="Today" />
      </Stack>
      <List sx={{ p: 0, overflowY: "auto", flex: "" }}>
        <ListItem sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', width: '80%' }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"> RA</Avatar>
            </ListItemAvatar>
            <Paper sx={{ width: '100%', p: 1.5 }}>
              <ListItemText
                sx={
                  {
                    m: 0
                  }
                }
                primary="Rohit Abcccc"
                secondary={

                  <Typography
                    variant="caption"
                    sx={{ color: 'text.primary' }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ratione. Quo,
                    voluptates rem itaque, molestias sit minima facilis aliquid commodi fuga dolor dolorem incidunt nihil consectetur aliquam deserunt. Alias, qui!
                  </Typography>
                }
              />
              <Box sx={{ mt: 1, alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant='body2'>
                  12:20 PM
                </Typography>
                <Box>
                  <IconButton size='small'>
                    <ReplyIcon />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>

        <ListItem sx={{ display: 'flex', flexDirection: 'row-reverse', mb: 2 }}>
          <Box sx={{ display: 'flex', width: '80%', flexDirection: 'row-reverse' }}>
            <ListItemAvatar
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse'
              }}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >IA</Avatar>
            </ListItemAvatar>
            <Paper sx={{ width: '100%', p: 1.5, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
              <ListItemText
                sx={
                  {
                    m: 0
                  }
                }
                primary="Imtiyaj Ansari"
                secondary={

                  <Typography
                    variant="caption"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ratione. Quo,
                    voluptates rem itaque, molestias sit minima facilis aliquid commodi fuga dolor dolorem incidunt nihil consectetur aliquam deserunt. Alias, qui!
                  </Typography>
                  
                }
              />
              <Box sx={{ mt: 1, alignItems: 'center', display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant='body2'>
                  12:21 PM
                </Typography>
                <Box>
                  <IconButton size='small'>
                    <ReplyIcon />
                  </IconButton>
                  <IconButton size='small' color='error'>
                    <DeleteOutlineIcon />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </ListItem>
      </List>

    </Box>
  )
}
