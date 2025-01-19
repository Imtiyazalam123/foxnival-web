import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const PageHeader = ({
  title,
  subheader,
  buttontext,
  userHasHigherRole = false,
  onButtonClick,
  showButton = true
}) => {
  const shouldShowButton = showButton && userHasHigherRole && buttontext && onButtonClick;

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
        {subheader && (
          <Typography fontSize="18px" color="textSecondary">
            {subheader}
          </Typography>
        )}
      </Box>
      {shouldShowButton && (
        <Button
          variant="contained"
          color="primary"
          size='large'
          onClick={onButtonClick}
        >
          {buttontext}
        </Button>
      )}
    </Box>
  );
};

export default PageHeader;