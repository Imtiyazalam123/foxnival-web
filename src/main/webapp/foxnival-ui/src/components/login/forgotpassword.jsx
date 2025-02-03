import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, Alert } from '@mui/material';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [error, setError] = useState('');

  const handleSendConfirmation = () => {
    // Code to send confirmation code to the provided email address
    setShowConfirmation(true);
  };

  const handleResetPassword = () => {
    // Code to reset the password using the provided confirmation code
    setError('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: '100%',
          padding: 4,
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Forgot Password ?
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom sx={{ mb: 2 }}>
            Don't know your password? Reset it after confirming your email address.
          </Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSendConfirmation}
            sx={{ mb: 2 }}
          >
            Send Confirmation Code
          </Button>
          {showConfirmation && (
            <>
              <TextField
                fullWidth
                label="Confirmation Code"
                variant="outlined"
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleResetPassword}
              >
                Reset Password
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ForgotPassword;