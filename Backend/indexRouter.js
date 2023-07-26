const express = require('express');
const authRoutes = require('./auth/auth.routes');
const doctorRoutes = require('./routers/doctor.routes');
const hospitalRoutes = require('./routers/hospital.routes');
const appointmentRoutes = require('./routers/appointment.routes');
const productRoutes = require('./routers/products.routes');
const router = express.Router();

const healthCheck = (req, res) => {
    res.status(200).json({ message: 'OK' });
}

router.use('/auth', authRoutes);
router.use('/', doctorRoutes);
router.use('/', hospitalRoutes);
router.use('/', appointmentRoutes);
router.use('/', productRoutes);

module.exports = router;