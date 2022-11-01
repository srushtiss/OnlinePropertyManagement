import React from "react";

function HomePage(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="logo">
      <img src="images/holidayhomes.png" alt="Logo" width="50" height="50"/>
    </div>
    <a class="navbar-brand" href="#">Holiday Homes</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
        <input class="form-control mr-sm-2" type="search" placeholder="Search Here" aria-label="Search"/>
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
          <div class="card" style={{width: "18rem"}}>
            <img src="images/addvertisement.png" class="card-img-top" alt="advertisement"/>
            <div class="card-body">
              <p class="card-text">Now save 30% off on booking 2 weeks before arrival</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9">

<div class="container-fluid">
  <div class="container-fluid text-center">
    <div class="row">
      <div class="col">
        <div class="card" style={{width: "18rem"}}>
          
          <div id="carouselExampleControls" class="card-img-top carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="images\img-1-1.png" alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="images\img-1-2.png" alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="images\img-1-3.png" alt="Third slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
          </div>
          <div class="card-body">
            <h3 class="card-title">Kettle Mansion</h3>
            <p class="card-text">Welcome to the famous Kettle House. Enjoy this newly renovated 1960's home
              originally built as a steel storage tank. This home has foam insulation and central AC for
              ultimate comfort.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Price/night: </b>129$</li>
            <li class="list-group-item"><b>Location: </b>Pune</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">View Property</a>
            <a href="#" class="card-link">Quick Reserve</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style={{width: "18rem"}}>
          
          <div id="carouselExampleControls" class="card-img-top carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="images\img-2-2.png" alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="images\img-4-1.png" alt="Second slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
          </div>
          <div class="card-body">
            <h3 class="card-title">Sunset Cabin</h3>
            <p class="card-text">Get away from the crowd in a beautiful wooded setting tucked in the tree tops
              of the Ouachita Forest. Enjoy gorgeous sunsets while relaxing after a fun filled day boating on
              Lake Ouachita, hiking or biking scenic trails.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Price/night: </b>225$</li>
            <li class="list-group-item"><b>Location: </b>Ouachita</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">View Property</a>
            <a href="#" class="card-link">Quick Reserve</a>
          </div>
        </div>
      </div>
     
      <div class="col">
        <div class="card" style={{width: "18rem"}}>
         
          <div id="carouselExampleControls" class="card-img-top carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="images\img-2-1.png" alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="images\img-2-2.png" alt="Second slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
          </div>
          <div class="card-body">
            <h3 class="card-title">Peace & Quiet Hotel- Floating Glass Room</h3>
            <p class="card-text">Experience the arctic light in the true last wilderness of Europe. In the
              cultural melting pot of the Sami culture you find our sustainable and eco-friendly luxury suite
              for two.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Price/night: </b>300$</li>
            <li class="list-group-item"><b>Location: </b>Jokkmokk</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">View Property</a>
            <a href="#" class="card-link">Quick Reserve</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" style={{width: "18rem"}}>
          
          <div id="carouselExampleControls" class="card-img-top carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="images\img-3-1.png" alt="First slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only"></span>
            </a>
          </div>
          <div class="card-body">
            <h3 class="card-title">Rocky Mountains Lookout Lodge</h3>
            <p class="card-text">Sun Outdoors Rocky Mountains Lookout Lodge V31 has two separate living
              quarters. The main side has a full kitchen, one-bedroom, and one bath. The other side has a
              kitchenette and a one-bedroom, and one bath. allowing up to 8 people total.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Price/night: </b>500$</li>
            <li class="list-group-item"><b>Location: </b>Rocky Mountains</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">View Property</a>
            <a href="#" class="card-link">Quick Reserve</a>
          </div>
        </div>
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