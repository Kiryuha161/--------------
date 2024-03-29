import React from 'react';
import FriendList from './FriendList';
import MessagesArea from './MessagesArea';
import SendArea from './SendArea';

const Messages = (props) => {
    return (
        <div className="container">
            <h1 className="text-center">Диалоги</h1>
            <div className="row">
                <FriendList friendListData={props.friendListData}/>
                <MessagesArea messagesData={props.messagesData}/>
            </div>
            <div className='row mt-5 pt-5 send-area'>
                <div className='col-4'></div>
                <SendArea />
            </div>
        </div>
    )
}

export default Messages;