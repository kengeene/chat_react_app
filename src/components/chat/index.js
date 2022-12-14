import React, { useState } from 'react';
import Store from '../../store';
import BottomBar from './BottomBar';
import MessageDisplay from './MessageDisplay';
import TopBar from './TopBar';

export default function Chat({ setUserLoggedIn }) {
  const [profileData] = useState(Store.getState().value);
  const [previousMessages, setPreviousMessages] = useState(
    JSON.parse(localStorage.getItem('messages'))
  );
  return (
    <div>
      <TopBar profileData={profileData} setUserLoggedIn={setUserLoggedIn} />
      <MessageDisplay previousMessages={previousMessages} />
      <BottomBar
        profileData={profileData}
        setPreviousMessages={setPreviousMessages}
        previousMessages={previousMessages}
      />
    </div>
  );
}
