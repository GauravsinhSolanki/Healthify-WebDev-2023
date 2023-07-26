const express = require('express');
const authRoutes = require('./auth/auth.routes');
const router = express.Router();

const healthCheck = (req, res) => {
    res.status(200).json({ message: 'OK' });
}

router.use('/auth', authRoutes);

module.exports = router;