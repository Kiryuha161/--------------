import React from 'react';
import {NavLink} from 'react-router-dom';

const FriendListMessage = (props) => {
    let path = "/messages"; // Общий путь для всех друзей
    return (
        <div className="col-4 friends-list mb-1">
            {props.myFriendList.map((friend) => (
                <NavLink key={friend.id} to={`${path}/${friend.id}`}><div className="friends-list-item mb-1">
                    <img className="min-avatar" src={friend.avatar} alt="" style={{marginRight:5}}/>
                    <span>{friend.name}</span>
                </div></NavLink>
            ))}
        </div>
    );
}

export default FriendListMessage;