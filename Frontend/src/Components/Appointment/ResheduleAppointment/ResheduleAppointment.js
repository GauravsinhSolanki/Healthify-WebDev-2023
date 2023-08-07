import React from "react";
import { useEffect, useState } from "react";
import { AppointmentRepo } from "../../../Repo/Appointment";
import { CheckAvailableSlot } from "../../../Utility/CheckAvailableSlot";
import {
  ListContainer,
  AppointmentCard,
  HospitalName,
  DoctorName,
  PatientName,
  AppointmentDateAndTime,
  Reshedular,
  SelectDateAndTime,
  RescheduleButton,
  Button
} from "./ResheduleAppointmentStyles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
// import { Button } from "@mui/material";

const ResheduleAppointment = (props) => {
  console.log("props===>", props);
  const appointmentRepo = new AppointmentRepo();
  const checkSlot = new CheckAvailableSlot();

  const [appointments, setAppointments] = useState([]);
  const [resheduleClicked, setResheduleClicked] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [time, onChange] = useState("10:00");
  const [appointmentId, setAppointmentId] = useState("");
  const [success, setSuccess] = useState(false);
  const [alreadyBooked, setAlreadyBooked] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await appointmentRepo.getAppointments();
      if (res.length) {
        setAppointments(res);
      }
    })();
  }, []);

  const onReshedule = (id) => {
    setAppointmentId(id);
    setResheduleClicked(true);
  };

  const confirmAppointmment = async () => {
    const param = {
      appointmentId: appointmentId,
      appointmentDate: appointmentDate,
      time: time,
    };
    const canBook = await checkSlot.checkSlotAvailable(
      props.doctor._id,
      appointmentDate,
      time
    );
    console.log("canBook", canBook);
    if (canBook) {
      setAlreadyBooked(false);
      const res = await appointmentRepo.updateAppointment(param);
      if (res === 200) {
        setSuccess(true);
      }
    } else {
      setAlreadyBooked(true);
    }
  };

  return (
    <>
      {appointments.length === 0 && (
        <h3>You don't have any appointment to reshedule !</h3>
      )}
      {appointments.length > 0 && (
        <>
          {!resheduleClicked && (
            <div>
              <h3>Below are the sheduled appointments</h3>
              <ListContainer>
                {appointments.map((appointment) => {
                  return (
                    <AppointmentCard>
                      <HospitalName>
                        Hospital : {appointment.hospital}
                      </HospitalName>
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
                      <RescheduleButton
                        onClick={() => onReshedule(appointment._id)}
                      >
                        Reschedule
                      </RescheduleButton>
                    </AppointmentCard>
                  );
                })}
              </ListContainer>
            </div>
          )}
          {resheduleClicked && (
            <>
              <Reshedular>
                <h3>
                  Resheduling appointment of {props.doctor.hospital} with doctor{" "}
                  {props.doctor.name}
                </h3>
                <SelectDateAndTime>
                  <h2 style={{ marginRight: "12px" }}>Select date</h2>
                  <DatePicker
                    selected={appointmentDate}
                    onChange={(date) => setAppointmentDate(date)}
                  />
                </SelectDateAndTime>
                <SelectDateAndTime>
                  <h2 style={{ marginRight: "12px", marginTop: "10px" }}>
                    Select time
                  </h2>
                  <TimePicker onChange={onChange} value={time} />
                </SelectDateAndTime>
              {!success && (
                <Button  onClick={() => confirmAppointmment()}>
                  Confirm appointment
                </Button>
              )}
              </Reshedular>
            </>
          )}
          {success && (
            <h2 style={{ color: "green" }}>
              Appointment resheduled successfully!
            </h2>
          )}
          {alreadyBooked && (
            <h2 style={{ color: "red" }}>
              Slot not available please select anotherone !
            </h2>
          )}
        </>
      )}
    </>
  );
};

export default ResheduleAppointment;
