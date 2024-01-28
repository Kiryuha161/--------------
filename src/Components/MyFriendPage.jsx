import { NavLink } from "react-router-dom";

let MyFriendPage = (props) => {
    return (
        <div className="my-friend-page">
            <h1>Мои друзья ({props.state.myFriendPage.myFriendList.length})</h1>
            <div>
                {props.state.myFriendPage.myFriendList.map(friends => (
                    <NavLink key={friends.id}>
                        <div className="mb-2 friend-page-list">
                            <img className="min-avatar" src={friends.avatar} alt="аватарка" />
                            <span className="text-white">{friends.name + " " + friends.surname}</span>
                        </div>
                    </NavLink>
                ))}

            </div>
        </div>
    )
}

export default MyFriendPage;