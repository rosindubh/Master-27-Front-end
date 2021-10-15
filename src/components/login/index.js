import React from "react";
import "../../App.css";

const Login = ({setPass, setEmail, loginHandler}) => {

    return(
        <form className = "login-form" onSubmit={loginHandler}>
               {/* <a href="/">Homepage</a> */}

        <p className="login-title">Login</p>
        <input className="login-input-fields" placeholder='email' type="email" onChange={(e) => setEmail(e.target.value) } />
        <input className="login-input-fields" placeholder='password' type="password" onChange={(e) => setPass(e.target.value)}  />
        <button className="login-btn" type='submit'>Login</button>
      </form>
    )
}

export default Login; 