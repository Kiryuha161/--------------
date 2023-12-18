import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aside from './Components/Aside';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Profile from './Components/Profile';
import './index.css'
import './App.css';
import './Styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Messages from './Components/Messages';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 bg-white border">
              <Aside />
            </div>
            <div className="col-10 border">
              <div className="row">
                <div className="col-12">
                  <Routes>
                    <Route path="/profile/*" element={<Profile/>} />
                    <Route path="/messages/*" element={<Messages/>}/>
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
