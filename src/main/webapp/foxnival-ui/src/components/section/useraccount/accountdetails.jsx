import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Drawer,
  IconButton,
  Button
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import UserProfile from './userprofilephoto';
import { MANAGER, OWNER } from '../../../constant/Role';

const AccountDetails = ({ open, onClose, loggedInUser, onBack }) => {
  // Dummy data for designation and last login time
  const dummyData = {
    designation: "Software Engineer",
    lastLoggedIn: "January 26, 2025, 10:30 AM"
  };

  // Merge dummy data with provided formData
  const updatedFormData = {
    ...loggedInUser,
    designation: loggedInUser?.subscriber?.role || dummyData.designation,
    lastLoggedIn: dummyData.lastLoggedIn
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
              value={loggedInUser?.name}
              InputProps={{ readOnly: true }}
            />
            {/* Email Address */}
            <TextField
              fullWidth
              label="Email Address"
              value={loggedInUser?.username}
              InputProps={{ readOnly: true }}
            />
            {/* Mobile Number */}
            <TextField
              fullWidth
              label="Mobile Number"
              value={loggedInUser?.mobile}
              InputProps={{ readOnly: true }}
            />
            {/* Designation */}
            <TextField
              fullWidth
              label="Designation"
              value={loggedInUser?.role?.charAt(0).toUpperCase() + loggedInUser?.role?.slice(1)}
              InputProps={{ readOnly: true }}
            />
            <TextField
              fullWidth
              label="Organization name"
              value={loggedInUser?.subscriber?.organizationName}
              InputProps={{ readOnly: true }}
            />

            {(loggedInUser?.role === OWNER || loggedInUser?.role === MANAGER) && <Typography variant="body1" sx={{ color: 'red' }}>
              Your subsciption is valid up to : 
             {" " + new Date(loggedInUser?.subscriber?.validityDate).toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
            </Typography> }

            {/* Last Logged In */}
            {/* <TextField
              fullWidth
              label="Last Logged In"
              value={updatedFormData.lastLoggedIn}
              InputProps={{ readOnly: true }}
            /> */}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AccountDetails;
