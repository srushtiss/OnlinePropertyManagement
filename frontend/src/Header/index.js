import React, { useEffect, useState } from "react";
import './index.css'
import { useCookies } from "react-cookie";
import Login from "../login";


function LoginButton() {
  const [username, setCookie, removeCookie] = useCookies(['userName']);

  if (username.userName.length === 0 || username.userName === null) {

    return (<> <a class="dropdown-item" href="/login">Login</a></>);
  }
  else {
    return (<> <a class="dropdown-item" href="/home">Hello {username.userName}!!</a></>);


  }
}

function NavBarTop() {



  return (
    <div className="fill-window">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="logo">
          <img src="holidayhomes.png" alt="Logo" width="80" height="80" />
        </div>
        <a class="navbar-brand" href="/">Holiday Homes</a>
        <div class="collapse navbar-collapse navbarSupportedContent" id="navbarSupportedContent">

          <ul class="navbar-nav">
            <li class="nav-item">
              {/* <a class="nav-link" href="/home">Home</a> */}
            </li>
          </ul>
        </div>

        <span class="navbar-text">
          <form class="form-inline">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="btn nav-link dropdown-toggle btn-outline-secondary login" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  My Account
                </a>
                <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <LoginButton />
                  <a class="dropdown-item" href="/reservations">My Reservations</a>
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