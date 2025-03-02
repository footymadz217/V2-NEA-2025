import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./login"; // Import Login Page
import Admin from "./student_dashboard";
import Teacher from "./teacher";
import Academia from "./academia";
import Tutor from "./formtutor_dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* ✅ Login page is now the default */}
        <Route path="/admin_dashboard" element={<Admin />} />
        <Route path="/student_dashboard" element={<Academia />} />
        <Route path="/teacher_dashboard" element={<Teacher />} />
        <Route path="/formtutor_dashboard" element={<Tutor />} />
      </Routes>
    </Router>
  );
}

export default App;
