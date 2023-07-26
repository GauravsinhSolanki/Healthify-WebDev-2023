const Appointments = require('../models/appointments');
class AppointmentServices {
    constructor() {
    }

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
}

module.exports = new AppointmentServices();