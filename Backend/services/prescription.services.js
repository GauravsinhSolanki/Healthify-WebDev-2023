const Prescriptions = require('../models/prescription');

class PrescriptionServices {

    constructor() {
    }

    async addPrescription(req) {
        try {
            const prescription = new Prescriptions({
                pid: req.body.pid,
                did: req.body.did,
                patientName: req.body.patientName,
                doctorName: req.body.doctorName,
                prescription: req.body.prescription,
                expiryDate: req.body.expiryDate,
            });
            const pres = await prescription.save();
            return pres;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async getPrescriptions() {
        try {
            return await Prescriptions.find();
        } catch (err) {
            throw err;
        }
    }

    async getPrescriptionsByPid(req) {
        try{
            console.log(req.params.pid);
            return await Prescriptions.find({pid: req.params.pid})
        } catch (err) {
            throw err;
        }
    }

    async getPrescriptionsByDid(req) {
        try{
            return await Prescriptions.find({did: req.params.did})
        } catch (err) {
            throw err;
        }
    }

    async getPrescriptionById(req) {
        try{
            return await Prescriptions.findById(req.params.id);
        } catch (err) {
            throw err;
        }
    }

    async deletePrescriptionById(req) {
        try{
            return await Prescriptions.findByIdAndDelete(req.params.id);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new PrescriptionServices();