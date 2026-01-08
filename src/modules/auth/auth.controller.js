const authService = require('./auth.service');

class AuthController {

  async register(req, res) {
    try {
      const user = await authService.register(req.body);
      return res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async login(req, res) {
    try {
      const data = await authService.login(req.body);
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        ...data
      });
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: error.message
      });
    }
  }

  async refreshToken(req, res) {
    try {
      const data = await authService.refreshToken(req.body);
      return res.status(200).json({
        success: true,
        ...data
      });
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: error.message
      });
    }
  }

  async logout(req, res) {
    try {
      await authService.logout();
      return res.status(200).json({
        success: true,
        message: 'Logged out successfully'
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async forgotPassword(req, res) {
    try {
      await authService.forgotPassword(req.body.email);
      return res.status(200).json({
        success: true,
        message: 'Password reset instructions sent'
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async resetPassword(req, res) {
    try {
      await authService.resetPassword(req.body);
      return res.status(200).json({
        success: true,
        message: 'Password reset successful'
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new AuthController();
