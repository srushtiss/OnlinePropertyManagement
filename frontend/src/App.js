import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import HomePage from './Homepage';
import NavBarTop from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Login from './login';
import { useCookies } from "react-cookie";
import RegisterProperty from './RegisterProperty';
import { ReactSession } from 'react-client-session';
import HostProperties from './hostProperties';


function App() {
  return (
    <Router>
      <NavBarTop />
      <div style={{ marginTop: 70 }} className="App">
        <Routes >
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/registerproperty' element={<RegisterProperty />} />
          <Route exact path='/myproperties' element={<HostProperties />} />
          <Route exact path='/login' element={<Login />} />
        </Routes >
      </div>
      <Footer />
    </Router>
  );
}

export default App;