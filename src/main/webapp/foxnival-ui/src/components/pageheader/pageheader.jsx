import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PageHeader = ({ title, subheader, userHasHigherRole, onButtonClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
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
      { userHasHigherRole && <Button 
        variant="contained" 
        color="primary" 
        size='large'
        onClick={onButtonClick}
      >
        Create Task
      </Button> }
    </Box>
  );
};

export default PageHeader;