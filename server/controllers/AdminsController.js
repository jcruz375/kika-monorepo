const Admin = require('../models/Admin');
const adminAuth = require("../middleware/adminAuth");

module.exports = app => {
    app.post('/admin', adminAuth, (req, res) => {
        const admin = req.body;
        Admin.create(admin, res);
    });
    app.post('/admin/auth', (req, res) => {
        const admin = req.body;
        Admin.auth(admin, res)
    })
}