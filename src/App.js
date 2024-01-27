import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aside from './Components/Aside';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Profile from './Components/Profile';
import MyFriendPage from './Components/MyFriendPage';
import './index.css'
import './App.css';
import './Styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Messages from './Components/Messages';

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 bg-white border">
              <Aside state={props.store.getState().sidebar.myFriendList}/>
            </div>
            <div className="col-10 border">
              <div className="row">
                <div className="col-12">
                  <Routes>
                    <Route path="/profile/*" element={<Profile myInfo={props.store.getState().profile.myInfo} 
                    posts={props.store.getState().profile.posts} dispatch={props.dispatch}/>} />
                    <Route path="/messages/*" element={<Messages myFriendList={props.store.getState().messages.myFriendList} 
                    messagesData={props.store.getState().messages.messagesData} dispatch={props.dispatch}/>}/>
                    <Route path="/my-friends" element={<MyFriendPage state={props.store.getState()}/>}/>
                    </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
