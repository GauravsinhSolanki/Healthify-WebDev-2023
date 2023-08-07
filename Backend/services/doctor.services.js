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

    /*async addDoctor(req) {
        const result = await Doctors.findOne({userId: req.body.userId});
        if (result) {
        //     Update the values of the existing doctor
            try {
            } catch (error) {

            }
        }
        const doctor = new Doctors({
            name: req.body.name,
            hospital: req.body.hospital,
            degree: req.body.degree,
            designation: req.body.designation,
            appointments: req.body.appointments,
            userId: req.body.userId
        });
        try {
            const doc = await doctor.save();
            return doc;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }*/

    async addDoctor(req) {
        try {
            let doctor = await Doctors.findOne({ userId: req.body.userId });
            if (doctor) {
                // Update the existing doctor's information
                doctor.name = req.body.name;
                doctor.hospital = req.body.hospital;
                doctor.degree = req.body.degree;
                doctor.designation = req.body.designation;
                doctor.appointments = req.body.appointments;
            } else {
                // Create a new doctor
                doctor = new Doctors({
                    name: req.body.name,
                    hospital: req.body.hospital,
                    degree: req.body.degree,
                    designation: req.body.designation,
                    appointments: req.body.appointments,
                    userId: req.body.userId,
                });
            }

            // Save the new or updated doctor
            const doc = await doctor.save();
            return doc;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }


    async getDoctor(req) {
        try {
            return await Doctors.findOne({userId: req.query.userId});
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

module.exports = new DoctorServices();
