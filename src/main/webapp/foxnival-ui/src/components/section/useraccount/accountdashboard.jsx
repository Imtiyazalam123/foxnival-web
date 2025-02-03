
import React from 'react';
import {
  Box,
  Button,
  Drawer,
  Typography,
  Avatar,
  Divider
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const AccountDashboard = ({ open, onClose, loggedInUser, onLogout, onNavigate }) => {
  const handleAccountDetailsOpen = () => {
    onNavigate('details');
  };

  const handleAccountSettingsOpen = () => {
    onNavigate('settings');
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '50%',
          minWidth: '400px',
          maxWidth: '600px',
          height: '100%',
          zIndex: (theme) => theme.zIndex.modal
        }
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 1
      }}
    >
      <Box
        sx={{
          p: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
          <Avatar >
            <AccountCircle sx={{ width: 70, height: 70 }} />
          </Avatar>
          <Box>
            <Typography variant="h5">
              {loggedInUser?.name || 'NA'}
            </Typography>
            <Typography variant="h7" color="text.secondary">
              Logged in as {loggedInUser?.role?.charAt(0).toUpperCase() + loggedInUser?.role?.slice(1) || 'Unknown'}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mt: 2, mb: 3, width: '100%', borderColor: '#424242', borderWidth: 2 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleAccountDetailsOpen}
            sx={{
              py: 1.5,
              borderWidth: 2,
              fontWeight: 'bold',
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: 'primary.main',
                color: 'white',
              },
            }}
          >
            ACCOUNT DETAILS
          </Button>

          <Button
            variant="outlined"
            fullWidth
            onClick={handleAccountSettingsOpen}
            sx={{
              py: 1.5,
              borderWidth: 2,
              fontWeight: 'bold',
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: 'primary.main',
                color: 'white',
              },
            }}
          >
            EDIT ACCOUNT DETAILS
          </Button>
        </Box>

        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={onLogout}
            sx={{
              py: 1.5
            }}
          >
            LOGOUT
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AccountDashboard;