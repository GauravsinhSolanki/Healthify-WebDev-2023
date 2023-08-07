const express = require('express');
const router = express.Router();

const patientController = require('../controller/patient.controller');

router.get('/', patientController.getPatients.bind(patientController));
router.get('/:id', patientController.getPatientById.bind(patientController));

module.exports = router;