const {connect, close} = require("../config/Mongo");

class PatientServices {

    constructor() {
    }

    async getPatients() {
        try{
            const db = await connect();
            const results = await db.collection('users').find({"role": "Patient"}).toArray();
            await close();
            return results;
        } catch (err) {
            throw err;
        }
    }

    async getPatientById(req) {
        try{
            const db = await connect();
            const results = await db.collection('users').findOne({_id: req.params.id});
            await close();
            return results;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new PatientServices();