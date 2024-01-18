import { NavLink } from "react-router-dom";

const MyFriend = (props) => {
    return (
        <div className="my-friend">
            <h3><NavLink to="/my-friends">Друзья ({props.myFriendList.length})</NavLink></h3>
            <div className="my-friend-list">
            {props.myFriendList.map(friends => <div key={friends.id} className="my-friend-list-item">
                     <img src={friends.avatar} alt="аватар" />
                    <p>{friends.name}</p> 
                </div>)}
            </div>

        </div>
    )
}

export default MyFriend;