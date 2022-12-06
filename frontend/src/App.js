import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import HomePage from './Homepage';
import NavBarTop from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Login from "./login"
import { useCookies } from "react-cookie";
import RegisterProperty from './RegisterProperty';



function App() {
  const [userType, setType] = useCookies(['userType']);
  const [user, setUser] = useCookies(['userName']);
  setType("userType", "")
  setUser("userName", "")
  return (
    <Router>
      <NavBarTop />
      <div style={{ marginTop: 70 }} className="App">
        <Routes >
          <Route exact path='/' element={<HomePage setType={setType} setUser={setUser} user={user} userType={userType} />} />
          <Route exact path='/registerproperty' element={<RegisterProperty setType={setType} setUser={setUser} user={user} userType={userType} />} />
          <Route exact path='/login' element={<Login setType={setType} setUser={setUser} user={user} userType={userType} />} />
          {/* <Route exact path='/login'>
          <Login setType={setType} setUser={setUser} user={user} userType={userType} />
        </Route>
        <Route exact path='/register'>
          <Login setType={setType} setUser={setUser} user={user} userType={userType} />
        </Route> */}

        </Routes >
      </div>
      <Footer />
    </Router>
  );
}

export default App;