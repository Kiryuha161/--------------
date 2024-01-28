import React from 'react';
import FriendListMessage from './FriendListMessage';
import MessagesArea from './MessagesArea';
import SendMessageAreaContainer from '../Containers/SendMessageAreaContainer';

const Messages = (props) => {
    return (
        <div className="container">
            <h1 className="text-center">Диалоги</h1>
            <div className="row">
                <FriendListMessage myFriendList={props.myFriendList}/>
                <MessagesArea messagesData={props.messagesData}/>
            </div>
            <div className='row mt-5 pt-5 send-area'>
                <div className='col-4'></div>
                <SendMessageAreaContainer dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Messages;