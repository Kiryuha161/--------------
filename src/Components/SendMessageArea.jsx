import React from "react";


const SendMessageArea = (props) => {
    let sendMessage =() => {
        props.sendMessage();
    }

    return (
        <div className="col-8">
            <form>
                <textarea ref={props.messageRef} className='send-message-form' placeholder='Введите сообщение'></textarea>
                <input className='btn btn-primary mb-3' type="button" value='Отправить'  onClick={sendMessage}/>
            </form>
        </div>
    )
}

export default SendMessageArea; 
