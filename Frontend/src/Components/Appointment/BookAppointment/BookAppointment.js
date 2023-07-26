import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { SelectDateAndTime } from "./BookAppointmentStyles";
import { AppointmentRepo } from "../../../Repo/Appointment";
import { CheckAvailableSlot } from "../../../Utility/CheckAvailableSlot";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const BookAppointment = (props) => {
  const appointmentRepo = new AppointmentRepo();
  const checkSlot = new CheckAvailableSlot();

  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [time, onChange] = useState("10:00");
  const [isLoading, setIsLoading] = useState(false);
  const [booked, setBooked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [alreadyBooked, setAlreadyBooked] = useState(false);

  const onBookAppointment = async () => {
    console.log("adate", appointmentDate);
    setIsLoading(true);
    const requestBody = {
      doctorName: props.doctor.name,
      doctorId: props.doctor._id,
      patientName: "patient 1",
      patientEmail: "Patient1@gmail.com",
      hospital: props.doctor.hospital,
      appointmentDate: appointmentDate,
      appointmentTime: time,
    };
    const canBook = await checkSlot.checkSlotAvailable(
      props.doctor._id,
      appointmentDate,
      time
    );
    console.log("canBook", canBook);
    if (canBook) {
      setAlreadyBooked(false);
      const response = await appointmentRepo.addAppointment(requestBody);
      if (response === 200) {
        setIsLoading(false);
        setBooked(true);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } else {
      setIsLoading(false);
      setAlreadyBooked(true);
    }
  };
  return (
    <>
      <h1>In book appointment !</h1>
      <SelectDateAndTime>
        <h2 style={{ marginRight: "12px" }}>Select date</h2>
        <DatePicker
          selected={appointmentDate}
          onChange={(date) => setAppointmentDate(date)}
        />
      </SelectDateAndTime>
      <SelectDateAndTime>
        <h2 style={{ marginRight: "12px" }}>Select time</h2>
        <TimePicker onChange={onChange} value={time} />
      </SelectDateAndTime>
      {!booked && (
        <button onClick={() => onBookAppointment()}>
          {isLoading ? "Booking..." : "Book Appointment"}
        </button>
      )}
      {booked && !isError && (
        <h2 style={{ color: "green" }}>
          Your Appointment has been booked successfully!
        </h2>
      )}
      {alreadyBooked && (
        <h2 style={{ color: "red" }}>
          Slot not available please select anotherone !
        </h2>
      )}
      {isError && <h2 style={{ color: "red" }}>Something went wrong!</h2>}
    </>
  );
};

export default BookAppointment;
