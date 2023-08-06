import React from "react";
import {
  ListContainer,
  HospitalCard,
  Name,
  Address,
<<<<<<< HEAD
  ButtonConntainer,
=======
  Button,
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
} from "./HospitalListStyle";
import { useEffect, useState } from "react";
import { HospitalRepo } from "../../Repo/Hospitals";
import { useNavigate } from "react-router-dom";
import Navbar from "../header";

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const hospitalRepo = new HospitalRepo();
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const hospitalsArray = await hospitalRepo.getHospitals();

      if (hospitalsArray) {
        setHospitals(hospitalsArray);
      }
    })();
  }, []);

  return (
    <>
<<<<<<< HEAD
    <Navbar/>
=======
      <Navbar />
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
      {!hospitals.length ? (
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
          <ListContainer>
            {hospitals.map((hospital, key = hospital._id) => {
              return (
                <HospitalCard key={key}>
                  <Name>{hospital.name}</Name>
                  <Address>{hospital.address}</Address>
<<<<<<< HEAD
                  <button
=======
                  <Button
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
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
<<<<<<< HEAD
                  </button>
=======
                  </Button>
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
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
