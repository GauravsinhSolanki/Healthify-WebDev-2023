const Hospitals = require('../models/hospitals');
class HospitalServices {
    constructor() {
    }

    async getHospitals() {
        try {
            return await Hospitals.find();
        } catch (err) {
            throw err;
        }
    }

	async addHospital(req) {
        const hospital = new Hospitals({
            name: req.body.name,
            address: req.body.address,
        });
        try {
            return await hospital.save();

        } catch (err) {
            console.error(err);
            throw err;
        }
    }

}

module.exports = new HospitalServices();