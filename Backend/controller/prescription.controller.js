const prescriptionServices = require('../services/prescription.services');

class PrescriptionController {

    constructor() {
    }

    async getPrescriptions(req, res) {
        try {
            const prescriptions = await prescriptionServices.getPrescriptions();
            res.json(prescriptions);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async addPrescription(req, res) {
        try{
            const prescription = await prescriptionServices.addPrescription(req);
            res.json(prescription);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getPrescriptionById(req, res) {
        try{
            const prescription = await prescriptionServices.getPrescriptionById(req);
            res.json(prescription);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getPrescriptionsByPid(req, res) {
        try{
            const prescription = await prescriptionServices.getPrescriptionsByPid(req);
            res.json(prescription);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async getPrescriptionsByDid(req, res) {
        try {
            const prescription = await prescriptionServices.getPrescriptionsByDid(req);
            res.json(prescription);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }

    async deletePrescriptionById(req, res) {
        try{
            const prescription = await prescriptionServices.deletePrescriptionById(req);
            res.json(prescription);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new PrescriptionController();