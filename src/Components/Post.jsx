import React from 'react';
import { likeItActionCreator } from '../MyRedux/profileReducer';

const Post = (props) => {
    return (
        <dl className="container">
            {props.posts.map(post => (
                <React.Fragment key={post.id}>
                    <dt><img className="min-avatar" src="https://cdn.onlinewebfonts.com/svg/download_34728.png"
                        alt="Маленькая аватарка" /></dt>
                    <dd>{post.post}</dd>
                    <div className="reaction mb-3">
                        <span className="like">
                            <button
                                onClick={() => props.dispatch(likeItActionCreator(post.id))} className={`btn ${post.hadLike ? 'btn-primary' : 'btn-secondary'}`}>Нравится {post.likeCount}
                            </button>
                        </span>
                        <span className="comment">
                            <button className="btn btn-primary">Комментировать {post.commentCount}</button>
                        </span>
                    </div>
                </React.Fragment>
            ))}
        </dl>
    )
};

export default Post;
