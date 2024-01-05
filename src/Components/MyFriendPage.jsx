let MyFriendPage = (props) => {
    return (
        <div className="my-friend-page">
            <h1>Мои друзья ({props.state.sidebar.myFriendList.length})</h1>
            <div>
                {props.state.sidebar.myFriendList.map(friends => (
                    <div>
                        <img src={friends.avatar} alt="аватарка" />
                        <span>{friends.name + " " + friends.surname}</span>
                    </div>))}

            </div>
        </div>
    )
}

export default MyFriendPage;