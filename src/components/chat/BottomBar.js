/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { faker } from '@faker-js/faker';

export default function ButtomBar({profileData, setPreviousMessages, previousMessages}){
  const {userName, avatar} = profileData;
  const [ message, setMessage] = useState('');
  const newMessageObject = {
        userName,
        avatar,
        message,
      }

  const sendMessage = (previousMessages) => {
    newMessageObject.id = faker.datatype.uuid();
    if(previousMessages){
    setPreviousMessages([...previousMessages, newMessageObject]);
    localStorage.setItem('messages', JSON.stringify([
      ...previousMessages, newMessageObject
    ]));
    } else {
    setPreviousMessages([newMessageObject]);
      localStorage.setItem('messages', JSON.stringify([
      newMessageObject
    ]));
    }
  };

    return (
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, textAlign: 'center'}}>
        <Toolbar>
          <TextField
          id="standard-basic"
          variant="standard"
          sx={{backgroundColor: '#ffffff', borderRadius: '15px', padding: '5px 30px'}}
          fullWidth
          onChange={(e)=> setMessage(e.target.value)}
          />
          <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" onClick={()=> sendMessage(previousMessages)}>
            <SendIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
}