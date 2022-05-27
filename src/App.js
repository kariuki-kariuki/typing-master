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
  return (
    <div className="container-main">
      <div className="row">
        <div className="col-sm-3">
          <Nav login={login} />
        </div>
        <div className="col-sm-9">
          <Routes>
            <Route path="refactored-system/" element={<Home />} />
            <Route path="refactored-system/test" element={<Test />} />
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
              element={<Dashboard />}
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
