import React, { useState, useEffect } from 'react';
import { Box, Avatar } from '@mui/material';

const UserProfile = ({ profilePhoto, onPhotoChange }) => {
  const [photo, setPhoto] = useState('/api/placeholder/48/48');

  useEffect(() => {
    setPhoto(profilePhoto || '/api/placeholder/48/48');
  }, [profilePhoto]);

  const handlePhotoChange = (event) => {
    const newPhoto = event.target.files[0];
    setPhoto(URL.createObjectURL(newPhoto));
    onPhotoChange(newPhoto);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Avatar
        src={photo}
        alt="User Avatar"
        sx={{ width: 48, height: 48, marginRight: '16px' }}
        component="label"
        title="Change Profile Photo"
      >
        <input type="file" hidden onChange={handlePhotoChange} />
      </Avatar>
    </Box>
  );
};

export default UserProfile;