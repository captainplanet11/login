import React, { useState } from "react";
import './App.css';
import Login from "./Login"
import Register from "./Register"
import AdminLogin from "./AdminLogin"
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
 
  return (
    <div>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>} />
        <Route path = "/adminlogin" element = {<AdminLogin/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
    </div>
  );
}

export default App;