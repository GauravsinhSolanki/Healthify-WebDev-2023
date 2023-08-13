import React, { useState, useEffect } from "react";
import axios from "axios";
import backendUrl from "../config/Constants";
import { useNavigate } from "react-router-dom";

const DoctorProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [profile, setProfile] = useState({
    name: "",
    hospital: "",
    degree: "",
    designation: "",
  });

  const navigate = useNavigate();

  const [hospitals, setHospitals] = useState([]);

  // Fetch the hospitals
  useEffect(() => {
    axios
      .get(`${backendUrl}/`) // Update the endpoint URL
      .then((response) => {
        setHospitals(response.data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching the hospitals:", error);
      });
  }, []);

  // Fetch the profile details
  useEffect(() => {
    axios
      .get(`${backendUrl}/getDoctor`, { params: { userId: user._id } }) // Update the endpoint URL
      .then((response) => {
        if (response.data !== null) {
          setProfile(response.data);
        } else {
          const profile = {
            name: user.firstName + " " + user.lastName,
            hospital: "",
            degree: "",
            designation: "",
            userId: user._id,
          };
          setProfile(profile);
          console.log(profile);
        }
      })
      .catch((error) => {
        // An error occurred, try to retrieve the profile from local storage
        const profile = {
          name: user.firstName + " " + user.lastName,
          hospital: "",
          degree: "",
          designation: "",
          userId: user._id,
        };
        setProfile(profile);
        console.log(profile);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the profile or update it in your backend
    console.log("Profile submitted:", profile);
    axios.post(`${backendUrl}/addDoctor`, profile).then((response) => {
      window.alert("Profile updated successfully");
      navigate("/");
    });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hospital" className="form-label">
            Hospital
          </label>
          <select
            className="form-control"
            id="hospital"
            name="hospital"
            value={profile.hospital}
            onChange={handleChange}
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            <option value="" disabled>
              Select a hospital
            </option>
            {hospitals.map((hospital, index) => (
              <option key={index} value={hospital.name}>
                {hospital.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="degree" className="form-label">
            Degree
          </label>
          <input
            type="text"
            className="form-control"
            id="degree"
            name="degree"
            value={profile.degree}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="designation" className="form-label">
            Designation
          </label>
          <input
            type="text"
            className="form-control"
            id="designation"
            name="designation"
            value={profile.designation}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="designation" className="form-label">
            Role
          </label>
          <input
            type="text"
            className="form-control"
            id="designation"
            name="designation"
            value={user.role}
            disabled
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Profile
        </button>
      </form>
      <button
        className={"btn btn-danger mt-3"}
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default DoctorProfile;
