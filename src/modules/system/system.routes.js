const express = require('express');
const router = express.Router();
const systemController = require('./system.controller');

const verifyToken = require('../../middlewares/verifyToken');
const adminOnly = require('../../middlewares/adminOnly');

// Server health (public)
router.get('/health', systemController.health.bind(systemController));

// Get system logs (admin)
router.get('/logs', verifyToken, adminOnly, systemController.logs.bind(systemController));

// Support ticket
router.post('/support/ticket', verifyToken, systemController.createTicket.bind(systemController));
router.get('/support/ticket', verifyToken, adminOnly, systemController.listTickets.bind(systemController));

module.exports = router;
