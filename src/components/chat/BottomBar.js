import React, {useState, useEffect} from 'react';
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

 const onStorageUpdate = (e) => {
    const { key, newValue } = e;
    // Set messages if messages key in local storage changes
    if (key === "messages") {
      setPreviousMessages(JSON.parse(newValue));
    }
  };

  // Call the on storage method when storage is changed
  useEffect(() => {
    setMessage('');
    window.addEventListener("storage", onStorageUpdate);
    return () => {
      window.removeEventListener("storage", onStorageUpdate);
    };
  }, []);

  const sendMessage = () => {
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
        <IconButton color="inherit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
}