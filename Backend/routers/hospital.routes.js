const express = require('express');
const router = express.Router();
const hospitalController = require('../controller/hospital.controller');

router.get('/', hospitalController.getHospitals.bind(hospitalController));

router.post('/add', hospitalController.addHospital.bind(hospitalController));


module.exports = router;