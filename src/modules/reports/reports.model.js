const prisma = require('../../prisma/client');

class ReportsModel {
  // Trip reports
  async getTripReports() {
    return prisma.trip.findMany({
      include: {
        bus: true,
        driver: true,
        attendance: true,
      },
      orderBy: { startTime: 'desc' },
    });
  }

  // Attendance reports
  async getAttendanceReports() {
    return prisma.attendance.findMany({
      include: {
        student: true,
        trip: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // Driver behavior reports
  async getDriverReports() {
    return prisma.driverBehavior.findMany({
      include: { driver: true, trip: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  // Vehicle usage reports
  async getVehicleReports() {
    return prisma.bus.findMany({
      include: { trips: true, driver: true },
      orderBy: { id: 'asc' },
    });
  }
}

module.exports = new ReportsModel();
