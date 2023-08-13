import React, { useState, useEffect } from "react";
import axios from "axios";
import backendUrl from "../config/Constants";
import { useNavigate } from "react-router-dom";
import Navbar from "../header";
import { Button } from "@mui/material";

const Prescribe = () => {
  const [patients, setPatients] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [prescription, setPrescription] = useState({
    pid: "",
    did: user._id,
    patientName: "",
    doctorName: user.firstName + " " + user.lastName,
    prescription: "",
    expiryDate: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${backendUrl}/patient`)
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching the patients:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrescription({
      ...prescription,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch the patient name from the patients array
    const patient = patients.find(
      (patient) => patient._id === prescription.pid
    );
    prescription.patientName = patient.firstName + " " + patient.lastName;
    axios
      .post(`${backendUrl}/prescription/add`, prescription)
      .then(() => {
        alert("Prescription submitted successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error(
          "An error occurred while submitting the prescription:",
          error
        );
      });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-4">Prescription</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="pid" className="form-label">
              Patient ID
            </label>
            <select
              className="form-control"
              id="pid"
              name="pid"
              value={prescription.pid}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select a patient
              </option>
              {patients.map((patient, index) => (
                <option key={index} value={patient._id}>
                  {patient.firstName + " " + patient.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="prescription" className="form-label">
              Prescription
            </label>
            <textarea
              className="form-control"
              id="prescription"
              name="prescription"
              value={prescription.prescription}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label">
              Expiry Date
            </label>
            <input
              type="date"
              className="form-control"
              id="expiryDate"
              name="expiryDate"
              value={prescription.expiryDate}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Prescription
          </button>
        </form>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
          onClick={() => navigate("/doctor/prescriptions")}
        >
          View Prescriptions
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ margin: "10px" }}
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default Prescribe;
