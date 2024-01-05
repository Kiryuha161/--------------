import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <a className='navbar-brand' href="/"><img src="https://images.freeimg.net/rsynced_images/logo-3266214_1280.png" alt="лого" /></a>
                    <ul className=" navbar-nav d-flex flex-row">
                        <li className="nav-item mobile-show"><NavLink className="nav-link" to="/profile">Профиль</NavLink></li>
                        <li className="nav-item mobile-show"><NavLink className="nav-link" to="/messages">Сообщения</NavLink></li>
                        <li className="nav-item mobile-show"><NavLink className="nav-link" to="/news">Новости</NavLink></li>
                        <li className="nav-item mobile-show"><NavLink className="nav-link" to="/music">Музыка</NavLink></li>
                        <li className="nav-item mobile-show"><NavLink className="nav-link" to="/video">Видео</NavLink></li>
                        <li className="nav-item mobile-show"><NavLink className="nav-link" to="/settings">Настройки</NavLink></li>
                        <li className="nav-item mobile-show"><NavLink className="nav-link" to="/my-friends">Друзья</NavLink></li>
                    </ul>
            </div>
            
        </header>);

}

export default Header;