import React from 'react';
//import { addPostActionCreator } from '../MyRedux/profileReducer';

const MyPosts = (props) => {
    //let newRef = React.createRef();

    let addPost =() => {
       props.addPost();
    }

    return (
        <div className="my-posts">
            <h1>Мои посты</h1>
            <form>
                <textarea ref={ props.newRef } className="form-text" placeholder="Введите текст"></textarea>
            </form>
                <input className="btn btn-primary" type="submit" value="Отправить" onClick={addPost}/> 
        </div>
    );
};

export default MyPosts;