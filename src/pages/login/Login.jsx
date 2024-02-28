import React from 'react';
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Lumai.Social</h3>
                <span className="loginDesc">Connect and explore the world</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                  <input placeholder="Email" className="loginInput" />
                  <input type='password' placeholder="Password" className="loginInput" />
                  <button className="loginButton">Login</button>
                  <span className="forgotPassword">Forgot Password?</span>
                  <button className="register">Create New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
