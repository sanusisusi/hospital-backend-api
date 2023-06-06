const express = require('express');
const router = express.Router();

const doctorController = require('../../../controllers/api/v1/doctors_controller');

// routes to call controller to sign-up the doctor
router.post('/register', doctorController.createDoctor);

// routes to call controller to sign-in the doctor
router.post('/login', doctorController.signIn);

module.exports = router;