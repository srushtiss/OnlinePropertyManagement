import React, { useEffect, useState } from "react";
import './index.css'
import { useCookies } from "react-cookie";
import Login from "../login";
import { ReactSession } from 'react-client-session';


// function LoginButton() {
//   // const [userEmail, setCookie, removeCookie] = useCookies(['userEmail']);
//   const [cookies, setCookie] = useCookies(['user']);
//   let userEmail = ReactSession.get("userEmail");
//   console.log("session cookie:  ",userEmail);

//   // // if (userEmail.userEmail.length === 0 || userEmail.userEmail === null) {
//   //   if (userEmail.length === 0 || userEmail === null) {

//     return (<> <a className="dropdown-item" href="/login">Login</a></>);
//   // }
//   // else {
//   //   return (<> <a className="dropdown-item" href="/home">Hello {userEmail}!!</a></>);


//   // }
// }


// function LogoutButton() {


//   // const [userEmail, setCookie, removeCookie] = useCookies(['userEmail']);
//   // const [cookies, setCookie] = useCookies(['user']);
//   let userEmail = ReactSession.get("userEmail");

//   const logout = ()=>{
//     // setCookie('userType', "", { path: '/' });
//     // setCookie('userEmail', "", { path: '/' });  
//   }

//   // if (userEmail.userEmail.length === 0 || userEmail.userEmail === null) {
//     if (userEmail.length !== 0) {
//     return (<> <a className="dropdown-item" onClick={logout()}>Logout</a></>);
//   }
//   else return (<></>)
// }

function NavBarTop() {

  return (
    <div className="fill-window">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="logo">
          <img src="holidayhomes.png" alt="Logo" width="80" height="80" />
        </div>
        <a className="navbar-brand" href="/">Holiday Homes</a>
        <div className="collapse navbar-collapse navbarSupportedContent" id="navbarSupportedContent">

          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link" href="/home">Home</a> */}
            </li>
          </ul>
        </div>

        <span className="navbar-text">
          <form className="form-inline">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="btn nav-link dropdown-toggle btn-outline-secondary login" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  My Account
                </a>
                <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/login">Login</a>
                  <a className="dropdown-item" href="/reservations">My Reservations</a>
                  <a className="dropdown-item" href="/favourites">My Favourites</a>
                  <LogoutButton />
                </div>
              </li>
            </ul>
          </form>
        </span>
      </nav>
    </div>
  )
}

export default NavBarTop