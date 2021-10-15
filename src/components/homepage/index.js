import "../../App.css";
import React from 'react';
import logo from "../../pictures/Postcard-Pals-Logo.png";

function Homepage() {
 
  return (
    <div className="homepage">
      <br />
                {/* <a href="/signup">Sign-up</a>
                <a href="/login">Login</a> */}
                <h1 className="homepage-title">"Make Postcards Great Again..."</h1><br /><br />
                <img className="logo" src={logo} />
    </div>
  );
}
 
export default Homepage;