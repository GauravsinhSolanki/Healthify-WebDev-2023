import React from "react";
import {
  Name,
  DoctorListContainer,
  DoctorCard,
  DoctorName,
  Designation,
  Info,
  Button
} from "./HospitalStyle";
import { useEffect, useState } from "react";
import { DoctorsRepo } from "../../Repo/Doctors";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../header";

const Hospital = (props) => {
  const doctorsRepo = new DoctorsRepo();
  let navigate = useNavigate();
  const location = useLocation();

  const id = location.state.id;
  const name = location.state.name;
  const address = location.state.address;
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    (async () => {
      const doctorsArray = await doctorsRepo.getDoctors();
      const doctors = doctorsArray.filter((doctor) => doctor.hospital === name);

      if (doctorsArray) {
        setDoctors(doctors);
      }
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Name>
        <b>Welcome to, {name} !</b>
      </Name>
      <Info>Please find below list of doctors for Appointment</Info>

      {!doctors.length ? (
        <div
          style={{
            marginTop: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading...
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
            {doctors.map((doctor, key = doctor._id) => {
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
