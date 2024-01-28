import React from 'react';
import { addPostActionCreator } from '../MyRedux/profileReducer';
import MyPosts from '../Components/MyPosts';

const MyPostsContainer = (props) => {
    let newRef = React.createRef();

    let addPost =() => {
       let text = newRef.current.value;
       
       props.dispatch(addPostActionCreator(text));
       newRef.current.value = '';
    }

    return (<MyPosts addPost={addPost} newRef={newRef}/>);
};

export default MyPostsContainer;