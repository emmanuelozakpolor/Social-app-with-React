import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Lumai.Social</h3>
                <span className="loginDesc">Connect and explore the world</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                  <input placeholder="Username" className="loginInput" />
                  <input placeholder="Email" className="loginInput" />
                  <input type='password' placeholder="Password" className="loginInput" />
                  <input type='password' placeholder="Password again" className="loginInput" />
                  <button className="loginButton">Sign up</button>
                  <button className="registerButton">Log into account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
