import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import NavBar
import NavBarFunc from "./components/NavBar/NavBarCo";

//import css
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

import Auth from "./pages/Auth/Auth";
import UserProvider from "./components/Context/user";
import ResumeBuilder from "./pages/ResumeBuilder/ResumeBuilder";
import FinalResume from "./pages/FinalResumes/FinalResume";

function App() {
  return (
    <>
        <Router>
        <UserProvider>
          <NavBarFunc />
          <Routes>
            <Route path="/auth" element={<Auth />} />

            <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
            <Route path="/FinalBuilder" element={<FinalResume />} />
            {/* <Auth /> */}
          </Routes>
          </UserProvider>
        </Router>
    </>
  );
}

export default App;
