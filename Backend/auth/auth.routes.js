const express = require('express');
const router = express.Router();
const {verifyToken} = require('../config/JWT');

const authController = require('./auth.controller');

const cors = require('cors');

router.use(cors());
router.use(express.json());

router.post(
    '/signup',
    authController.createUser.bind(authController)
);

router.post(
    '/login',
    authController.login.bind(authController)
);

router.post(
    '/reset-password',
    authController.resetPassword.bind(authController)
);

router.post(
    '/change-password',
    authController.changePassword.bind(authController)
);

router.post(
    '/delete-user',
    verifyToken,
    authController.deleteUser.bind(authController)
);

module.exports = router;