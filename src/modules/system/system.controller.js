const systemService = require('./system.service');

class SystemController {
  async health(req, res) {
    const health = await systemService.getHealth();
    res.status(200).json({ success: true, health });
  }

  async logs(req, res) {
    try {
      const logs = await systemService.getLogs();
      res.status(200).json({ success: true, logs });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async createTicket(req, res) {
    try {
      const userId = req.user?.userId || null;
      const { subject, description } = req.body;
      const ticket = await systemService.createTicket({ userId, subject, description });
      res.status(201).json({ success: true, ticket });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async listTickets(req, res) {
    try {
      const tickets = await systemService.listTickets();
      res.status(200).json({ success: true, tickets });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
}

module.exports = new SystemController();
