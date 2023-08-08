import React from "react";
import { Link } from "react-router-dom";
import icon from "./navbar.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={icon} alt="Navbar Icon"></img>
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
          <Link to="/Patient" className="nav-link">
            Patient
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ContactUs" className="nav-link">
            Contact Us
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
// import React from "react";
// import { Link } from "react-router-dom";
// import icon from "./navbar.png";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div>
//         <img src={icon} alt="Navbar Icon"></img>
//       </div>
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/doctors" className="nav-link">
//             Doctors
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/patients" className="nav-link">
//             Patients
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/hospitals" className="nav-link">
//             Hospitals
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/ContactUs" className="nav-link">
//             Contact Us
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/FAQ" className="nav-link">
//             FAQ
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
