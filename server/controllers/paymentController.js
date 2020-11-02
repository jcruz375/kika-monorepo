const Payment = require('../models/Payment');
const adminAuth = require("../middleware/adminAuth");

module.exports = app => {
    app.post('/payments', adminAuth, (req, res) => {
        const payment = req.body;
        Payment.create(payment, res);
    });

    app.get('/payments/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Payment.find(id, res);
    });

    app.patch('/payments/:id', adminAuth, (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;
        Payment.update(id, values, res);
    });

    app.get('/payments', (req, res) => {
        Payment.list(res);
    });

    app.delete('/payments/:id', adminAuth, (req, res) => {
        const id = parseInt(req.params.id);
        Payment.delete(id, res);
    })
};