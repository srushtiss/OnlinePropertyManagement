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
  const [username, setUserName, removeUserName] = useCookies(['userName']);
  const [userType, setUserType, removeUserType] = useCookies(['userType']);

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


  const submit = () => {


    console.log("here")
    if (authMode === 'signin' && type === 'user') UserLogin(email, password).then((res) => {
      console.log(res.result)
      if (res.result === true) {
        setUserName(email)
        setUserType("user")
        navigate('/', { state: { username: res.username } })
      }
      else alert('Failed authentication')
    })
    if (authMode === 'signin' && type === 'host') HostLogin(email, password).then((res) => {
      console.log(res.result)

      if (res.result === true) {
        setUserName(email)
        setUserType("host")
        navigate('/', { state: { username: res.username } })
      }
      else alert('Failed authentication')
    })
    if (authMode === 'signup' && type === 'host') HostSignUp(email, password).then((res) => {
      console.log(res.result)
      if (res.result === true) {
        setUserName(email)
        setUserType("host")
        navigate('/', { state: { username: res.username } })
      }
      else alert('Failed authentication')
    })
    else UserSignUp(firstName, lastName, email, phone, password).then((res) => {
      if (res.result === true) {
        setUserName(email)
        setUserType("user")
        // navigate('/', { state: { username: res.username } })
      }
      else alert('Failed authentication')
    })
  }
  if (authMode === "signin") {
    return (
      <>
        <form class="row g-2 needs-validation justify-content-center" novalidate>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center signContent">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div class="form-check form-check-inline radioType" onChange={(e) => {
              console.log(e.target.value)
              setType(e.target.value)
            }
            } >
              <input class="form-check-input " type="radio" value="user" name="type" required />
              <label class="form-check-label" for="flexRadioDefault1">
                User
              </label>

              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" value="host" name="type" />
                <label class="form-check-label" for="flexRadioDefault2">
                  Host
                </label>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationEmail" class="form-label">Email ID</label>
            <div class="input-group has-validation">
              <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  // validateField("email", e.target.value)
                  setEmail(e.target.value)
                }}
              />
              <div class="invalid-feedback">
                Please enter a valid email id.
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <label for="validationCustom05" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
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
          <div className="form-group">

            <div class="submitBtn">
              <button class="btn btn-primary " type="submit" onClick={submit()}>Submit</button>
            </div>
          </div>
        </form>
      </>

    )
  }

  return (
    <>
      <form class="row g-2 needs-validation justify-content-center" novalidate>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center signContent">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div class="form-check form-check-inline radioType" onChange={(e) => {
            console.log(e.target.value)
            setType(e.target.value)
          }
          } >
            <input class="form-check-input " type="radio" value="user" name="type" required />
            <label class="form-check-label" for="flexRadioDefault1">
              User
            </label>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="host" name="type" />
              <label class="form-check-label" for="flexRadioDefault2">
                Host
              </label>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <label for="validationFirstName" class="form-label">First Name</label>
          <input type="text" class="form-control" id="validationCustom01" required
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div class="col-md-5">
          <label for="validationLastName" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="validationCustom02" required
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div class="col-md-5">
          <label for="validationEmail" class="form-label">Email ID</label>
          <div class="input-group has-validation">
            <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required
              value={email}
              placeholder="Email"
              onChange={(e) => {
                // validateField("email", e.target.value)
                setEmail(e.target.value)
              }}
            />
            <div class="invalid-feedback">
              Please enter a valid email id.
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <label for="validationCustom03" class="form-label">Phone</label>
          <input class="form-control"
            type="number"
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            required />
          <div class="invalid-feedback">
            Please enter a valid Number.
          </div>
        </div>

        <div class="col-md-5">
          <label for="validationCustom05" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
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

        <div class="submitBtn">
          <button class="btn btn-primary " type="submit" onClick={submit()}>Submit</button>
        </div>
      </form>
    </>
  )
}