import React from 'react';
import SignUp from "./components/signup/SignUp";
// import { Fragment } from 'react';
import './App.css';
import {  Route, Routes} from "react-router-dom";

import Home from './components/home/Home';
import Login from './components/login/Login';
import Test from "./components/test/Test";
import Nav from './components/navigation/Nav';
import Dashboard from './components/dashboard/Dashboard';
// import Home from './components/home/Home';
// import Test from './components/test/Test';
// import Login from './components/login/Login';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import RouterSetUp from './components/BrowserSwitch/RouterSetup';

function App() {
  return (
    <div className="container-main">
      <div className="row">
        <div className="col-sm-3">
          <Nav />
        </div>
        <div className="col-sm-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="gignup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path='dashboard' element = {<Dashboard />} />
          </Routes>

          {/* <RouterSetUp /> */}
          {/* <Home /> */}
          {/* <Login /> */}
          {/* <SignUp /> */}
          {/* <Test /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
