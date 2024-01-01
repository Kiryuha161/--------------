import React from 'react';
import {NavLink} from 'react-router-dom';

const FriendList = (props) => {
    let path = "/messages"; // Общий путь для всех друзей

    return (
        <div className="col-4 friends-list mb-1">
            {props.friendListData.map((friend) => (
                <div className="friends-list-item mb-1">
                    <img className="min-avatar" src="https://cdn.onlinewebfonts.com/svg/download_34728.png" alt="" />
                    <span><NavLink to={`${path}/${friend.id}`}>{friend.name}</NavLink></span>
                </div>
            ))}
        </div>
    );
}

export default FriendList;