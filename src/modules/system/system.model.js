const prisma = require('../../prisma/client');

class SystemModel {
  // Logs can be stored in DB if needed
  async getLogs() {
    return prisma.systemLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100, // last 100 logs
    });
  }

  async createTicket(data) {
    return prisma.supportTicket.create({ data });
  }

  async listTickets() {
    return prisma.supportTicket.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}

module.exports = new SystemModel();
