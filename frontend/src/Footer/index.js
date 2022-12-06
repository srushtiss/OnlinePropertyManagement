import React from "react";
import './index.css'


function Footer() {

    return (
      <footer className="bg-dark text-white pt-5 pb-3">

      <div className="container text-center text-md-left">

          <div className="row text-center text-md-left">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h5 className="text-uppercase mb-4 font-weight-bold" style={{textDecoration: 'None'}}>Holiday Homes</h5>
                  <p>Find your next stay!</p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h5 className="text-uppercase mb-4 font-weight-bold" style={{textDecoration: 'None'}}>Useful links</h5>
                  <p>
                      <a href="/login" className="text-white" style={{textDecoration: 'None'}}>Login/SignUp</a>
                  </p>
                  <p>
                      <a href="/registerproperty" className="text-white" style={{textDecoration: 'None'}}>Host your Property</a>
                  </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h5 className="text-uppercase mb-4 font-weight-bold" style={{textDecoration: 'None'}}>Contact</h5>
                  <p style={{fontSize:"small"}}>
                      <i className="bi bi-house"></i> 7575 FrankFord Rd, Dallas, TX
                  </p>
                  <p style={{fontSize:"small"}}>
                      <i className="bi bi-envelope"></i> holiday@homes.com
                  </p>
                  <p style={{fontSize:"small"}}>
                      <i className="bi bi-telephone"></i> +1 (469) 999-9999
                  </p>

              </div>

          </div>
          <hr className="mb-4" />
          <div className="row align-items-center">
                  <p className="text-white" style={{display: "inline"}}>copyright @2022 All rights reseverd by Holiday Homes</p>
          </div>
      </div>

  </footer>
        )
}

export default Footer