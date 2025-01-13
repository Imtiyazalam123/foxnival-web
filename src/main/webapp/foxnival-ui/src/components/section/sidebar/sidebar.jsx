// import React, { useState } from 'react';
// import {
//   Box,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   useTheme,
//   useMediaQuery
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import ChatIcon from '@mui/icons-material/Chat';
// import PersonIcon from '@mui/icons-material/Person';
// import ChecklistIcon from '@mui/icons-material/Checklist';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import HelpIcon from '@mui/icons-material/Help';
// import { Link, useLocation } from 'react-router-dom';

// const menuItems = [
//   { text: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
//   { text: 'Assigned Task', icon: AssignmentIcon, path: '/assigntask' },
//   { text: 'Manage User', icon: ManageAccountsIcon, path: '/manageuser' },
//   { text: 'Start Chat', icon: ChatIcon, path: '/startchat' },
//   { text: 'Registered Customer', icon: PersonIcon, path: '/registeredcustomer' },
//   { text: 'Manage To Do List', icon: ChecklistIcon, path: '/managetodolist' },
//   { text: 'Subscribers', icon: PersonAddIcon, path: '/subscribers' },
//   { text: 'Help', icon: HelpIcon, path: '/help' }
// ];

// const Sidebar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const location = useLocation();
//   const drawerWidth = 270;

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

//   const SidebarContent = () => (
//     <List>
//       {menuItems.map(({ text, icon: Icon, path }) => {
//         const isActive = location.pathname === path;
//         return (
//           <ListItem
//             key={text}
//             component={Link}
//             to={path}
//             onClick={() => isMobile && handleDrawerToggle()}
//             sx={{
//               py: 1.5,
//               px: 3,
//               bgcolor: isActive ? 'action.selected' : 'transparent',
//               '&:hover': { bgcolor: 'action.hover' },
//               borderLeft: isActive ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent'
//             }}
//           >
//             <ListItemIcon sx={{ color: isActive ? 'primary.main' : 'inherit', minWidth: 40 }}>
//               <Icon />
//             </ListItemIcon>
//             <ListItemText
//               primary={text}
//               primaryTypographyProps={{
//                 fontSize: '0.875rem',
//                 fontWeight: isActive ? 600 : 500,
//                 color: isActive ? 'primary.main' : 'inherit'
//               }}
//             />
//           </ListItem>
//         );
//       })}
//     </List>
//   );

//   return (
//     <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
//       <IconButton
//         onClick={handleDrawerToggle}
//         sx={{
//           position: 'fixed',
//           left: 16,
//           top: 8,
//           zIndex: theme.zIndex.drawer + 2,
//           display: { sm: 'none' }
//         }}
//       >
//         <MenuIcon />
//       </IconButton>

//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//         sx={{
//           display: { xs: 'block', sm: 'none' },
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             bgcolor: 'background.paper',
//             boxSizing: 'border-box'
//           }
//         }}
//       >
//         <SidebarContent />
//       </Drawer>

//       <Drawer
//         variant="permanent"
//         sx={{
//           display: { xs: 'none', sm: 'block' },
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             bgcolor: 'background.paper',
//             borderRight: 1,
//             borderColor: 'divider',
//             boxSizing: 'border-box'
//           }
//         }}
//         open
//       >
//         <SidebarContent />
//       </Drawer>
//     </Box>
//   );
// };

// export default Sidebar;


import React, { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HelpIcon from '@mui/icons-material/Help';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { text: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
  { text: 'Assigned Task', icon: AssignmentIcon, path: '/assigntask' },
  { text: 'Manage User', icon: ManageAccountsIcon, path: '/manageuser' },
  { text: 'Start Chat', icon: ChatIcon, path: '/startchat' },
  { text: 'Registered Customer', icon: PersonIcon, path: '/registeredcustomer' },
  { text: 'Manage To Do List', icon: ChecklistIcon, path: '/managetodolist' },
  { text: 'Subscribers', icon: PersonAddIcon, path: '/subscribers' },
  { text: 'Help', icon: HelpIcon, path: '/help' }
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const drawerWidth = 270;

  const SidebarContent = () => (
    <>
      <Toolbar />
      <List>
        {menuItems.map(({ text, icon: Icon, path }) => {
          const isActive = location.pathname === path;
          return (
            <ListItem
              key={text}
              component={Link}
              to={path}
              onClick={() => isMobile && setMobileOpen(false)}
              sx={{
                py: 2,
                px: 2.5,
                color: isActive ? '#1976d2' : '#fff',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.08)',
                  '& .MuiListItemIcon-root': {
                    color: '#1976d2'
                  }
                }
              }}
            >
              <ListItemIcon sx={{ 
                color: isActive ? '#1976d2' : '#fff',
                minWidth: 40
              }}>
                <Icon />
              </ListItemIcon>
              <ListItemText 
                primary={text}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 400
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <IconButton
        onClick={() => setMobileOpen(!mobileOpen)}
        sx={{
          position: 'fixed',
          left: 16,
          top: 8,
          zIndex: theme.zIndex.drawer + 1,
          display: { sm: 'none' },
          color: '#fff'
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            width: drawerWidth,
            bgcolor: '#1a1a1a',
            color: '#fff',
            boxSizing: 'border-box'
          }
        }}
      >
        <SidebarContent />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            bgcolor: '#1a1a1a',
            color: '#fff',
            border: 'none',
            boxSizing: 'border-box'
          }
        }}
        open
      >
        <SidebarContent />
      </Drawer>
    </Box>
  );
};

export default Sidebar;