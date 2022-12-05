import React, { useEffect, useState } from "react";
import PropertyCards from "../card";
import properties from "../properties";
import './index.css'


function HomePage() {
  const [title, setTitle] = useState(properties)
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    setTitle(
      title.filter((item) => { return item.title.toLowerCase().includes(searchText.toLowerCase()) || item.title.toUpperCase().includes(searchText.toLowerCase()) || item.city.toLowerCase().includes(searchText.toLowerCase()) || item.city.toUpperCase().includes(searchText.toLowerCase()) })
    )
  }, [searchText])

  return (
    <div>
      <div class="input-group mb-3 justify-content-center">
        <form class="form-inline my-2 my-xl-0">
          <input class="form-control mr-xl-2 " type="search" placeholder="Search" aria-label="Search" onChange={(event) => {
            if (event.target.value == "") {
              setTitle(properties)
            }
            else {
              setSearchText(event.target.value)
            }
          }} />
        </form>
        <div class="input-group-prepend">
          <button class="btn searchbtn btn-outline-primary " type="button" >Search</button>
        </div>
      </div>
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

                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-9">

            <div class="container-fluid">
              <div class="container-fluid text-center">
                <div class="row">
                  <div class="col gridWrapper">
                    {
                      title.map(item => {
                        return (<PropertyCards {...item} >
                        </PropertyCards>)
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage