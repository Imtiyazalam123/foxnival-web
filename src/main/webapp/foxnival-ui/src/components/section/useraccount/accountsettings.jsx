
import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Alert, Drawer, Box, IconButton, FormControlLabel, Checkbox, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ArrowBack, ExpandMore} from '@mui/icons-material';

const AccountSettings = ({ open, onClose, formData, onSubmit, onLogout, onBack }) => {
  const [form, setForm] = useState({
    firstName: formData.firstName || '',
    lastName: formData.lastName || '',
    displayName: formData.displayName || '',
    email: formData.email || '',
    mobile: formData.mobile || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPasswordChange, setShowPasswordChange] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (form.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (form.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    if (!form.displayName.trim()) {
      newErrors.displayName = 'Display name is required';
    } else if (form.displayName.length < 3) {
      newErrors.displayName = 'Display name must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const mobileRegex = /^\+?[1-9]\d{9}$/;
    if (form.mobile && !mobileRegex.test(form.mobile)) {
      newErrors.mobile = 'Please enter a valid mobile number';
    }

    if (showPasswordChange && form.newPassword) {
      if (!form.currentPassword) {
        newErrors.currentPassword = 'Current password is required';
      }

      if (form.newPassword.length < 8) {
        newErrors.newPassword = 'Password must be at least 8 characters';
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(form.newPassword)) {
        newErrors.newPassword = 'Password must contain uppercase, lowercase, and numbers';
      }

      if (form.newPassword !== form.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (validateForm()) {
      onSubmit(form);
      setSuccessMessage('Profile updated successfully!');
      if (showPasswordChange && form.newPassword) {
        setForm(prev => ({
          ...prev,
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        }));
        setShowPasswordChange(false);
      }
    } else {
      setErrorMessage('Please fix the errors before submitting');
    }
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
          zIndex: (theme) => theme.zIndex.modal,
        }
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 1
      }}
    >
      <Box sx={{ padding: 3 }}> 
        <Box display="flex" alignItems="center" mb={4}>
          <IconButton onClick={onBack} sx={{ mr: 2 }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h4">
            Account Settings
          </Typography>
        </Box>

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}

        {errorMessage && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={3}> {/* Increased spacing between grid items */}
              <Grid item xs={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </Grid>
            </Grid>
            <TextField
              label="Display Name"
              variant="outlined"
              fullWidth
              name="displayName"
              value={form.displayName}
              onChange={handleChange}
              error={!!errors.displayName}
              helperText={errors.displayName}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              error={!!errors.mobile}
              helperText={errors.mobile}
              sx={{ mt: 2 }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showPasswordChange}
                  onChange={(e) => setShowPasswordChange(e.target.checked)}
                  name="showPasswordChange"
                />
              }
              label="I want to change my password"
            />
          </Box>

          {showPasswordChange && (
            <Accordion sx={{ mb: 4 }}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="password-content"
                id="password-header"
              >
                <Typography>Change Password</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    label="Current Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    name="currentPassword"
                    value={form.currentPassword}
                    onChange={handleChange}
                    error={!!errors.currentPassword}
                    helperText={errors.currentPassword}
                  />
                  
                  <TextField
                    label="New Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    name="newPassword"
                    value={form.newPassword}
                    onChange={handleChange}
                    error={!!errors.newPassword}
                    helperText={errors.newPassword}
                  />
                  
                  <TextField
                    label="Confirm New Password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          )}

          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              type="submit"
              sx={{ padding: '10px 24px' }}
            >
              Save Changes
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  );
};


export default AccountSettings;
