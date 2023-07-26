const mongoose = require("mongoose");

//field needed for appointment :
// doctorName  
// doctorId ==> MIPM
// patientName
// patientEmail  ==> most IMP
// hospital 
// appointmentDate
// appointmentTime

const appointments = new mongoose.Schema({
  doctorName: {
    type: String,
    reruired: true,
  },
  doctorId: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    reruired: true,
  },
  patientEmail: {
    type: String,
    reruired: true,
  },
  hospital: {
    type: String,
    reruired: true,
  },
  appointmentDate: {
    type: Date,
    reruired: true,
  },
  appointmentTime: {
    type: String,
    reruired: true,
  },
});

module.exports = mongoose.model("Appointment", appointments);
