import React, { useEffect, useState } from "react";
import TutorCards from "./card";
import properties from "./properties";


function HomePage() {
  const [title, setTitle] = useState(properties)
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    setTitle(
      title.filter((item) => { return item.title.toLowerCase().includes(searchText.toLowerCase()) || item.title.toUpperCase().includes(searchText.toLowerCase()) })
    )
  }, [searchText])

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="logo">
          <img src="holidayhomes.png" alt="Logo" width="50" height="50" />
        </div>
        <a class="navbar-brand" href="#">Holiday Homes</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">My Reservations</a>
            </li>
            <li class="nav-item">
              <div class="btn-group">
                <button type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Account
                </button>
              </div>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Profile</a>
                <a class="dropdown-item" href="#">Settings</a>
                <a class="dropdown-item" href="#">Wishlist</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input onChange={(event) => {
              if (event.target.value == ""){
                setTitle(properties)
              }
              
              else{
          setSearchText(event.target.value)
        }
         
        }} type="search" placeholder="Search Here" aria-label="Search" />
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
          <div class="login">
            <button type="button" class="btn btn-outline-danger">Log In</button>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <div class="container-fluid main-body pt-3">
        <div class="row">
          <div class="side-menu col-md-3">
            <div class="side-menu d-flex flex-column" id="side-menu">
              <div class="side-menu content" s>
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link d-block px-2 py-2" href="#">Host your home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-block px-2 py-2" href="#">Explore your spaces</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-block px-2 py-2" href="#">Our Services</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link d-block px-2 py-2" href="#">Notifications</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-block px-2 py-2" href="#">Contact Us</a>


                  </li>
                  <li class="nav-item">
                    <a class="nav-link d-block px-2 py-2" href="#"> <i class="bi bi-whatsapp"></i> <i
                      class="bi bi-facebook"></i> <i class="bi bi-twitter"></i> <i class="bi bi-instagram"></i></a>
                  </li>
                </ul>
              </div>
              {/* <div class="card" style={{ width: "18rem" }}>
                <img src="addvertisement.png" class="card-img-top" alt="advertisement" />
                <div class="card-body">
                  <p class="card-text">Now save 30% off on booking 2 weeks before arrival</p>
                </div>
              </div> */}
            </div>
          </div>
          <div class="col-md-9">

            <div class="container-fluid">
              <div class="container-fluid text-center">
                <div class="row">
                  <div class="col gridWrapper">
                    {
                      title.map(item => {
                        return (<TutorCards {...item} >

                        </TutorCards>)
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer fixed-bottom">
        <div class="footer-bottom-bg-color">
          <footer class="footer-bottom">
            <div class="mt-2">
              <p class="footer-bottom-p">
                Copyright © 2022 Holiday Homes, Inc.
              </p>
            </div>
            <div class="mt-2">
              <div class="d-flex justify-content-center">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a class="link-custom" href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a class="link-custom" href="#">About</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a class="link-custom" href="#">Help Center</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a class="link-custom" href="#">Privacy</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default HomePage