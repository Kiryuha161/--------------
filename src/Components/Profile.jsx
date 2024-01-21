import React from 'react';
import MyPosts from './MyPosts';
import Post from './Post';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    return (
        <main className="profile">
            <div className="row">
                <div className="col-12">
                    <div>
                        <img className="banner" src="https://23mf.ru/assets/gallery/139/93.jpg" alt="лого" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ProfileInfo
                        surname={props.myInfo.surname}
                        name={props.myInfo.name}
                        date={props.myInfo.date}
                        city={props.myInfo.city}
                        education={props.myInfo.education}
                        cite={props.myInfo.cite}
                        avatar={props.myInfo.avatar}
                        dateOfBirth={props.myInfo.dateOfBirth}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <MyPosts dispatch={props.dispatch} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <Post posts={props.posts} dispatch={props.dispatch}/>
                </div>
            </div>
        </main>
    );
}

export default Profile;
