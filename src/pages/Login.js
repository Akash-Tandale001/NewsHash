import React, { useRef, useState } from "react";
import "./login.css";
import { useAuth } from "../contexts/AuthContext";
import { AuthProvider } from "../contexts/AuthContext";
import {useNavigate , Link} from 'react-router-dom'


const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const [error , setError] = useState("")
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()

  const {signup}= useAuth()
  const {Login}= useAuth()

  const handleSubmitSignup=async (e)=>{
    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Passwords do not match")
    }
    try{
      setError('')
      setLoading(true)
      await signup(emailRef.current.value , passwordRef.current.value)
      navigate.push('/profile')
    }
    catch{
      setError("Failed to Create an Account")
    }
    setLoading(false)
  }

  const handleSubmitLogin=async (e)=>{
    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Passwords do not match")
    }
    try{
      setError('')
      setLoading(true)
      await Login(emailRef.current.value , passwordRef.current.value)
      navigate.push('/profile')
    }
    catch{
      setError("Failed to Login")
    }
    setLoading(false)
  }




  return (
    <AuthProvider>
    <div className="body">
      <div className="main">
        <input
          className="boxinput"
          type="checkbox"
          id="chk"
          aria-hidden="true"
        />

        <div class="signup">
          {error && <div className="alert danger">{error}</div>}
          <form onSubmit={handleSubmitSignup}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="boxinput"
              type="text"
              name="txt"
              placeholder="User name"
            />
            <input
              className="boxinput"
              type="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
              required
            />
            <input
              className="boxinput"
              type="password"
              name="pswd"
              placeholder="Password"
              ref={passwordRef}
              required
            />
            <input
              className="boxinput"
              type="cpassword"
              name="cpswd"
              placeholder="Confirm Password"
              ref={passwordConfirmRef}
              required
            />
            <button disabled={loading} className="loginbutton" type="submit">Sign up</button>
          </form>
        </div>

        <div class="login">
          <form onSubmit={handleSubmitLogin}>
          {error && <div className="alert danger">{error}</div>}
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="boxinput"
              type="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
              required
            />
            <input
              className="boxinput"
              type="password"
              name="pswd"
              placeholder="Password"
              ref={passwordRef}
              required
            />
            <div className="text-center">
              <Link to='/forgot'>Forgot Password ?</Link>
            </div>
            <button disabled={loading} className="loginbutton" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
    </AuthProvider>
  );
};

export default Login;
