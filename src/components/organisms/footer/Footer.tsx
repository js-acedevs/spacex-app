// reacts
import React from 'react';

// emotion
import styled from '@emotion/styled';

// mui
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Box, Typography } from '@mui/material';

const BoxStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
});

const Footer = () => (
  <BoxStyled component="footer">
    <Typography
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      variant="subtitle1"
      gutterBottom
    >
      Copyright <CopyrightIcon sx={{ height: '16px' }} /> {`${new Date().getFullYear()} `} Pabau.
      All rights reserved.
    </Typography>
  </BoxStyled>
);

export default Footer;
