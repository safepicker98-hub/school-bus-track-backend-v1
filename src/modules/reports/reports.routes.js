const express = require('express');
const router = express.Router();
const reportsController = require('./reports.controller');

const verifyToken = require('../../middlewares/verifyToken');
const adminOnly = require('../../middlewares/adminOnly');

// Trip reports
router.get('/trips', verifyToken, adminOnly, reportsController.trips.bind(reportsController));

// Attendance reports
router.get('/attendance', verifyToken, adminOnly, reportsController.attendance.bind(reportsController));

// Driver behavior reports
router.get('/drivers', verifyToken, adminOnly, reportsController.drivers.bind(reportsController));

// Vehicle usage reports
router.get('/vehicles', verifyToken, adminOnly, reportsController.vehicles.bind(reportsController));

module.exports = router;
