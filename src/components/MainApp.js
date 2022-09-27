import Chat from './chat/';
import React, { useState } from 'react';
import Login from './login';

const MainApp = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(localStorage.getItem('authenticated'));
  function loginUser(userName){
    localStorage.setItem('authenticated', true);
    localStorage.setItem('userName', userName);
    setUserLoggedIn(true);
  }

  if(userLoggedIn){
  return <Chat/>;
  }else{
    return <Login loginUser={loginUser}/>;
  }
};

export default MainApp;