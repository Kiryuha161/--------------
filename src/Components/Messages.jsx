import React from 'react';
import { NavLink } from 'react-router-dom';

const Messages = () => {
    return (
        <div className="container">
            <h1 className="text-center">Диалоги</h1>
            <div className="row">
                <div className="col-4 friends-list mb-1">
                    <div className="friends-list-item mb-1">
                        <img className="min-avatar" src="https://cdn.onlinewebfonts.com/svg/download_34728.png" alt=""/>
                        <span><NavLink to="/messages/1">Андрей</NavLink></span>
                    </div>

                    <div className="friends-list-item mb-1">
                        <img className="min-avatar" src="https://cdn.onlinewebfonts.com/svg/download_34728.png" alt=""/>
                        <span><NavLink to="/messages/2">Сергей</NavLink></span>
                    </div>

                </div>
                <div className="col-8 messages-area">
                    <div className='mb-1 messages-area-item'>
                        <span><img className="min-avatar" src="https://cdn.onlinewebfonts.com/svg/download_34728.png" alt="" /></span>
                        <span> Текст сообщения</span>
                    </div>
                </div>
            </div>
            <div className='row mt-5 pt-5'>
                <div className='col-4'></div>
                <div className="col-8">
                    <form>
                        <textarea className='send-message-form' placeholder='Введите сообщение'></textarea>
                        <input className='btn btn-primary mb-3' type='submit' value='Отправить'/>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Messages;