import React from 'react';
import SignUp from "./components/signup/SignUp";
import './App.css';
import {  Route, Routes} from "react-router-dom";
import { useAuth } from './firebase';
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
    <div className="container-main m-0">
      <div className="row m-0">
        <div className="col-sm-2 p-0">
          <Nav login={login} />
        </div>
        <div className="col-sm-10 p-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/test"
              element={
                <Test
                  setErrRate={setErrRate}
                  setAccuracy={setAccuracy}
                  setWpm={setWpm}
                  setTimespeed={setTimespeed}
                />
              }
            />
            <Route
              path="/signup"
              element={<SignUp setAcc={setAcc} />}
            />
            <Route
              path="/login"
              element={<Login acc={acc} setLogin={setLogin} />}
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  wpm={wpm}
                  errorRate={errorRate}
                  accuracy={accuracy}
                  timespeed={timespeed}
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
