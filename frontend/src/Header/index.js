import React, { useEffect, useState } from "react";
import './index.css'
import { useCookies } from "react-cookie";
import Login from "../login";


function LoginButton() {
  // const [username, setCookie, removeCookie] = useCookies(['userName']);
  const [cookies, setCookie] = useCookies(['user']);

  // if (username.userName.length === 0 || username.userName === null) {
    if (cookies.userEmail.length === 0 || cookies.userEmail === null) {

    return (<> <a className="dropdown-item" href="/login">Login</a></>);
  }
  else {
    return (<> <a className="dropdown-item" href="/home">Hello {cookies.userEmail}!!</a></>);


  }
}

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
                  <LoginButton />
                  <a className="dropdown-item" href="/reservations">My Reservations</a>
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