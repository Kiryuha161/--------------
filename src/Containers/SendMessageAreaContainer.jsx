import React from "react";
import SendMessageArea from "../Components/SendMessageArea";
import { sendMessageActionCreator } from "../MyRedux/messagesReducer";


const SendMessageAreaContainer = (props) => {
    let messageRef = React.createRef();
    
    let sendMessage =() => {
        let post = messageRef.current.value;
    
        props.dispatch(sendMessageActionCreator(post));
        messageRef.current.value = '';
    }

    return (<SendMessageArea sendMessage={sendMessage} messageRef={messageRef}/> )
}

export default SendMessageAreaContainer; 