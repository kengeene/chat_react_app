import { faker } from '@faker-js/faker';
import React, { useState } from 'react';
import Store, { setProfileData } from '../../store';
import Chat from '../chat';
import Login from '../login';

function Layout() {
  const { avatar } = Store.getState();
  const [userLoggedIn, setUserLoggedIn] = useState(localStorage.getItem('authenticated') && avatar);
  function loginUser(userName) {
    Store.dispatch(
      setProfileData({
        userName,
        avatar: faker.internet.avatar(),
        userId: faker.datatype.uuid(),
      })
    );
    localStorage.setItem('authenticated', true);
    setUserLoggedIn(true);
  }

  if (userLoggedIn) {
    return <Chat />;
  }
  // eslint-disable-next-line react/jsx-no-bind
  return <Login loginUser={loginUser} />;
}

export default Layout;
