import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

//import NavBar
import NavBarFunc from "./components/NavBar/NavBarCo";

//import css
import "./App.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <>
      <Router>
        <NavBarFunc />
        <Routes>
          <Route 
            path="/Auth" 
            element={<Navigate to="/Auth" />} />

          <Route
            path="/ResumeBuilder"
            element={<Navigate to="/ResumeBuilder" />}
          />
          <Route
            path="/FinalBuilder"
            element={<Navigate to="/FinalBuilder" />}
          />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;