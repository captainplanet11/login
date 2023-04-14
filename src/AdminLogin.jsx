import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import finzlogo from './finzlogo.png' 

function AdminLogin(props) {
    const [AdminId, setAdminId] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(AdminId);
    }
   const navigate =  useNavigate()
    return (
        <div>
            <div class="header">
       
       <header className="App-header">
        <img src={finzlogo} className="App-logo" alt="finzlogo" />
        <button id ="b3"  onClick ={() => (navigate('/'))}>Login</button> 
        </header>
        
      </div>

<div className="admin-form-container">
            <h2> Admin Login</h2>
            <form className="admin-form" onSubmit={handleSubmit}>
                <label htmlFor="AdminId">Admin Id</label>
                <input value={AdminId} onChange={(e) => setAdminId(e.target.value)} type="text" placeholder="8 digit Admin id" id="adminId" name="adminId" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="6 digit Password" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
        </div>

        
    )
}

export default AdminLogin