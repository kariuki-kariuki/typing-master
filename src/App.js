import React from 'react';
import SignUp from "./components/signup/SignUp";
import './App.css';
import {  Route, Routes} from "react-router-dom";

import Home from './components/home/Home';
import Login from './components/login/Login';
import Test from "./components/test/Test";
import Nav from './components/navigation/Nav';
import Dashboard from './components/dashboard/Dashboard';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false)
  const [acc, setAcc] = useState({})
  const [wpm, setWpm] = useState(20)
  const [errorRate, setErrRate] = useState(50)
  const [accuracy, setAccuracy] = useState(40)
  const [timespeed, setTimespeed] = useState(40)
  return (
    <div className="container-main">
      <div className="row">
        <div className="col-sm-3">
          <Nav login={login} />
        </div>
        <div className="col-sm-9">
          <Routes>
            <Route path="refactored-system/" element={<Home />} />
            <Route path="refactored-system/test" element={<Test setErrRate = {setErrRate} setAccuracy = {setAccuracy} setWpm = {setWpm} setTimespeed ={ setTimespeed }/>} />
            <Route
              path="refactored-system/signup"
              element={<SignUp setAcc={setAcc} />}
            />
            <Route
              path="refactored-system/login"
              element={<Login acc={acc} setLogin={setLogin} />}
            />
            <Route
              path="refactored-system/dashboard"
              element={
                <Dashboard
                  wpm={wpm}
                  errorRate={errorRate}
                  accuracy={accuracy}
                  timespeed = {timespeed}
                />
              }
            />
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
