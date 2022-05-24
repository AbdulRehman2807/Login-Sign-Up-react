import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DashBord from "../../pages/dashbord/dashBord";
import Login from "../../pages/Login/login";
import SignUpp from "../../pages/singnup/SingUp";


export default function Roote() {
  return (
    <Router>
      <Routes >
        <Route path="/dashbord" element={<DashBord/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUpp/>} />
          </Routes> 
    </Router>
  );
}
