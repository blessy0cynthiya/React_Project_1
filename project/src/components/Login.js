import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
function Login(){
    return(
        <div class="Container">
            <center>
            <div class="login">
              <h1>HomeTechHub</h1>
            <div class="form">
              <h4>Login</h4>
              <form class="login-form">
                <input type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                <input type="password" placeholder="Password" required />
                <button>login</button>
                <h4>Don't Have a account?</h4>
                <Link  to="./register">Register</Link>
              </form>  
              </div>
            </div>
            </center>
        </div>

    );
}

export default Login;