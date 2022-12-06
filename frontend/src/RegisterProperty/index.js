import React, { useState } from "react"
import { RegisterHostProperty, AddToFavorites } from "../ServerApi"
import { objectToArray } from "./"
import { redirect, useNavigate } from "react-router-dom";
import "./index.css"
import validator from 'validator'
import { useCookies } from "react-cookie";


function RegisterProperty() {

  const navigate = useNavigate()
  const [username, setCookie, removeCookie] = useCookies(['userName']);
  const [title, setTitle] = useState("")
  const [city, setCity] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [nightly_fee, setNightlyFee] = useState("")
  const [cleaning_fee, setCleaningFee] = useState("")
  const [service_fee, setServiceFee] = useState("")
  const [amenities, setAmenities] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [img, setImg] = useState("")
  const [email, setEmail] = useState(username)
  const [map_address, setAddress] = useState("")

  console.log("here")

  const submit = () => {

    console.log("here")
    RegisterHostProperty(email, title, city, category, description, nightly_fee, cleaning_fee, service_fee, amenities, bedrooms, img, map_address).then((res) => {
      if (res.result === true) {
        navigate('/home', { state: { username: res.username } })
      }
      else alert('Failed to host property')
    })
    console.log("here")
  }
    return (
      <>
        <form class="row g-2 needs-validation justify-content-center" novalidate>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register you Property today!</h3>
          </div>

          <div class="col-md-5">
            <label for="validation" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              id="validation" required />
          </div>
          <div class="col-md-5">
            <label for="validation" class="form-label">City</label>
            <input
              type="text"
              class="form-control"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              id="validation" required />
          </div>
          <div class="col-md-5">
            <label for="validation" class="form-label">Category</label>
            <input
              type="text"
              class="form-control"
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
              id="validation" required />
          </div>
          <div class="col-md-5">
            <label for="validation" class="form-label">Address</label>
            <input
              type="text"
              class="form-control"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              id="validation" required />
          </div>
          <div class="col-md-5">
            <label for="validation" class="form-label">Nightly Fee</label>
            <input
              type="number"
              class="form-control"
              placeholder="Nightly Fee"
              onChange={(e) => setNightlyFee(e.target.value)}
              id="validation" required />
          </div>
          <div class="col-md-5">
            <label for="validation" class="form-label">Cleaning Fee</label>
            <input
              type="number"
              class="form-control"
              placeholder="Cleaning Fee"
              onChange={(e) => setCleaningFee(e.target.value)}
              id="validation" required />
          </div>
          <div class="col-md-5">
            <label for="validation" class="form-label">Service Fee</label>
            <input
              type="number"
              class="form-control"
              placeholder="Service Fee"
              onChange={(e) => setServiceFee(e.target.value)}
              id="validation" required />
          </div>
          <div class="col-md-5">
            <label for="validation" class="form-label">Amenities</label>
            <input
              type="text"
              class="form-control"
              placeholder="Amenities"
              onChange={(e) => setAmenities(e.target.value)}
              id="validation" required />
          </div>
          <div class="col-md-5">
            <label for="validation" class="form-label">Bedrooms</label>
            <input
              type="text"
              class="form-control"
              placeholder="Bedrooms"
              onChange={(e) => setBedrooms(e.target.value)}
              id="validation" required />
          </div>
          
          <div class="col-md-5">
            <label for="validation" class="form-label">Image</label>
            <input
              type="file"
              class="form-control"
              placeholder="Image"
              onChange={(e) => setTitle(e.target.value)}
              id="validation" required />
          </div>
          <div class="col-md-10">
            <label for="validation" class="form-label">Description</label>
            <textarea 
              type="textbox"
              class="form-control"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              id="validation" required />
          </div>
          <div className="form-group">

            <div class="submitBtn">
              <button class="btn btn-primary " type="submit" onClick={submit()}>Submit</button>
            </div>
          </div>
        </form>
      </>

    )
  
}

export default RegisterProperty