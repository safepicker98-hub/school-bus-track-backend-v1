const systemModel = require('./system.model');

class SystemService {
  async getHealth() {
    return { status: 'OK', timestamp: new Date() };
  }

  async getLogs() {
    return systemModel.getLogs();
  }

  async createTicket({ userId, subject, description }) {
    return systemModel.createTicket({ userId, subject, description });
  }

  async listTickets() {
    return systemModel.listTickets();
  }
}

module.exports = new SystemService();
