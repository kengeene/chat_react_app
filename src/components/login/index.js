/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import TextField from '@mui/joy/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Fab from '@mui/material/Fab';

export default function Login({loginUser}){
  const [ userName, setUserName] = useState([]);
    return (
        <div>
            <TextField
        id="input-with-icon-textfield"
        label="Input Username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
        autoFocus
        onChange={(e) => setUserName(e.target.value)}
      />

      <Fab variant="extended" onClick={()=> loginUser(userName)}>
        <AccountCircle />
       <span>Login User</span>
      </Fab>
        </div>
    );
}