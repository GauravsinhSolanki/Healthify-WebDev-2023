const appointmentService = require('../services/appointment.services');

class AppointmentController {

    constructor() {
    }

    async addAppointment(req, res) {
        try {
            const appointment = await appointmentService.addAppointment(req);
            res.status(201).json(appointment);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async getAppointments(req, res) {
        try {
            const appointments = await appointmentService.getAppointments();
            res.status(200).json(appointments);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async updateAppointment(req, res) {
        try {
            const appointment = await appointmentService.updateAppointment(req);
            res.status(200).json(appointment);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async cancelAppointment(req, res) {
        try {
            const appointment = await appointmentService.cancelAppointment(req);
            res.status(200).json(appointment);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async sendEmail(req,res){
        try {
          const appointment = await appointmentService.sendEmail(req);
          res.status(200).json(appointment);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new AppointmentController();