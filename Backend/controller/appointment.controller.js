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
<<<<<<< HEAD
=======

    async sendEmail(req,res){
        try {
          const appointment = await appointmentService.sendEmail(req);
          res.status(200).json(appointment);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }
>>>>>>> 37bf82399b42c56052e768feb3df751163c75e4b
}

module.exports = new AppointmentController();