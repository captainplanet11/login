import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import {Register} from "./Register";
 import {AdminLogin} from "./AdminLogin";
import finzlogo from './finzlogo.png'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import  Login from "./Login"
import Register from "./Register"
import  AdminLogin  from "./AdminLogin";


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const [active,activeButton] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  } 
  const navigate = useNavigate();

  const  goTOAdmin = () =>{
    navigate('/AdminLogin')
    // alert('hi')
  }




  
  
  
  return (
    <div>
     
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
  
      }
      
     

    </div>
    </div>
  );
}

export default App;