const mongoose = require('mongoose');

const prescription = new mongoose.Schema({
    pid: {
        type: String,
    },
    patientName: {
        type: String,
    },
    doctorName: {
        type: String,
    },
    did: {
        type: String,
    },
    prescription: {
        type: String,
    },
    expiryDate: {
        type: String,
    },
});


module.exports = mongoose.model('Prescription', prescription);