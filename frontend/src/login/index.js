import React, { useState } from "react"
import { UserSignUp, UserLogin, HostLogin, HostSignUp } from "../ServerApi"
import { objectToArray } from "./"
import { redirect, useNavigate } from "react-router-dom";
import "./index.css"
import validator from 'validator'
import { useCookies } from "react-cookie";



export default function (props) {
  let [authMode, setAuthMode] = useState("signin")

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [type, setType] = useState("")
  const [cookies, setCookie] = useCookies(['user']);


  const navigate = useNavigate()
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'email':
        if (value !== "") {
          if (validator.isEmail(value)) {
            setEmailError('Valid Email!')
          } else {
            setEmailError('Enter valid Email!')
          }
        }
        break;
      case 'password':
        if (value !== "") {
          if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
            setPasswordError('Strong Password!')
          } else {
            setPasswordError('Enter Strong Password!')
          }
        }
        break;
      default:
        break;
    }
  }


  const submit = (event) => {
    event.preventDefault();
    console.log("here")

    if (authMode === 'signin' && type === 'user') UserLogin({ email: email, passHash: password }).then((res) => {
      console.log("res ",res.error)
      setCookie('userType', "user", { path: '/' });
      setCookie('userEmail', email, { path: '/' });
      navigate('/home')
    })
    .catch((err) =>{
      alert('Failed authentication')
    })
    if (authMode === 'signin' && type === 'host') HostLogin({ email: email, passHash: password }).then((res) => {
      console.log(res.result)
      setCookie('userType', "user", { path: '/' });
      setCookie('userEmail', email, { path: '/' });
      navigate('/home')
    })
    .catch((err) =>{
      alert('Failed authentication')
    })
    if (authMode === 'signup' && type === 'host') HostSignUp({ firstName: firstName, lastName: lastName, email: email, phone: phone, passHash: password }).then((res) => {
      console.log(res.result)
      setCookie('userType', "user", { path: '/' });
      setCookie('userEmail', email, { path: '/' });
      navigate('/home')
    })
    .catch((err) =>{
      alert('Failed authentication')
    })
    if (authMode === 'signup' && type === 'user') UserSignUp({ firstName: firstName, lastName: lastName, email: email, phone: phone, passHash: password }).then((res) => {
      setCookie('userType', "user", { path: '/' });
      setCookie('userEmail', email, { path: '/' });
      navigate('/home')
    })
    .catch((err) =>{
      alert('Failed authentication')
    })

  }

  if (authMode === "signin") {
    return (
      <>
        <form className="row g-2 needs-validation justify-content-center" novalidate onSubmit={submit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center signContent">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-check form-check-inline radioType" onChange={(e) => {
              console.log(e.target.value)
              setType(e.target.value)
            }
            } >
              <input className="form-check-input " type="radio" value="user" name="type" required />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                User
              </label>

              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" value="host" name="type" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Host
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationEmail" className="form-label">Email ID</label>
            <div className="input-group has-validation">
              <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  // validateField("email", e.target.value)
                  setEmail(e.target.value)
                }}
              />
              <div className="invalid-feedback">
                Please enter a valid email id.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationCustom05" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => {
                // validateField("password", e.target.value)
                setPassword(e.target.value)
              }}
              id="validationPassword" required />
            <div >
              {passwordError}
            </div>
          </div>
          <div className="submitBtn">
            <button className="btn btn-primary " type="submit" >Submit</button>
          </div>
        </form>
      </>

    )
  }

  return (
    <>
      <form className="row g-2 needs-validation justify-content-center" novalidate onSubmit={ submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center signContent">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-check form-check-inline radioType" onChange={(e) => {
            console.log(e.target.value)
            setType(e.target.value)
          }
          } >
            <input className="form-check-input " type="radio" value="user" name="type" required />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              User
            </label>

            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" value="host" name="type" />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Host
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <label htmlFor="validationFirstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="validationCustom01" required
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="validationLastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="validationCustom02" required
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="validationEmail" className="form-label">Email ID</label>
          <div className="input-group has-validation">
            <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required
              value={email}
              placeholder="Email"
              onChange={(e) => {
                // validateField("email", e.target.value)
                setEmail(e.target.value)
              }}
            />
            <div className="invalid-feedback">
              Please enter a valid email id.
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <label htmlFor="validationCustom03" className="form-label">Phone</label>
          <input className="form-control"
            type="number"
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            required />
          <div className="invalid-feedback">
            Please enter a valid Number.
          </div>
        </div>

        <div className="col-md-5">
          <label htmlFor="validationCustom05" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              validateField("password", e.target.value)
              setPassword(e.target.value)
            }}
            id="validationPassword" required />
          <div >
            {passwordError}
          </div>
        </div>
        <div className="submitBtn">
          <button className="btn btn-primary " type="submit" >Submit</button>
        </div>

      </form>

    </>
  )
}