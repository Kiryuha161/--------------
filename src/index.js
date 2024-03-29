import React from 'react';
import './index.css';
import store from './MyRedux/state';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
  /* console.log(JSON.stringify(store)); */
  root.render(
    <React.StrictMode>
      <App store={store} addPost={store.addPost.bind(store)} />
    </React.StrictMode>
  );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




