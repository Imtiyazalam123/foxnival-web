import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import { Box, Toolbar } from '@mui/material';
import PrivateRoute from '../../PrivateRoute';
import { useEffect, useState } from 'react';

export default function ProtectedNavbar() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
    if (user) {
      setLoggedInUser(user);
      console.log('Logged in user:', user);

    }
  }, []);

  return (
    <PrivateRoute>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header loggedInUser = {loggedInUser}/>
        <Box component="main" sx={{ flex: 1 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </PrivateRoute>
  );
}