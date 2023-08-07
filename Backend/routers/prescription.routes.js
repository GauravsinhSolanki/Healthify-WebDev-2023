const express = require('express');
const router = express.Router();
const prescriptionController = require('../controller/prescription.controller');

router.get('/', prescriptionController.getPrescriptions.bind(prescriptionController));
router.get('/:id', prescriptionController.getPrescriptionById.bind(prescriptionController));
router.get('/patient/:pid', prescriptionController.getPrescriptionsByPid.bind(prescriptionController));
router.get('/doctor/:did', prescriptionController.getPrescriptionsByDid.bind(prescriptionController));
router.post('/add', prescriptionController.addPrescription.bind(prescriptionController));
router.delete('/delete/:id', prescriptionController.deletePrescriptionById.bind(prescriptionController));

module.exports = router;