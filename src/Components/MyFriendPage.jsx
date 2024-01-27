let MyFriendPage = (props) => {
    //debugger
    return (
        <div className="my-friend-page">
            <h1>Мои друзья ({props.state.myFriendPage.myFriendList.length})</h1>
            <div>
                {props.state.myFriendPage.myFriendList.map(friends => (
                    <div key={friends.id} className="mb-2">
                        <img className="min-avatar" src={friends.avatar} alt="аватарка" />
                        <span>{friends.name + " " + friends.surname}</span>
                    </div>))}

            </div>
        </div>
    )
}

export default MyFriendPage;