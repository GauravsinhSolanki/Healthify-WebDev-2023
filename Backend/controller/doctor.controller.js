const doctorServices = require('../services/doctor.services');
class DoctorController {

    constructor() {
    }

    async getDoctors(req, res) {
        try{
            const doctors = await doctorServices.getDoctors();
            res.json(doctors);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async addDoctor(req, res) {
        try {
            const doctor = await doctorServices.addDoctor(req);
            res.json(doctor);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getDoctor(req, res) {
        try {
            const doctor = await doctorServices.getDoctor(req);
            res.json(doctor);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}

module.exports = new DoctorController();