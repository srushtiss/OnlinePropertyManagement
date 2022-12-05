import React, { useEffect, useState } from "react";
import './index.css'


function NavBarTop() {
  return (
    <div className="fill-window">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="logo">
          <img src="holidayhomes.png" alt="Logo" width="80" height="80" />
        </div>
        <a class="navbar-brand" href="/home">Holiday Homes</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbarSupportedContent" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">My Reservations</a>
            </li>

          </ul>
        </div>

        <span class="navbar-text">
          <form class="form-inline">
            <a class="btn btn-outline-secondary login" href='/login'>Login</a>
          </form>
        </span>
      </nav>
    </div>
  )
}

export default NavBarTop