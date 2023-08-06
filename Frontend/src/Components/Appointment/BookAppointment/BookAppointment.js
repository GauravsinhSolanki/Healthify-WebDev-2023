import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
<<<<<<< HEAD
import { SelectDateAndTime } from "./BookAppointmentStyles";
=======
import { Main, SelectDateAndTime, Button } from "./BookAppointmentStyles";
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
import { AppointmentRepo } from "../../../Repo/Appointment";
import { CheckAvailableSlot } from "../../../Utility/CheckAvailableSlot";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
<<<<<<< HEAD
import Navbar from "../../header";

=======
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b

const BookAppointment = (props) => {
  const appointmentRepo = new AppointmentRepo();
  const checkSlot = new CheckAvailableSlot();

  const [appointmentDate, setAppointmentDate] = useState(new Date());
<<<<<<< HEAD
  const [time, onChange] = useState("10:00");
=======
  const [time, onChange] = useState("10:07");
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
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
<<<<<<< HEAD
      patientName: "patient 1",
      patientEmail: "Patient1@gmail.com",
=======
      patientName: "Gaurav",
      patientEmail: "solankigbs11@gmail.com",
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
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
<<<<<<< HEAD
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
      {isError && (
        <h2 style={{ color: "green" }}>
          Your Appointment has been booked successfully!
        </h2>
      )}
=======
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
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
    </>
  );
};

export default BookAppointment;
