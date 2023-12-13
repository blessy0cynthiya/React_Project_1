import React from 'react';
import './Register.css';
function Register(){
    return(
        <div className='Container'>
            <center>
                <h2>Welcome</h2>
                <b><h4>To</h4></b>
                <b><h4>HOME TECH HUB</h4></b>
                <h5>Please Sign up to Continue</h5>
                <fieldset>
                    <form>
                        <table>
                        <tr>
                            <td>
                                <b><h3>User Name :</h3></b>
                            </td>
                            <td>
                                <input type="text" placeholder='Enter your Name' required></input>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>
                                <h3><b>E-mail :(Optional)</b></h3>
                            </td>
                            <td>
                            <input type="email" placeholder='Enter your E-mail' required></input>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>
                                <h3><b>Mobile Number :</b></h3>
                            </td>
                            <td>
                                <input type="number" placeholder='Enter your mobile number' required></input>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>
                                <h3><b>Password :</b></h3>
                            </td>
                            <td>
                                <input type="password" placeholder='Create a strong password' required></input>
                            </td>
                        </tr>
                        <br></br>
                        </table>
                        
                        <button>Sign in</button>
                    </form>
                </fieldset>
            </center>
        </div>

    );
}

export default Register;