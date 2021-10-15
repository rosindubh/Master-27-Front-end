import React from 'react'

const SignUp = ({setUserName, setEmail, setPass, submitHandler}) => {
    return(
        <form className = "signup-form" onSubmit={submitHandler}>
                 {/* <a href="/">Homepage</a> */}

        <p className="signup-title">Sign Up</p>
        <input className="signup-input-fields" placeholder="UserName" onChange={(e)=> setUserName(e.target.value)} />
        <input className="signup-input-fields" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
        <input className="signup-input-fields" placeholder="Password" type='password' onChange={(e) => setPass(e.target.value)} />
        <button className="signup-btn" type="submit">Register</button>
          </form>
    )
}

export default SignUp;