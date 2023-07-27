const hospitalServices = require('../services/hospital.services');
class HospitalController {
    constructor() {
    }

    async getHospitals(req, res) {
        try {
            const hospitals = await hospitalServices.getHospitals();
            res.status(200).json(hospitals);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    async addHospital(req, res) {
        try {
            const hospital = await hospitalServices.addHospital(req);
            res.status(200).json(hospital);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = new HospitalController();