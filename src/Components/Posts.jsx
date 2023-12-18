import React from 'react';

const Post = (props) => {
    return (
        <dl className="container">
                <dt><img className="min-avatar" src="https://cdn.onlinewebfonts.com/svg/download_34728.png" alt="Маленькая аватарка"></img></dt>
                <dd>{props.message}</dd>
                <div className="reaction">
                    <span className="like"><button className="btn btn-primary">Нравится {props.likeCount}</button></span>
                    <span className="comment"><button className="btn btn-primary">Комментировать {props.commentCount} </button></span>
                </div>
            </dl>)
};

export default Post;
