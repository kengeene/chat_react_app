/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';


export default function Chatbox({previousMessages}) {
    useEffect(()=>{
        window.scrollTo(0, document.body.scrollHeight);
    });
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          <span>Chat App</span>
        </Typography>
        <List sx={{ mb: 2}} id="scrollList">
          {previousMessages.map(({ id, userName, message, avatar }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Today
                </ListSubheader>
              )}
              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  Yesterday
                </ListSubheader>
              )}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={avatar} />
                </ListItemAvatar>
                <ListItemText primary={userName} secondary={message} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      </React.Fragment>
  );
}