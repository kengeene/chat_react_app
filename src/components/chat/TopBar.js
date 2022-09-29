import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function TopBar({ profileData }) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0, width: '90%' }}>
            <span>Chat App</span>
          </Typography>
          <IconButton color="inherit" sx={{ fontSize: '14px' }}>
            Logout
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account Picture">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt={profileData.name} src={profileData.avatar} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopBar;
