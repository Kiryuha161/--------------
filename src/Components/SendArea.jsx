import React from "react";
import { sendMessageActionCreator } from "../MyRedux/messagesReducer";


const SendArea = (props) => {
    let messageRef = React.createRef();
    
    let sendMessage =() => {
        let post = messageRef.current.value;
    
        props.dispatch(sendMessageActionCreator(post));
        messageRef.current.value = '';
    }

    return (
        <div className="col-8">
            <form>
                <textarea ref={messageRef} className='send-message-form' placeholder='Введите сообщение'></textarea>
                <input className='btn btn-primary mb-3' type="button" value='Отправить'  onClick={sendMessage}/>
            </form>
        </div>
    )
}

export default SendArea; 
