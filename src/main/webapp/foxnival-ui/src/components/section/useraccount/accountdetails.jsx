import React from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Drawer,
  IconButton 
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import UserProfile from './userprofilephoto';

const AccountDetails = ({ open, onClose, formData, onBack }) => {
  // Dummy data for designation and last login time
  const dummyData = {
    designation: "Software Engineer",
    lastLoggedIn: "January 26, 2025, 10:30 AM"
  };

  // Merge dummy data with provided formData
  const updatedFormData = { 
    ...formData, 
    designation: formData.designation || dummyData.designation, 
    lastLoggedIn: formData.lastLoggedIn || dummyData.lastLoggedIn 
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
      <Box p={4}>
        <Box display="flex" alignItems="center" mb={4}>
          <IconButton onClick={onBack} sx={{ mr: 2 }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h4">
            Account Details
          </Typography>
        </Box>
        
        <UserProfile
          name={updatedFormData.firstName + ' ' + updatedFormData.lastName}
          email={updatedFormData.email}
          profilePhoto={updatedFormData.profilePhoto}
        />

        <Box component="form" sx={{ mt: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Full Name */}
            <TextField
              fullWidth
              label="Full Name"
              value={updatedFormData.firstName + ' ' + updatedFormData.lastName}
              InputProps={{ readOnly: true }}
            />
            {/* Email Address */}
            <TextField
              fullWidth
              label="Email Address"
              value={updatedFormData.email}
              InputProps={{ readOnly: true }}
            />
            {/* Mobile Number */}
            <TextField
              fullWidth
              label="Mobile Number"
              value={updatedFormData.mobileNumber}
              InputProps={{ readOnly: true }}
            />
            {/* Designation */}
            <TextField
              fullWidth
              label="Designation"
              value={updatedFormData.designation}
              InputProps={{ readOnly: true }}
            />
            {/* Last Logged In */}
            <TextField
              fullWidth
              label="Last Logged In"
              value={updatedFormData.lastLoggedIn}
              InputProps={{ readOnly: true }}
            />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AccountDetails;
