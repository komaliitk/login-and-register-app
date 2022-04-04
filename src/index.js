import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Login from './components/login/login';
import Homepage from './components/homepage/homepage';
import Register from './components/register/register';
import Login from './components/login/login';
import { useState } from 'react';

const [ user, setLoginUser] = useState({})

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Routes>
        
        <Route exact path="/"  element={<Homepage />} />
        <Route path="/login"  element={<Login />} />
        
        <Route path="/register"  element={<Register />} />
        
      
      </Routes>
    </Router>
    
   
   
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
