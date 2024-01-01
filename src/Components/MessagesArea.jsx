import React from "react";

const MessagesArea = (props) => {
    return (
        <div className="col-8 messages-area">
            {props.messagesData.map(message => (
                <div className='mb-1 messages-area-item'>
                    <div>{message.sender}</div>
                    <span><img className="min-avatar" src="https://cdn.onlinewebfonts.com/svg/download_34728.png" alt="" /></span>
                    <span>&nbsp;&nbsp;&nbsp;{message.text}</span>
                </div>
            ))}
        </div>
    );
}

export default MessagesArea;