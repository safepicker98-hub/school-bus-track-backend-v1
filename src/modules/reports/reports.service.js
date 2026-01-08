const reportsModel = require('./reports.model');

class ReportsService {
  async getTripReports() {
    return reportsModel.getTripReports();
  }

  async getAttendanceReports() {
    return reportsModel.getAttendanceReports();
  }

  async getDriverReports() {
    return reportsModel.getDriverReports();
  }

  async getVehicleReports() {
    return reportsModel.getVehicleReports();
  }
}

module.exports = new ReportsService();
