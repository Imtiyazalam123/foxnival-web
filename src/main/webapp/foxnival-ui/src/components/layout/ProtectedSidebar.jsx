import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../section/sidebar/sidebar';
import PrivateRoute from '../../PrivateRoute';

export default function ProtectedSidebar() {
  const drawerWidth = 270;

  return (
    <PrivateRoute>

      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            //   ml: { sm: `${drawerWidth}px` }
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </PrivateRoute>
  );
}