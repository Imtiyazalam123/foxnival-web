import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  Snackbar,
  Alert,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import forgotpasswordApi from '../../service/ForgetPasswordService';

const PasswordVerification = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(180);
  const [canResend, setCanResend] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [stage, setStage] = useState('email');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isSendingCode, setIsSendingCode] = useState(false);

  const DUMMY_OTP = '123456';

  // Countdown timer for resend
  useEffect(() => {
    const countdown = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  // Automatically advance to reset stage for testing
  // useEffect(() => {
  //   if (otp === DUMMY_OTP) {
  //     setStage('reset');
  //     setSuccess('Dummy OTP verified. Set new password.');
  //   }
  // }, [otp]);

  // Enable resend when timer reaches 0
  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
    }
  }, [timer]);

  const handleSendConfirmation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
  
    setIsSendingCode(true);
    //Simulate sending verification code
    forgotpasswordApi.sendVerificationCode(email)
      .then((res) => {
        if (res?.data) {
          setIsSendingCode(false);
          setStage('verify');
          setSuccess(`Verification code sent to ${email} successfully`);
          setError('');
          setTimer(180);
          setCanResend(false);
        } else {
          setIsSendingCode(false);
          setError('Failed to send verification code. Please try again.');
        }

      })
      .catch((error) => {
        if (error?.response?.status === 400) {
          setIsSendingCode(false);
          setError(error?.response?.data?.errorMessage || 'Email not found. Please enter a valid email address');
        } else {
          setIsSendingCode(false);
          setError('Failed to send verification code. Please try again.');
          console.error(error);
        }
      });
  };

  const handleVerifyCode = () => {
    if (otp.length !== 6) {
      setError('Please enter a complete 6-digit code');
      return;
    }

    // Simulated verification logic
    forgotpasswordApi.verifyOtp(email, otp)
      .then((res) => {
        if (res?.data) {
          setStage('reset');
          setSuccess('Code verified. Please set a new password');
          setError('');
        } else {
          setError('Invalid verification code');
        }
      })
      .catch((error) => {
        setError('Failed to verify code. Please try again.');
        console.error(error);
      });
  };

  const handleResend = () => {
    if (canResend) {
      forgotpasswordApi.sendVerificationCode(email)
        .then((res) => {
          if (res?.data) {
            setTimer(180);
            setCanResend(false);
            setOtp(''); // Reset OTP input
            setSuccess('New verification code sent!');
            setError('');
          } else {
            setError('Failed to resend verification code. Please try again.');
          }
        })
        .catch((error) => {
          setError('Failed to resend verification code. Please try again.');
          console.error(error);
        });
    }
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  const handleResetPassword = () => {
    // Enhanced password validations
    if (newPassword !== confirmNewPassword) {
      setError('Passwords do not match');
      return;
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    if (!/[A-Z]/.test(newPassword)) {
      setError('Password must contain at least one uppercase letter');
      return;
    }

    if (!/[0-9]/.test(newPassword)) {
      setError('Password must contain at least one number');
      return;
    }

    if (!/[!@#$%^&*]/.test(newPassword)) {
      setError('Password must contain at least one special character');
      return;
    }

    // Simulated password reset
    setSuccess('Password reset successfully');
    // resetForm();

    setTimeout(() => {
      navigate('/login');
    }, 2500);
  };


  const handleCloseAlert = () => {
    setError('');
    setSuccess('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: '100%',
          padding: 3,
          borderRadius: 3,
          boxShadow: 3
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: 'center',
              marginBottom: 2
            }}
          >
            {stage === 'email' ? 'Forgot Password' :
              stage === 'verify' ? 'Verification Code' :
                'Reset Password'}
          </Typography>

          <Snackbar
            open={!!error || !!success}
            autoHideDuration={3000}
            onClose={handleCloseAlert}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert
              onClose={handleCloseAlert}
              severity={error ? 'error' : 'success'}
              sx={{ width: '100%' }}
            >
              {error || success}
            </Alert>
          </Snackbar>

          {stage === 'email' && (
            <>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: 'center',
                  marginBottom: 3
                }}
              >
                Enter your email to receive a verification code
              </Typography>
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
                disabled={isSendingCode}
              >
                {isSendingCode ? "Send Verification Code....." : "Send Verification Code"}
              </Button>
            </>
          )}

          {stage === 'verify' && (
            <>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  textAlign: 'center',
                  marginBottom: 3
                }}
              >
                Enter the 6-digit verification code
                <br />
                <strong>Hint: Use {DUMMY_OTP}</strong>
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 3
                }}
              >
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span style={{ width: '10px' }} />}
                  renderInput={(props) => (
                    <input
                      {...props}
                      style={{
                        width: '50px',
                        height: '50px',
                        margin: '0 5px',
                        fontSize: '24px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        textAlign: 'center'
                      }}
                    />
                  )}
                />
              </Box>

              <Stack
                direction="row"
                spacing={2}
                sx={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 2
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleResend}
                  disabled={!canResend}
                >
                  {canResend ? 'Resend' : timer > 60 ? `Resend in ${Math.floor(timer / 60)}m` : `Resend in ${timer}s`}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleVerifyCode}
                >
                  Verify Code
                </Button>
              </Stack>
            </>
          )}

          {stage === 'reset' && (
            <>
              <TextField
                fullWidth
                label="New Password"
                type={showNewPassword ? "text" : "password"}
                variant="outlined"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                sx={{ mb: 2 }}
                helperText="Password must be 8+ chars with uppercase, number, special char"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowNewPassword}
                        edge="end"
                      >
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                fullWidth
                label="Confirm New Password"
                type={showConfirmPassword ? "text" : "password"}
                variant="outlined"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
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

export default PasswordVerification;