const Promo = require('../models/Promo');
const adminAuth = require("../middleware/adminAuth");

module.exports = app => {
    app.post('/promo', adminAuth, (req, res) => {
        const promo = req.body;
        Promo.create(promo, res);
    });

    app.get('/promo', (req, res) => {
        Promo.list(res);
    });

    app.get('/promo/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Promo.find(id, res)
    });

    app.patch('/promo/:id', adminAuth, (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;
        Promo.update(id, values, res);
    });

    app.delete('/promo/:id', adminAuth, (req, res) => {
        const id = parseInt(req.params.id);
        Promo.delete(id, res);
    })
};