import React, { useState } from 'react';
import MessageDisplay from './MessageDisplay';
import BottomBar from './BottomBar';

export default function Chat(){
    const [ profileData ] = useState(JSON.parse(localStorage.getItem('userDetails')));
    const [ previousMessages, setPreviousMessages] = useState(JSON.parse(localStorage.getItem('messages')));
    return (
        <div>
            <MessageDisplay previousMessages={previousMessages}/>
            <BottomBar profileData={profileData} setPreviousMessages={setPreviousMessages} previousMessages={previousMessages}/>
        </div>
    );
}