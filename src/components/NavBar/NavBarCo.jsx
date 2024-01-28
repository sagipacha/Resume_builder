import React from "react";
import { Link } from "react-router-dom";
import "./NavBarCo.css";

export default function NavBarFunc() {
  return (
    <div>
      <nav>
        <Link to={"/Auth"}>Log In</Link>
        <Link to={"/ResumeBuilder"}>Resume Builder</Link>
        <Link to={"/FinalBuilder"}>Personal</Link>
      </nav>
    </div>
  );
}
