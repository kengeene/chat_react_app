import Chat from '../chat';
import React, { useState } from 'react';
import Login from '../login';
import { faker } from '@faker-js/faker';
import Store, { setProfileData } from '../../store';

const Layout = () => {
  const { avatar } = Store.getState();
  const [userLoggedIn, setUserLoggedIn] = useState(localStorage.getItem('authenticated') && avatar);
  function loginUser(userName){
    Store.dispatch(setProfileData({userName, avatar: faker.internet.avatar(), userId: faker.datatype.uuid()}));
    localStorage.setItem('authenticated', true);
    setUserLoggedIn(true);
  }

  if(userLoggedIn){
  return <Chat/>;
  }else{
    return <Login loginUser={loginUser}/>;
  }
};

export default Layout;