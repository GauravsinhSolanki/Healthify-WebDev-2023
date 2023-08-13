import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import backendUrl from "../config/Constants";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const RegisterHospitalPage = () => {
  const [hospitalData, setHospitalData] = useState({ name: "", address: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalData({ ...hospitalData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${backendUrl}/add`, hospitalData)
      .then((response) => {
        window.alert("Hospital registered successfully!");
        navigate("/admin/hospitals");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="container">
        <h1 className="text-center mt-4">Register Hospital</h1>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Hospital Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={hospitalData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={hospitalData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">
              Register Hospital
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterHospitalPage;
