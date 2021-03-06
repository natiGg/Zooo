import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Login from './components/Login/Login'
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login';
import SignUp  from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import Nav from './components/Navbar/Navbar';
import Post from './components/Post/Post'
import Feed from './components/Feed/Feed'
import Sidebar from './components/Sidebar/Sidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
ReactDOM.render(
  <React.StrictMode>

    <Nav/>
    <div className="flex">
    <Sidebar/>
    <Feed/>
    <RightSidebar/>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
