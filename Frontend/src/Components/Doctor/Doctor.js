import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BookAppointment from "../Appointment/BookAppointment/BookAppointment";
import ViewAppointment from "../Appointment/ViewAppointment/ViewAppointment";
import CancelAppointment from "../Appointment/CancelAppointment/CancelAppointment";
import ResheduleAppointment from "../Appointment/ResheduleAppointment/ResheduleAppointment";
import { Main, TabsContainer, Tab } from "./DoctorStyles";
import Navbar from "../header";

const Doctor = (props) => {
  // let navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("Book Appointment");

  const tabs = [
    {
      key: "Book Appointment",
      value: "Book Appointment",
    },
    {
      key: "View Appointment",
      value: "View Appointment",
    },
    {
      key: "Cancel Appointment",
      value: "Cancel Appointment",
    },
    {
      key: "Reschedule Appointment",
      value: "Reschedule Appointment",
    },
  ];

  const handleOnClick = (key) => {
    setActiveTab(key);
  };

  return (
    <>
      <Main>
        <Navbar />
        <TabsContainer>
          {tabs.map((tab) => (
            <Tab
              selected={activeTab === tab.key}
              key={tab.key}
              onClick={() => handleOnClick(tab.key)}
              className={activeTab === tab.key ? "active" : ""}
              style={{
                borderBottom: activeTab === tab.key ? "2px solid blue" : "",
              }}
            >
              {tab.value}
            </Tab>
          ))}
        </TabsContainer>

        {activeTab === "Book Appointment" && (
          <BookAppointment doctor={location.state.doctor} />
        )}
        {activeTab === "View Appointment" && <ViewAppointment />}
        {activeTab === "Cancel Appointment" && (
          <CancelAppointment doctor={location.state.doctor} />
        )}
        {activeTab === "Reschedule Appointment" && (
          <ResheduleAppointment doctor={location.state.doctor} />
        )}
      </Main>
    </>
  );
};

export default Doctor;
