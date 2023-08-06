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
  Reshedular,
<<<<<<< HEAD
=======
  CancelButton,
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
} from "./CancelAppointmentStyles";

const CancelAppointment = (props) => {
  const appointmentRepo = new AppointmentRepo();

  const [appointments, setAppointments] = useState([]);
  const [cancelClicked, setCancelClicked] = useState(false);
  const [appointmendId, setAppointmentId] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await appointmentRepo.getAppointments();
      if (res.length) {
        setAppointments(res);
      }
    })();
  }, []);

  const onCancelClick = (id) => {
    setAppointmentId(id);
    setCancelClicked(true);
  };

  const onConfirmClick = async () => {
    const res = await appointmentRepo.cancelAppointment(appointmendId);
    if (res === 200) {
      setSuccess(true);
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
<<<<<<< HEAD
                  <button onClick={() => onCancelClick(appointment._id)}>
                    Cancel
                  </button>
=======
                  <CancelButton onClick={() => onCancelClick(appointment._id)}>
                    Cancel
                  </CancelButton>
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
                </AppointmentCard>
              );
            })}
          </ListContainer>
        </div>
      )}
      {cancelClicked && (
        <>
          {!success && (
            <Reshedular>
              <h2 style={{ color: "red" }}>
                Are you sure to cancel appointment of {props.doctor.hospital}{" "}
                with doctor {props.doctor.name} ?
              </h2>
            </Reshedular>
          )}
          {!success && (
<<<<<<< HEAD
            <button onClick={() => onConfirmClick()}>Confirm</button>
=======
            <CancelButton onClick={() => onConfirmClick()}>
              Confirm
            </CancelButton>
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
          )}
        </>
      )}
      {success && (
<<<<<<< HEAD
=======
        
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
        <h2 style={{ color: "green" }}>Appointment canceled successfully!</h2>
      )}
    </>
  );
};

export default CancelAppointment;
