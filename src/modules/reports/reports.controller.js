const reportsService = require('./reports.service');

class ReportsController {
  async trips(req, res) {
    try {
      const reports = await reportsService.getTripReports();
      res.status(200).json({ success: true, reports });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async attendance(req, res) {
    try {
      const reports = await reportsService.getAttendanceReports();
      res.status(200).json({ success: true, reports });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async drivers(req, res) {
    try {
      const reports = await reportsService.getDriverReports();
      res.status(200).json({ success: true, reports });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async vehicles(req, res) {
    try {
      const reports = await reportsService.getVehicleReports();
      res.status(200).json({ success: true, reports });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
}

module.exports = new ReportsController();
