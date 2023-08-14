// Author: Gauravsinh Bharatsinh Solanki B00932065

import React, { useEffect, useState } from "react";
import { AppointmentRepo } from "../../../Repo/Appointment";
import {
  ListContainer,
  AppointmentCard,
  DoctorName,
  HospitalName,
  PatientName,
  AppointmentDateAndTime,
  Reshedular,
  CancelButton,
} from "./CancelAppointmentStyles";

const CancelAppointment = (props) => {
  const appointmentRepo = new AppointmentRepo();
  const user = JSON.parse(localStorage.getItem("user"));

  const [appointments, setAppointments] = useState([]);
  const [cancelClicked, setCancelClicked] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await appointmentRepo.getAppointments(user.email);
      if (res.length) {
        setAppointments(res);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error.message);
      setError("Error fetching appointments. Please try again later.");
    }
  };

  const onCancelClick = (id) => {
    setAppointmentId(id);
    setCancelClicked(true);
  };

  const onConfirmClick = async () => {
    try {
      const res = await appointmentRepo.cancelAppointment(appointmentId);
      if (res === 200) {
        setSuccess(true);
        // Refresh the page after 2 seconds (2000 milliseconds)
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setError("Failed to cancel the appointment.");
      }
    } catch (error) {
      console.error("Error canceling appointment:", error.message);
      setError("Error canceling appointment. Please try again later.");
    }
  };

  return (
    <>
      {appointments.length === 0 && (
        <h3>You don't have any appointment to cancel !</h3>
      )}
      {!cancelClicked && appointments.length > 0 && (
        <div>
          <h3>Please select the appointment you want to cancel</h3>
          <ListContainer>
            {appointments.map((appointment) => (
              <AppointmentCard key={appointment._id}>
                <HospitalName>Hospital : {appointment.hospital}</HospitalName>
                <DoctorName>Doctor : {appointment.doctorName}</DoctorName>
                <PatientName>
                  Patient Name : {appointment.patientName}
                </PatientName>
                <AppointmentDateAndTime>
                  Date : {appointment.appointmentDate}
                </AppointmentDateAndTime>
                <AppointmentDateAndTime>
                  Time : {appointment.appointmentTime}
                </AppointmentDateAndTime>
                <CancelButton onClick={() => onCancelClick(appointment._id)}>
                  Cancel
                </CancelButton>
              </AppointmentCard>
            ))}
          </ListContainer>
        </div>
      )}
      {cancelClicked && (
        <>
          {!success && !error && (
            <Reshedular>
              <h2 style={{ color: "red" }}>
                Are you sure to cancel appointment of {props.doctor.hospital}{" "}
                with doctor {props.doctor.name} ?
              </h2>
            </Reshedular>
          )}
          {!success && !error && (
            <CancelButton onClick={() => onConfirmClick()}>
              Confirm
            </CancelButton>
          )}
        </>
      )}
      {success && (
        <h2 style={{ color: "green" }}>Appointment canceled successfully!</h2>
      )}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
    </>
  );
};

export default CancelAppointment;
