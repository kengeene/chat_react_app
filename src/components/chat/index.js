import React, { useState } from 'react';
import MessageDisplay from './MessageDisplay';
import BottomBar from './BottomBar';
import Store from '../../store';

export default function Chat() {
  const [profileData] = useState(Store.getState().value);
  const [previousMessages, setPreviousMessages] = useState(
    JSON.parse(localStorage.getItem('messages'))
  );
  return (
    <div>
      <MessageDisplay previousMessages={previousMessages} />
      <BottomBar
        profileData={profileData}
        setPreviousMessages={setPreviousMessages}
        previousMessages={previousMessages}
      />
    </div>
  );
}
