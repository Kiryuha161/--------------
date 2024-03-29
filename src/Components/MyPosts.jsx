import React from 'react';

const MyPosts = (props) => {
    let newRef = React.createRef();

    let addPost =() => {
       props.addPost(newRef.current.value);
       newRef.current.value = '';
    }

    return (
        <div className="my-posts">
            <h1>Мои посты</h1>
            <form>
                <textarea ref={ newRef } className="form-text" placeholder="Введите текст"></textarea>
            </form>
                <input className="btn btn-primary" type="submit" value="Отправить" onClick={addPost}/>
        </div>
    );
};

export default MyPosts;