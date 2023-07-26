import React from "react";
import { useEffect, useState } from "react";
import { AppointmentRepo } from "../../../Repo/Appointment";
import {
  ListContainer,
  AppointmentCard,
  DoctorName,
  HospitalName,
  PatientName,
  AppointmentDateAndTime,
} from "./ViewAppointmentStyles";

const ViewAppointment = (props) => {
  const appointmentRepo = new AppointmentRepo();

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await appointmentRepo.getAppointments();
      if (res.length) {
        setAppointments(res);
      }
    })();
  }, []);

  return (
    <>
      {appointments.length === 0 && (
        <h3>You don't have any appointment to reshedule !</h3>
      )}
      {appointments.length > 0 && (
        <div>
          <h3>Below are the sheduled appointments</h3>
          <ListContainer>
            {appointments.map((appointment) => {
              return (
                <AppointmentCard>
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
                </AppointmentCard>
              );
            })}
          </ListContainer>
        </div>
      )}
    </>
  );
};

export default ViewAppointment;
