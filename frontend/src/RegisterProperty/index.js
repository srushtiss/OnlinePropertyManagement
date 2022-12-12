import React, { useState } from "react"
import { RegisterHostProperty, AddToFavorites } from "../ServerApi"
import { objectToArray } from "./"
import { redirect, useNavigate } from "react-router-dom";
import "./index.css"
import validator from 'validator'
import { useCookies } from "react-cookie";
import { ReactSession } from 'react-client-session';


function RegisterProperty() {
  const userEmail = ReactSession.get("userEmail");

  const navigate = useNavigate()
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
  const [map_address, setAddress] = useState("")


  const submit = (event) => {
    event.preventDefault();

    console.log("here")
    RegisterHostProperty({ email: userEmail, title: title, city: city, category: category, description: description, nightly_fee: nightly_fee, cleaning_fee: cleaning_fee, service_fee: service_fee, amenities: amenities, bedrooms: bedrooms, img: "sad", map_address: "asd", deleted:"false" })
      .then((res) => {
        alert("New property added!!")
        navigate('/home')
      })
      .catch((err) => {
        alert('Failed authentication')
      })
    console.log("here")
  }
  let usertype = ReactSession.get("userType");

  if (usertype === "host") {
    return (
      <>
        <form className="row g-2 needs-validation justify-content-center" novalidate onSubmit={submit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register you Property today!</h3>
          </div>

          <div className="col-md-5">
            <label htmlFor="validation" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              id="validation" required />
          </div>
          <div className="col-md-5">
            <label htmlFor="validation" className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              id="validation" required />
          </div>
          <div className="col-md-5">
            <label htmlFor="validation" className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
              id="validation" required />
          </div>
          <div className="col-md-5">
            <label htmlFor="validation" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              id="validation" required />
          </div>
          <div className="col-md-5">
            <label htmlFor="validation" className="form-label">Nightly Fee</label>
            <input
              type="number"
              className="form-control"
              placeholder="Nightly Fee"
              onChange={(e) => setNightlyFee(e.target.value)}
              id="validation" required />
          </div>
          <div className="col-md-5">
            <label htmlFor="validation" className="form-label">Cleaning Fee</label>
            <input
              type="number"
              className="form-control"
              placeholder="Cleaning Fee"
              onChange={(e) => setCleaningFee(e.target.value)}
              id="validation" required />
          </div>
          <div className="col-md-5">
            <label htmlFor="validation" className="form-label">Service Fee</label>
            <input
              type="number"
              className="form-control"
              placeholder="Service Fee"
              onChange={(e) => setServiceFee(e.target.value)}
              id="validation" required />
          </div>
          <div className="col-md-5">
            <label htmlFor="validation" className="form-label">Amenities</label>
            <input
              type="text"
              className="form-control"
              placeholder="Amenities"
              onChange={(e) => setAmenities(e.target.value)}
              id="validation" required />
          </div>
          <div className="col-md-5">
            <label htmlFor="validation" className="form-label">Bedrooms</label>
            <input
              type="text"
              className="form-control"
              placeholder="Bedrooms"
              onChange={(e) => setBedrooms(e.target.value)}
              id="validation" required />
          </div>

          <div className="col-md-5">
            <label htmlFor="validation" className="form-label">Image</label>
            <input
              type="file"
              className="form-control"
              placeholder="Image"
              onChange={(e) => setImg(e.target.value)}
              id="validation" required />
          </div>
          <div className="col-md-10">
            <label htmlFor="validation" className="form-label">Description</label>
            <textarea
              type="textbox"
              className="form-control"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              id="validation" required />
          </div>
          <div className="submitBtn">
            <button className="btn btn-primary " type="submit" >Submit</button>
          </div>
        </form>
      </>

    )

  }
  else {
    return (
      <>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Only Hosts can register their properties!!</h3>
        </div>
      </>
    )
  }
}

export default RegisterProperty