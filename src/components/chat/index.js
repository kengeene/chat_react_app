import * as React from 'react';
import MessageDisplay from './MessageDisplay';
import BottomBar from './BottomBar';

export default function Chat(){
    return (
        <div>
            <MessageDisplay/>
            <BottomBar/>
        </div>
    );
}