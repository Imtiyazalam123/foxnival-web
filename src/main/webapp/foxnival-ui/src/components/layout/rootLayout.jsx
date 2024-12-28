import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import { Box, Toolbar } from '@mui/material';

export default function RootLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Toolbar /> 
        <Outlet />
      </Box>
    </Box>
  );
}