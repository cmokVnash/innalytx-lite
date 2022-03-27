import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <h3 style={{ color: "#f1faee" }}>Innalytx</h3>
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/order">Order</Link>
          <Link className="btn" to="/login">
            LOGIN
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
