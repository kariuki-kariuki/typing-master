import React, { Fragment } from 'react';

import './App.css';
import Nav from './components/navigation/Nav';
import Home from './components/home/Home';
import Test from './components/test/Test';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container-main h-100'>
      <div className='row'>
          <div className='col-sm-3'>
            <Nav />
          </div>
          <div className='col-sm-9'>
            <BrowserRouter>
              <Fragment>
                <Routes>
                  <Route path='/'>
                    <Home />
                  </Route>
                  <Route path='/login'>
                    <Login />
                  </Route>
                  <Route path = "/">
                    <SignUp />
                  </Route>
                </Routes>
               </Fragment> 
            </BrowserRouter>
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
