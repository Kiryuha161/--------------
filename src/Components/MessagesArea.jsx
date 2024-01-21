import React from "react";

const MessagesArea = (props) => {
    return (
        <div className="col-8 messages-area">
            {props.messagesData.map(message => (
                <div key={message.id} >
                    {message.isMe && <div className='mb-1 messages-area-item-me'>
                        <div>{message.sender}</div>
                        <span><img className="min-avatar" src={message.image} alt="" /></span>
                        <span>&nbsp;&nbsp;&nbsp;{message.text}</span>
                    </div>}
                    {!message.isMe && <div className='mb-1 messages-area-item-not-me'>
                        <div>{message.sender}</div>
                        <span><img className="min-avatar" src={message.image} alt="" /></span>
                        <span>&nbsp;&nbsp;&nbsp;{message.text}</span>
                    </div>}
                </div>
            ))}
        </div>
    );
}

export default MessagesArea;