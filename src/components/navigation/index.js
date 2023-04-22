import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const list = () => (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to='settings'
            onClick={() => setDrawerOpen(false)}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={'Settings'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            sx={{ display: { md: 'block', lg: 'none' }, mr: 2 }}
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Link component={RouterLink} to='/' sx={{ flexGrow: 1 }}>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, color: 'white' }}>
              Movies recommendation
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Button
              component={RouterLink}
              to='settings'
              sx={{ my: 2, color: 'white', display: 'block' }}>
              Settings
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={'right'}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}>
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;
