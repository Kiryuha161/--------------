import React from 'react';
import { NavLink } from 'react-router-dom';
import MyFriend from './MyFriend';

const Aside = () => {
  return (
    <aside className='desktop-show'>
      <div className="row "></div>

        <nav className="navbar">
          <ul className="list-group list-group-flush">
            <li className='list-group-item'><NavLink id="profile-ref" to="/profile">Профиль</NavLink></li>
            <li className='list-group-item'><NavLink id="messages-ref" to="/messages">Сообщения</NavLink></li>
            <li className='list-group-item'><NavLink id="news-ref" to="/feed">Новости</NavLink></li>
            <li className='list-group-item'><NavLink id="music-ref" to="/music">Музыка</NavLink></li>
            <li className='list-group-item'><NavLink id="video-ref" to="/video">Видео</NavLink></li>
            <li className='list-group-item'><NavLink id="settings-ref" to="/settings">Настройки</NavLink></li>
          </ul>
        </nav>
        <MyFriend/>
    </aside>
  );
}

export default Aside;