import React from "react";
import { Link } from "react-router-dom";
import icon from "../img/healthyCompany.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div>
            <img src={icon}></img>
        </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/doctors" className="nav-link">
            Doctors
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/patients" className="nav-link">
            Patients
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/hospitals" className="nav-link">
            Hospitals
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/FAQ" className="nav-link">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

