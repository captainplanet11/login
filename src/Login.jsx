import React, { useState } from "react";
import finzlogo from './finzlogo.png'
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login(props){
     const [customerId, setCustomerId] = useState('');
    // const [acitve,activeButton] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(customerId);
    }

    const navigate = useNavigate()

   

    

    return (
        <div>
        <form>
        <div class="header">
       
       <header className="App-header">
        <img src={finzlogo} className="App-logo" alt="finzlogo" />
        <button id ="b3"  onClick ={() => (navigate('/adminlogin'))}>Admin</button> 
        </header>
        
      </div>
      </form>
        <div className="auth-form-container">
            <h2>Login</h2>
            
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="customerId">Customer Id</label>
                <input value={customerId} onChange={(e) => setCustomerId(e.target.value)} type="text" placeholder="8 digit customer id" id="customerId" name="customerId" />
                <button type="submit" >Send OTP</button>
            </form>
            <button className="link-btn"  onClick={() => (navigate('/register'))}>Don't have an account? Register here.</button>
        </div>

        </div>
    )
}

export default Login