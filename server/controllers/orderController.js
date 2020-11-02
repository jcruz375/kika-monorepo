const Order = require('../models/Order');
const adminAuth = require("../middleware/adminAuth");

module.exports = app => {
    app.post('/orders', (req, res) => {
        const order = req.body;
        Order.create(order, res);
    });

    app.get('/orders/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Order.find(id, res);
    });

    app.get('/orders', (req, res) => {
        Order.list(res);
    })

    app.patch('/orders/:id', adminAuth, (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;
        Order.update(id, values, res);
    });

    app.delete('/orders/:id', adminAuth, (req, res) => {
        const id = parseInt(req.params.id);
        Order.delete(id, res);
    })

};