import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Main, SelectDateAndTime, Button } from "./BookAppointmentStyles";
import { AppointmentRepo } from "../../../Repo/Appointment";
import { CheckAvailableSlot } from "../../../Utility/CheckAvailableSlot";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import axios from "axios";
import backendUrl from "../../config/Constants";

const BookAppointment = (props) => {
  const appointmentRepo = new AppointmentRepo();
  const checkSlot = new CheckAvailableSlot();
  const user = JSON.parse(localStorage.getItem("user"));
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [time, onChange] = useState("10:07");
  const [isLoading, setIsLoading] = useState(false);
  const [booked, setBooked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [alreadyBooked, setAlreadyBooked] = useState(false);
  const sendEmail = async () => {
    try {
      const response = await axios.post(`${backendUrl}/sendEmail`, {
        doctorName: props.doctor.name,
        patientName: `${user.firstName} ${user.lastName}`,
        patientEmail: user.email,
        hospital: props.doctor.hospital,
        appointmentDate,
        appointmentTime: time,
      });
      console.log("Email sent:", response.data);
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  const onBookAppointment = async () => {
    console.log("adate", appointmentDate);
    setIsLoading(true);

    const requestBody = {
      doctorName: props.doctor.name,
      doctorId: props.doctor._id,
      patientName: user.firstName + " " + user.lastName,
      patientEmail: user.email,
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
      console.log(response);
      if (response === 201) {
        setIsLoading(false);
        await sendEmail();
        console.log(sendEmail);
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
      <Main>
        <h1>Book Your Appointment Here!</h1>
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
          <Button onClick={() => onBookAppointment()}>
            {isLoading ? "Booking..." : "Book Appointment"}
          </Button>
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
        {isError && (
          <h2 style={{ color: "green" }}>
            Your Appointment has been booked successfully!
          </h2>
        )}
      </Main>
    </>
  );
};

export default BookAppointment;
