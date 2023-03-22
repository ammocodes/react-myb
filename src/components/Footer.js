import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)({
  backgroundColor: '#1c1c1c',
  color: '#f9f9f9',
  py: 4,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  '& a': {
    color: '#f9f9f9',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ mb: 1 }}>
          &copy; 2023 by ammocodes. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Designed by{' '}
          <Link href="https://example.com" target="_blank" rel="noopener">
            ammocodes
          </Link>
        </Typography>
        <Typography variant="body2">
          Built with{' '}
          <Link href="https://mui.com/" target="_blank" rel="noopener">
            Material-UI
          </Link>{' '}
          and React
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
