import { combineReducers, legacy_createStore as createStore } from 'redux';
import { profileReducer } from './profileReducer';
import { messageReducer } from './messagesReducer';
import { myFriendPageReducer } from './myFriendPageReducer';
import { sidebarReducer } from './sidebarReducer';

let reducers = combineReducers({
    profile: profileReducer,
    messages: messageReducer,
    myFriendPage: myFriendPageReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store;

window.store = store;
window.reducers = reducers;