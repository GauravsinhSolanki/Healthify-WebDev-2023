// Author: Gauravsinh Bharatsinh Solanki B00932065

import React, { useEffect, useState } from "react";
import {
  Name,
  DoctorListContainer,
  DoctorCard,
  DoctorName,
  Designation,
  Info,
  Button,
} from "./HospitalStyle";
import { DoctorsRepo } from "../../Repo/Doctors";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../header";

const Hospital = (props) => {
  const doctorsRepo = new DoctorsRepo();
  let navigate = useNavigate();
  const location = useLocation();

  const id = location.state.id;
  const name = location.state.name;
  const address = location.state.address;
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const doctorsArray = await doctorsRepo.getDoctors();
      const doctors = doctorsArray.filter((doctor) => doctor.hospital === name);

      if (doctorsArray) {
        setDoctors(doctors);
        setFilteredDoctors(doctors);
      }
    })();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setFilteredDoctors(
      doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <Navbar />
      <Name>
        <b>Welcome to, {name} !</b>
      </Name>
      <Info>Please find below list of doctors for Appointment</Info>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Search for doctor..."
          value={search}
          onChange={handleSearch}
          style={{
            height: "30px",
            width: "50%",
          }}
        />
      </div>
      {!filteredDoctors.length ? (
        <div
          style={{
            marginTop: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {search ? "No doctors found..." : "Loading..."}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DoctorListContainer>
            {filteredDoctors.map((doctor, key = doctor._id) => {
              return (
                <DoctorCard key={key}>
                  <DoctorName>
                    {doctor.name} {doctor.name} ({doctor.degree}){" "}
                  </DoctorName>
                  <Designation>{doctor.designation}</Designation>
                  <Button
                    onClick={() =>
                      navigate("/doctor", {
                        state: {
                          doctor: doctor,
                        },
                      })
                    }
                    type="button"
                    style={{
                      height: "30px",
                      width: "50%",
                    }}
                    placeholder="View"
                    color=""
                  >
                    Visit
                  </Button>
                </DoctorCard>
              );
            })}
          </DoctorListContainer>
        </div>
      )}
    </>
  );
};

export default Hospital;
