import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, name: "Hey, hove old do?", numberLike: 55},
    {id: 2, name: "Hey,like ", numberLike: 24},
    {id: 2, name: "Blabla ", numberLike: 234},
    {id: 2, name: "Dada", numberLike: 15}
]

let dialogsData = [
    {id: 1, name: "Valera"},
    {id: 2, name: "Denis"},
    {id: 3, name: "Nikita"},
    {id: 4, name: "Nazar"},
    {id: 5, name: "Misha"},
    {id: 6, name: "Andrey"}
]

let messagesData = [
    {id: 1, name: "Hi"},
    {id: 2, name: "How is your Marader"},
    {id: 3, name: "Yo"},
    {id: 4, name: "Yo"},
    {id: 5, name: "Yo"},
    {id: 6, name: "Yo"}
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
