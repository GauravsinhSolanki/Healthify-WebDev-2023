const Doctors = require("../models/doctors");

class DoctorServices {
    constructor() {
    }

    async getDoctors() {
        try {
            return await Doctors.find();
        } catch (err) {
            throw err;
        }
    }

    async addDoctor(req) {
        const doctor = new Doctors({
            name: req.body.name,
            hospital: req.body.hospital,
            degree: req.body.degree,
            designation: req.body.designation,
            appointments: req.body.appointments,
        });
        try {
            const doc = await doctor.save();
            return doc;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

module.exports = new DoctorServices();
