import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import ChatList from './ChatList';

export default function Chatbox({ previousMessages }) {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  return (
    <>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <ChatList previousMessages={previousMessages} />
      </Paper>
    </>
  );
}
