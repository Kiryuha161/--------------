import React from 'react';

const Post = (props) => {
    return (
        <dl className="container">
            {props.posts.map(posts => (
                <React.Fragment key={posts.id}>
                    <dt><img className="min-avatar" src="https://cdn.onlinewebfonts.com/svg/download_34728.png" alt="Маленькая аватарка" /></dt>
                    <dd>{posts.post}</dd>
                    <div className="reaction">
                        <span className="like"><button className="btn btn-primary">Нравится {posts.likeCount}</button></span>
                        <span className="comment"><button className="btn btn-primary">Комментировать {posts.commentCount}</button></span>
                    </div>
                </React.Fragment>
            ))}
        </dl>
)};

export default Post;
