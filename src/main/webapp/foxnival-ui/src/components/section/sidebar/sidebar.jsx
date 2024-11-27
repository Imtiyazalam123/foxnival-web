import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  IconButton,
  Toolbar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Icon } from '@iconify/react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 270;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const menuItems = [
    { 
      text: 'Dashboard', 
      icon: 'material-symbols:dashboard',
      path: '/dashboard' 
    },
    { 
      text: 'Assigned Task', 
      icon: 'material-symbols:assignment',
      path: '/assigntask' 
    },
    { 
      text: 'Manage User', 
      icon: 'material-symbols:manage-accounts',
      path: '/manageuser' 
    },
    { 
      text: 'Start Chat', 
      icon: 'material-symbols:chat',
      path: '/startchat' 
    },
    { 
      text: 'Registered Customer', 
      icon: 'material-symbols:person',
      path: '/registeredcustomer' 
    },
    { 
      text: 'Manage To Do List', 
      icon: 'material-symbols:checklist',
      path: '/managetodolist' 
    },
    { 
      text: 'Help', 
      icon: 'material-symbols:help',
      path: '/help' 
    }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />
      <Box sx={{ mt: 2 }}>
        <List>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <ListItem 
                key={item.text} 
                component={Link} 
                to={item.path}
                onClick={() => isMobile && handleDrawerToggle()}
                sx={{
                  py: 1.5,
                  px: 3,
                  backgroundColor: isActive ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                  },
                  position: 'relative',
                  '&::before': isActive ? {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    backgroundColor: theme.palette.primary.main,
                  } : {},
                }}
              >
                <ListItemIcon 
                  sx={{ 
                    minWidth: 40,
                    color: isActive ? theme.palette.primary.main : 'inherit'
                  }}
                >
                  <Icon icon={item.icon} width="24" height="24" />
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? theme.palette.primary.main : 'inherit'
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      {/* Mobile Hamburger Icon */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ 
          mr: 2, 
          display: { sm: 'none' },
          position: 'fixed',
          left: 16,
          top: 8,
          zIndex: theme.zIndex.drawer + 2,
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            backgroundColor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'background.paper',
            borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            height: '100vh',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;