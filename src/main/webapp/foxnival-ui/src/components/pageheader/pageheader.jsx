import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PageHeader = ({ title, subheader, buttontext, onButtonClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 4,
      }}
    >
      <Box>
        <Typography fontSize="24px" fontWeight='600' color='textprimary'>
          {title}
        </Typography>
        <Typography fontSize="18px"  color="textSecondary">
          {subheader}
        </Typography>
      </Box>
      <Button 
        variant="contained" 
        color="primary" 
        size='large'
        onClick={onButtonClick}
      >
        {buttontext}
      </Button>
    </Box>
  );
};

export default PageHeader;