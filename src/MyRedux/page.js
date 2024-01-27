import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { profile, messages, sidebar, myFriendPage } from './slice';

export const Page = () => {
    const profilePosts = useSelector(state => state.profile.posts);
    const messagesData = useSelector (state => state.messages.messagesData);
    const sidebarFriends = useSelector (state => state.sidebar.myFriendList);
    const myFriendPageList = useSelector(state => state.myFriendPage.myFriendList);
}