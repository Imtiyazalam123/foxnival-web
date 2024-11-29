import React from 'react';
import {
  Typography,
  Box,
  styled,
} from '@mui/material';

// Create a styled component to ensure proper margin reset
const DashboardContainer = styled(Box)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(3),
  width: '100%',
  boxSizing: 'border-box',
}));

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography>
        This is where your main content will be displayed.
      </Typography>
    </DashboardContainer>
  );
}