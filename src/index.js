import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Andy'},
    {id: 3, name: 'Oleg'},
    {id: 4, name: 'Igor'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'Yo'}
]

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 10},
    {id: 2, message: 'It\'s my first post.', likesCount: 3},
    {id: 3, message: 'Yo', likesCount: 42}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
