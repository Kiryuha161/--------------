import React from 'react';

const Post = (props) => {
    return (
        <dl className="container">
            {props.posts.map(post => (
                <React.Fragment key={props.id}>
                    <dt><img className="min-avatar" src="https://cdn.onlinewebfonts.com/svg/download_34728.png" alt="Маленькая аватарка" /></dt>
                    <dd>{post.post}</dd>
                    <div className="reaction">
                        <span className="like"><button className="btn btn-primary">Нравится {post.likeCount}</button></span>
                        <span className="comment"><button className="btn btn-primary">Комментировать {post.commentCount}</button></span>
                    </div>
                </React.Fragment>
            ))}
        </dl>
)};

export default Post;
