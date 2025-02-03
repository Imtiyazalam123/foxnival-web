import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const NavMenu = () => {
  const location = useLocation();
  
  const navItems = [
    { title: 'Home', path: '/home' },
    { title: 'About Us', path: '/about' },
    { title: 'Login', path: '/login' },
    { title: 'Contact us', path: '/contact' }
  ];

  return (
    <Box
    maxWidth="lg"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        py: 3,
        bgcolor: 'white',
        // position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1000
      }}
    >
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{ textDecoration: 'none' }}
        >
          <Typography
            sx={{
              color: location.pathname === item.path ? 'white' : '#1e3957',
              fontSize: 16,
              fontWeight: 500,
              bgcolor: location.pathname === item.path ? '#1976d2' : 'transparent',
              padding: '8px 24px',
              borderRadius: '4px',
              '&:hover': {
                color: location.pathname === item.path ? 'white' : '#1976d2'
              }
            }}
          >
            {item.title}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

export default NavMenu;