// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Avatar, Button } from '@mui/material';
// import { Notifications, AccountCircle, Settings } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import AccountDrawer from '../section/useraccount/accountsettings';
// import AccountSettings from '../section/useraccount/accountsettings';
// import AccountDashboard from '../section/useraccount/accountdashboard';

// const Header = () => {
//   const [notificationAnchor, setNotificationAnchor] = useState(null);
//   const [notifications] = useState([
//     { id: 1, text: 'New task assigned', time: '5m ago' },
//     { id: 2, text: 'Meeting reminder', time: '10m ago' },
//     { id: 3, text: 'Project update', time: '1h ago' }
//   ]);

//   const [accountDrawerOpen, setAccountDrawerOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: 'John',
//     lastName: 'Doe',
//     displayName: 'johndoe',
//     email: 'johndoe@example.com',
//     mobileNumber: '1234567890'
//   });

//   const navigate = useNavigate();

//   const handleNotificationMenu = (event) => setNotificationAnchor(event.currentTarget);
//   const handleNotificationClose = () => {
//     setNotificationAnchor(null);
//   };

//   const handleAccountDrawerOpen = () => {
//     setAccountDrawerOpen(true);
//   };

//   const handleAccountDrawerClose = () => {
//     setAccountDrawerOpen(false);
//   };

//   const handlePasswordChange = ({ currentPassword, newPassword }) => {
//     // Handle password change logic here
//     console.log('Current Password:', currentPassword);
//     console.log('New Password:', newPassword);
//   };

//   const handleLogout = () => {
//     sessionStorage.clear();
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <React.Fragment>
//       <AppBar
//         position="fixed"
//         sx={{
//           zIndex: (theme) => theme.zIndex.drawer + 1,
//           backgroundColor: 'white',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
//         }}
//       >
//         <Toolbar>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{
//               flexGrow: 1,
//               color: '#1976d2',
//               fontWeight: 'bold'
//             }}
//           >
//             Company Name
//           </Typography>

//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <IconButton
//               size="large"
//               onClick={handleNotificationMenu}
//               sx={{ color: '#666' }}
//             >
//               <Badge badgeContent={notifications.length} color="error">
//                 <Notifications />
//               </Badge>
//             </IconButton>

//               <IconButton
//                 sx={{
//                   ml: 1,
//                   border: '2px solid #e0e0e0',
//                   padding: '4px'
//                 }}
//               >
//                 <Settings sx={{ fontSize: 28, color: '#666' }} />
//               </IconButton>
//             <IconButton
//               onClick={handleAccountDrawerOpen}
//               sx={{
//                 ml: 1,
//                 border: '2px solid #e0e0e0',
//                 padding: '4px'
//               }}
//             >
//               <AccountCircle sx={{ fontSize: 28, color: '#666' }} />
//             </IconButton>

//           </Box>
//         </Toolbar>
//       </AppBar>

//       <AccountDashboard
//   open={accountDrawerOpen}
//   onClose={handleAccountDrawerClose}
//   formData={formData}
//   onLogout={handleLogout}
// />
//     </React.Fragment>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box } from '@mui/material';
import { Notifications, AccountCircle, Settings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AccountDashboard from '../section/useraccount/accountdashboard';
import AccountDetails from '../section/useraccount/accountdetails';
import AccountSettings from '../section/useraccount/accountsettings';

const Header = () => {
  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const [currentDrawer, setCurrentDrawer] = useState('dashboard');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, text: 'New task assigned', time: '5m ago' },
    { id: 2, text: 'Meeting reminder', time: '10m ago' },
    { id: 3, text: 'Project update', time: '1h ago' }
  ]);

  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    displayName: 'johndoe',
    email: 'johndoe@example.com',
    mobileNumber: '1234567890',
    profilePhoto: '' // Add profile photo URL if available
  });

  const navigate = useNavigate();

  const handleNotificationMenu = (event) => setNotificationAnchor(event.currentTarget);
  const handleNotificationClose = () => setNotificationAnchor(null);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
    // Reset to dashboard after animation completes
    setTimeout(() => setCurrentDrawer('dashboard'), 300);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleNavigate = (drawer) => {
    setCurrentDrawer(drawer);
  };

  const handleBack = () => {
    setCurrentDrawer('dashboard');
  };

  const handlePasswordChange = ({ currentPassword, newPassword }) => {
    console.log('Password change requested', { currentPassword, newPassword });
    // Implement password change logic here
  };

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate('/login');
  };

  return (
    <React.Fragment>
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
              sx={{
                ml: 1,
                border: '2px solid #e0e0e0',
                padding: '4px'
              }}
            >
              <Settings sx={{ fontSize: 28, color: '#666' }} />
            </IconButton>

            <IconButton
              onClick={handleDrawerOpen}
              sx={{
                ml: 1,
                border: '2px solid #e0e0e0',
                padding: '4px'
              }}
            >
              <AccountCircle sx={{ fontSize: 28, color: '#666' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {currentDrawer === 'dashboard' && (
        <AccountDashboard
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          formData={formData}
          onLogout={handleLogout}
          onNavigate={handleNavigate}
        />
      )}
      
      {currentDrawer === 'details' && (
        <AccountDetails
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          formData={formData}
          onBack={handleBack}
        />
      )}
      
      {currentDrawer === 'settings' && (
        <AccountSettings
          open={isDrawerOpen}
          onClose={handleDrawerClose}
          formData={formData}
          onSubmit={handlePasswordChange}
          onLogout={handleLogout}
          onBack={handleBack}
        />
      )}
    </React.Fragment>
  );
};

export default Header;