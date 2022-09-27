import Chat from './chat/';
import React, { useState } from 'react';
import Login from './login';
import { faker } from '@faker-js/faker';

const MainApp = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(localStorage.getItem('authenticated'));
  function loginUser(userName){
    localStorage.setItem('authenticated', true);
    localStorage.setItem('userDetails', JSON.stringify({userName, avatar: faker.internet.avatar(), userId: faker.datatype.uuid()}));
    setUserLoggedIn(true);
  }

  if(userLoggedIn){
  return <Chat/>;
  }else{
    return <Login loginUser={loginUser}/>;
  }
};

export default MainApp;