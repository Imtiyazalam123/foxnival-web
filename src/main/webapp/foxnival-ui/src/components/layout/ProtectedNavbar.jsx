import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import { Box, Toolbar } from '@mui/material';
import PrivateRoute from '../../PrivateRoute';

export default function ProtectedNavbar() {
  return (
    <PrivateRoute>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flex: 1 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </PrivateRoute>
  );
}