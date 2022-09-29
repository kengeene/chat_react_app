import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/joy/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

export default function Login({ loginUser }) {
  const [userName, setUserName] = useState([]);
  return (
    <Card sx={{ minWidth: 275, padding: '30px' }}>
      <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
        <span>Create User</span>
      </Typography>
      <CardContent>
        <TextField
          id="input-with-icon-textfield"
          label="Input Username"
          variant="standard"
          autoFocus
          onChange={(e) => setUserName(e.target.value)}
        />
      </CardContent>
      <CardActions sx={{ textAlign: 'center', display: 'block' }}>
        <span style={{ display: 'block' }}>n.b. account profile image will be auto generated</span>
        <Fab
          variant="extended"
          onClick={() => loginUser(userName)}
          sx={{ width: '300px', margin: '30px 0' }}>
          <AccountCircle />
          <span>Login</span>
        </Fab>
      </CardActions>
    </Card>
  );
}
