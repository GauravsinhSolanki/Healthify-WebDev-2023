const patientServices = require('../services/patient.services');

class PatientController {
    constructor() {
    }

    async getPatients(req, res) {
        try {
            const patients = await patientServices.getPatients();
            res.json(patients);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getPatientById(req, res) {
        try {
            const patient = await patientServices.getPatientById(req);
            res.json(patient);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

}

module.exports = new PatientController();