// Author: Gauravsinh Bharatsinh Solanki B00932065

import React, { useEffect, useState } from "react";
import {
  ListContainer,
  HospitalCard,
  Name,
  Address,
  Button,
} from "./HospitalListStyle";
import { HospitalRepo } from "../../Repo/Hospitals";
import { useNavigate } from "react-router-dom";
import Navbar from "../header";

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [search, setSearch] = useState("");
  const hospitalRepo = new HospitalRepo();
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const hospitalsArray = await hospitalRepo.getHospitals();

      if (hospitalsArray) {
        setHospitals(hospitalsArray);
        setFilteredHospitals(hospitalsArray);
      }
    })();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setFilteredHospitals(
      hospitals.filter((hospital) =>
        hospital.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <Navbar />
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
          placeholder="Search for hospital..."
          value={search}
          onChange={handleSearch}
          style={{
            height: "30px",
            width: "50%",
          }}
        />
      </div>
      {!filteredHospitals.length ? (
        <div
          style={{
            marginTop: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {search ? "No hospitals found..." : "Loading..."}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ListContainer>
            {filteredHospitals.map((hospital, key = hospital._id) => {
              return (
                <HospitalCard key={key}>
                  <Name>{hospital.name}</Name>
                  <Address>{hospital.address}</Address>
                  <Button
                    onClick={() =>
                      navigate("/hospital", {
                        state: {
                          id: hospital._id,
                          name: hospital.name,
                          address: hospital.address,
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
                    View
                  </Button>
                </HospitalCard>
              );
            })}
          </ListContainer>
        </div>
      )}
    </>
  );
};

export default HospitalList;
