import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="header">
        <h1>Welcome to TASK LISTER</h1>
        <h3>Developed by Aman Mahto</h3>
      </div>
      <div className="nav-links">
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        <Link to={"/login"} className="nav-link">
          Login
        </Link>
        <Link to={"/register"} className="nav-link">
          Register
        </Link>
      </div>
    </>
  );
}
