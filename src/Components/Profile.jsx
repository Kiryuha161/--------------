import React from 'react';
import MyPosts from './MyPosts';
import Post from './Posts';

const Profile = () => {
    return (
        <main className="profile">
            <div>
                <img className="banner" src="https://23mf.ru/assets/gallery/139/93.jpg" alt="лого" />
            </div>
            <div className="row">
                <div className="col-4">
                    <img className="avatar" src="https://sun9-37.userapi.com/impf/c850132/v850132268/aa75b/UWVuTLspDPA.jpg?size=1280x768&quality=96&sign=07e29460571e3eaa7b1be5e5ed068070&c_uniq_tag=aUII7MLn3Aw3A1e9NoagdHZU4BOvyoZ4FYhRubXruLs&type=album" alt="лого" />
                </div>
                <div className="col-8">
                    <dl>
                        <dt>Дата рождения:</dt>
                        <dd>25.03.1993</dd>
                        <dt>Город:</dt>
                        <dd>Ростов-на-Дону</dd>
                        <dt>Образование:</dt>
                        <dd>Высшее</dd>
                        <dt>Сайт:</dt>
                        <dd>Вк</dd>
                    </dl>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-12">
                    <MyPosts />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-12">
                    <Post message="Привет! Как дела?" likeCount="6" commentCount="0" />
                </div>
            </div>
        </main>
    );
}

export default Profile;