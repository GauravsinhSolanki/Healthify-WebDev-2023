const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Doctors = require("./models/doctors");
const Hospitals = require("./models/hospitals");
const Appointments = require("./models/appointments");
const cors = require("cors");

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

const DB =
  "mongodb+srv://Gaurav:gauravuser@cluster0.1bbevrk.mongodb.net/Appointment-Booking";

mongoose
  .connect(DB)
  .then(() => {
    console.log("successfull");
  })
  .catch((err) => {
    console.log("no connections", err);
  });

app.get("/", async (req, res) => {
  try {
    const hospitals = await Hospitals.find();
    res.json(hospitals);
  } catch (err) {
    res.send(err);
  }
});

app.post("/add", async (req, res) => {
  const hospital = new Hospitals({
    name: req.body.name,
    address: req.body.address,
  });
  try {
    const hos = await hospital.save();
    res.json(hos);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.get("/getDoctors", async (req, res) => {
  try {
    const doctors = await Doctors.find();
    res.json(doctors);
  } catch (err) {
    res.send(err);
  }
});

app.post("/addDoctor", async (req, res) => {
  const doctor = new Doctors({
    name: req.body.name,
    hospital: req.body.hospital,
    degree: req.body.degree,
    designation: req.body.designation,
    appointments: req.body.appointments,
  });
  try {
    const doc = await doctor.save();
    res.json(doc);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

//field needed for appointment :
// doctorName
// doctorId ==> MIPM
// patientName
// patientEmail  ==> most IMP
// hospital
// appointmentDate
// appointmentTime

app.post("/addAppointment", async (req, res) => {
  const appointment = new Appointments({
    doctorName: req.body.doctorName,
    doctorId: req.body.doctorId,
    patientName: req.body.patientName,
    patientEmail: req.body.patientEmail,
    hospital: req.body.hospital,
    appointmentDate: req.body.appointmentDate,
    appointmentTime: req.body.appointmentTime,
  });
  try {
    const appt = await appointment.save();
    res.send({ success: true, appt });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.get("/getAppointments", async (req, res) => {
  try {
    const appointments = await Appointments.find();
    res.json(appointments);
  } catch (err) {
    res.send(err);
  }
});

app.put("/updateAppointment/:id", async (req, res) => {
  try {
    const appointment = await Appointments.findById(req.params.id);
    appointment.appointmentDate = req.body.appointmentDate;
    appointment.appointmentTime = req.body.appointmentTime;
    const appt = await appointment.save();
    res.send({ success: true, appt });
  } catch (err) {
    res.send(err);
  }
});

app.post("/cancelAppointment/:id", async (req, res) => {
  try {
    const appointment = await Appointments.findById(req.params.id);
    appointment.deleteOne();
    const appt = await appointment.save();
    res.send({ success: true, appt });
  } catch (err) {
    res.send(err);
  }
});

app.listen(9090, function () {
  console.log("Server Started!");
});
