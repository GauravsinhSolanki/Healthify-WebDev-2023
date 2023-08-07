const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctor.controller');

router.get('/getDoctors', doctorController.getDoctors.bind(doctorController));
router.get('/getDoctor', doctorController.getDoctor.bind(doctorController));
router.post('/addDoctor', doctorController.addDoctor.bind(doctorController));

module.exports = router;