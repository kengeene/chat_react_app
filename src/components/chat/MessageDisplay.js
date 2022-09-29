import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import ChatList from './ChatList';

export default function Chatbox({ previousMessages }) {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  return (
    <>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          <span>Chat App</span>
        </Typography>
        <ChatList previousMessages={previousMessages} />
      </Paper>
    </>
  );
}
