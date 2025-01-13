// import { useState } from 'react'; // Add this for useState hook
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   IconButton, 
//   Menu, 
//   MenuItem 
// } from "@mui/material";
// import { AccountCircle, Notifications } from '@mui/icons-material'; // Add icons import

// const Header = () => {
//     const [anchorEl, setAnchorEl] = useState(null);
  
//     const handleMenu = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
  
//     const handleClose = () => {
//       setAnchorEl(null);
//     };
  
//     return (
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1}}>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Company Name
//           </Typography>
//           <IconButton size="large" color="inherit">
//             <Notifications />
//           </IconButton>
//           <div>
//             <IconButton
//               size="large"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleMenu}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//             <Menu
//               sx={{ mt: '30px' }}
//               id="menu-appbar"
//               anchorEl={anchorEl}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose}>Profile</MenuItem>
//               <MenuItem onClick={handleClose}>My account</MenuItem>
//               <MenuItem onClick={handleClose}>Logout</MenuItem>
//             </Menu>
//           </div>
//         </Toolbar>
//       </AppBar>
//     );
//   };

// export default Header;



import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Badge, Box, Avatar } from '@mui/material';
import { Notifications, Settings, ExitToApp } from '@mui/icons-material';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const [notifications] = useState([
    { id: 1, text: 'New task assigned', time: '5m ago' },
    { id: 2, text: 'Meeting reminder', time: '10m ago' },
    { id: 3, text: 'Project update', time: '1h ago' }
  ]);

  const handleProfileMenu = (event) => setAnchorEl(event.currentTarget);
  const handleNotificationMenu = (event) => setNotificationAnchor(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null);
    setNotificationAnchor(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            color: '#1976d2',
            fontWeight: 'bold'
          }}
        >
          Company Name
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            size="large"
            onClick={handleNotificationMenu}
            sx={{ color: '#666' }}
          >
            <Badge badgeContent={notifications.length} color="error">
              <Notifications />
            </Badge>
          </IconButton>

          <IconButton
            onClick={handleProfileMenu}
            sx={{ 
              ml: 1,
              border: '2px solid #e0e0e0',
              padding: '4px'
            }}
          >
            <Avatar sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Box>

        <Menu
          anchorEl={notificationAnchor}
          open={Boolean(notificationAnchor)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              width: '320px',
              maxHeight: '400px',
              mt: 1.5
            }
          }}
        >
          <Typography sx={{ p: 2, fontWeight: 'bold', borderBottom: '1px solid #eee' }}>
            Notifications
          </Typography>
          {notifications.map((notification) => (
            <MenuItem key={notification.id} sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              borderBottom: '1px solid #f5f5f5',
              py: 1.5
            }}>
              <Typography variant="body2">{notification.text}</Typography>
              <Typography variant="caption" color="text.secondary">
                {notification.time}
              </Typography>
            </MenuItem>
          ))}
        </Menu>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: { mt: 1.5 }
          }}
        >
          <MenuItem onClick={handleClose}>
            <Settings sx={{ mr: 1, fontSize: 20 }} />
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ExitToApp sx={{ mr: 1, fontSize: 20 }} />
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;