import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          myBartenders
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/services">Services</Button>
        <Button color="inherit" component={RouterLink} to="/blog">Blog</Button>
        <Button color="inherit" component={RouterLink} to="/about">About</Button>
        <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
        <Box sx={{ position: 'relative', ml: 2 }}>
          <InputBase
            sx={{
              color: 'white',
              pl: '24px',
              borderRadius: '4px',
              bgcolor: 'rgba(255, 255, 255, 0.15)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.25)',
              },
            }}
            placeholder="Search..."
          />
          <SearchIcon sx={{ position: 'absolute', left: 0, top: '50%', mt: '-12px', pointerEvents: 'none', color: 'white' }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
