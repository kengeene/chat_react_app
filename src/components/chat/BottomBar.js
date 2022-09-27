import React from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
export default function ButtomBar(){
    return (
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, textAlign: 'center'}}>
        <Toolbar>
          <TextField id="standard-basic" variant="standard" sx={{backgroundColor: '#ffffff', borderRadius: '15px', padding: '5px 30px'}} fullWidth/>
          <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
            <SendIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
}