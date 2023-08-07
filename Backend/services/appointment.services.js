const Appointments = require("../models/appointments");
const nodemailer = require("nodemailer");
class AppointmentServices {
  constructor() {}

  async addAppointment(req) {
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
      return { success: true, appt };
    } catch (err) {
      throw err;
    }
  }

  async getAppointments() {
    try {
      return await Appointments.find();
    } catch (err) {
      throw err;
    }
  }

  async updateAppointment(req) {
    try {
      const appointment = await Appointments.findById(req.params.id);
      appointment.appointmentDate = req.body.appointmentDate;
      appointment.appointmentTime = req.body.appointmentTime;
      const appt = await appointment.save();
      return { success: true, appt };
    } catch (err) {
      throw err;
    }
  }

  async cancelAppointment(req) {
    try {
      const appointment = await Appointments.findById(req.params.id);
      appointment.deleteOne();
      const appt = await appointment.save();
      return { success: true, appt };
    } catch (err) {
      throw err;
    }
  }

  async sendEmail(req) {
    try {
      const emailConfig = {
        service: "gmail",
        secure: true,
        host: "smtp.gmail.com",
        auth: {
          user: "solankigbs11@gmail.com",
          pass: "qixrphhbprdhdmgo",
        },
      };
      const transporter = nodemailer.createTransport(emailConfig);
      const { recipient, subject, message } = req.body;
      const mailOptions = {
        from: "radheypatel272@gmail.com",
        to: recipient,
        subject: subject,
        text: message,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).send("Error sending email.");
        } else {
          console.log("Email sent: " + info.response);
          res.send("Email sent successfully.");
        }
      });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new AppointmentServices();
