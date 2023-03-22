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
import { useTheme } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const renderNavButtons = () => {
    return menuItems.map((item) => (
      <Button
        key={item.label}
        color="inherit"
        component={RouterLink}
        to={item.path}
        sx={{
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {item.label}
      </Button>
    ));
  };

  const renderDrawer = () => {
    return (
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.label}
              component={RouterLink}
              to={item.path}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            {renderDrawer()}
          </>
        ) : (
          renderNavButtons()
        )}
        <Typography
  variant="h6"
  component="div"
  sx={{
    flexGrow: 1,
    fontFamily: 'cursive',
    letterSpacing: '2px',
    fontSize: '24px',
    color: '#FFD700',
  }}
>
  myBartenders
</Typography>


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
          <SearchIcon
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              mt: '-12px',
              pointerEvents: 'none',
              color: 'white',
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
