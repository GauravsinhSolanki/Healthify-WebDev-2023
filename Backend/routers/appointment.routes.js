const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointment.controller');
const cors = require('cors');

router.use(cors());
router.use(express.json());

router.post("/addAppointment", appointmentController.addAppointment.bind(appointmentController));

router.get("/getAppointments", appointmentController.getAppointments.bind(appointmentController));

router.put("/updateAppointment/:id", appointmentController.updateAppointment.bind(appointmentController));

router.post("/cancelAppointment/:id", appointmentController.cancelAppointment.bind(appointmentController));

router.post("/sendEmail", appointmentController.sendEmail.bind(appointmentController));


module.exports = router;