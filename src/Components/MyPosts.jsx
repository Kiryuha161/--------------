import React from 'react';

const MyPosts = () => {
    return (
        <div className="my-posts">
            <h1>Мои посты</h1>
            <form>
                <textarea className="form-text" placeholder="Введите текст"></textarea>
            </form>
                <input className="btn btn-primary" type="submit" value="Отправить" />
        </div>
    );
};

export default MyPosts;