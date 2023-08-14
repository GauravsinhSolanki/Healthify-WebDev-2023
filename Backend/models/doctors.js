const mongoose = require("mongoose");

//field needed for appointment :
// doctorName  ?
// patientName
// patientEmail  ==> most IMP
// hospital ?
// appointmentDate
// appointmentTime

const appointments = new mongoose.Schema({
  doctorName: {
    type: String,
  },
  patientName: {
    type: String,
  },
  patientEmail: {
    type: String,
  },
  hospital: {
    type: String,
  },
  appointmentDate: {
    type: String,
  },
  appointmentTime: {
    type: String,
  }
});

const doctor = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  appointments: {
    type: [appointments],
    required: true
  },
  userId: {
    type: String,
  }
});

module.exports = mongoose.model("Doctor", doctor);
