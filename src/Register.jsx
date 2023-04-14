import React, { useState } from "react";
import finzlogo from './finzlogo.png'
import { useNavigate } from "react-router-dom";


function Register(props) {
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [adproof, setAdproof] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    const navigate = useNavigate()

    return (
        <div>
              <div class="header">
       
       <header className="App-header">
        <img src={finzlogo} className="App-logo" alt="finzlogo" /> 
        <button id ="b3"  onClick ={() => (navigate('/adminlogin'))}>Admin</button>      
         </header>
      </div>
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="dob">Date of Birth</label>
            <input value={dob} name="dob" onChange={(e) => setDob(e.target.value)} id="dob" type="date" placeholder="dd/mm/yyyy" />
            <label htmlFor="address">Permanent Address</label>
            <input value={address} name="address" onChange={(e) => setAddress(e.target.value)} id="address" type="text" placeholder="Full Address" />
            <label htmlFor="mobile">Mobile Number</label>
            <input value={mobile} name="mobile" onChange={(e) => setMobile(e.target.value)} id="mobile" type="number" placeholder="10 digit mobile number" />
            <label htmlFor="gender">Gender</label>
            <input value={gender} name="gender" onChange={(e) => setGender(e.target.value)} id="gender"  placeholder="select" />
            <label htmlFor="adproof">Address Proof pdf_only</label>
            <input value={adproof} name="adproof" onChange={(e) => setAdproof(e.target.value)} id="adproof" type="file" placeholder="choose pdf" />
            <button className="register" >Submit</button>
        </form>
        <button className="link-btn" onClick={() => navigate('/')}>Already have an account? Login here.</button>
    </div>
    </div>
    )
}

export default Register