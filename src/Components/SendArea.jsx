import React from "react";

const SendArea = () => {
    return (
        <div className="col-8">
            <form>
                <textarea className='send-message-form' placeholder='Введите сообщение'></textarea>
                <input className='btn btn-primary mb-3' type='submit' value='Отправить' />
            </form>
        </div>
    )
}

export default SendArea;