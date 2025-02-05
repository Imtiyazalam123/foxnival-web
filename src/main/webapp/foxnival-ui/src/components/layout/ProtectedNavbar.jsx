import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import { Box, Toolbar } from '@mui/material';
import PrivateRoute from '../../PrivateRoute';
import { useEffect, useState } from 'react';
import userServiceApi from '../../service/UserService';
import { toast } from 'react-toastify';

export default function ProtectedNavbar() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      userServiceApi.getUserById(user?.id)
        .then((response) => {
          setLoggedInUser(response?.data);
        }).catch((error) => {
          toast.error(error?.response?.data?.errorMessage || "Error fetching user details");
          console.error('Error fetching user details: ', error);
        })
    }
  }, []);

  return (
    <PrivateRoute>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        <Box component="main" sx={{ flex: 1 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </PrivateRoute>
  );
}