import React from 'react';
import MyPosts from './MyPosts';
import Post from './Post';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    return (
        <main className="profile">
            <div>
                <img className="banner" src="https://23mf.ru/assets/gallery/139/93.jpg" alt="лого" />
            </div>
            <ProfileInfo date="25.03.1993" city="Ростов-на-Дону" education="Высшее" cite="vk.com"/>
            <div className="row mb-3">
                <div className="col-12">
                    <MyPosts />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <Post posts={props.posts}/>
                </div>
            </div>
        </main>
    );
}

export default Profile;